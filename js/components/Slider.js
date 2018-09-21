import React, {Fragment} from 'react'
import styled from 'styled-components'
import leftArrow from '../../images/left-arrow.svg'
import rightArrow from '../../images/right-arrow.svg'
import rightArrowCircular from '../../images/right-arrow-circular.svg'

import bookArray from '../bookArray'

const StyledDiv = styled.div`
  padding-top: 7.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledArrow = styled.img`
  width: 7%;
  height: 7%;
`

const StyledBookImg = styled.img`
  max-width: 60%;
  @media screen and (min-width: 1200px){
    max-width: 80%;
  }
`

const StyledPriceDiv = styled.div`
  padding: 5%;
  margin: auto;
  max-width: 240px;
  color: #232eb4;
  text-align: center;
  font-size: 1.5em;

  @media screen and (min-width: 600px){
    font-size: 1.75em;
    max-width: 380px;
  }
  @media screen and (min-width: 1200px){
    font-size: 2.25em;
  }
  
`

const StyledButton = styled.button`
  margin: 5% 0%;
  width: 100%;
  padding: 5% 0%;
  border: solid 3px #f6ea5e;
  border-radius: 5px;
  font-size: 1em;
  background-color: #f6ea5e;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  :focus {
    outline: none;
  }

  img {
    margin: 5px;
    width: 28px;
    height: 28px;
  }
`

class Slider extends React.Component {
  state = {
    bookIndex: 0
  }

  clickNext = () => {
    let newBookIndex = this.state.bookIndex
    newBookIndex = (newBookIndex === 7) ? 0 : newBookIndex+1
    this.setState({
      bookIndex: newBookIndex,
    })
  }

  clickPrev = () => {
    let newBookIndex = this.state.bookIndex
    newBookIndex = (newBookIndex === 0) ? 7 : newBookIndex-1
    this.setState({
      bookIndex: newBookIndex,
    })
  }

  clickBuy = (index) => {
    window.open(bookArray[index].link, '_blank');
  }

  render() {
    return (
      <Fragment>
        <StyledDiv>
          <StyledArrow src={leftArrow} onClick={this.clickPrev}/>
          <StyledBookImg src={bookArray[this.state.bookIndex].img}/>
          <StyledArrow src={rightArrow} onClick={this.clickNext}/>
        </StyledDiv>
        <StyledPriceDiv>
          CENA {bookArray[this.state.bookIndex].price} PLN
          <StyledButton onClick={() => this.clickBuy(this.state.bookIndex)}>
            KUP TERAZ
            <img src={rightArrowCircular}></img>
          </StyledButton>
        </StyledPriceDiv>
      </Fragment>
    )
  }
}

export default Slider;