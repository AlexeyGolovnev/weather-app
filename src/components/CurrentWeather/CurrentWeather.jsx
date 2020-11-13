import React from 'react'
import {
    CurrentWeatherContainer,
    CurrentWeatherTemperatureBox,
    CurrentWeatherTemperature,
    CurrentWeatherIconBox,
    CurrentWeatherIcon,
    CurrentWeatherDescription,
    CurrentWeatherMainData,
    CurrentWeatherAdditionalData
} from './CurrentWeather.elements';
import CurrentWeatherItem from './CurrentWeatherItem';
import { FiWind, FiCloud, FiSunrise, FiSunset } from 'react-icons/fi'
import { WiHumidity} from 'react-icons/wi';
import { RiRainyLine } from 'react-icons/ri'; 


export default function CurrentWeather({ temp_c, condition, wind_kph, humidity, astro, cloud, precip_mm }) {
    const deg = '\u00b0';
    let additionalData = '';
    if(astro) {
         additionalData = [
            [<FiWind />, 'Wind', wind_kph + ' kph'],
            [<FiCloud />,'Cloud',cloud + ' %'],
            [<WiHumidity />,'Humidity', humidity + ' %'],        
            [<RiRainyLine />,'Precipitation',precip_mm + ' mm'],
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
        <CurrentWeatherContainer>
            <CurrentWeatherMainData>
                <CurrentWeatherTemperatureBox>
                    <CurrentWeatherTemperature>{temp_c + deg}</CurrentWeatherTemperature>
                </CurrentWeatherTemperatureBox>
                <CurrentWeatherIconBox>
                    <CurrentWeatherIcon src = {condition?.icon} />
                    <CurrentWeatherDescription>{condition?.text}</CurrentWeatherDescription>
                </CurrentWeatherIconBox>
            </CurrentWeatherMainData>
            <CurrentWeatherAdditionalData>
                {additionalData}
            </CurrentWeatherAdditionalData>
        </CurrentWeatherContainer>
    )
}
