import React from 'react'
import Loader from 'react-loader-spinner'
import { createSelector } from 'reselect'
import { useSelector } from 'react-redux';
import { Container, Title, SubTitle, LoaderBox } from '../../globalStyles'
import { 
    MainSection, 
    MainContainer, 
    MainHeader, 
    MainBody, 
    MainFooter,
    MainTitleBox,
} from "./Main.elements";
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

export default function Main() {
    const cwLoading = useSelector(state => state.currentWeather.loading);
    const astoLoading = useSelector(state => state.astronomyWeather.loading);
    const forecastLoading = useSelector(state => state.forecastWeather.loading);
    const location = useSelector(state => state.currentWeather.data.location);
    const current = useSelector(state => state.currentWeather.data.current)
    const astronomy = useSelector(state => state.astronomyWeather.data.astronomy);
    const forecast = useSelector(state => state.forecastWeather.data.forecast);
    const isDataNotEmpty = location && current && astronomy && forecast;
    const isLoading = cwLoading || astoLoading || forecastLoading;
    const date = new Date().toDateString();

    if (!isLoading) {
        return (
            <MainSection>
                <Container>
                    <MainContainer>
                        {isDataNotEmpty && 
                            <>
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
                                    <ForecastWeather forecastDays = {forecast.forecastday}/>
                                </MainFooter>
                            </>
                        }
                    </MainContainer>
                </Container>
            </MainSection>
        )
    } 
    else {
        return (
            <LoaderBox>
                <Loader 
                    type="Puff"
                    color="#fff"
                    height={80}
                    width={80} 
                />
            </LoaderBox>
        )
    }
}

