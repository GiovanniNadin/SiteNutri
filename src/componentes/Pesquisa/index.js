import styled from "styled-components";
import Input from "../input";
import ImgAleitamento from "../../img/image-removebg-preview.png";
import { useState } from "react";

let Search = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%; /* Ajusta a largura para ser flexível */
  max-width: 1700px;
  margin: 40px auto; /* Adicionando espaço superior para evitar sobreposição com o header */
  position: relative;
  min-height: 50%; /* Garante um tamanho mínimo */
  text-align: center;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Responsividade para telas pequenas */
  @media (max-width: 768px) {
    width: 100%; /* Largura 100% para telas pequenas */
    padding: 15px; /* Padding reduzido */
    transform: translateY(0); /* Remove o deslocamento vertical */
    transform: translateX(-2.75%);
  }`

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Tamanho de fonte reduzido para dispositivos pequenos */
  }
`;

const Paragraph = styled.p`
  padding: 10px;
  margin: 10px 0;
  font-size: 1.4rem;
  color: #555;
  text-align: justify;
  margin-left: 30px;
  margin-right: 30px;
  text-indent: 40px;

  @media (max-width: 768px) {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 1.2rem; /* Ajusta o tamanho da fonte em dispositivos pequenos */
  }
`;

const Participe = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Imageminicial = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain; /* Ajusta a imagem para não distorcer */
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-height: 200px; /* Ajusta o tamanho da imagem para telas pequenas */
  }
`;

const BotaoEnviar = styled.button`
  background-color: #4caf50; /* Verde elegante */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.3s;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background-color: #45a049;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #388e3c;
  }
`;

function Pesquisa() {
  const [contatoDigitado, setcontatoDigitado] = useState("");

  const handleSubmit = () => {
    console.log("Contato Enviado:", contatoDigitado);
    // Aqui você pode fazer algo mais, como enviar para um servidor
  };

  return (
    <Search>
      <Title>Bem-vindo(a)!</Title>
      <Paragraph>
        Bem-vindo(a)! Eu sou uma estudante de Nutrição no último período e estou desenvolvendo meu Trabalho de Conclusão de Curso (TCC), um marco importante na minha trajetória acadêmica. O tema da minha pesquisa é <strong>"Percepção materna no contexto do aleitamento materno"</strong>. Este estudo busca compreender como as mães percebem e vivenciam o processo de amamentação, explorando os desafios, emoções, influências e expectativas que cercam esse momento tão significativo. O aleitamento materno é muito mais do que um ato de nutrição; é um gesto de vínculo, cuidado e amor. Porém, muitas mães enfrentam dúvidas, pressões e dificuldades que podem influenciar suas decisões. Minha pesquisa pretende dar voz a essas experiências, trazendo uma compreensão mais profunda e ampliando a discussão sobre a importância do apoio e da conscientização em torno do aleitamento.
      </Paragraph>
      <Imageminicial src={ImgAleitamento} />
      <Participe>Clique no botão abaixo e insira seu contato para fazer parte disso! 💡</Participe>
      <Input
        type="number"
        placeholder="SEU CONTATO"
        value={contatoDigitado}
        onChange={(e) => setcontatoDigitado(e.target.value)}
      />
      <BotaoEnviar onClick={handleSubmit}>Enviar</BotaoEnviar>
    </Search>
  );
}

export default Pesquisa;
