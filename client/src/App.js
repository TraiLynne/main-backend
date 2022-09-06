import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Nav, Portfolio, Widget } from './components';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Widget/>
    </div>
  );
}

export default App;
