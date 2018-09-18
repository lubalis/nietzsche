import React from 'react';
import {injectGlobal} from 'styled-components';
import reset from 'styled-reset';

injectGlobal`
  ${reset};
`

const App = () => (
  <h1>
    Hello, World!
  </h1>
)

export default App;