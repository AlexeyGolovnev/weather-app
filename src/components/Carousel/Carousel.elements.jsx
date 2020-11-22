import styled, { css } from 'styled-components';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export const CarouselContainer = styled.div`
    position:relative;
    display:flex;
    width:${({ showFramesCount }) => showFramesCount * 150 + 'px'};
    //background: rgba(201,185,221,0.4);
    background-color: rgba(50,50,50,0.5);
    overflow:hidden;
    border-radius:10px;
`;
const CarouselButtonStyle = css`
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(255,255,255, 0);
    height:100%;
    top:50%;
    transform:translateY(-50%);
    font-size:1.5rem;
    z-index:42; 
    cursor:pointer;
    &:hover {
        background-color:rgba(255,255,255, 0.2);
    }

`
export const CarouselButtonPrev = styled(MdNavigateBefore)`
    ${CarouselButtonStyle};
    left:0;
    fill: #fff;
`;
export const CarouselButtonNext = styled(MdNavigateNext)`
    ${CarouselButtonStyle};
    right:0;
`;
export const CarouselFrame = styled.div`

`
export const CarouselFramesContainer = styled.div`
    display:flex;
    transform: translateX(${({ x }) => x + 'px'});
    transition:transform 0.5s linear;
`



