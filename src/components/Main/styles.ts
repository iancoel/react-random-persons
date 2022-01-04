import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 100px 0 100px;
  display: flex;
  justify-content: center;

  div::-webkit-scrollbar-track {
    background: blue;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loader = styled.p`
  font-size: 2rem;
  font-family: sans-serif;
`;

export const TotalUsers = styled.p`
  font-size: 1.5rem;
  font-family: sans-serif;
  display: inline-block;
  padding-top: 20px;
`;

export const UserCard = styled.div`
  padding: 10px 20px;
  background-color: mediumpurple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  font-family: sans-serif;
`;

export const UserName = styled.p`
  font-size: 2rem;
`;

export const UserAge = styled.p`
  font-size: 1.5rem;
`;
