import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBook, deleteBook, updateBook } from './bookslice';
// import './BookTable.css';

function BookTable() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);
  const [editingBookId, setEditingBookId] = useState(null);

  // Fetch books on component mount
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Handle form changes
  const handleFormChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(updateBook({ id: editingBookId, ...formData }));
      setEditing(false);
    } else {
      dispatch(addBook(formData));
    }
    setFormData({});
  };

  // Handle delete book
  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  // Handle edit book
  const handleEditBook = (bookId) => {
    setFormData(books.find((book) => book.id === bookId));
    setEditing(true);
    setEditingBookId(bookId);
  };

  return (
    <div className="container">
      <div className="left">
        <h1 className="heading">Books Table</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input type="text" name="title" value={formData.title || ''} onChange={handleFormChange} placeholder="Title" />
          <input type="text" name="author" value={formData.author || ''} onChange={handleFormChange} placeholder="Author" />
          <input type="text" name="description" value={formData.description || ''} onChange={handleFormChange} placeholder="Description" />
          <input type="number" name="price" value={formData.price || ''} onChange={handleFormChange} placeholder="Price" />
          <input type="text" name="rating" value={formData.rating || ''} onChange={handleFormChange} placeholder="Rating" />
          <input type="text" name="genre" value={formData.genre || ''} onChange={handleFormChange} placeholder="Genre" />
          <input type="text" name="image_url" value={formData.image_url || ''} onChange={handleFormChange} placeholder="ImageURL" />
          <input type="text" name="location" value={formData.location || ''} onChange={handleFormChange} placeholder="Location" />

          <button type="submit">{editing ? 'Update Book' : 'Add Book'}</button>
        </form>
      </div>
      <div className="right">
       <table className="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Description</th>
      <th>Price</th>
      <th>Rating</th>
      <th>Genre</th>
      <th>Image</th>
      <th>Location</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>{books.map((book) => (
      <tr key={book.id}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.description}</td>
        <td>{book.price}</td>
        <td>{book.rating}</td>
        <td>{book.genre}</td>
        <td><img src={book.image_url} alt={book.title} /></td>
        <td>{book.location}</td>
        <td>
          <button onClick={() => handleEditBook(book.id)}>Edit</button>
          <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
{/* </table> */}
                                                                                                                                                                                                                          </table>
      </div>
    </div>
  );
}
export default BookTable;

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchBooks, addBook, deleteBook, updateBook } from './bookslice';
// // import './bookslice.css';

// function BookTable() {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books.list);
//   const [formData, setFormData] = useState({});
//   const [editing, setEditing] = useState(false);
//   const [editingBookId, setEditingBookId] = useState(null);

//   // Fetch books on component mount
//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   // Handle form changes
//   const handleFormChange = (e) => {
//     setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
//   };

//   // Handle form submit
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editing) {
//       dispatch(updateBook({ id: editingBookId, ...formData }));
//       setEditing(false);
//     } else {
//       dispatch(addBook(formData));
//     }
//     setFormData({});
//   };

//   // Handle delete book
//   const handleDeleteBook = (bookId) => {
//     dispatch(deleteBook(bookId));
//   };

//   // Handle edit book
//   const handleEditBook = (bookId) => {
//     setFormData(books.find((book) => book.id === bookId));
//     setEditing(true);
//     setEditingBookId(bookId);
//   };

//   return (
//     <div className="BookTable">
//       <h1 className='heading'> Books Table</h1>
//       <form className='form' onSubmit={handleFormSubmit}>
//         <input type="text" name="title" value={formData.title || ''} onChange={handleFormChange} placeholder='Title'/>
//         <input type="text" name="author" value={formData.author || ''} onChange={handleFormChange} placeholder='Author'/>
//         <input type="text" name="description" value={formData.description || ''} onChange={handleFormChange} placeholder='Description'/>
//         <input type="number" name="price" value={formData.price || ''} onChange={handleFormChange} placeholder='Price' />
//         <input type="text" name="rating" value={formData.rating || ''} onChange={handleFormChange} placeholder='rating'/>
//          <input type="text" name="genre" value={formData.genre || ''} onChange={handleFormChange} placeholder='Genre'/>
//         <input type="text" name="image_url" value={formData.image_url || ''} onChange={handleFormChange} placeholder='ImageURL'/>
//         <input type="text" name="location" value={formData.location || ''} onChange={handleFormChange} placeholder='Location'/>

//         <button type="submit">{editing ? 'Update Book' : 'Add Book'}</button>
//       </form>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Rating</th>
//             <th>Genre</th>
//             <th>Image</th>
//             <th>Location</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>{book.description}</td>
//               <td>{book.price}</td>
//               <td>{book.rating}</td>
//               <td>{book.genre}</td>
//               <td ><img src={book.image_url} alt="image" /></td>
//               <td>{book.location}</td>
//               <td>
//                 <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
//                 <button onClick={() => handleEditBook(book.id)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default BookTable;