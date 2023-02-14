import './styles/app.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'¡Bienvenido! Nuestro sitio se encuentra en construcción. Muy pronto podrás ver todos nuestros productos.'}/>

      </header>
    </div>
  );
}

export default App;
