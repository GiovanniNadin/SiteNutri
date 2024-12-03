import styled from "styled-components";

const MotivosaraAjudarContainer = styled.div`
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
  overflow-y: auto;
`
const Txtajudar = styled.p`
   padding: 5x;
  margin: 10px 0;
  font-size: 1.4rem;
  color: #555; 
    text-align: justify;
    margin-left: 200px;
    margin-right:200px;
    text-indent: 40px;
`;

function MotivosaraAjudar() {
    return (
      <MotivosaraAjudarContainer>
        <h1>Promover a Saúde Materno-Infantil</h1>
        <Txtajudar>O aleitamento materno é fundamental para o desenvolvimento saudável do bebê, oferecendo nutrientes essenciais e fortalecendo o sistema imunológico. Pesquisas podem ajudar a identificar formas de aumentar a adesão e melhorar o apoio às mães.</Txtajudar>
        <h1>Reduzir Mitos e Desinformação</h1>
        <Txtajudar>Muitas mães enfrentam dúvidas e recebem informações conflitantes sobre amamentação. Contribuir para a pesquisa ajuda a desmistificar crenças erradas e fornecer dados baseados em evidências.</Txtajudar>
        <h1>Entender as Dificuldades das Mães</h1>
        <Txtajudar>Cada mãe enfrenta desafios únicos ao amamentar, desde questões físicas até emocionais e sociais. Participar de uma pesquisa pode trazer à tona essas experiências, ajudando a criar soluções e políticas de suporte..</Txtajudar>
        <h1>Apoiar Políticas Públicas</h1>
        <Txtajudar>Estudos sobre amamentação ajudam a embasar programas e políticas públicas voltados ao apoio materno-infantil, como licenças maternidade mais longas, locais apropriados para amamentação e campanhas de conscientização.</Txtajudar>
        <h1>Impactar Positivamente Gerações Futuras</h1>
        <Txtajudar>Entender e incentivar a prática da amamentação cria um efeito cascata para as próximas gerações, promovendo saúde e conscientização.</Txtajudar>
        <h1>Contribuir para a Equidade Social</h1>
        <Txtajudar>Algumas mulheres enfrentam mais dificuldades para amamentar devido a barreiras econômicas, culturais ou de acesso a informações. A pesquisa pode ajudar a identificar e reduzir essas desigualdades.</Txtajudar>
        <h1>Fortalecer o Vínculo Mãe-Bebê</h1>
        <Txtajudar>Estudos podem explorar e destacar os benefícios emocionais da amamentação, incentivando práticas que promovam o vínculo afetivo entre mãe e filho.</Txtajudar>
        <h1>Prevenir Problemas de Saúde</h1>
        <Txtajudar>O aleitamento materno ajuda a prevenir diversas condições, como obesidade, diabetes e infecções em bebês, além de câncer de mama e ovário em mães. Compreender mais sobre essas vantagens fortalece a promoção dessa prática.</Txtajudar>
        <h1>Aumentar a Conscientização da Sociedade</h1>
        <Txtajudar>O aleitamento materno não é apenas uma escolha individual, mas também uma questão social. Pesquisas podem ajudar a educar a população e reduzir estigmas em torno da amamentação em público.</Txtajudar>
        <h1>Fomentar Iniciativas de Apoio às Mães</h1>
        <Txtajudar>Os dados coletados em pesquisas ajudam na criação de redes de apoio, programas educacionais e materiais informativos que facilitam a jornada da amamentação para todas as mães.</Txtajudar>

      </MotivosaraAjudarContainer>
    );
  }
  
  export default MotivosaraAjudar;