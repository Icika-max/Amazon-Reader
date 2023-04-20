import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './account.css'


function AccountPage() {
  console.log('AccountPage component rendered');
  const [requests, setRequests] = useState([
    { id: 1, date: '20-04-2023', status: 'completed', orders: ['Book A', 'Book B'] },
    { id: 2, date: '10-02-2023', status: 'in progress', orders: ['Book C', 'Book D'] },
    { id: 3, date: '07-03-2023', status: 'pending', orders: ['Book E', 'Book F'] },
  ]);

  const [showReturnForm, setShowReturnForm] = useState(false);

  const handleReturnRequest = () => {
    // handle initiating a return request
    setShowReturnForm(true);
  };

  const handleFormSubmit = (event) => {
    // handle form submission
    setShowReturnForm(false);
  };

  return (
    <div>
      <h1>My Account</h1>
      <h2>Previous Purchases</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Date: {request.date}</p>
            <p>Status: {request.status}</p>
            <p>Orders: {request.orders.join(', ')}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleReturnRequest}>Initiate Return Request</button>
      <Link to="/payment">
        <button>Pay for an Order</button>
      </Link>
      {showReturnForm && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Orders:
            <input type="text" name="products" />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default AccountPage;
