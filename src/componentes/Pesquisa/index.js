import styled from "styled-components"
import Input from "../input"
import ImgAleitamento from "../../img/image-removebg-preview.png"
import { useState } from "react"

let Search = styled.section`
  background-color: white; 
  padding: 20px; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  width: 1500px; 
  height: 800px;
  margin: auto; 
  position: relative; 
  top: 50%; 
  transform: translateY(-56.5%); 
  text-align: center;
`
const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
`;
const Participe = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
`;
const Imageminicial = styled.img `
  margin-top: 20px;
  margin-bottom: 10px;
  height: 300px;
  display: block; 
  margin-left: auto; 
  margin-right: auto; 
  align-self: center;
`
const BotaoEnviar = styled.button `
  background-color: #4caf50; /* Verde elegante */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  margin-left: 10px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`

function Pesquisa (){
  const [contatoDigitado, setcontatoDigitado] = useState("")
 
  const validarContato = () => {
    if (isNaN(parseInt(contatoDigitado))) {
      alert("Digite um número válido");
      setcontatoDigitado("");
    } else {
      
      alert("Contato válido, obrigado por participar!");
      setcontatoDigitado("");
    }


  };
  return(
 <Search>
   <Title>Bem-vindo(a)!</Title>
    <Paragraph>
    Bem-vindo(a)!Eu sou uma estudante de Nutrição no último período e estou desenvolvendo meu Trabalho de Conclusão de Curso (TCC), um marco importante na minha trajetória acadêmica. O tema da minha pesquisa é <strong>"Percepção materna no contexto do aleitamento materno"</strong>. Este estudo busca compreender como as mães percebem e vivenciam o processo de amamentação, explorando os desafios, emoções, influências e expectativas que cercam esse momento tão significativo.
O aleitamento materno é muito mais do que um ato de nutrição; é um gesto de vínculo, cuidado e amor. 
Porém, muitas mães enfrentam dúvidas, pressões e dificuldades que podem influenciar suas decisões. 
Minha pesquisa pretende dar voz a essas experiências, trazendo uma compreensão mais profunda e ampliando a discussão sobre a importância do apoio e da conscientização em torno do aleitamento.
    </Paragraph>
    <Imageminicial src = {ImgAleitamento}/>
      <Participe>
      Clique no botão abaixo e insira seu contato e faca parte disso! 💡
      </Participe>
      
    <Input
        placeholder= " SEU CONTATO "
        value={contatoDigitado}  // Vincula o valor do campo ao estado
        onChange={(e) => setcontatoDigitado(e.target.value)} // Atualiza o estado quando o valor muda
    />
    <BotaoEnviar onClick={validarContato}>Enviar</BotaoEnviar>
 </Search>
 )
}

export default Pesquisa
