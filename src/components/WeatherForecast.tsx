import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData, setCity, setSelectedDay, clearWeatherData } from '../redux/slices/weatherSlice';
import { RootState, AppDispatch } from '../redux/store';    
import { FaSearch } from 'react-icons/fa';
import defaultSvg from '../assets/default.svg';
import errorSvg from '../assets/error.svg';
import loadingSvg from '../assets/loading.svg';
import './WeatherForecast.css';

const WeatherForecast: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { city, weatherData, loading, error, selectedDay } = useSelector((state: RootState) => state.weather);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (weatherData.length > 0) {
            dispatch(setSelectedDay(weatherData[0]));
        }
    }, [weatherData, dispatch]);

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;

        const toTitleCase = (str: string) => {
            return str
                .split(' ')
                .map(word => word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1).toLocaleLowerCase('tr-TR'))
                .join(' ');
        };


        setInputValue(toTitleCase(inputValue));

        if (inputValue.trim() === '') {
            dispatch(clearWeatherData());
        }
    };


    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            dispatch(setCity(inputValue));
            dispatch(fetchWeatherData(inputValue));
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const getDayOfWeek = (date: string) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = new Date(date).getDay();
        return daysOfWeek[dayIndex];
    };

    const formatDate = (date: string) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <div className="box-container">
            <div className="text-container">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search a City"
                        value={inputValue}
                        onChange={handleCityChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearch}>
                        <FaSearch />
                    </button>
                </div>

                <div className="description-box">
                    {!loading && error && (
                        <div className="error-box">
                            <p className="error-title">Does not Exist</p>
                            <p className="error-description">Type a valid city name to get weekly forecast data.</p>
                        </div>
                    )}

                    {!selectedDay && weatherData.length === 0 && !error && (
                        <div className="default-box">
                            <p className="title">Select a City</p>
                            <p className="description">Search and select a city to see results. Try typing the first letters of the city you want.</p>
                        </div>
                    )}

                    {!loading && !error && selectedDay && weatherData.length > 0 && (
                        <div className="weather-detail-box">
                            <div className="inner-box">
                                <p className="temp">{selectedDay.temp}°C</p>
                                <div className="line">
                                    <p className="city">{city}</p>
                                    <p className="format">{formatDate(selectedDay.datetime).slice(0, -6)}, {getDayOfWeek(selectedDay.datetime)}</p>
                                </div>
                                <div className="rowicon">
                                    <img src={`https://www.weatherbit.io/static/img/icons/${selectedDay.weather.icon}.png`} alt="Weather Icon" className="icon" />
                                    <p className="desc">{selectedDay.weather.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {!loading && weatherData.length > 0 && (
                <div className="weather-info">
                    <p className='table-header'>Weather Forecast for {city}</p>
                    <table className="weather-table">
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>Dates</th>
                                <th>Lowest Temp.</th>
                                <th>Highest Temp.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weatherData.slice(0, 7).map((day, index) => (
                                <tr key={index} onClick={() => dispatch(setSelectedDay(day))}>
                                    <td>{getDayOfWeek(day.datetime)}</td>
                                    <td>{formatDate(day.datetime)}</td>
                                    <td>{day.min_temp}°C</td>
                                    <td>{day.max_temp}°C</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {loading && (
                <div className="mbimage">
                    <img src={loadingSvg} alt="Loading" />
                </div>
            )}
            {!loading && !error && weatherData.length === 0 && (
                <div className='mbimage'>
                    <img src={defaultSvg} alt="Default" />
                </div>
            )}
            {!loading && error && (
                <div className='mbimage'>
                    <img src={errorSvg} alt="Error" />
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;
