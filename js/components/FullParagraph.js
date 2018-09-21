import styled from 'styled-components';

const FullParagraph = styled.p`
  font-size: 0.9em;
  padding: 4% 4%;
  line-height: 1.4em;
  
  @media screen and (min-width: 600px) {
    font-size: 1em;
    line-height: 1.3em;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.875em;
    line-height: 1.2em;
    padding: 4% 8%;
  }
`

export default FullParagraph;