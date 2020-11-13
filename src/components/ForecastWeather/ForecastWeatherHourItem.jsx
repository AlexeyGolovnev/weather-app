import React from 'react'
import { 
    ForecastWeatherItemContainer, 
    ForecastWeatherItemTime,
    ForecastWeatherItemIcon,
    ForecastWeatherItemTemperature }
from './ForecastWeather.elements'

export default function ForecastWeatherItem({time, icon, temperature}) {
    return (
        <ForecastWeatherItemContainer>
            <ForecastWeatherItemTime>{time}</ForecastWeatherItemTime>
            <ForecastWeatherItemIcon src = {icon} />
            <ForecastWeatherItemTemperature>{temperature}&deg;</ForecastWeatherItemTemperature>
        </ForecastWeatherItemContainer>
    )
}
