import './App.css';
import Logo from './componentes/Logo/'
import OpcoesHeader from './componentes/OpcoesHeader'
import OpcoesIcones from './componentes/OpcoesIcones'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <OpcoesIcones/>
      </header>
    </div>
  );
}

export default App;
