import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './lendings.css';
import {
  fetchLendings,
  addLending,
  deleteLending,
  updateLending,
} from './lendingslice';
import Nav from '../../components/Nav';

function LendingTable() {
  const dispatch = useDispatch();
  const lendings = useSelector((state) => state.lendings.list);
  const status = useSelector((state) => state.lendings.status);
  const error = useSelector((state) => state.lendings.error);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);
  const [editingLendingId, setEditingLendingId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lendingsPerPage, setLendingsPerPage] = useState(5);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLendings());
    }
  }, [status, dispatch]);

  const handleFormChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(updateLending({ id: editingLendingId, ...formData }));
      setEditing(false);
      setEditingLendingId(null);
    } else {
      dispatch(addLending(formData));
    }
    setFormData({});
  };

  const handleDeleteLending = (lendingId) => {
    dispatch(deleteLending(lendingId));
  };

  const handleUpdateLending = (lending) => {
    setEditing(true);
    setEditingLendingId(lending.id);
    setFormData(lending);
  };

  const indexOfLastLending = currentPage * lendingsPerPage;
  const indexOfFirstLending = indexOfLastLending - lendingsPerPage;
  const currentLendings = lendings.slice(indexOfFirstLending, indexOfLastLending);

  const renderLendings = currentLendings.map((lending) => (
    <tr key={lending.id}>
      <td>{lending.user_id}</td>
      <td>{lending.book_id}</td>
      <td>{lending.book.title}</td>
      <td>{lending.due_date}</td>
      <td>{lending.status}</td>
      <td>
        <button onClick={() => handleDeleteLending(lending.id)}>Delete</button>
        <button onClick={() => handleUpdateLending(lending)}>Edit</button>
      </td>
    </tr>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(lendings.length / lendingsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <button onClick={() => setCurrentPage(number)}>{number}</button>
    </li>
  ));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
   
    <div className='lending-container'>
    <Nav></Nav>
      <h1 className='leading-heading'>Lendings Table</h1>
      <form className='leading-form' onSubmit={handleFormSubmit}>
        <input type="number" name="user_id" value={formData.user_id || ''} onChange={handleFormChange} placeholder='User-id' />
        <input type="text" name="title" value={formData.title || ''} onChange={handleFormChange} placeholder='Title' />
        <input type="number" name="book_id" value={formData.book_id || ''} onChange={handleFormChange} placeholder='Book-id' />
<input type="date" name="due_date" value={formData.due_date || ''} onChange={handleFormChange} placeholder='Due Date' />
<input type="text" name="status" value={formData.status || ''} onChange={handleFormChange} placeholder='Status' />
<button type="submit">{editing ? 'Update' : 'Add'}</button>
</form>
<table className='lending-table'>
<thead>
<tr>
<th>User ID</th>
<th>Book ID</th>
<th>Title</th>
<th>Due Date</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>{renderLendings}</tbody>
</table>
<ul className='page-numbers'>{renderPageNumbers}</ul>
</div>
</>
);
}

export default LendingTable;

