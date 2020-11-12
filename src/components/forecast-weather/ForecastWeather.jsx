import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { 
    ForecastWeatherContainer, 
    ForecastWeatherItemsContainer,
    ForecastWeatherCarousel, 
    ForecastWeatherCarouselItem
}
from './ForecastWeather.elements'

import ForecastWeatherItem from './ForecastWeatherItem';

export default function ForecastWeather() {
    const forecastDay = useSelector(state => state.forecastWeather.forecast?.forecastday[0]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let forecastHours = null;
    if(forecastDay) {
        forecastHours = forecastDay.hour.map((item, index) => {
            return (
                    <ForecastWeatherItem 
                        key = {index}
                        time = {item.time.split(' ')[1]}
                        icon = {item.condition.icon}  
                        temperature = {Math.floor(item.temp_c)}
                    />
            ) 
        });
    }
   
    return (
        <ForecastWeatherContainer>
                {forecastHours}
        </ForecastWeatherContainer>
    )
}
