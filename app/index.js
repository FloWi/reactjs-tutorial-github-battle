var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

/* all react components must be F.I.R.S.T.
  Focused
  Independent
  Reusable
  Small
  Testable
*/

ReactDOM.render(
  routes,
  document.getElementById('app')
);
