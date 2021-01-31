import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import {ValidationSchemaLogin} from "./../Util/ValidationSchema";
import SignUpStyle from "../Styles/SignUpStyle";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Login_R=() =>{
  const history = useHistory();
  //const signInDetails = useSelector(state => state.signInDetails);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: ValidationSchemaLogin,
    onSubmit: (values) => {
      var data = {isuserLoggedIn:true, userDetails:values};
      dispatch({ type: 'LOGIN_USER', payload:data });
    },
  });

  const classes = SignUpStyle();

  return (
    <div>
      <Header history={history} />
      <Container component="div" maxWidth="xs">
        <div className={classes.root}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="User Name"
                  autoFocus
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.name && Boolean(formik.errors.name)
                  }
                  helperText={
                    formik.touched.name && formik.errors.name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              
            </Grid>
               <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
              </Grid>
           </form>
        </div>
      </Container>
    </div>
  );
}

export default Login_R;