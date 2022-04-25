import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 137px 45px;
  border-bottom: 8px solid #222;
`;

const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: bold;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const Subtitle = styled.h2`
  color: white;
  max-width: 640px;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export {
  Container,
  Title,
  Subtitle,
}