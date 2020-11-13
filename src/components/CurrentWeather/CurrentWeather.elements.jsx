import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
    display:flex; 
    width:100%;
`
export const CurrentWeatherMainData = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    flex-direction:column;
    padding:10px;
    background: rgba(201,185,221,0.4);
    border-radius:10px;
    margin:0 1.1rem 1.1rem 0;
`
export const CurrentWeatherTemperatureBox = styled.div`
`
export const CurrentWeatherTemperature = styled.span`
    font-size: 3rem;
    font-weight:500;
`
export const CurrentWeatherIconBox = styled.div`
    display:inline-flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`
export const CurrentWeatherIcon = styled.img`
    max-width:100%;
`
export const CurrentWeatherDescription = styled.div`
    font-size: 1.5rem;
    font-weight:500;
`
export const CurrentWeatherAdditionalData = styled.div`
    display:grid;
    max-width:1200px;
    grid-template-columns: repeat(auto-fit, minmax(0,158px));
    grid-gap:10px;
    justify-content: center;
    align-items:center;
    max-width: 1300px;
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
    flex: 1 1 15%;

    &:nth-child(1) {
        svg {
             stroke:#14b4c6; 
        }
    }
    &:nth-child(2),&:nth-child(3),&:nth-child(4) {
        svg {
            fill:#1eb4ed;
        }
    };
    &:nth-child(5), &:nth-child(6) {
        svg {
            stroke: #ffff00;
        }
    }
`;
export const CurrentWeatherItemIconBox = styled.div`
    & > svg {
        font-size:2.5rem;
    }
`;
export const CurrentWeatherItemTitle = styled.span`
    font-size:1.3rem;
    font-weight:500;
    margin-bottom:5px;
`;
export const CurrentWeatherItemDescription = styled.span`
    font-size:1.3rem;
`;
