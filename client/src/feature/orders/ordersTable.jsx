import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, addOrder, deleteOrder, updateOrder } from './orderslice';
import './orders.css';
import Nav from '../../components/Nav';

function OrderTable() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch orders on component mount
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  // Handle form changes
  const handleFormChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch(updateOrder({ id: editingOrderId, ...formData }));
      setEditing(false);
    } else {
      dispatch(addOrder(formData));
    }
    setFormData({});
  };

  // Handle delete order
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  // Handle edit order
  const handleEditOrder = (orderId) => {
    setFormData(orders.find((order) => order.id === orderId));
    setEditing(true);
    setEditingOrderId(orderId);
  };

  // Get the current page of items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Render the table rows for the current page of items
  const renderRows = () => {
    return currentItems.map((order) => (
      <tr key={order.id}>
        <td>{order.user_id}</td>
        <td>{order.book_id}</td>
        <td>{order.status}</td>
        <td>
          <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
          <button onClick={() => handleEditOrder(order.id)}>Edit</button>
        </td>
      </tr>
    ));
  };

  // Calculate the number of pages
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Render the pagination links
  const renderPagination = () => {
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
      links.push(
        <button key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }
    return links;
  };

  return (
    <>
    <div className="order-container">
    <Nav></Nav>
      <h1 className="order-heading">Orders Table</h1>
      <form className="order-form" onSubmit={handleFormSubmit}>
        <input type="number" name="user_id" value={formData.user_id || ''} onChange={handleFormChange} placeholder="User id" />
        <input type="number" name="book_id" value={formData.book_id || ''} onChange={handleFormChange} placeholder="Book id" />
        <input type="text" name="status" value={formData.status || ''} onChange={handleFormChange}laceholder="Status" placeholder='Status' />
<button type="submit">{editing ? 'Update Order' : 'Add Order'}</button>
</form>
<table className="order-table">
<thead>
<tr>
<th>User ID</th>
<th>Book ID</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{renderRows()}
</tbody>
</table>
<div className="pagination-container">
{renderPagination()}
</div>
</div>
</>
);
}

export default OrderTable;









// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchOrders, addOrder, deleteOrder, updateOrder } from './orderslice';
// import './orders.css'

// function OrderTable() {
//   const dispatch = useDispatch();
//   const orders = useSelector((state) => state.orders.list);
//   const [formData, setFormData] = useState({});
//   const [editing, setEditing] = useState(false);
//   const [editingOrderId, setEditingOrderId] = useState(null);

//   // Fetch orders on component mount
//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   // Handle form changes
//   const handleFormChange = (e) => {
//     setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
//   };

//   // Handle form submit
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (editing) {
//       dispatch(updateOrder({ id: editingOrderId, ...formData }));
//       setEditing(false);
//     } else {
//       dispatch(addOrder(formData));
//     }
//     setFormData({});
//   };

//   // Handle delete order
//   const handleDeleteOrder = (orderId) => {
//     dispatch(deleteOrder(orderId));
//   };

//   // Handle edit order
//   const handleEditOrder = (orderId) => {
//     setFormData(orders.find((order) => order.id === orderId));
//     setEditing(true);
//     setEditingOrderId(orderId);
//   };

//   return (
//     <div className='order-container'>
//       <h1 className='order-heading'>Orders Table</h1>
//       <form className='order-form' onSubmit={handleFormSubmit}>
//         <input type="number" name="user_id" value={formData.user_id || ''} onChange={handleFormChange} placeholder='User id'/>
//         <input type="number" name="book_id" value={formData.book_id || ''} onChange={handleFormChange} placeholder='Book id'/>
//         <input type="text" name="status" value={formData.status || ''} onChange={handleFormChange} placeholder='Status' />
//         {/* <input type="number" name="price" value={formData.price || ''} onChange={handleFormChange} /> */}
//         <button type="submit">{editing ? 'Update Order' : 'Add Order'}</button>
//       </form>
//       <table className='order-table'>
//         <thead>
//           <tr>
//             <th>User id</th>
//             <th>Book  id</th>
//             <th>Status</th>
//             {/* <th>Price</th> */}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.user_id}</td>
//               <td>{order.book_id}</td>
//               <td>{order.status}</td>
//               {/* <td>{order.price}</td> */}
//               <td>
//                 <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
//                 <button onClick={() => handleEditOrder(order.id)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default OrderTable;
