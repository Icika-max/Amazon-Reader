import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Admin from './Admin';
// import Nav from './Nav';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    const filteredBooks = books.filter(book => (
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    ));
    setBooks(filteredBooks);
  }

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  }

  const filteredBooks = selectedGenre !== '' ? books.filter(book => book.genre === selectedGenre) : books;

  return (
    <div className='home-container'>
      <div className='hm-container'>
      <div id='search-bar'>
        <input type="text" placeholder="Search books by name or genre" onChange={(event) => setSearchQuery(event.target.value)}  id="search-input"/>
        <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        <select id= "dropdown" value={selectedGenre} onChange={handleGenreChange}>
          <option value=''>All books</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Fiction'>Fiction</option>
          <option value='Romance'>Romance</option>
          <option value='Crime'>Crime</option>
          <option value='Mystery'>Mystery</option>
        </select>
      

      {/* <div className='side-bar'>
        <div id='nav'>
          <Link id='home' to='/'>Home</Link>
          <Link id='home' to='/Dashboard'>Admin</Link>
          <Link id='home' to='/Library'>Library</Link>
          <Link id='home' to='/Store'>Store</Link>
          <Link id='home' to='/Cart'>Cart</Link>
          <Link id='home' to='/LandingPage'>Logout</Link>
        </div>
      </div> */}

      <div className='featured-books'>
          <h2 id= "h2">Featured Books</h2>
          <div className='book-grid'>
            {filteredBooks.map(book => (
              <div className='book-card' key={book.id}>
                <img src={book.image_url}/>
                <h3>{book.title}</h3>
                <p className='book-author'>{book.author}</p>
                <p className='book-description'>{book.description}</p>
                <p className='book-rating'>{book.rating}</p>
                <p className='book-genre'>{book.genre}</p>
                <p className='book-price'>{book.price}</p>
                {/* <p className='book-location'>{book.location}</p> */}
              </div>
            ))}
          </div>
        </div>
        {/* <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/admin' element={<Admin></Admin>}>Admin</Route>
          <Route path='/homepage' element={<HomePage></HomePage>}>Home</Route>
         

        </Routes>
      
      </BrowserRouter> */}
      </div>
     
    </div>
  );
}

export default HomePage;
