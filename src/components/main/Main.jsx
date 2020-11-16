import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner';
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import  MainTab from './MainTab';
import { useSelector } from 'react-redux';
import { Container, Title, SubTitle, LoaderBox } from '../../globalStyles'
import { 
    MainSection, 
    MainContainer, 
    MainHeader, 
    MainBody, 
    MainBodyContent,
    MainTitleBox,
    MainBodyHeader,
} from "./Main.elements";
import { useSpring } from 'react-spring'

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
    const dateTime = location && location.localtime.split(' ');
    const formatDate = dateTime && new Date(`${dateTime[0]}`).toDateString() + ' ' + dateTime[1];
    const [currentTab, setCurrentTab] = useState(0);
    const [stardedAnimate, setStartedAnimate] = useState(false);
    const animatedTabSet = useSpring({
        reset: stardedAnimate,
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: {
            duration: 1000,
        }
    })
    const animatedContainerSet = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 1500,
        }
    })
    useEffect(() => {
        setStartedAnimate(true);
    },[currentTab])

    const tabs = ['Current','Forecast'].map((item, index) => {
        return (
            <MainTab 
                key = {index} 
                id = {index}
                title = {item} 
                setCurrentTab = {setCurrentTab}
                isCurrentTab = {currentTab === index}
            />
        )})

    if (!isLoading) {
        return (
            <MainSection>
                <Container>
                    <MainContainer style={animatedContainerSet}>
                        {isDataNotEmpty && 
                            <>
                                <MainHeader>
                                    <MainTitleBox>
                                        <Title bold>{location ? location.name + ', ' + location.country : ''}</Title>
                                    </MainTitleBox>
                                    <SubTitle>{formatDate} </SubTitle>
                                </MainHeader>
                                <MainBody>
                                    <MainBodyHeader>
                                       {tabs}
                                    </MainBodyHeader>
                                    <MainBodyContent style={animatedTabSet}>
                                        {currentTab === 0 
                                            ? <CurrentWeather {...current} {...location} {...astronomy}/> 
                                            : <ForecastWeather forecastDays = {forecast.forecastday}/>
                                        }
                                    </MainBodyContent>
                                </MainBody>
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

