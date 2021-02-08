import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Interventions from './Components/Interventions'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
   <Router>
     <div className="App">
     <Navbar/>
     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/interventions" component={Interventions}/>
     </Switch>
     </div>
    </Router>
  );
}

export default App;
