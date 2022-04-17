import Jumbotron from './components/jumbotron';
import jumboData from './fixtures/jumbo.json';

const App = () => {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map(item =>
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            <Jumbotron>{item.alt}</Jumbotron>
          </Jumbotron>)}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
