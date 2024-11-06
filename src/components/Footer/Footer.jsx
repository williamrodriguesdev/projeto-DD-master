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
            <ul>
                <h4 className="titulo-footer">Canais Recomendados</h4>
                <li><a href="https://www.youtube.com/@JovemNerd/featured" target="_blanck">Nerdcast RPG </a></li>
                <li><a href="https://www.youtube.com/@GameChinchila" target="_blanck">Game Chinchila</a></li>
                <li><a href="https://www.youtube.com/@XPtoLevel3" target="_blanck">XP to Level 3</a></li>
            </ul>
            <ul>
                <h4 className="titulo-footer">Ferramentas úteis</h4>
                <li><a href="https://www.dungeonscrawl.com/" target="_blanck">Criador de Mapa: Dungeon Scrawl
                </a></li>
                <li><a href="https://www.wonderdraft.net/" target="_blanck">Criador de Mapa: Wonderdraft</a></li>
                <li><a href="https://inkarnate.com/" target="_blanck">Criador de Mapa: Inkarnate</a></li>
            </ul>

            </div>

            <span className="frase-footer">"Toda grande jornada começa com um passo."</span>
            <span className="criado-por">Criado por William Rodrigues&reg;</span>
        </footer>


    </>

    )
}

export default Footer