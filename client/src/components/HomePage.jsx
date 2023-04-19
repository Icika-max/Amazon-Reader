import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://amazon-api-r8sx.onrender.com/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='home-container'>
      <div className='side-bar'>
        <div id='nav'>
          <Link id='home' to='/'>Home</Link>
          <Link id='home' to='/Dashboard'>Admin</Link>
          <Link id='home' to='/Library'>Library</Link>
          <Link id='home' to='/Store'>Store</Link>
          <Link id='home' to='/Cart'>Cart</Link>
          <Link id='home' to='/LandingPage'>Logout</Link>
        </div>
      </div>

      <div className='featured-books'>
          <h2>Featured Books</h2>
          <div className='book-grid'>
            {books.map(book => (
              <div className='book-card' key={book.id}>
                <img src={book.image_url} alt={book.title} />
                <h3>{book.title}</h3>
                <p className='book-author'>{book.author}</p>
                <p className='book-description'>{book.description}</p>
                <p className='book-rating'>{book.rating}</p>
                <p className='book-genre'>{book.genre}</p>
                <p className='book-price'>{book.price}</p>
                <p className='book-location'>{book.location}</p>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  );
}

export default HomePage;
