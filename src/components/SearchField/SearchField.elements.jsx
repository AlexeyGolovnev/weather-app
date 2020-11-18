import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'

export const SearchFieldSection = styled.section`
`;
export const SearchFieldContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2rem 0;
    width:100%;
    z-index:1000;
`
export const SearchFieldInputBox = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width:700px;
    min-width:300px;
`
export const SearchFieldInput = styled.input`   
    display:flex;
    min-width:100%;
    height:50px;
    border-radius:25px;
    border:none;
    outline:none;
    padding:0 1.5rem;
    color:#000;
    font-family:'Roboto', sans-serif;
    font-size:1.2rem;
    font-weight:400;
    letter-spacing:1px;
    box-shadow: 0 0 15px 1px #8a8a8a;
    
    &::placeholder {
        color: #8a8a8a;
    }
`;
export const SearchFieldIcon = styled(FiSearch)`
    stroke:#000;
    font-size:1.2rem;
`
export const SearchButton = styled.button`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    border:none;
    outline:none;
    width:50px;
    background-color:transparent;
    border-left:1px solid #e4e4e4;
    cursor:pointer;
    &:hover{
        background-color:#ffffff;
    }
`
export const SearchFieldAutoCompleteContainer = styled.div`
    position:absolute;
    display:flex;
    top:102%;
    width:95%;
    max-height:160px;
    overflow:auto;
    background:#fff;
`;
export const SearchFieldAutoCompleteList = styled.ul`
    width:100%;
`; 
export const SearchFieldAutoCompleteListItem = styled.li`
    display:block;
    width:100%;
    padding:10px;
    color:#000;
    font-weight:400;
    border-bottom:1px solid #ccc;
    cursor:pointer;
    &:hover{
        background-color:#dadada;
    }
`;
