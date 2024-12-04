import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import QuemuSou from './componentes/QuemEuSou';
import MotivosaraAjudar from './componentes/MotivosParaAjudar';
import Dvidas from './componentes/Duvidas';
import Loginn from './componentes/Login';

let Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;  /* Permite que o conteúdo se ajuste à altura da tela */
  background: linear-gradient(90deg, hwb(103 10% 67%) 35%, hwb(0 58% 39%));
  padding: 20px;
  overflow-x: hidden;
  justify-content: flex-start;  /* Alinha o conteúdo no início da tela */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  flex-grow: 1;  /* Permite que o conteúdo ocupe o espaço restante da tela */
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
    justify-content: flex-start;  /* Certifica que o conteúdo não fica espaçado verticalmente */
  }
`;

function App() {
  return (
    <Router>
      <Appcontainer>
        <Header />
        <Routes>
          <Route path="/siteinicial" element={<Pesquisa />} />
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
