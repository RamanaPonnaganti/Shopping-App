import React from "react";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

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

  gotoLogin = () => {
    this.props.history.push("/Login");
  };

  gotoProducts = () => {
    this.props.history.push("/Products");
  };

  gotoLogout = () => {
    const {
      props: { dispatch },
    } = this;
    let data = {
      isuserLoggedIn: false,
      userDetails: {
        name: undefined,
        password: undefined,
      },
    };
    dispatch({ type: "LOGOUT_USER", payload: data });
    this.props.history.push("/Login");
  };

  render() {
    const { classes } = this.props;
    const {
      props: { reduxState },
    } = this;
    console.log(reduxState);
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
              {reduxState?.signInDetails?.isuserLoggedIn && (
                <>
                <div style={{margin: '5px 10px 10px',color: '#dac2c2',fontSize: '20px'}}>
                  Welcome {reduxState?.signInDetails?.userDetails.name}
                </div>
                <Button color="inherit" onClick={this.gotoLogout}>
                  Logout
                </Button>
                </>
              )}
              {!reduxState?.signInDetails?.isuserLoggedIn && (
                <Button color="inherit" onClick={this.gotoLogin}>
                  Login
                </Button>
              )}
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

export default withStyles(useStyles)(
  connect((state) => {
    return { reduxState: state };
  }, null)(Header)
);
