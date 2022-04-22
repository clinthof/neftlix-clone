import { BrowserRouter as Router, Switch, Route, Routes, } from 'react-router-dom';
import { JumbotronContainer } from './containers/Jumbotron';
import { FooterContainer } from './containers/Footer';
import { FAQContainer } from './containers/FAQs';
import * as ROUTES from './constants/routes';

const App = () => {
  return (
    <Router>
      <Route exact path='/user'>
        <>I am a user!</>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer />
        <FAQContainer />
        <FooterContainer />
      </Route>
    </Router>
  );
}

export default App;
