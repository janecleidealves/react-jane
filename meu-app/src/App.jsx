import React from 'react';

import './App.css';

import Contato from './Components/Contato/Contato';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Curriculo from './Components/Curriculo/Curriculo';
import Portefolio from './Components/Portefolio/Portefolio';
import NavigationBar from './Components/NavigationBar/NavigantionBar';
import { BrowserRouter,Route,Routes,} from 'react-router-dom';

function App() {

  return (
    <>
      <Header></Header>
      <BrowserRouter>
      <NavigationBar></NavigationBar>
        <Routes>

          <Route index element={<Curriculo />} />
          <Route path="Portefolio" element={<Portefolio />} />
          <Route path="Contato" element={<Contato />} />

        </Routes>
      </BrowserRouter>
      <Footer></Footer>



    </>

  )

}
export default App;
