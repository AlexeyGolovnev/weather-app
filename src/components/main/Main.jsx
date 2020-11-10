import React from 'react'
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

export default function Main() {
    const deg = '\u00b0';
    const additionalData = [`6${deg} Hight`,`3${deg} Low`,'3.1mph Wind','70% Rain','6:40 Sunrise','7.19 Sunset'].map((item, index) => {
        return (
            <Text bold key = {index}>{item}</Text>
        )
    });
        return (
            <MainSection>
                <Container>
                    <MainContainer>
                        <MainHeader>
                            <MainTitleBox>
                                <Title bold>Minsk, Belarus</Title>
                            </MainTitleBox>
                            <SubTitle>Friday 6 November</SubTitle>
                        </MainHeader>
                        <MainBody>
                            <MainWeatherDataBox>
                                <MainIconBox>
                                    <MainIcon src = 'http://openweathermap.org/img/wn/10d@2x.png'/>
                                </MainIconBox>
                                <MainTemperatureBox>
                                    <Text big bold>
                                        5{deg}
                                    </Text>
                                    <Text bold>Light intensity drizzle</Text>
                                </MainTemperatureBox>
                            </MainWeatherDataBox>
                            <MainWeatherAdditionalDataBox>
                                {additionalData}
                            </MainWeatherAdditionalDataBox>
                        </MainBody>

                        <MainFooter>

                        </MainFooter>
                    </MainContainer>
                </Container>
            </MainSection>
        )
}
