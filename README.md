# Webpack Learning

This is a small repo I created to play around with Webpack and related JS things, just to get my head around them.

I'm trying to keep the [commit history](https://github.com/notahat/webpack_learning/commits/master) clean so you can follow along at home.

To use this, run `npm install`, then `npm start` and visit http://localhost:8080/webpack-dev-server/

The resulting toy site has the following features:
- Hot reloading (Webpack's dev server does this for you)
- ES2015 supported (via [Babel](https://babeljs.io/))
- Source maps, so you see the ES2015 source with correct line numbers in your Chrome dev tools

(Note that source map support in Chrome has to be [turned on](https://developer.chrome.com/devtools/docs/settings#enable-js source maps).)
