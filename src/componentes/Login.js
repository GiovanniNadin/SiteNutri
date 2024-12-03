import styled from "styled-components"
import React, { useState } from "react";
const LoginBox = styled.div`
  width: 450px;
  max-width: 90%;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 1.8rem;
  }

  input {
    width: 95%;
    padding: 10px 15px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    width: 95%;
    padding: 10px 15px;
    margin-top: 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: center;
    &:hover {
      background-color: #0056b3;
    }
  }

  a {
    margin-top: 15px;
    color: #007bff;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;




function Loginn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Senha:", password);
        setEmail("");
        setPassword("");
      };
   return(
   <LoginBox>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit">Entrar</button>
      </form>
    </LoginBox>
    ) 
}



export default Loginn