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
export const ForecastWeatherCarouselBox =styled.div`
    margin-bottom:1rem;
    @media screen and (max-width:768px) {
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
    }
`
export const ForecastWeatherSubtitleBox = styled.div`
    margin-bottom:0.9rem;
`
export const ForecastWeatherItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:10px;
    width:150px;
    user-select:none;
    text-align:center;
`;
export const ForecastWeatherItemTime = styled.span`
    font-size:1.5rem;
    border-bottom:1px solid #fff;
    margin-bottom:0.7rem;
`
export const ForecastWeatherItemIcon = styled.img`
`
export const ForecastWeatherItemTemperature = styled.span`
    font-size:1.5rem;
    font-weight:400;
`
export const ForecastWeatherItemDescription = styled.span`
    font-size:1.2rem;
    font-weight:400;
`
export const ForecastWeatherTwoDaysBox = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    min-width:100%;
`;
export const ForecastWeatherDayItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    width:600px;
    background-color:rgba(201,185,221,0.4);
    border-radius:10px;
    margin-bottom:10px;
    &:not(:last-child) {
        margin-right:10px;
    }
    @media screen and (max-width:768px) {
        width:100%;
        &:not(:last-child) {
            margin-right:0;
        }
        justify-content:center;
    }
`;
export const ForecastWeatherDayItemDate = styled.span`
    width:100%;
    border-bottom:1px solid #fff;
    text-align:center;
    font-size:1.2rem;
    font-weight:400;
    padding:10px;
`;
export const ForecastWeatherDayItemInfoBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 0;
    @media screen and (max-width:768px) {
        flex-direction:column;
    }
`;
export const ForecastWeatherDayItemMainInfoBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
    border-right:1px solid #fff;
    padding: 10px;
    min-width:200px;
    text-align:center;
    @media screen and (max-width:767px) {
        border-right: none;
        border-bottom: 1px solid #fff;
        width:100%;
        padding: 5px;
    }
`;
export const ForecastWeatherDayItemMainInfoTemp = styled.span`
    font-size:1.5rem;
    font-weight:400;
`;
export const ForecastWeatherDayItemMainInfoIcon = styled.img`
`;
export const ForecastWeatherDayItemMainInfoDesc = styled.span`
    font-size:1.5rem;
    font-weight:400;
`;
export const ForecastWeatherDayItemAddInfoBox = styled.div`
    display:grid;
    grid-template-columns:repeat(3, minmax(0,150px));
    grid-gap:10px;
    padding: 10px 5px;
`;
export const ForecastWeatherAddInfoItemContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        svg {
            fill:#1eb4ed; 
        }
    };
    &:nth-child(5), &:nth-child(6) {
        svg {
            fill: #ffff00;
        }
    };
`;
export const ForecastWeatherItemIconBox = styled.div`
    & > svg {
        font-size:2rem;
    }
`;
export const ForecastWeatherAddInfoItemTitle = styled.span`
    font-size:1.2rem;
    font-weight:400;
    margin-bottom:5px; 
`;
export const ForecastWeatherAddInfoItemDescription = styled.span`
    font-size:1.2rem;
`;