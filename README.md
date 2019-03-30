Webpack is built as a module bundler. A module bundler takes all of our different files (javascript, less, css, jsx, es6, and so on) and turns them into a single file.
The two main benefits of modular bundling are modularity and network performance
Modularity allows you to break down your code into parts or modules, that are easier to work with, especially in a team environment.
Network performance is gained by only needing to load one dependency in the browser, the bundle. Each script tag makes an HTTP request, and there is a latency penalty for each HTTP request. Bundling all of the dependencies into a single file allows to load everything with one HTTP request, thereby avoiding additional latency.
Aside from transpiling, webpack also can handle:
- Code Splitting
- Minification
- Feature flagging
- Hot Module Replacement (HMR)

A loader is a function that handles the transformations that we want to put our code through during the build process. If our application uses es6, jsx, coffescript, and other languages that can't be read natively by the browser, we'll specify the necessary loaders in the webpack.config.js file to do the work of converting the code into syntax that can be read natively by the browser.

