import { JumbotronContainer } from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { FAQContainer } from '../containers/FAQs';
import { HeaderContainer } from '../containers/Header';
import { OptFormContainer } from '../containers/OptForm';
import { Feature } from '../components';

const Home = () => { 
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  );
};

export default Home;