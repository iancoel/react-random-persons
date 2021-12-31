import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0;
  background-color: #ddd;
  display: flex;
  justify-content: center;

  div::-webkit-scrollbar-track {
    background: blue;
  }
`;

export const UserCard = styled.div`
  padding: 10px 20px;
  background-color: violet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
  border-radius: 5px;
`;

export const UserName = styled.p`
  font-size: 2rem;
`;

export const UserAge = styled.p`
  font-size: 1.5rem;
`;
