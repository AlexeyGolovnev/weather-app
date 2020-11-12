import React, { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux';
import { DispatchContext } from '../../dispatchContext';
import { Container, Title, SubTitle, Text } from './../../globalStyles'
import { 
    MainSection, 
    MainContainer, 
    MainHeader, 
    MainBody, 
    MainFooter,
    MainTitleBox,
    MainWeatherDataBox, 
    MainWeatherAdditionalDataBox,
    MainIconBox,
    MainIcon,
    MainTemperatureBox,
}
from "./Main.elements";
import ForecastWeather from './../forecast-weather/ForecastWeather';
import MainAdditionalDataItem from './MainAdditionalDataItem'
import { FiWind, FiCloud, FiSunrise, FiSunset } from 'react-icons/fi'
import { WiHumidity } from 'react-icons/wi';
import { RiRainyLine } from 'react-icons/ri';

export default function Main() {
    const location = useSelector(state => state.currentWeather.location);
    const current = useSelector(state => state.currentWeather.current)
    const astronomy = useSelector(state => state.astronomyWeather.astronomy);
    const date = new Date().toDateString();
    const deg = '\u00b0';

    let additionalData = '';
        if(current && astronomy) {
            additionalData = [
                [<FiWind />, 'Wind', current.wind_kph + ' kph'],
                [<WiHumidity />,'Humidity',current.humidity + ' %'],
                [<FiSunrise />, 'Sunrise', astronomy.astro.sunrise],
                [<FiCloud />,'Cloud',current.cloud + ' %'],
                [<RiRainyLine />,'Precipitation',current.precip_mm + ' mm'],
                [<FiSunset />, 'Sunset', astronomy.astro.sunset],
            ].map((item, index) => {
                return (
                    <MainAdditionalDataItem 
                        key = {index}
                        icon = {item[0]}
                        title = {item[1]}
                        text = {item[2]}
                    />
                )
            })
        }
        if(location) {
            return (
                <MainSection>
                <Container>
                    <MainContainer>
                        <MainHeader>
                            <MainTitleBox>
                                <Title bold>{location ? location.name + ', ' + location.country : ''}</Title>
                                {/* <Title>{location ? location.country : ''}</Title> */}
                            </MainTitleBox>
                            <SubTitle>{date}</SubTitle>
                        </MainHeader>
                        <MainBody>
                            <MainWeatherDataBox>
                                <MainTemperatureBox>
                                        <Text big>
                                        {current ? `${current.temp_c}${deg}`: ''}
                                        </Text>
                                </MainTemperatureBox>
                                <MainIconBox>
                                    <MainIcon src = {current && current.condition.icon} />
                                    <Text bold>{current ? current.condition.text : ''}</Text>
                                </MainIconBox>
                            </MainWeatherDataBox>
                            <MainWeatherAdditionalDataBox>
                                {additionalData}
                            </MainWeatherAdditionalDataBox>
                        </MainBody>

                        <MainFooter>
                            <ForecastWeather></ForecastWeather>
                        </MainFooter>
                    </MainContainer>
                </Container>
            </MainSection>
        )
    }
    else {
        return null
    }
      

}
