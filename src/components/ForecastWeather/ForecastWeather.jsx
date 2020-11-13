import React from 'react'
import { useSelector } from 'react-redux';
import { 
    ForecastWeatherContainer, 
    ForecastWeatherSubtitleBox
}
from './ForecastWeather.elements'
import ForecastWeatherItem from './ForecastWeatherHourItem';
import Carousel from './../Carousel/Carousel'
import { SubTitle } from '../../globalStyles';

export default function ForecastWeather() {
    const forecastDays = useSelector(state => state.forecastWeather.forecast?.forecastday);
    let forecastHours = null;
    let forecastTwoDays = null;
    if(forecastDays) {
        forecastHours = forecastDays[0].hour.map((item, index) => {
            return (
                <ForecastWeatherItem 
                    key = {index}
                    time = {item.time.split(' ')[1]}
                    icon = {item.condition.icon}  
                    temperature = {Math.floor(item.temp_c)}
                />
            ) 
        });

        forecastTwoDays = forecastDays.map((item, index) => {
            return index !== 0 && (
                <ForecastWeatherItem  
                    key = {index} 
                    time = {item.day.condition.text}
                    icon = {item.day.condition.icon}
                    temperature = {Math.floor(item.day.avgtemp_c)}
                />
            )
        })
    }

    return (
        <ForecastWeatherContainer>
            <ForecastWeatherSubtitleBox>
                <SubTitle >Day Forecast</SubTitle>
            </ForecastWeatherSubtitleBox>
            <Carousel data = {forecastHours} />
            <ForecastWeatherSubtitleBox>
                <SubTitle >Forecast 2 next days</SubTitle>
            </ForecastWeatherSubtitleBox>
            {forecastTwoDays}
        </ForecastWeatherContainer>
    )
}
