import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './account.css'

function AccountPage() {
  console.log('AccountPage component rendered');
  
  const [purchases, setPurchases] = useState([
    { id: 1, date: '20-04-2023', status: 'completed', orders: ['Book A', 'Book B'] },
    { id: 2, date: '10-02-2023', status: 'in progress', orders: ['Book C', 'Book D'] },
    { id: 3, date: '07-03-2023', status: 'pending', orders: ['Book E', 'Book F'] },
  ]);
  
  const [lendings, setLendings] = useState([
    { id: 1, date: '20-04-2023', status: 'returned', book: 'Book G' },
    { id: 2, date: '10-02-2023', status: 'borrowed', book: 'Book H' },
    { id: 3, date: '07-03-2023', status: 'overdue', book: 'Book I' },
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
        {purchases.map((purchase) => (
          <li key={purchase.id}>
            <p>Date: {purchase.date}</p>
            <p>Status: {purchase.status}</p>
            <p>Orders: {purchase.orders.join(', ')}</p>
          </li>
        ))}
      </ul>
      
      <h2>Previous Lendings</h2>
      <ul>
        {lendings.map((lending) => (
          <li key={lending.id}>
            <p>Date: {lending.date}</p>
            <p>Status: {lending.status}</p>
            <p>Book: {lending.book}</p>
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
