import React from 'react'
import { MainTabContainer, MainTabTitle } from './Main.elements';
export default function MainTab({ id, setCurrentTab, title, isCurrentTab }) {
    return (
        <MainTabContainer onClick = {() => setCurrentTab(id)} isActive = {isCurrentTab} >
            <MainTabTitle>{title}</MainTabTitle>
        </MainTabContainer>
    )
}
