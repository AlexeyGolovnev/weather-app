import React from 'react'
import CurrentWeatherItem from './../CurrentWeather/CurrentWeatherItem'
import {
    ForecastWeatherDayItemContainer,
    ForecastWeatherDayItemDate,
    ForecastWeatherDayItemInfoBox,
    ForecastWeatherDayItemMainInfoBox,
    ForecastWeatherDayItemMainInfoTemp,
    ForecastWeatherDayItemMainInfoIcon,
    ForecastWeatherDayItemMainInfoDesc,
    ForecastWeatherDayItemAddInfoBox
} from './ForecastWeather.elements';
import { FiWind, FiCloud, FiSunrise, FiSunset, FiEye } from 'react-icons/fi'
import { WiHumidity} from 'react-icons/wi';
import { RiRainyLine, RiEyeLine } from 'react-icons/ri'; 

export default function ForecastWeatherDayItem({date, astro, day}) {
    let additionalData = null;
    if(astro && day) {
        additionalData = [
            [<FiWind />, 'Wind', day.maxwind_kph + ' kph'],
            [<RiEyeLine />,'Visibility',day.avgvis_km + ' km'],
            [<WiHumidity />,'Humidity', day.avghumidity + ' %'],        
            [<RiRainyLine />,'Precipitation',day.totalprecip_mm + ' mm'],
            [<FiSunrise />, 'Sunrise', astro.sunrise],
            [<FiSunset />, 'Sunset', astro.sunset],
        ].map((item, index) => {
            return (
                <CurrentWeatherItem 
                    key = {index}
                    icon = {item[0]}
                    title = {item[1]}
                    description = {item[2]}
                />
            )
        })
    }
    
    return (
        <ForecastWeatherDayItemContainer>
            <ForecastWeatherDayItemDate>{date}</ForecastWeatherDayItemDate>
            <ForecastWeatherDayItemInfoBox>
                <ForecastWeatherDayItemMainInfoBox>
                    <ForecastWeatherDayItemMainInfoTemp>{day.avgtemp_c}&deg;</ForecastWeatherDayItemMainInfoTemp>
                    <ForecastWeatherDayItemMainInfoIcon src={day.condition.icon} />
                    <ForecastWeatherDayItemMainInfoDesc>{day.condition.text}</ForecastWeatherDayItemMainInfoDesc>
                </ForecastWeatherDayItemMainInfoBox>
                <ForecastWeatherDayItemAddInfoBox>
                    {additionalData}
                </ForecastWeatherDayItemAddInfoBox>
            </ForecastWeatherDayItemInfoBox>
        </ForecastWeatherDayItemContainer>
    )
}
