import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Background = styled.div`

`;

const Frame = styled.div`

`;

const Container = styled.div`

`;

const Logo = styled.img`

`;

const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e60914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;

export {
  Background,
  Frame,
  Container,
  Logo,
  ButtonLink,
};