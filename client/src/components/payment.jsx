import { useState } from "react";
import { Link } from "react-router-dom";
import "./payment.css";


function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");


  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

   const handleOrderSelect = (event) => {
    setSelectedOrder(event.target.value);
  };

  const handlePurchase = () => {
    // handle purchase logic
    alert("Purchase complete!");
  };

  return (
    <div>
      <h1>Payment Details</h1>
      <form>
          <label>
          Select Order:
          <select value={selectedOrder} onChange={handleOrderSelect}>
            <option value="">--Select an order--</option>
            <option value="Order A">Order A</option>
            <option value="Order B">Order B</option>
            <option value="Order C">Order C</option>
          </select>
        </label>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </label>
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
        </label>
        <label>
          CVV:
          <input type="text" value={cvv} onChange={handleCvvChange} />
        </label>
      </form>
      <button onClick={handlePurchase}>Complete Purchase</button>
      <Link to="/account"><button>Back to Account</button></Link>
    </div>
  );
}

export default Payment;
