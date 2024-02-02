import { useState } from 'react'
import './Nav.css'
import { MdHome, MdContactSupport, MdInfo } from "react-icons/md";

export function Nav() {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <header>
      <span>Petit</span>
      <label id='menu-label' htmlFor="menu-toggle" onClick={toggleMenu}>Menú &#9776;</label>
      <input type="checkbox" id="menu-toggle" />
      <nav className={menuVisible ? 'show' : 'hide'}>
        <ul>
          <li><a className='nav-link' href="#" onClick={hideMenu}>Inicio <MdHome /></a></li>
          <li><a className='nav-link' href="#about-area" onClick={hideMenu}>Acerca de <MdInfo /> </a></li>
          <li><a className='nav-link' href="#contact-area" onClick={hideMenu}> Contacto <MdContactSupport /></a></li>
        </ul>
      </nav>
    </header>
  )
}