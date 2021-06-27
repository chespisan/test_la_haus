import React, { useState } from 'react'
import Logo from '../../assets/logo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true)

  const handleShowMenu = () => setShowMenu(!showMenu)

  return (
    <nav className="header">
      <div className="content-menu">
        <button onClick={handleShowMenu} className="button-menu">
          <div className="circle-div-menu"></div>
          <svg
            className="icon-menu"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="content-logo">
        <img className="logo" src={Logo} alt="" width="100" height="100" />
      </div>

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto ${
          showMenu ? 'hidden' : ''
        }`}
      >
        <div className="content-menu-items">
          <a className="items">Cundinamarca</a>
          <a className="items">Antioquia</a>
          <a className="items">Recursos</a>
          <a className="items">Mi Perfil</a>

          <div className="content-menu-item-icon">
            <div className="circle-div-item"></div>
            <i className="ml-2  fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
