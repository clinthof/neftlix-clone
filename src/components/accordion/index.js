import { useState, useContext, createContext } from 'react';
import {
  Container,
  Item, 
  Inner, 
  Title, 
  Frame, 
  Header, 
  Body,
} from './styles/accordionStyles';

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
};

Accordion.Container = function AccordionContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { setToggleShow } = useContext(ToggleContext);

  return (

    <Header onClick={() => setToggleShow(prevState => !prevState)} {...restProps}>
      {children}
    </Header>

  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow && <Body {...restProps}>{children}</Body>;
};

export default Accordion;