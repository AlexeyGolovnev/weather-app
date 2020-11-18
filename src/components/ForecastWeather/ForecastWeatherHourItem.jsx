import React from 'react'
import { 
    ForecastWeatherItemContainer, 
    ForecastWeatherItemTime,
    ForecastWeatherItemIcon,
    ForecastWeatherItemTemperature,
    ForecastWeatherItemDescription
} from './ForecastWeather.elements'

export default function ForecastWeatherItem({time, icon, temperature, description}) {
    return (
        <ForecastWeatherItemContainer>
            <ForecastWeatherItemTime>{time}</ForecastWeatherItemTime>
            <ForecastWeatherItemTemperature>{temperature}&deg;</ForecastWeatherItemTemperature>
            <ForecastWeatherItemIcon src = {icon} />
            <ForecastWeatherItemDescription>{description}</ForecastWeatherItemDescription>
        </ForecastWeatherItemContainer>
    )
}
