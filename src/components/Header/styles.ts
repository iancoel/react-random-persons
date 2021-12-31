import styled from 'styled-components';

export const HeaderStyles = styled.header`
  height: 120px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  background-color: violet;
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
  font-size: 2rem;

  @media (max-width: 1300px) {
    margin-left: 20px;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  height: 3rem;
  margin: 0 20px;

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

  box-shadow: 0px 10px 14px -7px violet;
  background: linear-gradient(to bottom, violet 5%, violet 100%);
  background-color: violet;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px violet;

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
