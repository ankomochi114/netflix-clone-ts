import { useState, useEffect } from 'react'
import axios from '../axios'
import { movieProps } from '../type'

export const useMovies = (fetchUrl: string) => {
  const [movies, setMovies] = useState<movieProps[]>([])
  const [movie, setMovie] = useState<movieProps>({})

  useEffect(() => {
    ;(async () => {
      const request = await axios.get(fetchUrl)
      const results = request.data.results
      setMovies(results)
      setMovie(results[Math.floor(Math.random() * results.length - 1)])
    })()
  }, [fetchUrl])

  return { movies, movie, setMovies }
}
