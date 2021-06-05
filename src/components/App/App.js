import './reset.css';
import './App.css';
import Search from '../Search/Search';
import AboutFilm from '../AboutFilm/AboutFilm';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path = '/about' component = {AboutFilm} />
          <Route exact path = '/' component = {Search} />
          <Route path = '/search' component = {Search} />
        </Switch>
      </Router>
    </div>
  );
  
}

export default App;
