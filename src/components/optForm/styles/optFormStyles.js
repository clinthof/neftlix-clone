import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;
  color: #333;

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #e10712;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: 1px solid #333;
  cursor: pointer;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
    border: 0;
    padding: 0 15px;
    border-radius: 2px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

const Text = styled.div`
  font-size: 19.2px;
  color: white;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export { 
  Container,
  Input,
  Button,
  Text,
  Break,
}