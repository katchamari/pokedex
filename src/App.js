import './App.css';
import Pokedex from './components/PokedexComponents/Pokedex';
import Container from './components/UI/Container';

function App() {
  return (
    <main className="main-body">
      <Container>
        <Pokedex />
      </Container>
    </main>
  );
}

export default App;
