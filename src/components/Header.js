import React from 'react'
import styled from 'styled-components'
import MovieOfTheDay from './MovieOfTheDay'
import Menu from './Menu'
import Container from './styles/Container'

import heroBg from '../images/hero_poster.jpg'

const HeaderStyles = styled.div`
  background: url(${heroBg}) no-repeat center center / cover;
  height: 40em;
  position: relative;

  &:after {
    content: '';
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 100;
  }
`

const HeroStyles = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`

const MOTDStyles = styled.div`
  display: grid;
  align-items: center;
  transform: translateY(-4rem);
`

const Hero = () => (
  <HeaderStyles>
    <HeroStyles>
      <Menu />
      <MOTDStyles>
        <MovieOfTheDay title='The Incredibles' />
      </MOTDStyles>
    </HeroStyles>
  </HeaderStyles>
)

const Header = ({ hero }) => {
  if (hero) {
    return <Hero />
  } else {
    return (
      <Container>
        <Menu />
      </Container>
    )
  }
}

export default Header
