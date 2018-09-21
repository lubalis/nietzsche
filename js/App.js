import React, {Fragment} from 'react';
import {injectGlobal} from 'styled-components';
import reset from 'styled-reset';

import Title from './components/Title'

injectGlobal`
  ${reset};
  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }
`

const App = () => (
  <Fragment>
    <Title>Karta Nietzschego</Title>
  </Fragment>
)

export default App;