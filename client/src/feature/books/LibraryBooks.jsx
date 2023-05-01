import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './bookslice';
import Nav from '../../components/Nav';

const LibraryBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const libraryBooks = books.filter((book) => book.location === 'library');

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
    <>
      <Nav />
      <div className='library-container'>
        <h2 className='library-heading'>Library Books</h2>
        <ul className='library-book-list'>
          <div className='library-book-grid'>
            {libraryBooks.map((book) => (
              <li className='library-book-item book-card' key={book.id}>
                <div className='library-book-image-container'>
                  <img
                    className='library-book-image'
                    src={book.image_url}
                    alt={`${book.title} cover`}
                  />
                </div>
                <div className='library-book-details'>
                  <h3 className='library-book-title'>{book.title}</h3>
                  <p className='library-book-author'>{book.author}</p>
                  <p className='library-book-description'>{book.description}</p>
                  <p className='library-book-genre'>{book.genre}</p>
                  <p className='library-book-price'>${book.price}</p>
                  <button
                    className='library-add-to-cart-btn add-cart-btn'
                    onClick={() => {
                      handleAddToCart(book.id, book.price);
                    }}
                  >
                    Want to Read
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default LibraryBooks;
