import styled from "styled-components";



const Textcontainer = styled.div`
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

const Txtapr = styled.p`
   padding: 5x;
  margin: 10px 0;
  font-size: 1.4rem;
  color: #555; 
    text-align: justify;
    margin-left: 200px;
    margin-right:200px;
    text-indent: 40px;
`;





function QuemuSou() {
    return (
      <Textcontainer>
        <h1>Quem eu sou</h1>
        <Txtapr>Sou estudante de Nutrição no último ano da graduação e, ao longo dessa jornada, desenvolvi um grande interesse pela área materno-infantil, especialmente no que diz respeito ao cuidado nutricional durante a gestação e a amamentação. A nutrição exerce um papel crucial no bem-estar e no desenvolvimento saudável de mães e bebês, e é exatamente nesse contexto que encontrei minha paixão pela profissão.</Txtapr>
        <Txtapr>Atualmente, estou desenvolvendo meu Trabalho de Conclusão de Curso (TCC), que tem como tema "Percepção materna no contexto do aleitamento materno". Este estudo busca investigar as experiências, as percepções e os desafios que as mães enfrentam durante o processo de amamentação. Embora seja um ato natural e essencial para a saúde do bebê, muitas mães se deparam com obstáculos que podem dificultar esse processo, como questões emocionais, físicas e a falta de informações adequadas.</Txtapr>
        <Txtapr>O interesse por esse tema surgiu da vontade de compreender profundamente as diversas nuances do aleitamento materno, um dos pilares da nutrição infantil, e de como a percepção materna sobre esse ato pode influenciar a prática e o sucesso da amamentação. Acredito que a nutrição vai além do simples fornecimento de alimentos; ela envolve um cuidado integral, que inclui apoio emocional e psicológico às mães, especialmente em momentos tão sensíveis como o pós-parto.</Txtapr>
        <Txtapr>Com a conclusão deste trabalho, pretendo contribuir para o aprimoramento de políticas públicas e programas de apoio à amamentação, além de buscar disseminar informações mais claras e precisas que ajudem as mães a viver essa experiência de maneira mais tranquila e bem-sucedida. Meu objetivo é seguir na área materno-infantil, oferecendo suporte nutricional e promovendo a saúde das mães e dos bebês, garantindo que todos tenham acesso ao melhor cuidado possível durante um dos períodos mais importantes da vida.</Txtapr>
      
      
      </Textcontainer>
    );
  }
  
  export default QuemuSou;