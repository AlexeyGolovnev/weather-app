import styled from 'styled-components';
import { animated } from 'react-spring'

export const MainSection = styled.main`
`
export const MainContainer = styled(animated.div)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    padding:0;
`;
export const MainHeader = styled.div`
    margin-bottom: 2.5rem;
`;
export const MainBody = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    flex-wrap:wrap;
    margin-bottom:1rem;
`;
export const MainBodyHeader = styled.div`
    display:flex;
    width:100%;
    margin-bottom:20px;
`;
export const MainTabContainer = styled.div(({ isActive }) => ({
    borderBottom: isActive ? '2px solid #fff' : 'none',
}),`
    margin-right: 25px;
    cursor:pointer;
`);
export const MainTabTitle = styled.span`
    font-size:1.8rem;
`
export const MainTitleBox = styled.div`
    margin-bottom:1rem;
`;
export const MainBodyContent = styled(animated.div)`
    display:flex;
    width:100%;
    min-height:150px;
`;  
