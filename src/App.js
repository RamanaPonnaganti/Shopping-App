import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
//import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/styles";
import CustomTheme from "./Components/Theme/CustomTheme";
import SignUp from "./Components/Login/SignUp";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
