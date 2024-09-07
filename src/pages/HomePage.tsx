import React from 'react';
import Header from '../components/Header';
import './HomePage.css'; 
import image from '../assets/image.png';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className='container'>
        <div className='image-container'>
        <img src={image} alt="image" className="image" />
        </div>
        <div className="text-container">
          <div className="text-box">
            <h1>Select a City</h1>
            <p>Search and select a city to see results. Try typing the first letters of the city you want.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
