import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './Layout/index'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Layout}  ></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
