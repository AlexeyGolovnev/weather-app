import React, { useEffect, useContext, useState } from 'react'
import { DispatchContext } from '../../dispatchContext';
import { Container } from '../../globalStyles'
import { getCurrentWeather, getAstronomyWeather, getForecastWeather } from '../../redux/actions';
import { SearchFieldContainer, SearchFieldInput, SearchFieldIcon, SearchFieldInputBox } from './SearchField.elements';

export default function SearchField() {
    const { dispatch } = useContext(DispatchContext);
    const [city, setCity] = useState('');
    const [enterClicked, setEnterClicked] = useState(false);

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            setEnterClicked(true);
        }
    }

    const handleInput = (e) => {
        setCity(e.target.value)
    }

    useEffect(() => {
        if(enterClicked && city.length) {
            dispatch(getCurrentWeather(city))
            dispatch(getAstronomyWeather(city));
            dispatch(getForecastWeather(city));
            setEnterClicked(false);
        }
    }, [enterClicked]);

    return (
        <Container>
            <SearchFieldContainer>
                <SearchFieldInputBox>
                    <SearchFieldInput 
                        name = "cityName"
                        onChange = {handleInput}
                        onKeyDown = {handleKeyDown}
                        type = 'search'
                        placeholder = 'City'
                        autocomplete='on'
                        />
                    <SearchFieldIcon/>
                </SearchFieldInputBox>
            </SearchFieldContainer>
        </Container>
    )
}
