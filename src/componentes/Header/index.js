import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LOGO from "../logo";
import perfillLogin from '../../img/perfil.svg';

let HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;  /* Centraliza o conteúdo horizontalmente */
  align-items: center;      /* Alinha os itens verticalmente */
  height: 75px;
  width: 100%;  /* Garante que o cabeçalho ocupe toda a largura da tela */
  padding: 0 20px;
  transition: padding 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;  /* Alinha os itens na vertical em telas pequenas */
    height: auto;  /* Permite que o cabeçalho se ajuste para telas pequenas */
    padding: 10px;
    width: 100%; 
  }
`;

let OpcoesBotoesContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;  /* Centraliza os botões */
  align-items: center;  /* Alinha os itens verticalmente */
  width: 100%;  /* Garantir que os botões usem toda a largura disponível */
 margin-right:20%;

  @media (max-width: 768px) {
    flex-direction: column;  /* Alinha os botões verticalmente em telas pequenas */
    width: 100%;  /* Garante que ocupem a largura completa em telas pequenas */
    margin-right:0%;
  }
`;

let OpcoesBotoes = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s, transform 0.3s;

  @media (max-width: 768px) {
    width: 100%;  /* Botões ocupam a largura inteira em telas pequenas */
    padding: 12px 0;
    text-align: center;
  }

  &:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
    transform: scale(1.05);
  }
`;

const Perfillogin = styled.img`
  width: 25px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30px;
  }
`;

function Header() {
  const navigate = useNavigate(); // Hook de navegação

  const handleNavigation = (path) => {
    console.log(`Navegando para ${path}`);
    navigate(path); // Navega para a página correspondente
  };

  return (
    <HeaderContainer>
      <LOGO></LOGO>
      <OpcoesBotoesContainer>
        <OpcoesBotoes onClick={() => handleNavigation("/SiteNutri")}>INICIO</OpcoesBotoes>
        <OpcoesBotoes onClick={() => handleNavigation("/quem-eu-sou")}>QUEM EU SOU</OpcoesBotoes>
        <OpcoesBotoes onClick={() => handleNavigation("/motivos-para-me-ajudar")}>MOTIVOS PARA ME AJUDAR</OpcoesBotoes>
        <OpcoesBotoes onClick={() => handleNavigation("/duvidas")}>DÚVIDAS</OpcoesBotoes>
        <OpcoesBotoes onClick={() => handleNavigation("/login")}><Perfillogin src={perfillLogin} alt="Perfil" /></OpcoesBotoes>
      </OpcoesBotoesContainer>
    </HeaderContainer>
  );
}

export default Header;
