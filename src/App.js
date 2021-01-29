import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
//import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/styles";
import CustomTheme from "./Components/Theme/CustomTheme";
import SignUp from "./Components/Login/SignUp";
import Login_R from "./Components/Login/Login_R";
import Checkout from "./Components/Checkout/Checkout";
import Products from "./Components/Products/Products";
import ProductMgmt from "./Components/ProductMgmt/ProductMgmt";
import VendorMgmt from "./Components/VendorMgmt/VendorMgmt";
import Cart from "./Components/CartPage/Cart";

const App=()=>{
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/Login" exact component={Login_R} />
            <Route path="/Checkout" exact component={Checkout} />
            <Route path="/Products" exact component={Products} />
            <Route path="/ProductMgmt" exact component={ProductMgmt} />
            <Route path="/VendorMgmt" exact component={VendorMgmt} />
            <Route path="/Cart" exact component={Cart} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
