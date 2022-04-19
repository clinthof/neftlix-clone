import { JumbotronContainer } from './containers/Jumbotron';
import { FooterContainer } from './containers/Footer';
import { FAQContainer } from './containers/FAQs';

const App = () => {
  return (
    <>
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  );
}

export default App;
