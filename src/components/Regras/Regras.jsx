import React from "react";
import './Regras.css'

const Regras = () => {
    return(
        <>
        <div className="container-regras">
            <h1>Regras Básicas</h1>
            <p>Aqui está um guia rápido com as regras essenciais para começar uma primeira aventura em Dungeons & Dragons 5ª Edição de forma descomplicada. Este resumo foca no básico para que os jogadores e o Mestre possam mergulhar no jogo sem precisar memorizar todas as regras.</p>
            <div className="guia-rapido">
                <ul>
                    <h2>1. Montando uma Aventura: Papel do Mestre</h2>
                    <li>O Mestre é o narrador e controla o mundo do jogo, descrevendo cenários, personagens e eventos.</li>
                    <li>Para a primeira aventura, pense em uma trama simples: talvez os personagens precisem resgatar alguém ou encontrar um item em uma masmorra.</li>
                    <li>O Mestre toma decisões sobre o que os personagens encontram e o que acontece em resposta às ações dos jogadores.</li>
                </ul>
                <ul>
                    <h2>2. Criação de Personagem Simplificada</h2>
                    <p>Cada jogador precisa de uma ficha de personagem com estas informações principais:

                    </p>
                    <li>Raça e Classe: Escolha uma raça e uma classe (ex.: humano guerreiro, elfo mago).</li>
                    <li>Atributos: Existem seis atributos (Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma). Esses valores ajudam a definir o quão bom o personagem é em certas ações.</li>
                    <li>Pontos de Vida (PV): Começam com um valor fixo baseado na classe e aumentam com o nível.</li>
                    <li>Equipamento e Magias: Escolha algumas armas, armaduras e, se forem conjuradores (ex.: mago ou clérigo), algumas magias simples.</li>
                </ul>
                <ul>
                    <h2>3. Teste de Habilidade com o D20</h2>
                    <li>Quando os personagens tentam algo difícil, o Mestre define uma Classe de Dificuldade (CD), normalmente de 10 a 15 para tarefas comuns.</li>
                    <li>O jogador rola um dado de 20 lados (d20) e soma o bônus de atributo relevante. Se o resultado for igual ou maior que a CD, o personagem é bem-sucedido.</li>
                    <p>Exemplos: Força para escalar, Destreza para se esconder, Inteligência para decifrar algo.</p>
                </ul>
                <ul>
                    <h2>4. Combate Básico</h2>
                    <li>Iniciativa: No começo do combate, todos rolam um d20 e agem em ordem, do maior para o menor resultado.</li>
                    <li>Turnos: Em seu turno, um personagem pode mover-se e fazer uma ação (atacar, lançar magia, etc.).</li>
                    <li>Ataques: Para atacar, o jogador rola um d20 e soma o bônus de ataque. Se o total igualar ou superar a Classe de Armadura (CA) do alvo, ele acerta e rola o dano.</li>
                    <li>Dano e Pontos de Vida: O dano é subtraído dos Pontos de Vida do alvo. Quando os PV chegam a 0, o personagem cai inconsciente.</li>
                </ul>
                <ul>
                    <h2>5. Magias Simplificadas</h2>
                    <li>Conjuradores como magos ou clérigos têm um número limitado de magias por dia. Comece com magias simples que causem dano ou ajudem os aliados.</li>
                    <li>A maioria das magias requer uma rolagem de ataque ou faz o alvo fazer uma rolagem de resistência (rolar um d20 para evitar o efeito).</li>
                </ul>
                <ul>
                    <h2>6. Exploração e Interpretação
                    </h2>
                    <li>Fora do combate, encoraje os jogadores a explorar, conversar com NPCs e interagir com o mundo.</li>
                    O Mestre pode pedir testes para ações incertas, como investigar uma área ou convencer um NPC.
                </ul>
                <ul>
                    <h2>7. Descansos e Recuperação</h2>
                    <li>Um descanso curto (cerca de uma hora) permite recuperar um pouco de PV.</li>
                    <li>Um descanso longo (geralmente 8 horas) restaura totalmente os PV e permite que conjuradores recuperem suas magias.</li>
                </ul>

            </div>
            <div className="guia-completo">
                <h2>Guia Completo</h2>
                <p>Segue abaixo o link disponibiizando o Livro do Jogador onde discorre com detalhes cada aspecto de D&D 5ª edição. </p>
                <a href="https://ordempendragon.wordpress.com/wp-content/uploads/2017/04/dd-5e-livro-do-jogador-fundo-branco-biblioteca-c3a9lfica.pdf" target="_blanck">Livro do Jogador</a>
            </div>

        </div>
        
        </>
    )
}

export default Regras