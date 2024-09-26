import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Riot from './pages/riot'
import Cadastro from './pages/cadastro'
import Perfil from './pages/perfil'
import Adm from './pages/adm'
import Mp from './pages/mercadoPago'
import Teams from './pages/team'
import Torneios from './pages/tournament'
import Teams2 from './pages/teams'

 
function App() {

  
  return (
    <BrowserRouter> 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/riot" element={<Riot />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/Adm" element={<Adm/>} />
          <Route path="/mp" element={<Mp/>} />
          <Route path="/teams" element={< Teams/>} />
          <Route path="/torneios" element={< Torneios/>} />
          <Route path="/teamList" element={< Teams2/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;