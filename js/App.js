import React, {Fragment} from 'react'
import styled, {injectGlobal} from 'styled-components'
import reset from 'styled-reset'

import Title from './components/Title'
import ContentContainer from './ContentContainer'

import backgroundImg from '../images/background.png'


injectGlobal`
  ${reset};
  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }
`
const StyledBackground = styled.div`
  width: 100vw;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
`

const App = () => (
  <Fragment>
    <Title>Karta Nietzschego</Title>
    <StyledBackground>
      <ContentContainer/>
    </StyledBackground>
  </Fragment>
)

export default App;