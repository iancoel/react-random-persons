import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 0;
  background-color: #ddd;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  && div:nth-child(3n + 1) {
    margin-left: 20px;
  }

  && div:nth-child(3n + 2) {
    margin-right: 20px;
    margin-left: 20px;
  }

  && div:nth-child(3n + 3) {
    margin-right: 20px;
  }
`;

export const UserCard = styled.div`
  padding: 10px 20px;
  background-color: violet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const UserName = styled.p`
  font-size: 2rem;
`;

export const UserAge = styled.p`
  font-size: 1.5rem;
`;
