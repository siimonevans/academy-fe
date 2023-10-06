# Academy FE boilerplate

This is a lean CSS (and maybe one day JS) framework to help get you going with your Picnic App.

## Using this framework in your project

1. Add the following code to your `<head>`

```
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
```

2. Copy the raw code [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/css/main.css) and save it to a new file within your project named `main.css`. Add another reference in your `<head>` linking to the file

```
<link rel="stylesheet" type="text/css" href="../path/to/file/main.css">
```

## Running it locally for improving the framework

Clone the repo, and in the root dir:

```bash

# Use correct node version

nvm  use

# Install dependencies

npm  i

# Start the Webpack build in watch mode, without live-reload.

npm  run  start

# Start the Webpack server build on port 3000 only with live-reload.

npm  run  start:reload

# Do a one-off Webpack development build.

npm  run  build

# Do a one-off Webpack production build.

npm  run  build:prod

```

## Compiled files

- CSS [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/css/main.css)

- JS [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/js/main.js)
