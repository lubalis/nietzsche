import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import Section from './Section'

const StyledSection = styled(Section)`
  background-color: #333333;
  padding: 1% 0%;

  @media screen and (min-width: 600px) {
    background-color: white;
  }
`

const PlayerContainer = styled.div`
  position: relative;
  margin: 4%;
  padding-top: 56.25%;

  @media screen and (min-width: 1200px) {
    margin: 6%;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const VideoSection = (props) => (
  <StyledSection>
    <PlayerContainer>
      <ReactPlayer 
        className='react-player'
        controls 
        url={props.url}
        width='100%'
        height='100%'
        />
    </PlayerContainer>
  </StyledSection>
)

export default VideoSection;