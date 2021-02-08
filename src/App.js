import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Interventions from './Components/Interventions'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Interventions/>
    </div>
  );
}

export default App;
