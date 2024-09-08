import React from 'react';
import Header from '../components/Header';
import image from '../assets/image.png';
import { FaSearch } from 'react-icons/fa';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className='body'>
       
          <img src={image} alt="image" className="image" />
      
        <div className='box-container'>
        <div className='box search'>
          <input type="text" placeholder="Search a City..." />
          <FaSearch className="search-icon" />
        </div>
        <div className='box content'>
          <div className='text'>
          <h2>Select a City</h2>
          <p>Search and select a city to see results. Try typing the first letters of the city you want.</p>
        </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
