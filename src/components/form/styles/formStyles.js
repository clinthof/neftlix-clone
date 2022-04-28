import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width:100%;

`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Subtext = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  background: #e50914;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  color: white;
  cursor: pointer;

  &:disabled {
    cursor: auto;
    opacity: 0.9;
  }
`;

const Error = styled.div`
  background: #f40612;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export {
  Container,
  Base,
  Title,
  Text,
  Subtext,
  Link,
  Input,
  Submit,
  Error,
};