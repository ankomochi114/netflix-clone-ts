import './Banner.scss'
import { useMovies } from '../../hooks/useMovies'
import { BannerTitle } from '..//atomos/BannerTitle'
import { BannerButton } from '..//atomos/BannerButton'
import { BannerButtons } from '..//molecules/BannerButtons'
import { BannerDescription } from '../atomos/BannerDescription'

type BannerProp = {
  fetchUrl: string
}

export const Banner = ({ fetchUrl }: BannerProp) => {
  const { movie } = useMovies(fetchUrl)

  // descriptionの切り捨てよう関数
  const truncate = (str: any, n: number) => {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="Banner-contents">
        <BannerTitle
          title={movie?.title}
          name={movie?.name}
          orignalName={movie?.orignal_name}
        />
        <BannerButtons>
          <BannerButton text="Play" />
          <BannerButton text="My List" />
        </BannerButtons>

        <BannerDescription text={truncate(movie?.overview, 150)} />
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  )
}
