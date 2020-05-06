import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './styles/Button'
import { MdPlayCircleOutline } from 'react-icons/md'

const Subtitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Movie = styled.h2`
  font-size: 6rem;
  margin: var(--padding-x) 0;
`

const Plot = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  max-width: 35em;
`

const Details = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const Awards = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
`

const MovieOfTheDay = ({ title }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${title}`)
      .then((res) => res.json())
      .then((res) => {
        const { Title, Year, Runtime, Director, Plot, Poster, imdbRating, Awards } = res
        setMovie((state) => ({
          title: Title,
          year: Year,
          runtime: Runtime,
          director: Director,
          plot: Plot,
          rating: imdbRating,
          poster: Poster,
          awards: Awards,
        }))
      })
      .catch((err) => console.error('Could not get movie'))
  }, [title])

  return (
    <div>
      <Subtitle>#Movieoftheday</Subtitle>
      <Movie>{movie.title}</Movie>
      <Details>
        {movie.director} | {movie.year} | {movie.runtime} | IMDB: {movie.rating}
      </Details>
      <Awards>{movie.awards}</Awards>
      <Plot>{movie.plot}</Plot>
      <Button
        href='https://www.youtube.com/watch?v=x2qRDMHbXaM'
        target='_blank'
        rel='noopener noreferrer'>
        Watch now <MdPlayCircleOutline />
      </Button>
    </div>
  )
}

export default MovieOfTheDay
