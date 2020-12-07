import React from "react"
import { Link } from "gatsby"
import style from './header.module.css'

const active = {
  background: "#D14444",
  color: "white"
}

const Header = () => (
  <header>
    <nav>
      <Link to='/'>
        <div className={style.Logo}></div>
      </Link>
      <div className=''>
        <ul>
          <li>
            <Link to='/projects' activeStyle={active}>PROJECTS</Link>
          </li>
          <li>
            <Link to='/'><i>SAY HI!</i></Link>
          </li>
        </ul>
      </div>
      <div className={style.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  </header>
)

export default Header
