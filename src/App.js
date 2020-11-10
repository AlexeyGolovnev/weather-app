import React from 'react'
import { Header, SearchField, Main } from './components'
import GlobalStyle from './globalStyles'

function App() {
    return ( 
        <>
            <GlobalStyle />
            <Header />
            <SearchField />
            <Main />
        </>
    );
}
export default App;