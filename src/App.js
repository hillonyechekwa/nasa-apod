import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'

function App() {
  return (

    <Router>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
   </Router>
  );
}

export default App;
