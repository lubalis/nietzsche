import styled from 'styled-components';

const Section = styled.div`
  border-style: solid;
  border-color: #000000;
  border-width: 0px;
  
  @media screen and (min-width: 600px) {
    border-width: 4px;
  }

  @media screen and (min-width: 1200px) {
    border-width: 7px;
  }
`

export default Section;