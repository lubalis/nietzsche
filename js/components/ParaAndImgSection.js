import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import Title from './Title'
import FullParagraph from './FullParagraph'

const StyledGridDiv = styled.div`
  display: grid;
  grid-template-columns: 8% 84% 8%;

  @media screen and (min-width: 600px) {
    grid-template-columns: 8% 58% 26% 8%;
  }
`

const StyledMainParagraph = styled(FullParagraph)`
  padding: 0;
  padding-top: 4%;
  grid-column: 2/3;

  @media screen and (min-width: 600px) {
    grid-column: 2/4;
  }
`

const StyledSmallParagraph = styled(FullParagraph)`
  padding: 0;
  padding-top: 4%;
  padding-bottom: 4%;
  grid-column: 2/3;
`

const StyledImg = styled.img`
  align-self: end;
  justify-self: center;
  max-width: 75%;
  grid-column: 2/3;

  @media screen and (min-width: 600px) {
    justify-self: end;
    grid-column: 3/5;
    max-width: 100%;
  }
`

const ParaAndImgSection = (props) => {
  const {title, firstParagraph, secondParagraph, img} = props;

  return (
    <Section>
      <Title large>{title}</Title>
      <StyledGridDiv>
        <StyledMainParagraph>{firstParagraph}</StyledMainParagraph>
        <StyledSmallParagraph>{secondParagraph}</StyledSmallParagraph>
        <StyledImg src={img} alt=""></StyledImg>
      </StyledGridDiv>
    </Section>
  )
}

export default ParaAndImgSection;