import React from 'react';
import { styled } from 'styled-components';
import EstilosGlobais from '../componentes/GlobaStyle';
import Perfil from '../componentes/Perfil';
import UserList from '../componentes/userList';
import SideMenu from '../componentes/mainSideBar/SideMenu';
import { useState } from 'react';
import Header from '../componentes/MainHeader';
import * as Components from './team/component';
import './header.css';


const Backgroundgradient = styled.main`
  background: linear-gradient(174.61deg, #141d26 4.16%, #1a2633 48%, #151515 96.76%);
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 8px solid var(--bgColor);
  display: flex;
  justify-content: space-between;
  gap: 30px;
  overflow: hidden;
  transition: 0.5s;
`;

// Define the App component
const App: React.FC = () => {

  const [active, setActive] = useState(false);

  const handleTogleActive = () => {
    setActive(!active);
  };

  return (
    <Components.Main>
      <Backgroundgradient>
     
      
      <SideMenu active={active} />
      <Header toggleActive={handleTogleActive} />

        <Components.Banner className={`banner ${active ? 'active' : ''}`}>
              <Components.UserBanner>

                  <Perfil />
                  <UserList />
                  <div className="avatar">
          <a href="#" className="icon">
            <img 
              src="https://nexus.leagueoflegends.com/wp-content/uploads/2019/10/G2_Icon_iqex9cgmveqc73m46pbm.png" 
              alt="Team Image" 
            />
          </a>
        
        </div>
        <div className="user">
            <span>Team Solid</span>
          
          </div>
          <div className="user2">
            <span>jogadores: 5</span>
          
          </div>

          <div className="level">
            <span>Pais: Brasil</span>
          </div>

          <div className="edit">
            <button>Titulos: 1</button>
          </div>

          <div className="verificado">
            <button>Verificado:</button>
          </div>
          
                <Components.teamInfoBanner>
                
                    <Components.LeagueLogo
                  src="https://nexus.leagueoflegends.com/wp-content/uploads/2019/10/G2_Icon_iqex9cgmveqc73m46pbm.png" 
                  alt="Team Image" 
                />
                <Components.text>
                <span>Liga Brasileira Série A</span>
                <span>Divisão: Primeira Divisão</span>
                <span>Posição: 17</span>
                <span>Em atividade há: 2 meses</span>
                </Components.text>
                </Components.teamInfoBanner>

              </Components.UserBanner>

        </Components.Banner>
      
      <EstilosGlobais />
      
      <Header toggleActive={handleTogleActive} />
      
    </Backgroundgradient>
    </Components.Main>
    
  );
};

export default App;
