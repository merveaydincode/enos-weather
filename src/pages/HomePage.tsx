import React from 'react';
import Header from '../components/Header';
import WeatherForecast from '../components/WeatherForecast'; 
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className='body'>
        <WeatherForecast />  
      </main>
    </div>
  );
}

export default HomePage;
