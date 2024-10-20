import React from "react";
import './Personagens.css'

const Personagens = () => {
    return (
        <>

  <div className="container-personagem">   
            <h1 className="titulo-personagem">Como criar seu primeiro personagem</h1>
            
            <p>A criação do seu primeiro personagem é o primeiro passo nessa jornada épica. Aqui, você terá a oportunidade de dar vida a um herói, explorador ou até mesmo um anti-herói em um universo repleto de mistérios, aventuras e desafios.</p>
         
            <h2>Raças Básicas</h2>
            <p>Na 5ª edição de Dungeons & Dragons (D&D), há uma ampla variedade de raças jogáveis, cada uma com características únicas. Aqui estão as principais raças disponíveis no Livro do Jogador</p>

            <div className="cards-container">
              <div className="card-flip">
                <div className="card-front humano">
                  <h2>Humano</h2>
                </div>
               <div className="card-back cidade-humana">
               <span>Características:</span>
                  <p>Extremamente versáteis, com bônus equilibrados em todas as habilidades.
                  </p>
                <span>Destaque:</span>
                <p>Ideais para qualquer classe, são ótimos para jogadores que preferem flexibilidade e adaptação.</p>
              </div>
            </div>

            <div className="card-flip">
              <div className="card-front elfo">
                <h2>Elfo</h2>
              </div>
              <div className="card-back cidade-elfica">
                <span>Características:</span>
                <p>Ágeis, inteligentes e perceptivos. Vivem muito e têm uma forte conexão com a natureza e magia.
                </p>
                <span>Destaque:</span>
                <p>Excelentes para arqueiros e magos.</p>
              </div>
            </div>

            <div className="card-flip">
              <div className="card-front anao">
                <h2>Anão</h2>
              </div>
              <div className="card-back cidade-ana">
                <span>Características:</span>
                <p>Fortes e resistentes, com uma ligação profunda às montanhas e à terra.</p>
                <span>Destaque:</span>
                <p>Ótimos para guerreiros e clérigos, com alta durabilidade em combate.</p>
             </div>
            </div>
            <div className="card-flip">
              <div className="card-front halfling">
                <h2>Halfling</h2>
              </div>
              <div className="card-back cidade-halfling">
              <span>Características:</span>
                <p>Pequenos, furtivos e sortudos, conhecidos por sua resiliência e ousadia.</p>
                <span>Destque:</span>
                <p>Ideais para ladinos e personagens focados em furtividade.</p>
              
             </div>
            </div>
            <div className="card-flip">
              <div className="card-front gnomo">
                <h2>Gnomo</h2>
              </div>
              <div className="card-back cidade-gnomo">
                <span>Características:</span>
                <p>Inteligentes e curiosos, com uma afinidade por magia e engenhosidade.</p>
                <span>Destaque:</span>
                <p>Excelente para magos e inventores, com grande inteligência.</p>
             </div>
            </div>
            <div className="card-flip">
              <div className="card-front meio-elfo">
                <h2>Meio-Elfo</h2>
              </div>
              <div className="card-back cidade-meio-elfo">
                <span>Características:</span>
                <p> Mistura de humano e elfo, combinando a versatilidade humana com a graça dos elfos.</p>
                <span>Destaque:</span>
                <p>Altamente carismáticos e adaptáveis, perfeitos para bardos, feiticeiros ou personagens sociais.</p>
             </div>
            </div>
            <div className="card-flip">
              <div className="card-front meio-orc">
                <h2>Meio-Orc</h2>
              </div>
              <div className="card-back cidade-meio-orc">
                <span>Características:</span>
                <p>Fortes e ferozes, com uma natureza agressiva herdada de seus ancestrais orcs.</p>
                <span>Destaque:</span>
                <p> Ótimos para guerreiros e bárbaros, com bônus de força e habilidades de combate que os tornam sobreviventes natos.</p>
             </div>
            </div>
            <div className="card-flip">
              <div className="card-front draconato">
                <h2>Draconato</h2>
              </div>
              <div className="card-back cidade-draconato">
                <span>Características:</span>
                <p>Descendentes de dragões, com aparência imponente e a habilidade de soprar energia elemental (fogo, gelo, ácido, etc.).</p>
                <span>Destaque:</span>
                <p>Forte e carismático, ideal para guerreiros ou paladinos.</p>
             </div>
            </div>
            <div className="card-flip">
              <div className="card-front tiefling">
                <h2>Tiefling</h2>
              </div>
              <div className="card-back cidade-tiefling">
                <span>Características:</span>
                <p> Descendentes de pactos demoníacos, com uma aparência infernal e habilidades mágicas.</p>
                <span>Destaque:</span>
                <p> Resistência ao fogo e afinidade mágica, ótimos para feiticeiros, bruxos ou magos.</p>
             </div>
            </div>
         
</div>
           

        </div>
      
        <div className="container-classe">
            <div className="resumo-classe">
              <h1 className="titulo-container-classe">Classes</h1>
              <p>Aqui estão as classes básicas de Dungeons & Dragons 5ª Edição, disponíveis no Livro do Jogador. Cada uma define o papel do seu personagem em combate e na história, com habilidades únicas que afetam a forma como ele interage com o mundo.
              </p>
            </div>

          
              <div className="card-classe">
                  <div className="imagem-classe barbaro">
                    
                  </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Bárbaro</h1>
                    <h4>Características:</h4>
                    <p>Guerreiro feroz que canaliza a raiva para aumentar sua força e resistência.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Possui alta resistência a dano e capacidade de causar grandes estragos em combate corpo a corpo com a habilidade de Fúria.</p>
                    <h4>Papéis:</h4>
                    <p>Tanque, lutador corpo a corpo.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe bardo">
                   
                  </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Bardo</h1>
                    <h4>Características:</h4>
                    <p>Mestre da música e da magia, capaz de inspirar aliados e confundir inimigos.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Versátil em combate e magia, podendo curar, lançar feitiços e lutar, além de ter habilidades sociais fortes.</p>
                    <h4>Papéis:</h4>
                    <p>Suporte, controlador, diplomata.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe clerigo">
                   
                  </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Clérigo</h1>
                    <h4>Características:</h4>
                    <p>Devoto de uma divindade, capaz de curar aliados e castigar inimigos com magia divina.                    </p>
                    <h4>Destaque:</h4>
                    <p>Especialista em cura e proteção, com magias poderosas que variam de acordo com seu Domínio Divino.</p>
                    <h4>Papéis:</h4>
                    <p>Curador, suporte, ofensivo mágico.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe druida">
                   
                  </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Druida</h1>
                    <h4>Características:</h4>
                    <p>Guardião da natureza, com o poder de se transformar em animais e conjurar magias ligadas à terra e aos elementos.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Capaz de usar magia poderosa e assumir formas animais para explorar ou lutar. Extremamente versátil.</p>
                    <h4>Papéis:</h4>
                    <p>Suporte, controlador, tanque, curador.</p>
                    
                  </div>
              </div>
             <div className="card-classe">
                  <div className="imagem-classe guerreiro"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Guerreiro</h1>
                    <h4>Características:</h4>
                    <p>Combatente experiente, mestre em armas e táticas de .
                    </p>
                    <h4>Destaque:</h4>
                    <p>Possui grande flexibilidade em combate, podendo ser um atacante devastador ou um defensor robusto, com a habilidade de Ataque Extra.</p>
                    <h4>Papéis:</h4>
                    <p>Lutador corpo a corpo, arqueiro, tanque.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe ladino"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Ladino</h1>
                    <h4>Características:</h4>
                    <p>Especialista em furtividade, habilidades manuais e ataques precisos.
                    </p>
                    <h4>Destaque:</h4>
                    <p> Inflige alto dano em ataques surpresa com o Ataque Furtivo e é excelente em habilidades sociais e furtivas.</p>
                    <h4>Papéis:</h4>
                    <p>Infiltrador, causador de dano (DPS), explorador.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe mago"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Mago</h1>
                    <h4>Características:</h4>
                    <p>Mestre arcano, com um vasto conhecimento de feitiços que pode controlar todos os aspectos do jogo.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Capaz de lançar uma enorme variedade de magias poderosas, mas é fisicamente frágil.</p>
                    <h4>Papéis:</h4>
                    <p>Conjurador, controlador, ofensivo mágico.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe monge"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Monge</h1>
                    <h4>Características:</h4>
                    <p> Lutador ágil e disciplinado, com foco em artes marciais e controle do corpo e da mente.
                    </p>
                    <h4>Destaque:</h4>
                    <p> Usa ataques rápidos e manobras acrobáticas, podendo desferir vários golpes em um turno com o Ki.</p>
                    <h4>Papéis:</h4>
                    <p> Lutador corpo a corpo, controlador.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe paladino"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Paladino</h1>
                    <h4>Características:</h4>
                    <p> Guerreiro sagrado, defensor da justiça, com a habilidade de conjurar magia divina e lutar corpo a corpo.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Possui habilidades de cura e pode infligir danos radiantes a inimigos malignos, sendo um excelente tanque ou líder de grupo.
                    </p>
                    <h4>Papéis:</h4>
                    <p> Tanque, curador, causador de dano.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe patrulheiro"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Patrulheiro</h1>
                    <h4>Características:</h4>
                    <p>Explorador habilidoso e combatente em terrenos selvagens, com afinidade por combate à distância e companheiros animais.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Excelente em explorar e emboscar inimigos, além de ter habilidades mágicas e uso de armas à distância.</p>
                    <h4>Papéis:</h4>
                    <p>Caçador, explorador, causador de dano à distância.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe feiticeiro"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Feiticeiro</h1>
                    <h4>Características:</h4>
                    <p>Conjurador de magia inata, com poder vindo de sua linhagem ou de um evento místico
                    </p>
                    <h4>Destaque:</h4>
                    <p> Diferente dos magos, os feiticeiros podem manipular sua magia através da Metamagia, ajustando feitiços à necessidade do momento.</p>
                    <h4>Papéis:</h4>
                    <p>Conjurador, ofensivo mágico.</p>
                    
                  </div>
              </div>
              <div className="card-classe">
                  <div className="imagem-classe bruxo"> </div>
                  <div className="info-classe">
                    <h1 className="titulo-classe">Bruxo</h1>
                    <h4>Características:</h4>
                    <p>Conjurador que fez um pacto com uma entidade poderosa, ganhando habilidades mágicas em troca de lealdade.
                    </p>
                    <h4>Destaque:</h4>
                    <p>Conjura magias únicas e possui a habilidade de Invocações que personalizam seus poderes. Usa a habilidade Pacto Mágico para equilibrar poder mágico e combate.</p>
                    <h4>Papéis:</h4>
                    <p>Conjurador, ofensivo mágico, suporte.</p>
                    
                  </div>
              </div>
          </div>
        </>
    )
}

export default Personagens