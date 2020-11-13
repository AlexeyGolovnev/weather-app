import React from 'react';
import GlobalStyle from './globalStyles';
import { Header, SearchField, Main } from './components';
import { DispatchContext } from './dispatchContext';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons/lib';

function App() {
    const dispatch = useDispatch();
    return ( 
        <IconContext.Provider value = {{ color:'#fff' }}>
            <DispatchContext.Provider value = {{dispatch}}>
                <GlobalStyle />
                <Header />
                <SearchField />
                <Main />
            </DispatchContext.Provider>
        </IconContext.Provider>
       
    );
}
export default App;