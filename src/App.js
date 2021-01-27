import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
//import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/styles";
import CustomTheme from "./Components/Theme/CustomTheme";
import SignUp from "./Components/Login/SignUp";
import Checkout from "./Components/Checkout/Checkout";
import Products from "./Components/Products/Products";
import ProductMgmt from "./Components/ProductMgmt/ProductMgmt";
import VendorMgmt from "./Components/VendorMgmt/VendorMgmt";
import Cart from "./Components/CartPage/Cart";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/Products" component={Products} />
            <Route path="/ProductMgmt" component={ProductMgmt} />
            <Route path="/VendorMgmt" component={VendorMgmt} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
