import React from 'react'
import ForecastWeatherItem from './ForecastWeatherHourItem';
import ForecastWeatherDayItem from './ForecastWeatherDayItem';
import Carousel from './../Carousel/Carousel'
import { 
    ForecastWeatherContainer, 
    ForecastWeatherSubtitleBox,
    ForecastWeatherCarouselBox,
    ForecastWeatherTwoDaysBox
}
from './ForecastWeather.elements'
import { SubTitle } from '../../globalStyles';

export default function ForecastWeather({ forecastDays }) {
    let forecastHours = null;
    let forecastTwoDays = null;
    forecastHours = forecastDays[0].hour.map((item, index) => {
        return (
            <ForecastWeatherItem 
                key = {index}
                time = {item.time.split(' ')[1]}
                icon = {item.condition.icon}  
                temperature = {Math.floor(item.temp_c)}
                description = {item.condition.text}
            />
        ) 
    });
    forecastTwoDays = forecastDays.map((item, index) => {
        return index !== 0 && (
            <ForecastWeatherDayItem  
                key = {index} 
                date = {item.date}
                astro = {item.astro}
                day = {item.day}
            />
        )
    })
    return (
        <ForecastWeatherContainer>
            <ForecastWeatherSubtitleBox>
                <SubTitle bold>Day Forecast</SubTitle>
            </ForecastWeatherSubtitleBox>
            <ForecastWeatherCarouselBox>
                <Carousel data = {forecastHours} />
            </ForecastWeatherCarouselBox>
            <ForecastWeatherSubtitleBox>
                <SubTitle bold>Forecast 2 next days</SubTitle>
            </ForecastWeatherSubtitleBox>
            <ForecastWeatherTwoDaysBox>
                {forecastTwoDays}
            </ForecastWeatherTwoDaysBox>
        </ForecastWeatherContainer>
    )
}
