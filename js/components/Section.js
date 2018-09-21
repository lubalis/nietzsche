import styled from 'styled-components';

const Section = styled.div`
  border-style: solid;
  border-color: #000000;
  border-width: 3px;
  
  @media screen and (min-width: 600px) {
    border-width: 5px;
  }

  @media screen and (min-width: 1200px) {
    border-width: 7px;
  }
`

export default Section;