import React from 'react'
import styled from 'styled-components'

import BasicSection from './sections/BasicsSection'
import CitationsSection from './sections/CitationsSection'

import platon from '../images/platon.png'

const StyledContainer = styled.div`
  margin: auto;
  width: 100%;  
  height: 2000px;
  
  @media screen and (min-width: 600px) {
    width: 80%;  
  }

  @media screen and (min-width: 1300px) {
    width: 1183px;
  }
`

const StyledSpanName = styled.div`
  width: 45%;
  padding-top: 5%;
  padding-left: 4%;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.25em;

  @media screen and (min-width: 600px) {
    padding-left: 0%;
    padding-top: 10%;
    font-size: 2em;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 15%;
    font-size: 3em;
    line-height: 4rem;
  }  
`

const StyledSpanProfession = styled.div`
  padding-top: 2.5%;
  padding-left: 4%;
  width: 35%;
  color: white;
  font-weight: 400;
  font-size: 1em;

  @media screen and (min-width: 600px) {
    padding-left: 0%;
    font-size: 1.5em;
  }

  @media screen and (min-width: 1200px) {
    font-size: 2em;
    line-height: 2.375rem;
  } 
`

const StyledImg = styled.img`
  padding-top: 5%;
  padding-left: 4%;
  max-width: 12%;

  @media screen and (min-width: 600px) {
    padding-left: 0%;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 6%;
    max-width: 20%;
  }

  @media screen and (min-width: 1600px) {
    padding-top: 12.5%;
    max-width: 25%;
  }
`

const ContentContainer = () => (
  <StyledContainer>
    <StyledSpanName>Friedrich Wilhelm Nietzsche</StyledSpanName>
    <StyledSpanProfession>filozof, filolog klasyczny, prozaik i poeta</StyledSpanProfession>
    <StyledImg src={platon} alt=""></StyledImg>
    <BasicSection/>
    <CitationsSection/>
  </StyledContainer>
)

export default ContentContainer;