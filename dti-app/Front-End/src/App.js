import logo from './logo.svg';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path ='/' exact />
        </Routes>
          
      </Router>
    </div>
  );
}

export default App;
