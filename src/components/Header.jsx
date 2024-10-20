import React from "react";

const Header = () => {
    return(
        <header className='header'>
        
        <nav className='nav'>
          <h1 className='logo'>D&D</h1>
          <ul className='nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Guia</li>
            <li className='nav-item'>Mapas</li>
            <li className='nav-item'>Ferramentas</li>
          </ul>
        </nav>
        <div className='hero'>
          <h1 className='titulo-hero'>Dungeons& <br />Dragons</h1>
            <a className='btn-hero' href="">Começe agora</a>
        
        </div>

      </header>
    )
}

export default Header