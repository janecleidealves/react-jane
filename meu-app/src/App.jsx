
import React from 'react';

import api from './api';

import './App.css';

import Header from './Components/Header/Header';

import NavigationBar from './Components/NavigationBar/NavigantionBar';

import Footer from './Components/Footer/Footer';

import Curriculo from "./Components/Curriculo/Curriculo";
import Portfolio from './Components/Portfolio/Portfolio';
import Contato from './Components/Contato/Contato';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPortfolio] = React.useState({});

  const fetchDados = async () => {
    try {
      const informacao = await api.get('/informacoes/1');
      setInformacoes({
        foto: informacoes.data.foto,
        nome: curriculo.data.nome,
        cargo: portfolio.data.cargo
      });

      const experienciaAcademica = await api.get('/experiencias?tipo=academica');
      const experienciaProfissional = await api.get('/experiencias?tipo=profissional');

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const portfolio = await api.get('/portfolio');
      setPortfolio(portfolio.data);
    } catch (error) {
      console.log('Error ao buscar dados:', error);
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
    <>
      <Header informacoes={informacoes}></Header>

         <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route index element={<Curriculo curriculo={curriculo} />} />
        <Route path='portfolio' element={<Portfolio portfolio={portfolio} />} />
        <Route path='contato' element={<Contato  />} />
      </Routes>
    </BrowserRouter >

      <Footer></Footer>

    </>
  )
}

export default App;
