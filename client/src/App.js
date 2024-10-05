import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Link to="/" className="App-link">Home</Link>
            <Link to="/other-page" className="App-link">Other page</Link>
          </header>
          <div>
              <Routes>
                  <Route exact path="/" element={<Fib/>} />
                  <Route exact path="/other-page" element={<OtherPage/>} />
              </Routes>
          </div>
        </div>

      </BrowserRouter>
  );
}

export default App;
