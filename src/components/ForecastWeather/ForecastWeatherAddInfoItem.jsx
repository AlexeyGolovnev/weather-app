import React from 'react'
import { 
    ForecastWeatherAddInfoItemContainer,
    ForecastWeatherItemIconBox,
    ForecastWeatherAddInfoItemTitle,
    ForecastWeatherAddInfoItemDescription,
} from './ForecastWeather.elements';

export default function ForecastWeatherAddInfoItem({icon, title, description}) {
    return (
        <ForecastWeatherAddInfoItemContainer>
            <ForecastWeatherItemIconBox>{icon}</ForecastWeatherItemIconBox>
            <ForecastWeatherAddInfoItemTitle>{title}</ForecastWeatherAddInfoItemTitle>
            <ForecastWeatherAddInfoItemDescription>{description}</ForecastWeatherAddInfoItemDescription>
        </ForecastWeatherAddInfoItemContainer>
    )
}
