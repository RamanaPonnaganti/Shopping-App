import React from "react";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoSignUp = () => {
    this.props.history.push("/SignUp");
  };

  gotoProducts = () => {
    this.props.history.push("/Products");
  };

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth={false}>
        <Box component="span" m={1}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={this.gotoProducts}>
                Home
              </Button>
              <Typography variant="h6" className={classes.title}>
                SHOPPING CART
              </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit" onClick={this.gotoSignUp}>
                SignUp
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Header);
