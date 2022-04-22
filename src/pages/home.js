import { JumbotronContainer } from '../containers/Jumbotron';
import { FooterContainer } from '../containers/Footer';
import { FAQContainer } from '../containers/FAQs';

const Home = () => { 
  return (
    <>
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  );
};

export default Home;