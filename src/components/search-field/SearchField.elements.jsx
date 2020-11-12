import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'

export const SearchFieldContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2.5rem 0;
`;

export const SearchFieldInputBox = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:100%;
    min-width:50%;
`

export const SearchFieldInput = styled.input`   
    display:flex;
    min-width:100%;
    height:50px;
    border-radius:25px;
    border:none;
    outline:none;
    padding:0 2.2rem;
    color:#8a8a8a;
    font-family:'Roboto', sans-serif;
    font-size:1.2rem;
    font-weight:400;
    letter-spacing:1px;
    box-shadow: 0 0 15px 1px #8a8a8a;
`;

export const SearchFieldIcon = styled(FiSearch)`
    /* position:absolute;
    color:#8a8a8a;
    z-index:100;
    top:16px;
    left:15px; */

`