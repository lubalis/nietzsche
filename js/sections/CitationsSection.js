import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'
import Title from '../components/Title'

import nietzsche from '../../images/nietzsche.png'

const StyledSection = styled(Section)`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 600px) {
    grid-template-columns: minmax(300px, 6fr) 5fr;
  }
`

const StyledCitation = styled.div`
  color: white;
  text-align: center;
  font-weight: 300;
  padding-left: 8%;
  padding-right: 8%;
  font-size: 1em;
  line-height: 1.4em;
  padding-bottom: 10%;
  
  @media screen and (min-width: 600px) {
    font-size: 1.2em;
    line-height: 1.3em;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.875em;
    line-height: 1.2em;
    padding-bottom: 12%;
  }
`

const StyledImg = styled.img`
  width: 100%;
  align-self: center;
`

const CitationsSection = () => (
  <StyledSection>
    <div>
      <Title large>Wybrane cytaty</Title>
      <StyledCitation>"Bóg jest martwy"</StyledCitation>
      <StyledCitation>"Jeśli zbyt długo patrzysz w czeluść, czeluść zaczyna patrzeć na ciebie"</StyledCitation>
      <StyledCitation>"Małżeństwa bywają nieszczęśliwe nie z braku miłości, ale z braku przyjaźni"</StyledCitation>
      <StyledCitation>"Kiedy widzisz ze zwycięża prawda, zawsze pytaj, jakie potężne kłamstwo z nią walczyło"</StyledCitation>
    </div>
    <StyledImg src={nietzsche} alt=""></StyledImg>
  </StyledSection>
)

export default CitationsSection;