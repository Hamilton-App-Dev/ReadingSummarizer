import auth0 from 'auth0-js';

export const webAuth = new auth0.WebAuth({
  domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
  clientID: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
  responseType: `${process.env.REACT_APP_AUTH0_RESPONSE_TYPE}`,
  redirectUri: `${process.env.REACT_APP_REDIRECT_URL}`,
  responseMode: `${process.env.REACT_APP_AUTH0_RESPONSE_MODE}`,
  scope: 'openid profile email offline_access'
});