import './Nav.scss'
import { useShow } from '../../hooks/useShow'
import { Avater } from '../atomos/avater'
import { Logo } from '../atomos/Logo'

type Props = {
  className?: string
}

export const Nav = (props: Props) => {
  const show = useShow()

  return (
    <nav className={`Nav ${show && 'Nav-black'}`}>
      <Logo className="Nav-logo" />
      <Avater className="Nav-avater" />
    </nav>
  )
}
