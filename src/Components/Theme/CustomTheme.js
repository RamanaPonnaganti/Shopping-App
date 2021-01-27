import { createMuiTheme } from "@material-ui/core/styles";

const CustomTheme = createMuiTheme({
  typography: {
    h1: {
      fontWeight: 800,
    }
  },
  palette: {
    primary: {
      light: '#777676',
      main: '#777676',
      contrastText: '#eae9e1',
      dark: "#303f9f",
    } 
  }
});

export default CustomTheme;
