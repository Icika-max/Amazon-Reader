import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';




const API_URL = 'http://localhost:3000/books';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  }

  const handleReset = () => {
    setSearchQuery('');
    setSelectedGenre('');
  }

  const filteredBooks = books.filter(book => (
    (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedGenre === '' || book.genre === selectedGenre)
  ));

  return (
    <>
      <Nav />
      <div className='home-container'>
        <div className='hm-container'>
          <div id='search-bar'>
            <input type='text' placeholder='Search books by name or genre' value={searchQuery} onChange={handleSearchQueryChange} id='search-input' />
            <button className='search-button' onClick={handleReset}>Search</button>
          </div>

          <select id='genre-filter' value={selectedGenre} onChange={handleGenreChange}>
            <option value=''>All Books</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Fiction'>Fiction</option>
            <option value='Romance'>Romance</option>
            <option value='Crime'>Crime</option>
            <option value='Mystery'>Mystery</option>
          </select>

          <div className='featured-books'>
            <h2 id='h2'>Featured Books</h2>
            <div className='book-grid'>
              {filteredBooks.map(book => (
                <Link to={`/books/${book.id}`} className='book-card' key={book.id}>
                  <img src={book.image_url} alt={`Cover of ${book.title}`} />
                  <h3>{book.title}</h3>
                  <p className='book-author'>{book.author}</p>
                  <p className='book-description'>{book.description}</p>
                  <p className='book-rating'>{book.rating}</p>
                  <p className='book-genre'>{book.genre}</p>
                  <p className='book-price'>{book.price}</p>
                  {/* <p className='book-location'>{book.location}</p> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
