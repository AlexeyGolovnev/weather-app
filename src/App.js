import React,{ useState, useEffect } from 'react';
import GlobalStyle from './globalStyles';
import Loader from 'react-loader-spinner';
import { useSpring } from 'react-spring';
import { Header, SearchField, Main } from './components';
import { IconContext } from 'react-icons/lib';
import { AppContainer, LoaderBox } from './globalStyles';
import { 
    getCurrentWeatherFromApi, 
    getForecastWeatherFromApi, 
    getAstronomyWeatherFromApi, 
    getCitiesListFromApi 
} from './api/api';

function App() {
    const [currentWeather, setCurrentWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState({});
    const [astronomyWeather, setAstronomyWeather] = useState({});
    const [citiesList, setCitiesList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [hasData, setHasData] = useState(false);
    const [city, setCity] = useState('');
    const [currentTab, setCurrentTab] = useState(0);
    const [filteredCitiesList, setFilteredCitiesList] = useState([]);
    const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);

    const getWeather = (city) => {
        setHasError(false);
        setIsFetching(true);
        Promise.all([getCurrentWeatherFromApi(city),  getForecastWeatherFromApi(city), getAstronomyWeatherFromApi(city)])
        .then((response) => {
            setCurrentWeather(response[0]);
            setForecastWeather(response[1]);
            setAstronomyWeather(response[2]);
            setIsFetching(false);
            setHasData(true);
        })
        .catch((error) => {
            setIsFetching(false);
            setHasError(true);
        }); 
    }
    const getCitiesList = async (value) => {
        if(city.length>2) {
            const response = await getCitiesListFromApi(city);
            setCitiesList(response.data);
            setIsAutoCompleteOpen(true);
        } else {
            setCitiesList([]);
            setIsAutoCompleteOpen(false);
        }
    }
    const animateSetting = useSpring({
        reset:false,
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 1000,
        }
      })
    
    useEffect(() => {
        getCitiesList(city);
    },[city]);

    useEffect(() => {
        citiesList.length && setFilteredCitiesList(citiesList.map(item => item.name.split(',')[0]));
    }, [citiesList]);
    
    return ( 
        <IconContext.Provider value = {{ color:'#fff' }}>
            <GlobalStyle />
            <AppContainer style = {animateSetting}>
                <Header />
                <SearchField 
                    getWeather = {getWeather} 
                    setCity = {setCity} 
                    city = {city} 
                    isAutoCompleteOpen = {isAutoCompleteOpen}
                    filteredCitiesList = {filteredCitiesList}
                    setIsAutoCompleteOpen = {setIsAutoCompleteOpen}
                />
                {!isFetching 
                ? hasData && !hasError && <Main 
                    currentWeather = {currentWeather.data} 
                    forecastWeather = {forecastWeather.data.forecast} 
                    astronomyWeather = {astronomyWeather.data} 
                    currentTab = {currentTab}
                    setCurrentTab = {setCurrentTab}
                /> 
                :<LoaderBox>
                    <Loader 
                        type="Puff"
                        color="#fff"
                        height={80}
                        width={80} 
                    />
                </LoaderBox>
            }
            </AppContainer>
        </IconContext.Provider>
    );
}
export default App;