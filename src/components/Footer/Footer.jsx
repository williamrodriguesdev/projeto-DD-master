import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
    <>
        <footer className="footer">
            <div className="sessao-de-links">
            <ul className="mapa-navegacao">
                <h4 className="titulo-footer">Navegação do Site</h4>
                <li> <Link to="/Introducao" href="">Introdução</Link></li>
                <li> <Link to="/Personagens"  href="">Personagens</Link></li>
                <li> <Link to="/Regras"  href="">Regras</Link></li>
                <li> <Link to="/MestreDeJogo" href="">Mestre de Jogo(DM)</Link></li>
            </ul>

            <ul className="links-uteis">
                <h4 className="titulo-footer">Links Úteis</h4>
                <li><a href="https://www.reddit.com/r/rpgbrasil/" target="_blanck">Reddit: Rpg Brasil</a></li>
                <li><a href="https://tocadocoruja.com/" target="_blanck">Site: Toca da Coruja</a></li>
                <li><a href="https://discord.com/invite/guilda-renegados" target="_blanck">Discord: Guilda Renegados</a></li>

            </ul>

            </div>

            <span className="frase-footer">"Toda aventura começa com um passo."</span>
            <span className="criado-por">Criado por William Rodrigues&reg;</span>
        </footer>


    </>

    )
}

export default Footer