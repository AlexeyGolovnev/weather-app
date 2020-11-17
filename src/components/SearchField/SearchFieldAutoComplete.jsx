import React from 'react'
import { 
    SearchFieldAutoCompleteListItem,
    SearchFieldAutoCompleteContainer,
    SearchFieldAutoCompleteList
} from './SearchField.elements';

export default React.memo(function SearchFieldAutoComplete({ setCity, data, isAutoCompleteOpen, inputRef }) {
    const selectCity = (item) => {
        setCity(item);
        inputRef.current.focus();
    }
    const items = data.map((item, index) => {
            return (
                <SearchFieldAutoCompleteListItem key={index} onClick={() => selectCity(item)}>
                    {item}
                </SearchFieldAutoCompleteListItem>
            );
    });

    return (
        <SearchFieldAutoCompleteContainer isAutoCompleteOpen = {isAutoCompleteOpen}>
            <SearchFieldAutoCompleteList>{items}</SearchFieldAutoCompleteList>
        </SearchFieldAutoCompleteContainer>
    );
})

