import { movieProps } from '../../type'

type RowPosterProps = {
  isLargeRow?: boolean
  movie: movieProps
  handleClick: (movie: movieProps) => void
}

const base_url = 'https://image.tmdb.org/t/p/original'

export const RowPoster = ({
  isLargeRow,
  movie,
  handleClick,
}: RowPosterProps) => {
  return (
    <img
      className={`Row-poster ${isLargeRow && 'Row-poster-large'}`}
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
      alt={movie.name}
      onClick={() => handleClick(movie)}
    />
  )
}
