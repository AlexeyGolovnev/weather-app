import React, { useEffect, useContext } from 'react'
import { useSelector } from 'react-redux';
import { DispatchContext } from '../../dispatchContext';
import { Container, Title, SubTitle, Text } from '../../globalStyles'
import { 
    MainSection, 
    MainContainer, 
    MainHeader, 
    MainBody, 
    MainFooter,
    MainTitleBox,
    MainFooterSubtitleBox,
} from "./Main.elements";
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import CurrentWeather from './../CurrentWeather/CurrentWeather';

export default function Main() {
    const location = useSelector(state => state.currentWeather.location);
    const current = useSelector(state => state.currentWeather.current)
    const astronomy = useSelector(state => state.astronomyWeather.astronomy);
    const date = new Date().toDateString();
    if(location) {
            return (
                <MainSection>
                <Container>
                    <MainContainer>
                        <MainHeader>
                            <MainTitleBox>
                                <Title bold>{location ? location.name + ', ' + location.country : ''}</Title>
                            </MainTitleBox>
                            <SubTitle>{date}</SubTitle>
                        </MainHeader>
                        <MainBody>
                            <CurrentWeather {...current} {...location} {...astronomy}/>
                        </MainBody>
                        <MainFooter>
                            <ForecastWeather />
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
