import React from 'react'
import { Container } from '../../globalStyles'
import { SearchFieldContainer, SearchFieldInput, SearchFieldIcon, SearchFieldInputBox } from './SearchField.elements';
export default function SearchField() {
    return (
        <Container>
            <SearchFieldContainer>
                <SearchFieldInputBox>
                    <SearchFieldInput placeholder = 'City'/>
                    <SearchFieldIcon/>
                </SearchFieldInputBox>
            </SearchFieldContainer>
        </Container>
    )
}
