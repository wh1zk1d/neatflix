import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import allMovies from '../movies.json'
import Movie from './Movie'

import { fadeIn } from 'react-animations'
const fadeAnimation = keyframes`${fadeIn}`

const MovieListStyles = styled.div`
  animation: 0.8s ${fadeAnimation};
  animation-delay: 0.8s;
  animation-fill-mode: both;
`

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 4rem;
`

const MovieList = () => {
  const [movies, setMovies] = useState(allMovies)

  return (
    <MovieListStyles>
      <h2 style={{ marginBottom: '4rem' }}>All your favorite movies in one place</h2>
      <MovieGrid>
        {movies.map((movie) => (
          <Movie key={movie.id} title={movie.title} />
        ))}
      </MovieGrid>
    </MovieListStyles>
  )
}

export default MovieList
