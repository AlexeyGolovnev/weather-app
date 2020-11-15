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
    let showFramesCount = 0;
    if(windowWidth > 1300) {
        showFramesCount = 8;
    } else if(windowWidth < 1300 && windowWidth > 960) {
        showFramesCount = 6;
    } else if(windowWidth < 960 && windowWidth > 600) {
        showFramesCount = 4;
    } else {
        showFramesCount = 2;
    }
    const [x, setX] = useState(0);
    const goPrev = () => {
        (x === 0 ? setX(-150 * (data.length - showFramesCount)) : setX(x + showFramesCount * 150)); 
    }
    const goNext = () => {
        (x === -150 * (data.length - showFramesCount) ? setX(0) : setX(x - showFramesCount * 150)); 
    }

    return (
        <CarouselContainer showFramesCount = {showFramesCount}>
            <CarouselButtonPrev onClick = {() => goPrev()} />
            <CarouselFramesContainer x = {x}>
                { data && data.map((item, index) => {
                    return <CarouselFrame key = {index}> {item} </CarouselFrame>
                })}
            </CarouselFramesContainer>
            <CarouselButtonNext onClick = {goNext} />
        </CarouselContainer>
        )
}
