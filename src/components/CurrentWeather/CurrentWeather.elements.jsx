import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
    display:flex; 
    width:100%;
    @media screen and (max-width:767px) {
        flex-direction:column;
        width:100%;
    }
`
export const CurrentWeatherMainData = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    min-width:150px;
    text-align:center;
    padding:10px;
    margin-right:1.1rem;
    background: rgba(201,185,221,0.4);
    border-radius:10px;
    @media screen and (max-width:767px) {
        margin-right:0;
        margin-bottom:1.1rem;
    }

`
export const CurrentWeatherTemperatureBox = styled.div`
    font-size:4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    & > svg {
        stroke:#ffffff;
    }
`
export const CurrentWeatherTemperature = styled.span`
    font-weight:400;
`
export const CurrentWeatherIconBox = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`
export const CurrentWeatherIcon = styled.img`
    width:80px;
        
`
export const CurrentWeatherDescription = styled.div`
    font-size: 2rem;
    font-weight:400;
`
export const CurrentWeatherAdditionalData = styled.div`
    display:grid;
    max-width:950px;
    grid-template-columns: repeat(auto-fit, minmax(0,148px));
    grid-gap:10px;
    justify-content: center;
    align-items:flex-start;
    text-align:center;
    padding:10px 0;
    background: rgba(201,185,221,0.4);
    border-radius:10px;
`
export const CurrentWeatherItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &:nth-child(1),&:nth-child(3) {
        svg {
             fill:#14b4c6; 
        }
    };
    &:nth-child(2), &:nth-child(4), &:nth-child(5) {
        svg {
            fill:#1eb4ed;
        }
    };
    &:nth-child(6), &:nth-child(7){
        svg {
            fill: #ffff00;
        }
    };
    &:nth-child(8), &:nth-child(9), &:nth-child(10){
        svg {
            fill: #3a55ce;
        }
    };
    &:nth-child(11), &:nth-child(12){
        svg {
            fill: #e65858;
        }
    };
`;
export const CurrentWeatherItemIconBox = styled.div`
    & > svg {
        font-size:4rem;
    }
`;
export const CurrentWeatherItemTitle = styled.span`
    font-size: 1.5rem;
    font-weight:400;
    margin-bottom:5px;
`;
export const CurrentWeatherItemDescription = styled.span`
    font-size: 1.5rem;
`;
