import React from 'react'
import CurrentWeatherItem from './CurrentWeatherItem';
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
import { 
    WiSunrise, 
    WiSunset,
    WiHumidity,
    WiMoonrise, 
    WiMoonset,
    WiCloudyGusts,
    WiCloud,
    WiStrongWind,
    WiSprinkle,
    WiSolarEclipse,
    WiMoonWaxingCrescent4,
    WiBarometer
} from 'react-icons/wi';

export default function CurrentWeather({ temp_c, condition, wind_kph, humidity, astro, cloud, precip_mm, gust_kph, uv, pressure_mb }) {
    const deg = '\u00b0';
    let additionalData = '';
    if(astro) {
        additionalData = [
            [<WiStrongWind />, 'Wind', wind_kph + ' kph'],
            [<WiCloud />, 'Cloud', cloud + ' %'],
            [<WiCloudyGusts />, 'Gusts', gust_kph +' kph'],
            [<WiHumidity />, 'Humidity', humidity + ' %'],        
            [<WiSprinkle />, 'Precipitation', precip_mm + ' mm'],
            [<WiSunrise />, 'Sunrise', astro.sunrise],
            [<WiSunset />, 'Sunset', astro.sunset],
            [<WiMoonrise />, 'Moonrise', astro.moonrise],
            [<WiMoonset />, 'Moonset', astro.moonset],
            [<WiMoonWaxingCrescent4 />, 'Moon phase', astro.moon_phase],
            [<WiSolarEclipse />, 'UV', uv],
            [<WiBarometer />, 'Pressure ', pressure_mb + ' mb'],
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
                    <CurrentWeatherTemperature>{Math.floor(temp_c) + deg}</CurrentWeatherTemperature>
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
