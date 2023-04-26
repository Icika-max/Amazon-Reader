import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './bookslice';
import Nav from '../../components/Nav';

// const userId = useSelector((state) => state.user.id);

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
    <Nav></Nav>
    <div className='store-container'>
      <div className='str'>
      <h2 className='store-heading'>Store Books</h2>
      <ul>
      <div className='book-grid'>

        {storeBooks.map((book) => (
          <li className='book-card' key={book.id}>
            <img className='book-item img' src={book.image_url} alt={`${book.title} cover`} />

            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>{book.genre}</p>
            <p>{book.price}</p>
            <button className='add-cart-btn' onClick={() => {handleAddToCart(book.id, book.price)}}>Add To Cart</button>
          </li>
        ))}
        </div>
      </ul>
    </div>
    </div>
    </>
  );
};

export default StoreBooks;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { fetchBooks } from './booksslice';
// import { fetchBooks } from './bookslice';

// const StoreBooks = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.list);
//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   // if (status === 'loading') {
//   //   return <p>Loading...</p>;
//   // }

//   // if (status === 'failed') {
//   //   return <p>{error}</p>;
//   // }
// console.log(books)
//   const storeBooks = books.filter(book => book.location === 'store');
//   const userId = useSelector((state) => state.user.id);

//   const handleAddToCart = async (id, price, userId) => {
//     const response = await fetch('http://127.0.0.1:3000/carts', {
//       method: 'POST',
//       body: JSON.stringify({
//         quantity: 1,
//         price: price,
//         book_id: id,
//         user_id: userId,
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const result = await response.json();
//     console.log(result);
//   }
  

  

//   return (
//     <div>
//       <h2>Store Books</h2>
//       <ul>
//         {storeBooks.map(book => (
//           <li key={book.id}>
//             <img src={book.image_url} alt={`${book.title} cover`} />

//             <h3>{book.title}</h3>
//             <p>{book.author}</p>
//             <p>{book.description}</p>
//             <p>{book.genre}</p>
//             <p>{book.price}</p>
//             <button onClick={()=>{handleAddToCart(book.id, book.price, userId )}} >Add To Cart</button>
        
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StoreBooks;
