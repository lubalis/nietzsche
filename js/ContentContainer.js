import React from 'react'
import styled from 'styled-components'

import IntroSection from './sections/IntroSection'
import BasicSection from './sections/BasicsSection'
import CitationsSection from './sections/CitationsSection'
import ConceptSection from './sections/ConceptSection'
import NihilismSection from './sections/NihilismSection'
import FirstVideoSection from './sections/FirstVideoSection'
import SecondVideoSection from './sections/SecondVideoSection'
import ProductsSection from './sections/ProductsSection'


const StyledContainer = styled.div`
  margin: auto;
  width: 100%;  
  
  @media screen and (min-width: 600px) {
    width: 80%;  
  }

  @media screen and (min-width: 1300px) {
    width: 1183px;
  }
`

const ContentContainer = () => (
  <StyledContainer>
    <IntroSection/>
    <BasicSection/>
    {/* <CitationsSection/>
    <ConceptSection/>
    <FirstVideoSection/>
    <NihilismSection/>
    <SecondVideoSection/> */}
    <ProductsSection/>
  </StyledContainer>
)

export default ContentContainer;