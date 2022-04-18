import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150, 1fr));
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 40px;
`;

export {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
}