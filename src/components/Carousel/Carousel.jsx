import React, { useState, useEffect } from 'react'
import { 
    CarouselContainer, 
    CarouselFrame, 
    CarouselButtonPrev,
    CarouselButtonNext,
    CarouselFramesContainer
} 
from './Carousel.elements';

export default function Carousel({ data }) {

    const windowWidth = window.innerWidth;
    let showFramesCount = windowWidth >= 1300  ? 12 : 6;
    if( windowWidth < 600) {
        showFramesCount = 3;
    }
    
    
    const [x, setX] = useState(0);
    const goPrev = () => {
        (x === 0 ? setX(-100 * (data.length - showFramesCount)) : setX(x + showFramesCount * 100)); 
    }
    const goNext = () => {
        (x === -100 * (data.length - showFramesCount) ? setX(0) : setX(x - showFramesCount * 100)); 
    }

    return (
        <CarouselContainer showFramesCount = {showFramesCount}>
            <CarouselButtonPrev onClick = {() => goPrev()} />
            <CarouselFramesContainer x = {x}>
                { data && data.map((item, index) => {
                    return <CarouselFrame key = {index} > {item} </CarouselFrame>
                })}
            </CarouselFramesContainer>
            <CarouselButtonNext onClick = {goNext} />
        </CarouselContainer>
        )
}
