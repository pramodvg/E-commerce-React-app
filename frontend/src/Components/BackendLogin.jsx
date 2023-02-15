import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GoogleLogin } from "react-google-login";
const BackendLogin = () => {
  const clientId =
    "197417859325-ukreq47f4kgfga9e7v3m7q7ts522aa7n.apps.googleusercontent.com";
  const onSuccess = (response) => {
    console.log("Login Success: currentUser:", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("Login Failed:", response);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <Button
              variant="contained"
              color="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login with Google
            </Button>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default BackendLogin;
