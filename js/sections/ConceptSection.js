import React from 'react'
import styled from 'styled-components'

import Section from '../components/Section'
import Title from '../components/Title'
import FullParagraph from '../components/FullParagraph'

import statue from '../../images/statue.png'

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
  max-width: 50%;
  grid-column: 2/3;

  @media screen and (min-width: 600px) {
    justify-self: end;
    grid-column: 3/5;
    max-width: 100%;
  }
`

const ConceptSection = () => (
  <Section>
    <Title large>Koncepcja nadczłowieka</Title>
    <StyledGridDiv>
      <StyledMainParagraph>
        Również koncepcji nadczłowieka (niem. Übermensch) Nietzsche nie zdążył wypracować w jasnej formie. Pojawia się ona jedynie w zarysie i pod postacią metafor w Zaratustrze i Woli mocy[18]. Niektóre jej interpretacje odwołują się do nauki o wiecznym powrocie i przedstawiają nadczłowieka jako istotę, która może zaakceptować wieczny powrót. Oznacza to pełną zgodę na powtarzalność całej historii własnej osoby i świata, włącznie z wszelkimi dokonanymi w niej gwałtami i mordami, ale i pełnią twórczej ekstazy. Trudno jednak wydać zgodę na gwałty, wartościując czyny z punktu widzenia powszechnie przyjmowanych zasad moralnych – aby to uczynić należałoby wpierw dokonać przewartościowania wartości w duchu nietzscheańskim.
      </StyledMainParagraph>
      <StyledSmallParagraph>
        Koncepcję tę częściowo wykorzystali naziści: oczywiście pojmując ją odpowiednio do swoich celów, nie zawsze zgodnie z pierwotną myślą Nietzschego. Doprowadziło to do stworzenia terminów „czystość rasowa” i „podczłowiek”, których sam filozof nigdy nie użył, choć w okresie hitlerowskim uznane były one za naturalną konsekwencję nietzscheańskich tez.
      </StyledSmallParagraph>
      <StyledImg src={statue} alt=""></StyledImg>
    </StyledGridDiv>
  </Section>
)

export default ConceptSection;