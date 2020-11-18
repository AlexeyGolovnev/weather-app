import React, { useState } from 'react'
import { 
    CarouselContainer, 
    CarouselFrame, 
    CarouselButtonPrev,
    CarouselButtonNext,
    CarouselFramesContainer
} 
from './Carousel.elements';

export default function Carousel({ data }) {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [x, setX] = useState(0);
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
    const goPrev = () => {
        (x === 0 ? setX(-150 * (data.length - showFramesCount)) : setX(x + showFramesCount * 150)); 
    }
    const goNext = () => {
        (x === -150 * (data.length - showFramesCount) ? setX(0) : setX(x - showFramesCount * 150)); 
    }
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }
    const handleTouchEnd = (e) => {
        if (touchStart - touchEnd > 75) {
            goNext();
        }
        if (touchStart - touchEnd < -75) {
            goPrev();
        }
    }
    return (
        <CarouselContainer 
            showFramesCount = {showFramesCount}  
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <CarouselButtonPrev onClick = {() => goPrev()} />
            <CarouselFramesContainer x = {x}>
                {data && data.map((item, index) => <CarouselFrame key = {index}  
               
                >{item}</CarouselFrame>)}
            </CarouselFramesContainer>
            <CarouselButtonNext onClick = {goNext} />
        </CarouselContainer>
        )
}
