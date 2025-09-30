import axios from "axios"
import { useEffect, useState } from "react"
import './style/Films.css'
import Button from "./Button"

interface Movie {
  id: number
  title: string
  original_title: string
  synopsis: string
  age_rating: string
  duration_minutes: number
  genres: string[]
  production_countries: string[]
}

export default function Films() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFilms()
  }, [])

  async function fetchFilms() {
    try {
      const result = await axios.get('./data/date.json')
      setMovies(result.data.movies)
    }
    catch(err) {
      const errorMessage = err instanceof Error ? err.message : 'Произошла ошибка'
      setError(errorMessage)
    }
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <div className="films-container">
      <h2>Сейчас в кино</h2>
      {movies.length === 0 ? (
        <div>Нет данных о фильмах</div>
      ) : (
        <div className="movies-horizontal-list">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card-horizontal">
              <img 
                src={`/image/${movie.id}.jpg`} 
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-original-title">{movie.original_title}</p>
                <div className="movie-details">
                  <span className="age-rating">{movie.age_rating}</span>
                  <span className="duration">{movie.duration_minutes} мин.</span>
                </div>
                <p className="movie-genres">{movie.genres.join(', ')}</p>
              </div>
              <Button />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}