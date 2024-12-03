
import styled from 'styled-components'
let textoopcoes = ['QUEM EU SOU','MOTIVOS PARA ME AJUDAR','DÚVIDAS']

let Texto = styled.li `
   display: flex;
   justify-content: space-between; 
   margin-right: 20px
   align-items: center;
   padding: 10px 20px; 
   cursor: pointer;
`
let TextOP = styled.ul `
      display: flex;
      align-self: center;
`
function OpcoesHeader() {
   return (
   <TextOP>
        {textoopcoes.map((texto) => (<Texto><p><strong>{texto}</strong></p></Texto>))}
      </TextOP>
   )
      }
    
export default OpcoesHeader