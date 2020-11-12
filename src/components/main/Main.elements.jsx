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
    padding: 0 50px;
`;

export const MainBody = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:wrap;
    padding: 0 50px;
    margin-bottom:50px;
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
    flex-direction:column;
    padding:10px;
    background: rgba(201,185,221,0.4);
    border-radius:20px;
    margin-bottom:20px;
`;

export const MainIconBox = styled.div`
    display:inline-flex;
    justify-content:center;
    align-items:center;
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
    max-width:100%;
    grid-template-columns: repeat(auto-fit, 180px);
    grid-gap: 10px;
    justify-content: center;
    align-items:center; 
    text-align:center;
    padding:10px 0;
    background: rgba(201,185,221,0.4);
    border-radius:20px;
`
export const MainAdditionalDataItemContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

export const MainAdditionalDataItemIconBox = styled.div`
    & > svg {
		font-size: 3rem;
		fill: #fff;
	}
`;

