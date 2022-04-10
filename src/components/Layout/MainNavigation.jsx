import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import style from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'

const MainNavigation = () => {

  const favoriteCtx = useContext(FavoritesContext)

  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              My Favorites
              <span className={style.badge}>{favoriteCtx.totalFavorites}</span>
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
