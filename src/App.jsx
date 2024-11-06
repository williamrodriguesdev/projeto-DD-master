

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header/Header'
import Introducao from './components/Introducao/Introducao';
import Personagens from './components/Personagem/Personagens';
import Regras from './components/Regras/Regras';
import Mestre from './components/Mestre/Mestre';
import Footer from './components/Footer/Footer';
import './responsividade.css';

function App() {

  return (
    <>    
    <Router>
    
      <Header />
      <main id='main' className='main'>
          <section className='container'> 
            <div className='card'>
            <h4 className='titulo-card'>Introdução</h4>
              <div className='container-img'>
              <img src="https://i.pinimg.com/564x/24/a0/e4/24a0e4e2529e004b847530e1c0b49570.jpg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
            
              <p className='info-card'>Descubra o mundo épico de Dungeons & Dragons! </p>
              <Link to="/Introducao" className='btn-card'>Ver Mais</Link>
            </div>

            <div className='card'>
            <h4 className='titulo-card'>Criação de Personagem</h4>
              
              <div className='container-img'>
              <img src="https://i.pinimg.com/564x/2f/90/6d/2f906d2ea71f973459fa06c904c77c93.jpg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
             
                <p className='info-card'>Aprenda a dar vida ao seus personagens</p>
          
             <Link className='btn-card' to="/Personagens">Ver Mais</Link>
             

            </div>
            <div className='card'>
            <h4 className='titulo-card'>Regras</h4>

              <div className='container-img'>
              <img src="https://i.pinimg.com/736x/0b/d5/98/0bd5986d38bce204a0b51397bd4116fe.jpg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
              
                <p className='info-card'>Aprenda sobre regras fundamentais de D&D</p>
              
               <Link className='btn-card' to="/Regras">Ver Mais</Link>
            </div>
            <div className='card'>
            <h4 className='titulo-card'>Mestres de Jogo (DM)</h4>
              <div className='container-img'>
              <img src="https://i.pinimg.com/236x/7e/fe/e4/7efee4cf785cbbefd69440e67f99696c.jpg" alt="Um livro de regras, sobre uma mesa cheia de artefatos." />
              </div>
              
                <p className='info-card'>Principais funções de um DM, cenários, personagens não jogáveis</p>
              
                <Link className='btn-card' to="/MestreDeJogo">Ver Mais</Link>
            </div>
            
           </section> 

           <section className='container-conteudos'>
           <Routes>
              <Route path='/Introducao' element={<Introducao />} />
              <Route path='/Personagens' element={<Personagens />} />
              <Route path='/Regras' element={<Regras />} />
              <Route path='/MestreDeJogo' element={<Mestre />} />
                
            </Routes>
            
            
              </section>    
       
        
      </main>
        <Footer />
   
      </Router>
     
    
    </>
  )
}

export default App
