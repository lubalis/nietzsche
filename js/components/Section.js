import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-style: solid;
  border-color: #000000;
  border-width: 0px;
  
  
  @media screen and (min-width: 600px) {
    border-width: 4px;
    margin-bottom: 4%;
  }

  @media screen and (min-width: 1200px) {
    border-width: 7px;
  }
`

const Section = (props) => <StyledDiv className={props.className}>{props.children}</StyledDiv>

export default Section;