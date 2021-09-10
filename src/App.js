import logo from './logo.svg';
import './App.css';
import React from "react";
import Cart from './components/Cart/Cart';
import Lists from './components/Lists/Lists';
function App() {

  let [add, setAdd] = React.useState([{}]);
  return (

    <div className="App">
      <header className="App-header">
        {console.log(add)}
        <div className="right-header">
          <Cart addToCart={add} />
        </div>
      </header>
      <div className="main-content">
        <Lists setAdd={setAdd} />
      </div>

    </div>
  );
}

export default App;
