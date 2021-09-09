import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
import Lists from './components/Lists/Lists';
function App() {
  return (

    <div className="App">
      <header className="App-header">

        <div className="right-header">
          <Cart />
        </div>
      </header>
      <div className="main-content">
        <Lists />
      </div>

    </div>
  );
}

export default App;
