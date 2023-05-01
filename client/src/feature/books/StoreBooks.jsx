import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './bookslice';
import Nav from '../../components/Nav';


const StoreBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  const [filterPrice, setFilterPrice] = useState('');
  
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddToCart = async (id, price) => {
    try {
      const response = await fetch('/carts', {
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

  const storeBooks = books.filter((book) => book.location === 'store' && (filterPrice === '' || Number(book.price) <= Number(filterPrice)));

  return (
    <>
      <Nav />
      <div className='store-container library-container'>
        <h2 className='store-heading library-heading'>Store Books</h2>
        <div className='filter-container'>
  <label className='filter-label' htmlFor='filter-price'>Filter by price:</label>
  <input
    className='filter-input'
    id='filter-price'
    type='number'
    value={filterPrice}
    onChange={(event) => setFilterPrice(event.target.value)}
  />
</div>
        <ul className='store-book-list'>
          <div className='store-book-grid'>
            {storeBooks.map((book) => (
              <li className='store-book-item book-card' key={book.id}>
               <div className='book-image-container'>
  <img
    className='store-book-image'
    src={book.image_url}
    alt={`${book.title} cover`}
  />
</div>

                <div className='store-book-details'>
                  <h3 className='store-book-title'>{book.title}</h3>
                  <p className='store-book-author'>{book.author}</p>
                  <p className='store-book-description'>{book.description}</p>
                  <p className='store-book-genre'>{book.genre}</p>
                  <p className='store-book-price'>{book.price}</p>
                  <button
                    className='store-add-to-cart-btn add-cart-btn'
                    onClick={() => {
                      handleAddToCart(book.id, book.price);
                    }}
                  >
                    Add To Cart
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

export default StoreBooks;
