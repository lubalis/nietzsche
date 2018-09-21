import React from 'react';
import styled, {css} from 'styled-components';

const styleLargeTitle = css`
  font-weight: 400;
  height: 100px;
  line-height: 100px;
  font-size: 1.5em;

  @media screen and (min-width: 600px) {
    height: 150px;
    line-height: 150px;
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
  height: 80px;
  line-height: 80px;
  font-size: 1.25em;

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
  text-align: center;
  text-transform: uppercase;
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