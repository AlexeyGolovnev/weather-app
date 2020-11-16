import React from 'react';
import GlobalStyle from './globalStyles';
import { useSpring } from 'react-spring';
import { Header, SearchField, Main } from './components';
import { DispatchContext } from './dispatchContext';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons/lib';
import { AppContainer } from './globalStyles';

function App() {
    const dispatch = useDispatch();
    const animateSetting = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 1500,
        }
      })
    return ( 
        <IconContext.Provider value = {{ color:'#fff' }}>
            <DispatchContext.Provider value = {{dispatch}}>
                <GlobalStyle />
                <AppContainer style = {animateSetting}>
                    <Header />
                    <SearchField />
                    <Main /> 
                </AppContainer>
            </DispatchContext.Provider>
        </IconContext.Provider>
    );
}
export default App;