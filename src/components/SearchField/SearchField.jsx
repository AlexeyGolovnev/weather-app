import React, { useEffect, useState, useRef } from 'react'
import { Container } from '../../globalStyles'
import { 
    SearchFieldContainer, 
    SearchFieldInput, 
    SearchFieldIcon, 
    SearchFieldInputBox,
    SearchButton,
    SearchFieldSection,
} from './SearchField.elements';
import SearchFieldAutoComplete from './SearchFieldAutoComplete';

export default function SearchField({ getWeather, city, setCity, isAutoCompleteOpen, setIsAutoCompleteOpen, filteredCitiesList }) {
    const [enterClicked, setEnterClicked] = useState(false);
    const [buttonClick, setButtonClick] = useState(false); 
    const inputRef = useRef();
    const autoCompleteRef = useRef();

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            setEnterClicked(true);
        }
    }
    const handleInput = (e) => {
        setCity(e.target.value)
    }
    const autoCompleteOpen = () => {
        city.length > 2 && setIsAutoCompleteOpen(true);
    } 
    const handleClickOutside = (e) => {
        const {current: wrap} = autoCompleteRef;
        if(e.target === inputRef.current) {
            autoCompleteOpen();
        } else if(wrap && !wrap.contains(e.target)) {
            setIsAutoCompleteOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if((buttonClick || enterClicked) && city.length) {
            getWeather(city);
            setButtonClick(false);
            setEnterClicked(false);
            setIsAutoCompleteOpen(false);
        }
    },[buttonClick, enterClicked]);

    return (
        <SearchFieldSection>
            <Container>
                <SearchFieldContainer>
                    <SearchFieldInputBox>
                        <SearchFieldInput 
                            ref = {inputRef}
                            name = "cityName"
                            type = 'text'
                            placeholder = 'Search City...'
                            value = {city}
                            autoComplete = 'off'
                            onChange = {handleInput}
                            onKeyDown = {handleKeyDown}
                            onClick = {autoCompleteOpen}
                        />
                        <SearchButton onClick={() => setButtonClick(true)}>
                            <SearchFieldIcon/>
                        </SearchButton>
                        {isAutoCompleteOpen &&
                            <SearchFieldAutoComplete 
                                inputRef = {inputRef}  
                                autoCompleteRef = {autoCompleteRef}
                                setCity = {setCity} 
                                data = {filteredCitiesList} 
                                getWeather = {getWeather}
                            />
                        }
                    </SearchFieldInputBox>
                </SearchFieldContainer>
            </Container>
        </SearchFieldSection>

    );
}
