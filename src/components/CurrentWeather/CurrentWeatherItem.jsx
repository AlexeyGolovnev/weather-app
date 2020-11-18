import React from 'react'
import { 
    CurrentWeatherItemContainer,
    CurrentWeatherItemIconBox,
    CurrentWeatherItemTitle,
    CurrentWeatherItemDescription 
} from './CurrentWeather.elements';

export default function CurrentWeatherItem({ icon, title, description }) {
    return (
        <CurrentWeatherItemContainer>
            <CurrentWeatherItemIconBox>{icon}</CurrentWeatherItemIconBox>
            <CurrentWeatherItemTitle>{title}</CurrentWeatherItemTitle>
            <CurrentWeatherItemDescription>{description}</CurrentWeatherItemDescription>
        </CurrentWeatherItemContainer>
    )
}
