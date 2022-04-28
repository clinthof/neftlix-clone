import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const SignIn = () => {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const isInvalid = email === '' || password === '';
  const handleSignIn = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(err => {
        setEmail('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={e => handleSignIn(e)} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={email} 
              onChange={({target}) => setEmail(target.value)}
            />
            <Form.Input
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={password} 
              onChange={({target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
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

export default SignIn;