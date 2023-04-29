// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchBooks } from './bookslice';
// import Nav from '../../components/Nav';

// // const userId = useSelector((state) => state.user.id);

// const StoreBooks = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.list);
//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   console.log(books);
//   const storeBooks = books.filter((book) => book.location === 'store');

//   const handleAddToCart = async (id, price) => {
//     try {
//       const response = await fetch('http://127.0.0.1:3000/carts', {
//         method: 'POST',
//         body: JSON.stringify({
//           quantity: 1,
//           price: price,
//           book_id: id,
//           user_id: 1,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//     <Nav></Nav>
//     <div className='store-container'>
//       <div className='str'>
//       <h2 className='store-heading'>Store Books</h2>
//       <ul>
//       <div className='book-grid'>

//         {storeBooks.map((book) => (
//           <li className='book-card' key={book.id}>
//             <img className='book-item img' src={book.image_url} alt={`${book.title} cover`} />

//             <h3>{book.title}</h3>
//             <p>{book.author}</p>
//             <p>{book.description}</p>
//             <p>{book.genre}</p>
//             <p>{book.price}</p>
//             <button className='add-cart-btn' onClick={() => {handleAddToCart(book.id, book.price)}}>Add To Cart</button>
//           </li>
//         ))}
//         </div>
//       </ul>
//     </div>
//     </div>
//     </>
//   );
// };

// export default StoreBooks;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './bookslice';
import Nav from '../../components/Nav';

const StoreBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  console.log(books);
  const storeBooks = books.filter((book) => book.location === 'store');

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
      <div className='store-container library-container'>
        <h2 className='store-heading library-heading'>Store Books</h2>
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
