

import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NameScreen from './Screens/NameScreen';
import MainScreen from './Screens/MainScreen';


function App() {
  return (
    <div className="App">
      <Router >
        <Route path='/' component={NameScreen} exact />
        <Route path='/main' component={MainScreen} />
      </Router>
    </div>
  );
}

export default App;
