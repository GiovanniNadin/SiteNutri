import styled from "styled-components";

const DuvidasContainer = styled.div`
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
  overflow-y: auto; /* Permite rolar o conteúdo se ultrapassar a altura */
`;

const Listduvidas = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ItemDuvida = styled.li`
  padding: 10px;
  margin: 5px 0;
  font-size: 1.1rem;
  color: #555;
  strong {
    font-weight: bold;
    color: #333;
  }
`;


function Dvidas() {
    return (
      <DuvidasContainer>
        <h1>Dúvidas frequentes:</h1>
        <Listduvidas>
        <ItemDuvida><strong>Qual é a quantidade ideal de leite materno que meu bebê precisa?</strong></ItemDuvida>
        <ItemDuvida>Muitas mães se preocupam se estão produzindo leite suficiente para seus bebês, principalmente nos primeiros dias após o nascimento.</ItemDuvida>
        <ItemDuvida><strong>Como sei se meu bebê está mamando corretamente?</strong></ItemDuvida>
        <ItemDuvida>Essa dúvida é comum, já que muitas mães não sabem se a posição e a pegada estão corretas, o que pode causar desconforto ou problemas como fissuras nos mamilos.</ItemDuvida>
        <ItemDuvida><strong>Meu leite materno é suficiente para o meu bebê, mesmo que ele esteja mamando com frequência?</strong></ItemDuvida>
        <ItemDuvida> Algumas mães se perguntam se é normal que os bebês mamem frequentemente, principalmente durante o pico de crescimento, e se isso significa que o leite não está sendo suficiente.</ItemDuvida>
        <ItemDuvida><strong>Como lido com a dor nos mamilos durante a amamentação?</strong></ItemDuvida> 
        <ItemDuvida>A dor nos mamilos é uma preocupação comum nas primeiras semanas de amamentação. As mães podem se perguntar se a dor é normal ou se há algo errado.</ItemDuvida>
        <ItemDuvida><strong>É possível amamentar após uma cesárea?</strong></ItemDuvida>
        <ItemDuvida> Mães que passam por cesárea podem ter dúvidas sobre a possibilidade e a facilidade de amamentar após a cirurgia.</ItemDuvida>
        <ItemDuvida><strong>O que fazer se meu bebê não quer mamar ou recusa o peito?</strong></ItemDuvida> 
        <ItemDuvida>Algumas mães enfrentam dificuldades quando o bebê não consegue ou não quer mamar, o que pode ser frustrante e gerador de dúvidas.</ItemDuvida>
        <ItemDuvida><strong>Como equilibrar o trabalho e a amamentação?</strong> </ItemDuvida>
        <ItemDuvida>As mães que retornam ao trabalho após a licença maternidade podem ter preocupações sobre como manter a amamentação, seja através de ordenha ou da amamentação direta.</ItemDuvida>
        <ItemDuvida><strong>Amamentar é só uma questão de nutrição?</strong></ItemDuvida> 
        <ItemDuvida>Muitas mães se questionam sobre os benefícios emocionais e psicológicos da amamentação, além dos nutricionais.</ItemDuvida>
        <ItemDuvida><strong>Quando e como introduzir alimentos sólidos enquanto ainda amamento?</strong></ItemDuvida>
        <ItemDuvida>Há dúvidas sobre o momento certo de iniciar a introdução de alimentos complementares e como isso afeta a amamentação.</ItemDuvida>
        <ItemDuvida><strong>Como saber se o meu leite está estragado ou se não está mais nutritivo?</strong> </ItemDuvida>
        <ItemDuvida>Mães podem ter insegurança sobre a qualidade do leite, principalmente quando o armazenamento é necessário, e podem se perguntar se o leite materno pode perder nutrientes ao longo do tempo.</ItemDuvida>
            </Listduvidas>
        </DuvidasContainer>
    );
  }
  
  export default Dvidas;