import { useCallback } from "react";

const Login = () => {
  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    let redirectUri = `${process.env.REACT_APP_BASE_BACKEND_URL}${process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URI}`;

    const params = {
      response_type: "code",
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: redirectUri,
      prompt: "select_account",
      access_type: "offline",
      scope,
    };

    const urlParams = new URLSearchParams(params).toString();

    window.location = `${googleAuthUrl}?${urlParams}`;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" />
        <label htmlFor="email">Password</label>
        <input id="password" />
        <input type="submit" value="Login" />
      </form>
      or
      <br />
      <button onClick={openGoogleLoginPage}>Login with google</button>
    </div>
  );
};

export default Login;
