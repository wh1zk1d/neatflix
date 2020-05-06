import React from 'react'
import styled, { keyframes } from 'styled-components'

import { fadeIn } from 'react-animations'
const fadeAnimation = keyframes`${fadeIn}`

const MenuStyles = styled.header`
  padding: calc(var(--base-padding) * 4) 0;

  animation: 0.8s ${fadeAnimation};
  animation-delay: 0.2s;
  animation-fill-mode: both;
`

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoStyles = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
`

const Logo = () => (
  <LogoStyles>
    Neatflix{' '}
    <span role='img' aria-label='popcorn emoji'>
      🍿
    </span>
  </LogoStyles>
)

const AvailableMovies = () => (
  <span>
    <strong>15</strong> movies available
  </span>
)

const Menu = () => (
  <MenuStyles>
    <MenuItems>
      <Logo />
      <AvailableMovies />
    </MenuItems>
  </MenuStyles>
)

export default Menu
