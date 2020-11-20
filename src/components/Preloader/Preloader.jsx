import React from 'react'
import { PreloadContainer, PreloaderImage } from './Preloader.elements'
import cloud from './../../assets/preloader.svg';

export default function Preloader({ finish }) {
    return (
        <PreloadContainer finish = {finish}>
            <PreloaderImage src = {cloud} />
        </PreloadContainer>
    )
}
