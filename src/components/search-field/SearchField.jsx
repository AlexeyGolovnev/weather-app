import React, { useContext, useState } from 'react'
import { DispatchContext } from '../../dispatchContext';
import { Container } from '../../globalStyles'
import { getCurrentWeather, getAstronomyWeather } from '../../redux/actions';
import { SearchFieldContainer, SearchFieldInput, SearchFieldIcon, SearchFieldInputBox } from './SearchField.elements';
export default function SearchField() {
    const { dispatch } = useContext(DispatchContext);
    const [city, setCity] = useState('');

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(city.length) {
                dispatch(getCurrentWeather(city))
                dispatch(getAstronomyWeather(city));
            } 
        }
    }
    const handleInput = (e) => {
        setCity(e.target.value)
    }
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
