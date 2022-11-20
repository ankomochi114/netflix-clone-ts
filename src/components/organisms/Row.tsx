import './Row.scss'
import { RowPosters } from '../molecules/RowPosters'

type Props = {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  return (
    <div className="Row">
      <h2>{title}</h2>
      <RowPosters isLargeRow={isLargeRow} fetchUrl={fetchUrl} />
    </div>
  )
}
