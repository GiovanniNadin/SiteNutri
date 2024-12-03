import styled from 'styled-components';
import perfil from '../../img/perfil.svg';
import sacola from "../../img/sacola.svg";
let icones = [perfil, sacola];
let Iconess = styled.ul`
   gap: 40px;
    display: flex;
    align-items: center;
    width: 25px;
    cursor: pointer;
`

let Icone = styled.li `
    gap: 40px;
    display: flex;
    align-items: center;
    width: 25px;
    cursor: pointer;
`
function IconesHeader(){
    return(
        <Iconess>
        { icones.map( (icone) => (
      <Icone><img src = {icone}></img></Icone>
        )) }
        </Iconess>
    )
}

export default IconesHeader