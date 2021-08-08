import React from 'react';
import ReactDOM from 'react-dom';
import {getLCP, getFID, getCLS} from 'web-vitals/base';

getLCP(console.log);

const App = () => {
  return (
    <h1>App</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
