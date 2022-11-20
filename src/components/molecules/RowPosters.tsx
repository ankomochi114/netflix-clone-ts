import { movieProps } from '../../type'
import { RowPoster } from '../atomos/RowPoster'
import { useState } from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { useMovies } from '../../hooks/useMovies'

type RowPosterProps = {
  fetchUrl: string
  isLargeRow?: boolean
}

type Options = {
  height: string
  width: string
  playerVars: {
    autoplay: 0 | 1 | undefined
  }
}

const opts: Options = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

export const RowPosters = ({ fetchUrl, isLargeRow }: RowPosterProps) => {
  const { movies } = useMovies(fetchUrl)
  const [trailerUrl, setTrailerUrl] = useState<string | undefined>(undefined)

  const handleClick = async (movie: movieProps) => {
    setTrailerUrl(undefined)
    try {
      //動画を取得する
      const response = await axios.get(
        `/movie/${movie.id}/videos?api_key=${
          import.meta.env.VITE_NEXT_PUBLIC_TMDB_API_KEY
        }`,
      )
      //動画の配列の0番目のkeyにYouTubeのidが入っているので代入する
      setTrailerUrl(response.data.results[0]?.key ?? null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie) => (
          <RowPoster
            key={movie.id}
            isLargeRow={isLargeRow}
            movie={movie}
            handleClick={handleClick}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  )
}
