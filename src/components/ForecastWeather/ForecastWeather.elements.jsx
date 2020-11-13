import styled from 'styled-components';

export const ForecastWeatherContainer = styled.div`
    display:flex;
    align-items:flex-start;
    width:100%;
    overflow:hidden;
    flex-direction:column;
`;

export const ForecastWeatherItemsContainer = styled.div`
    display:flex;
    width:100%;
    top:0;
    left:0;
`
export const ForecastWeatherSubtitleBox = styled.div`
    margin-bottom:10px;
`

export const ForecastWeatherItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    width:100px;
    user-select:none;
`;

export const ForecastWeatherItemTime = styled.span`
    font-size:1.5rem;
`
export const ForecastWeatherItemIcon = styled.img`
`
export const ForecastWeatherItemTemperature = styled.span`
    font-size:1.5rem;
`
