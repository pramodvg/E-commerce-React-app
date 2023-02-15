import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
const Login = () => {
  const clientId =
    "393197428000-rbjrbjf7k431k4ra52dvrivatpqr59bn.apps.googleusercontent.com";
  const onSuccess = (response) => {
    console.log("Login Success: currentUser:", response.profileObj);
  };

  const onFailure = (response) => {
    console.log("Login Failed:", response);
  };

  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({
        client_id: clientId,
      });
    });
  });
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
