import React, { useEffect, useState, useRef } from 'react'
import { Container } from '../../globalStyles'
import { 
    SearchFieldContainer, 
    SearchFieldInput, 
    SearchFieldIcon, 
    SearchFieldInputBox,
    SearchButton,
    SearchFieldSection
} from './SearchField.elements';
import SearchFieldAutoComplete from './SearchFieldAutoComplete';

export default function SearchField({ getWeather, city, setCity, isAutoCompleteOpen, setIsAutoCompleteOpen, filteredCitiesList }) {
    const [enterClicked, setEnterClicked] = useState(false);
    const [buttonClick, setButtonClick] = useState(false); 
    const inputRef = useRef();
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            setEnterClicked(true);
        }
    }
    const handleInput = (e) => {
        setCity(e.target.value)
    }
    const focusInput = () => {
        city.length > 2 && setIsAutoCompleteOpen(true);
    }
    const onBlurClose = (e) => {
        setIsAutoCompleteOpen(false);
    }
    useEffect(() => {
        if((buttonClick || enterClicked) && city.length) {
            getWeather(city);
            setButtonClick(false);
            setEnterClicked(false);
        }
    },[buttonClick, enterClicked])

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
                            onFocus = {focusInput}
                            onBlur = {onBlurClose}
                        />
                        <SearchButton onClick={() => setButtonClick(true)}>
                            <SearchFieldIcon/>
                        </SearchButton>
                        <SearchFieldAutoComplete 
                            inputRef = {inputRef}  
                            setCity = {setCity} 
                            data = {filteredCitiesList} 
                            isAutoCompleteOpen = {isAutoCompleteOpen}
                            setIsAutoCompleteOpen = {setIsAutoCompleteOpen}
                        />
                    </SearchFieldInputBox>
                </SearchFieldContainer>
            </Container>
        </SearchFieldSection>

    );
}
