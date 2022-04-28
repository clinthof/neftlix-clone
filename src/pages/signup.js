import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  // const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = name === '' || email === '' || password === '';

  const handleSignUp = e => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => result.user.updateProfile({
        displayName: name,
        photoURL: Math.floor(Math.random() * 5) + 1,
      }))
      .then(() => history.push(ROUTES.BROWSE))
      .catch(err => {
        setName('');
        setEmail('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={e => handleSignUp(e)} method='POST'>
            <Form.Input
              placeholder='First name'
              value={name} 
              onChange={({target}) => setName(target.value)}
            />
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