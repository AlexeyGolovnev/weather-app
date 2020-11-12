import React from 'react';
import GlobalStyle from './globalStyles';
import { Header, SearchField, Main } from './components';
import { DispatchContext } from './dispatchContext';
import { useDispatch } from 'react-redux';

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