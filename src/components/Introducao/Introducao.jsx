import React from "react";
import './Introducao.css';
import Acordeon from "./acordeon/Acordeon";

const Introducao = () => {
    return(
        <>
           <div className="container-introducao">
                <div className="conteudo-texto">
                    <h1 className="titulo-conteudo-texto">O que é D&D?</h1>
                    <img src="https://i.pinimg.com/736x/24/40/36/244036eb26dc6705fc12dc214fe231b8.jpg" alt="Imagem de um grupo de aventureiros" />
                    <p><span className="destaque">Dungeons & Dragons (D&D)</span> é um jogo de RPG (role-playing game) focado em contar histórias e viver aventuras em um mundo fantástico. Nele, os jogadores assumem o papel de heróis ou aventureiros e, juntos, exploram reinos mágicos, enfrentam monstros e resolvem mistérios. O diferencial de D&D está na liberdade criativa: não há limites para onde a história pode ir, e cada jogo pode ser completamente único, dependendo das decisões dos jogadores.</p>

                    <p>Ao invés de competir, os jogadores trabalham em equipe para superar desafios, interagindo tanto entre si quanto com o mundo ao redor, em um ambiente de narrativa colaborativa. As aventuras podem se passar em cidades lendárias, florestas misteriosas, masmorras perigosas ou em qualquer cenário que a imaginação permita.</p>

                    <p>O jogo é baseado em rolagens de dados que ajudam a determinar o resultado de ações importantes, como lutas, exploração e interação com outros personagens do mundo. Isso cria um equilíbrio entre estratégia, sorte e criatividade, tornando cada partida cheia de surpresas.D&D é uma experiência rica para quem gosta de histórias envolventes, estratégia e a liberdade de criar e participar de universos fantásticos. É uma forma divertida de se conectar com outras pessoas e embarcar em jornadas épicas cheias de descobertas e emoção. </p>
                  

                </div>
                <Acordeon />
            
        </div>


        
</>
    )
}

export default Introducao