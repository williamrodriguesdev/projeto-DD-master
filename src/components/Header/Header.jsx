import React from "react";
import './Header.css'

const Header = () => {
    return(
        <header className='header'>
        
        <nav className='nav'>
          <h1 className='logo'>D&D</h1>
          <ul className='nav-list'>
            <li className='nav-item' title="Conteudo em construção">Mapas</li>
            <li className='nav-item' title="Conteudo em construção">Ferramentas</li>
          </ul>
        </nav>
        <div className='hero'>
          <h1 className='titulo-hero'>Dungeons& <br />Dragons</h1>
            <a className='btn-hero' href="#main">Começe agora</a>
        
        </div>

      </header>
    )
}

export default Header