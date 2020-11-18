import React from 'react'
import { 
    SearchFieldAutoCompleteListItem,
    SearchFieldAutoCompleteContainer,
    SearchFieldAutoCompleteList
} from './SearchField.elements';

export default React.memo(function SearchFieldAutoComplete({ getWeather, setCity, data, inputRef, autoCompleteRef }) {
    const selectCity = (item) => {
        setCity(item.split(',')[0])
        inputRef.current.focus();
        getWeather(item);
    }
    const items = data.map((item, index) => {
        return (
            <SearchFieldAutoCompleteListItem key={index} onClick={() => selectCity(item)}>
                {item}
            </SearchFieldAutoCompleteListItem>
        );
    });

    return (
        <SearchFieldAutoCompleteContainer  ref = {autoCompleteRef}>
            <SearchFieldAutoCompleteList>{items}</SearchFieldAutoCompleteList>
        </SearchFieldAutoCompleteContainer>
    );
})

