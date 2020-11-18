import React, { useState, useEffect } from 'react'
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import  MainTab from './MainTab';
import { Container, Title, SubTitle } from '../../globalStyles'
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

function Main({ 
    currentWeather, 
    forecastWeather, 
    astronomyWeather,
    currentTab,
    setCurrentTab,
}) {
    const dateTime = currentWeather.location.localtime.split(' ');
    const formatDate = dateTime && new Date(`${dateTime[0]}`).toDateString() + ' ' + dateTime[1];
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
            duration: 700,
        }
    })
    const animatedContainerSet = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 1000,
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
        
        return (
            <MainSection>
                <Container>
                    <MainContainer style={animatedContainerSet}>
                        <MainHeader>
                            <MainTitleBox>
                                <Title bold>{currentWeather.location.name + ', ' + currentWeather.location.country}</Title>
                            </MainTitleBox>
                            <SubTitle>{formatDate} </SubTitle>
                        </MainHeader>
                        <MainBody>
                            <MainBodyHeader>
                                {tabs}
                            </MainBodyHeader>
                            <MainBodyContent style={animatedTabSet}>
                                {currentTab === 0 
                                    ? <CurrentWeather {...currentWeather.current} {...currentWeather.location} {...astronomyWeather.astronomy}/> 
                                    : <ForecastWeather forecastDays = {forecastWeather.forecastday}/>
                                }
                            </MainBodyContent>
                        </MainBody>
                    </MainContainer>
                </Container>
            </MainSection>
        );
}

export default React.memo(Main);