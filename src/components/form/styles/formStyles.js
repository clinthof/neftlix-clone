import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Container = styled.div`

`;

const Base = styled.form`

`;

const Title = styled.h1`

`;

const Text = styled.p`

`;

const Subtext = styled.p`

`;

const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.div`

`;

const Submit = styled.div`

`;

const Error = styled.div`

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