import styled from 'styled-components';

export const MainSection = styled.main`

`

export const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:2.5rem 0;
`;

export const MainHeader = styled.div`
    margin-bottom: 2.5rem;
`;

export const MainBody = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const MainFooter = styled.div``;

export const MainTitleBox = styled.div`
    margin-bottom:1rem;
`;
export const MainTextBox = styled.div`
    display:flex;
    flex-direction:column;
`
export const MainWeatherDataBox = styled.div`
    display:inline-flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    background: rgba(201,185,221,0.4);
    border-radius:20px;
`;

export const MainIconBox = styled.div`
    width:100px;
    height:100px;
`
export const MainIcon = styled.img`
    max-width:100%;
`;

export const MainTemperatureBox = styled.div`
    display:flex;
    flex-direction:column;

`;

export const MainWeatherAdditionalDataBox = styled.div`
    display:grid;
    grid-template-columns: repeat(3, minmax(100px,300px));
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
    background: rgba(201,185,221,0.4);
    border-radius:20px;
`
export const AdditionalDataItem = styled.div`
`