import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LOGO from "../logo";
import perfillLogin from '../../img/perfil.svg'

let HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  height: 75px;
`;

let OpcoesBotoes = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
`;
const Perfillogin = styled.img`
   gap: 40px;
    display: flex;
    align-items: center;
    width: 25px;
    cursor: pointer;
`

function Header() {
  const navigate = useNavigate(); // Hook de navegação

  const handleNavigation = (path) => {
    console.log(`Navegando para ${path}`);
    navigate(path); // Navega para a página correspondente
  };

  return (
    <HeaderContainer>
      <LOGO />
      
       <OpcoesBotoes onClick={(Pesquisa) => handleNavigation("/")}>INICIO</OpcoesBotoes>
        <OpcoesBotoes onClick={(QuemuSou) => handleNavigation("/quem-eu-sou")}>QUEM EU SOU</OpcoesBotoes>
        <OpcoesBotoes onClick={(MotivosaraAjudar) => handleNavigation("/motivos-para-me-ajudar")}>MOTIVOS PARA ME AJUDAR</OpcoesBotoes>
        <OpcoesBotoes onClick={(Dvidas) => handleNavigation("/duvidas")}>DÚVIDAS</OpcoesBotoes>
        <OpcoesBotoes onClick={(Loginn) => handleNavigation("/login")}><Perfillogin src = {perfillLogin}></Perfillogin></OpcoesBotoes>
    </HeaderContainer>
  );
}

export default Header;