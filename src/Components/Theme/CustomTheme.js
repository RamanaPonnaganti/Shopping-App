import { createMuiTheme } from "@material-ui/core/styles";

const CustomTheme = createMuiTheme({
  typography: {
    h1: {
      fontWeight: 800,
    }
  },
  palette: {
    primary: {
      light: '#0066ff',
      main: '#ff4400',
      contrastText: '#ffcc00',
      dark: "#303f9f",
    } 
  }
});

export default CustomTheme;
