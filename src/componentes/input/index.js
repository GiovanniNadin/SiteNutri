import styled from "styled-components";
let Input = styled.input `
  border: 1px solid #ccc;
  background: transparent;
  padding: 12px 24px;
  border-radius: 25px;
  width: 80%; /* Tornando o input mais responsivo */
  max-width: 400px; /* Limita a largura máxima */
  color: black;
  font-size: 16px;
  margin: 10px auto; /* Centraliza o input */
  display: block;
  text-align: center;

  &::placeholder {
    color: #aaa; /* Cor do placeholder mais suave */
    text-align: center;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Ajuste no padding em telas pequenas */
    font-size: 14px;
  }
`
export default Input