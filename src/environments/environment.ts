// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  rootUrl: 'http://backend.portapeople.net',
  // rootUrl: 'http://192.168.1.43:8080',
  // rootUrl: 'https://backend.hubnsub.com',
  // rootUrl: 'http://192.168.1.43:8080',
  // rootUrl: 'http://127.0.0.1:8000',
  pusher: {
    key: 'a81d0c41713cb9390b15',
  }
};
