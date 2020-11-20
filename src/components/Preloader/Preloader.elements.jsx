import styled, { keyframes } from 'styled-components';

const fly = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(20px);
    }
`;

export const PreloadContainer = styled.div`
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    background-color:#fff;
    z-index:999999;
    transition: opacity 2s ease;
    opacity: ${({finish}) => finish ? '0' : '1'};
    pointer-events: ${({finish}) => finish && 'none'};
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const PreloaderImage = styled.img`
    position:absolute;
    width:150px;
    height:150px;
    animation: ${fly} 1s ease infinite alternate;
    transform-origin:center center;
`;
