import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
//import CssBaseline from '@material-ui/core/CssBaseline';

import SignUp from './Components/Login/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path='/SignUp' component={SignUp}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
