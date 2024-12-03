import styled from 'styled-components';
import logo from '../../img/66tp1zir (1).png';
let Logocontainer= styled.div `
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    white-space: nowrap;
    margin-right: 20px;
    align-self: center;
`
let Logoimg= styled.img`
    margin-right: 5px;
    height: 75px;
    align-self: center;

`
function LOGO() {
    return (
        <Logocontainer>
          <Logoimg
            src = {logo}
            alt ="Logo"
          
          />
            <p><strong>Yamille</strong> Nutri</p>
        </Logocontainer>
      
    );
  }

  export default LOGO;