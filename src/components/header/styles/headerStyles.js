import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  box-shadow: 0 40px 200px rgba(0,0,0,0.9) inset;
`;

const Frame = styled.div`

`;

const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

const Logo = styled.img`
  height: 2.25rem;
  width: 8.375rem;
  margin-right: 40px;

  @media (max-width: 1000px) {
    height: 45px;
    width: 167px;
  }
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