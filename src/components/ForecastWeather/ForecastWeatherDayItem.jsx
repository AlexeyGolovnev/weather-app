import React from 'react'
import ForecastWeatherAddInfoItem from './ForecastWeatherAddInfoItem';
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
import { 
    WiSunrise, 
    WiSunset,
    WiHumidity,
    WiStrongWind,
    WiSprinkle,
} from 'react-icons/wi';
import { RiEyeLine } from 'react-icons/ri';

export default function ForecastWeatherDayItem({date, astro, day}) {
    let additionalData = null;
    if(astro && day) {
        additionalData = [
            [<WiStrongWind />, 'Wind', day.maxwind_kph + ' kph'],
            [<RiEyeLine />,'Visibility',day.avgvis_km + ' km'],
            [<WiHumidity />,'Humidity', day.avghumidity + ' %'],        
            [<WiSprinkle />,'Precipitation',day.totalprecip_mm + ' mm'],
            [<WiSunrise />, 'Sunrise', astro.sunrise],
            [<WiSunset />, 'Sunset', astro.sunset],
        ].map((item, index) => {
            return (
                <ForecastWeatherAddInfoItem 
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
