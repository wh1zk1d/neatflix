import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Poster = styled.img`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`

const Title = styled.h3`
  margin: var(--base-padding) 0;
`

const Runtime = styled.span`
  font-size: 1.4rem;
`

const Movie = ({ title }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${title}`)
      .then((res) => res.json())
      .then((res) => {
        const { Title, Year, Runtime, Poster } = res
        setMovie((state) => ({
          title: Title,
          year: Year,
          runtime: Runtime,
          poster: Poster,
        }))
      })
      .catch((err) => console.error('Could not get movie'))
  }, [title])

  return (
    <div>
      <Poster src={movie.poster} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Runtime>
        {movie.year} | {movie.runtime}
      </Runtime>
    </div>
  )
}

export default Movie
