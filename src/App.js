import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import QuemuSou from './componentes/QuemEuSou';
import MotivosaraAjudar from './componentes/MotivosParaAjudar';
import Dvidas from './componentes/Duvidas';
import Loginn from './componentes/Login'
let Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, hwb(103 10% 67%) 35%, hwb(0 58% 39%));
`;

function App() {
  return (
    <Router>
      <Appcontainer>
        <Header />
        <Routes>
          <Route path="/" element={<Pesquisa />} />
          <Route path="/login" element={<Loginn />} />
          <Route path="/quem-eu-sou" element={<QuemuSou />} />
          <Route path="/motivos-para-me-ajudar" element={<MotivosaraAjudar />} />
          <Route path="/duvidas" element={<Dvidas />} />
        </Routes>
      </Appcontainer>
    </Router>
  );
}

export default App;