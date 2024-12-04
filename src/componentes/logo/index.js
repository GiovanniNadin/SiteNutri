import styled from 'styled-components';
import logo from '../../img/66tp1zir (1).png';

let Logocontainer = styled.div`
   background: #fff;
  display: flex;
  justify-content: center;  /* Centraliza o conteúdo horizontalmente */
  align-items: center;      /* Alinha os itens verticalmente */
  height: 75px;
  width: 100%;  /* Garante que o cabeçalho ocupe toda a largura da tela */
  padding: 0 10px;
  transition: padding 0.3s ease;
`;

let Logoimg = styled.img`
  /* Aumenta o espaço entre a imagem e o texto */
  height: 75px;
  width: auto;  /* Mantém a proporção da imagem */
  
`;

let LogoText = styled.p`
   font-weight: bold;
  margin: 0;  /* Remove o espaçamento extra da tag <p> */
  font-size: 1.5rem;  /* Ajusta o tamanho da fonte de acordo com o design */
  color: #333;  /* Dá uma cor mais neutra para o texto */
`;

function LOGO() {
  return (
    <Logocontainer>
      <Logoimg src={logo} alt="Logo" />
      <LogoText><strong>Yamille</strong> Nutri</LogoText>
    </Logocontainer>
  );
}

export default LOGO;