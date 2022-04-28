import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [state, setState] = useState({
    name: '', email: '', password: '', error: ''
  });

  const isInvalid = state.name === '' || state.email === '' || state.password === '';

  const handleSignUp = e => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(result => result.user.updateProfile({
        displayName: state.name,
        photoURL: Math.floor(Math.random() * 5) + 1,
      }))
      .then(() => history.push(ROUTES.BROWSE))
      .catch(err => {
        setState({ name: '', email: '', password: '', error: err.message });
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {state.error && <Form.Error>{state.error}</Form.Error>}
          <Form.Base onSubmit={e => handleSignUp(e)} method='POST'>
            <Form.Input
              placeholder='First name'
              value={state.name}
              onChange={({ target }) => setState({ ...state, name: target.value })}
            />
            <Form.Input
              placeholder='Email address'
              value={state.email} 
              onChange={({target}) => setState({ ...state, email: target.value })}
            />
            <Form.Input
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={state.password} 
              onChange={({target}) => setState({ ...state, password: target.value })}
            />
            <Form.Submit disabled={isInvalid} type='submit'>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
          </Form.Text>
          <Form.Subtext>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <Form.Link to='/'> Learn more.</Form.Link>
          </Form.Subtext>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;