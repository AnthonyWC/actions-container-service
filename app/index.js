const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

require('./index.css');

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

