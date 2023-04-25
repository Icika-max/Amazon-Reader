import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './bookslice';


const LibraryBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const storeBooks = books.filter(book => book.location === 'library');

  const handleAddToCart = async (id, price) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/carts', {
        method: 'POST',
        body: JSON.stringify({
          quantity: 1,
          price: price,
          book_id: id,
          user_id: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className='library-container'>
      <h2 className='library-heading'>Library Books</h2>
      <ul className='book-list'>
        {storeBooks.map(book => (
          <li key={book.id} className='book-item'>
            <div className='book-image-container'>
              <img src={book.image_url} alt={`${book.title} cover`} className='book-image' />
            </div>
            <div className='book-details'>
              <h3 className='book-title'>{book.title}</h3>
              <p className='book-author'>{book.author}</p>
              <p className='book-description'>{book.description}</p>
              <p className='book-genre'>{book.genre}</p>
              <p className='book-price'>${book.price}</p>
              <button className='add-to-cart-btn' onClick={() => {handleAddToCart(book.id, book.price)}}>Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryBooks;
