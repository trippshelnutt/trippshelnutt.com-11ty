# trippshelnutt.com

### About This Repository

Project for [my landing site](https://trippshelnutt.com) - built with the following:
- Eleventy
- Tailwindcss
- Netlify (hosting)

### Build and Run

The following command will build and run the site.
```console
$ npm run watch
```

If you just want to build the site.
```console
$ npm run build
```

If you just want to build the site for production.
```console
$ npm run build --production
```

### File Structure

This should be a pretty comprehensive list of the file structure of the site along with the uses for each file.
- _data
  - *.json
    - Each of these files are used to store data for different collections in the website. For example, `jobData` can be accessed in a `for` statement like so:
    ```
    {% for j in jobData %}
    ```
    From there it is accessed using the object structure defined in the `json` file.
- .eleventy.js
  - Configuration file for Eleventy. Specifies special files to watch for css and some other files that should be straight passthrough for the site.
- .eleventyignore
  - Special ignore configuration for Eleventy.
- .node-version
  - This is needed to specify the correct Node version that is needed for Netlify deployment.
- css
  - custom.css
    - This site contains the Tailwind CSS used in the main site.
  - resume.css
    - This site contains the Tailwind CSS used in the resume page.
- index.html
  - Main html page for the website.
- resume
  - Html for the resume page and PDF version of my resume.
- netlify.toml
  - Configuration for Netlify build which specifies building with Node in production mode.
- package.json
  - Standard `package.json` file that also includes run targets for build and development.
- postcss.config.js
  - This is the configuration file for postcss which specifies the includes needed to bring in Tailwind.
- tailwind.config.js
  - This is the configuration file for Tailwind.
