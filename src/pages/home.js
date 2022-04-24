import { JumbotronContainer } from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { FAQContainer } from '../containers/FAQs';
import { HeaderContainer } from '../containers/Header';

const Home = () => { 
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FAQContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
};

export default Home;