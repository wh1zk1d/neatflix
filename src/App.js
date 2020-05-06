import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import MovieList from './components/MovieList'

import GlobalStyles from './components/styles/GlobalStyles'
import Container from './components/styles/Container'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`

const Content = styled.div`
  padding: calc(var(--base-padding) * 10) 0;
`

const App = () => (
  <div className='app'>
    <GlobalStyles />
    <LayoutContainer>
      <Header hero />
      <Content>
        <Container>
          <MovieList />
        </Container>
      </Content>
    </LayoutContainer>
  </div>
)

export default App
