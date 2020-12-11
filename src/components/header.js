import React, { useState } from "react"
import { Link } from "gatsby"

import style from './header.module.css'

const active = {
  background: "#D14444",
  color: "white"
}

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(activeHamburger)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }

  return (
    <header>
      <nav>
        <Link to='/' className={style.logoContainer}>
          <div className={style.Logo}></div>
          <span>Dev</span>
        </Link>
        <div>
          <ul className={isVisible ? 'hamburgerActive' : 'hamburgerInactive'}>
            <li>
              <Link to='/projects' activeStyle={active}>PROJECTS</Link>
            </li>
            <li>
              <Link to='/'><i>SAY HI!</i></Link>
            </li>
          </ul>
        </div>
        <div className={isVisible ? style.closeHamburger : style.hamburger} onClick={toggleVisible} role='button' tabIndex={0} onKeyPress={toggleVisible}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      {/* display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 90px;
      margin-left: 15px; */}


    </header>
  )
}

export default Header
