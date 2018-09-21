import React from 'react';
import styled, {css} from 'styled-components';

const styleLargeTitle = css`
  font-weight: 400;
  font-size: 1.5em;
  padding-left: 8%;

  @media screen and (min-width: 600px) {
    height: 120px;
    line-height: 120px;
    font-size: 2em;
  }

  @media screen and (min-width: 1200px) {
    height: 200px;
    line-height: 200px;
    font-size: 3em;
  }
`

const styleSmallTitle = css`
  font-weight: 600;
  font-size: 1.25em;
  padding-left: 0%;
  text-align: center;

  @media screen and (min-width: 600px) {
    height: 100px;
    line-height: 100px;
    font-size: 1.75em;
  }

  @media screen and (min-width: 1200px) {
    height: 150px;
    line-height: 150px;
    font-size: 2.5em;
  }
`

const StyledTitle = styled.div`
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  height: 80px;
  line-height: 80px;
  ${props => props.large ? styleLargeTitle : styleSmallTitle}
`

const Title = (props) => {
  const {large, children} = props;
  
  return (
    <StyledTitle large={large}>
      {children}
    </StyledTitle>
  )
}
  

export default Title;