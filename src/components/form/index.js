import {
  Container,
  Base,
  Title,
  Text,
  Subtext,
  Link,
  Input,
  Submit,
  Error,
} from './styles/formStyles';

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Subtext = function FormSubtext({ children, ...restProps }) {
  return <Subtext {...restProps}>{children}</Subtext>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

export default Form;