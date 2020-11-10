import React from 'react'
import { Container, HeroTitle } from '../../globalStyles'
import { HeaderSection, HeaderContainer } from './Header.elements'

export default function Header() {
    return (
        <HeaderSection>
            <Container>
                <HeaderContainer>
                    <HeroTitle>Weather app</HeroTitle>
                </HeaderContainer>
            </Container>
        </HeaderSection>
    )
}
