import React from 'react';
import { Header, SearchField, Main } from './components';
import { DispatchContext } from './dispatchContext';
import GlobalStyle from './globalStyles';
import  { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    return ( 
        <DispatchContext.Provider value = {{dispatch}}>
            <GlobalStyle />
            <Header />
            <SearchField />
            <Main />
        </DispatchContext.Provider>
    );
}
export default App;