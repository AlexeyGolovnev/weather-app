import React from 'react'
import { SubTitle, Text } from '../../globalStyles'
import { MainAdditionalDataItemContainer, MainAdditionalDataItemIconBox } from './Main.elements';
export default function MainAdditionalDataItem({icon, title, text}) {
    return (
        <MainAdditionalDataItemContainer>
            <MainAdditionalDataItemIconBox>{icon}</MainAdditionalDataItemIconBox>
            <SubTitle bold>{title}</SubTitle>
            <Text>{text}</Text>
        </MainAdditionalDataItemContainer>
    )
}
