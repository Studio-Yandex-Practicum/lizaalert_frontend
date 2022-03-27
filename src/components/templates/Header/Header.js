import PropTypes from 'prop-types'
import style from './Header.module.scss'

const Header = ({ text }) => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
      <div className={style.header__text}>Учебная платформа</div>
      <div>HeaderLink</div>
      </div>

    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header
