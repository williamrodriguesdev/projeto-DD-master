

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import OqueEDnD from './components/OqueEDnD';
import Personagens from './components/Personagem/Personagens';
import Regras from './components/Regras';
import Mestre from './components/Mestre';

function App() {

  return (
    <>    
    <Router>
      <Header />
      <main className='main'>
        
          <section className='container'> 
          
            <div className='card'>
            <h4 className='titulo-card'>Introdução</h4>
    
              <div className='container-img'>
              <img src="./src/imagens/WhaIsDD.jpeg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
            
              <p className='info-card'>Descubra o mundo épico de Dungeons & Dragons! </p>
              <Link to="/OqueEDnD" className='btn-card' href="">Ver Mais</Link>
            </div>

            <div className='card'>
            <h4 className='titulo-card'>Criação de Personagem</h4>
              
              <div className='container-img'>
              <img src="./src/imagens/personagens.jpeg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
             
                <p className='info-card'>Aprenda a dar vida ao seus personagens</p>
          
             <Link className='btn-card' to="/Personagens">Ver Mais</Link>
             

            </div>
            <div className='card'>
            <h4 className='titulo-card'>Regras</h4>

              <div className='container-img'>
              <img src="./src/imagens/regras.jpeg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
              
                <p className='info-card'>Aprenda sobre regras fundamentais de D&D</p>
              
               <Link className='btn-card' to="/Regras">Ver Mais</Link>
            </div>
            <div className='card'>
            <h4 className='titulo-card'>Mestres de Jogo (DM)</h4>
              <div className='container-img'>
              <img src="./src/imagens/dungeon-master.jpeg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
              
                <p className='info-card'>Principais funções de um DM, cenários, personagens não jogáveis</p>
              
                <Link className='btn-card' to="/MestreDeJogo">Ver Mais</Link>
            </div>
            
           </section> 

           <section className='container-conteudos'>
           <Routes>
              <Route path='/OqueEDnD' element={<OqueEDnD />} />
              <Route path='/Personagens' element={<Personagens />} />
              <Route path='/Regras' element={<Regras />} />
              <Route path='/MestreDeJogo' element={<Mestre />} />
                
            </Routes>
            
              </section>    
       
        
      </main>
   
      </Router>
     
    
    </>
  )
}

export default App
