# Academy FE boilerplate

This is a lean CSS (and maybe one day JS) framework to help get you going with your Picnic App.

See the next section for using this framework, or check out the examples [here](https://siimonevans.github.io/academy-fe/academy-fe/pages/components.html).

## Using this framework in your project

1. Add the following code to your `<head>`

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Open+Sans"
/>
```

2. If you haven't already, follow Django's documentation to [configure and serve static files](https://docs.djangoproject.com/en/4.2/howto/static-files/) (be sure to check which version of Django you're using and use the right documentation version)

3. Copy the raw CSS code [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/css/academy-fe.css) and save it to a new file within your static directory named `academy-fe.css`

4. Add a reference in your `<head>` linking to the CSS file

```html
<link rel="stylesheet" type="text/css" href="{% static 'academy-fe.css' %}" />
```

5. Create a new CSS file named `main.css` and save it to a new file within your static directory

6. Add a reference in your `<head>` linking to the `main.css` file

```html
<link rel="stylesheet" type="text/css" href="{% static 'main.css' %}" />
```

You can then use this file to add your own custom CSS

7. Copy the raw JS code [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/js/academy-fe.js) and save it to a new file within your static directory named `academy-fe.js`

8. Add a reference just above your closing `</body>` tag linking to the JS file

```html
<script src="{% static 'academy-fe.js' %}"></script>
```

## Got an improvement? Run it locally

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

## Compiled files

- CSS [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/css/academy-fe.css)

- JS [here](https://raw.githubusercontent.com/siimonevans/academy-fe/master/academy-fe/static_compiled/js/academy-fe.js)
