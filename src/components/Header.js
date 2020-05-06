import React from 'react'
import styled, { keyframes } from 'styled-components'
import MovieOfTheDay from './MovieOfTheDay'
import Menu from './Menu'
import Container from './styles/Container'

import heroBg from '../images/hero_poster.jpg'

import { fadeIn } from 'react-animations'
const fadeAnimation = keyframes`${fadeIn}`

const HeaderStyles = styled.div`
  background: url(${heroBg}) no-repeat center center / cover;
  height: 42em;
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
  // Same as header padding, but negative
  transform: translateY(calc((var(--base-padding) * 4) * -1));

  animation: 0.8s ${fadeAnimation};
  animation-delay: 0.4s;
  animation-fill-mode: both;
`

const Hero = ({ movie }) => (
  <HeaderStyles>
    <HeroStyles>
      <Menu />
      <MOTDStyles>
        <MovieOfTheDay title={movie} />
      </MOTDStyles>
    </HeroStyles>
  </HeaderStyles>
)

const Header = ({ hero, movie }) => {
  if (hero) {
    return <Hero movie={movie} />
  } else {
    return (
      <Container>
        <Menu />
      </Container>
    )
  }
}

export default Header
