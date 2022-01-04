import styled from 'styled-components';

export const HeaderStyles = styled.header`
  height: 180px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 100px;

  opacity: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1300px) {
    flex-direction: column;
    position: relative;
    height: auto;
    align-items: flex-start;
    padding: 20px 0;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.25rem;

  @media (max-width: 1300px) {
    margin-left: 20px;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  height: 4rem;
  margin: 0 20px;
  background: transparent;
  border: 2px solid black;
  box-shadow: 0px 5px 15px -7px black;
  border-radius: 10px;
  padding: 10px;

  &&::placeholder {
    color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 1300px) {
    height: 2rem;
    width: 300px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  margin: 0 20px;
  height: 4rem;
  box-shadow: 0px 5px 15px -7px black;
  background-color: mediumpurple;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
  font-family: sans-serif;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  transition: background-color 1s;

  &&:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
  &&:active {
    position: relative;
    top: 1px;
  }

  @media (max-width: 1300px) {
    height: 2rem;
    padding: 5px 10px;
    margin-top: 20px;
  }
`;
