import React from 'react'
import styled from 'styled-components'

const MenuStyles = styled.header`
  padding: calc(var(--base-padding) * 4) 0;
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
