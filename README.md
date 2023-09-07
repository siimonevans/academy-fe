# Academy FE boilerplate

## Compiled files

- CSS [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/css/main.css)
- JS [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/js/main.js)

## Running it locally

Clone the repo, and in the root dir:

```bash
# Use correct node version
nvm use
# Install dependencies
npm i
# Start the Webpack build in watch mode, without live-reload.
npm run start
# Start the Webpack server build on port 3000 only with live-reload.
npm run start:reload
# Do a one-off Webpack development build.
npm run build
# Do a one-off Webpack production build.
npm run build:prod
```
