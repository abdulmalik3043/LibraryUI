export const oktaConfig = {
    clientId: '0oaexrmwx6n3Ev32o5d7',
    issuer: 'https://dev-09232965.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}