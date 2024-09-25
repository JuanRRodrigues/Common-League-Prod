import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/newHome/home';
import Login from './pages/login';
import Riot from './pages/riot';
import Perfil from './pages/perfil';
import Adm from './pages/adm';
import Mp from './pages/mercadoPago';
import Team from './pages/team';
//import Teams from './pages/team';
//import Torneios from './pages/tournament';
//import Teams2 from './pages/teams';
        
       // <Route path="/torneios" element={<Torneios />} />
       // <Route path="/teamList" element={<Teams2 />} />
      // <Route path="/riot" element={<Riot />} />
      
     //  <Route path="/payment" element={<Adm />} />
        // <Route path="/teams" element={<Teams />} />
     
   
import ADM from './pages/Administrative';

const App: React.FC = () => {
  return (
    <BrowserRouter> 
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/adm" element={<ADM />} />
        <Route path="/mp" element={<Mp />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/team" element={<Team />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
