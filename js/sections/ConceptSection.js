import React from 'react'
import ParaAndImgSection from '../components/ParaAndImgSection'

import statue from '../../images/statue.png'


const ConceptSection = () => (
  <ParaAndImgSection
    title = 'Koncepcja nadczłowieka'
    firstParagraph = 'Również koncepcji nadczłowieka (niem. Übermensch) Nietzsche nie zdążył wypracować w jasnej formie. Pojawia się ona jedynie w zarysie i pod postacią metafor w Zaratustrze i Woli mocy[18]. Niektóre jej interpretacje odwołują się do nauki o wiecznym powrocie i przedstawiają nadczłowieka jako istotę, która może zaakceptować wieczny powrót. Oznacza to pełną zgodę na powtarzalność całej historii własnej osoby i świata, włącznie z wszelkimi dokonanymi w niej gwałtami i mordami, ale i pełnią twórczej ekstazy. Trudno jednak wydać zgodę na gwałty, wartościując czyny z punktu widzenia powszechnie przyjmowanych zasad moralnych – aby to uczynić należałoby wpierw dokonać przewartościowania wartości w duchu nietzscheańskim.'
    secondParagraph = 'Koncepcję tę częściowo wykorzystali naziści: oczywiście pojmując ją odpowiednio do swoich celów, nie zawsze zgodnie z pierwotną myślą Nietzschego. Doprowadziło to do stworzenia terminów „czystość rasowa” i „podczłowiek”, których sam filozof nigdy nie użył, choć w okresie hitlerowskim uznane były one za naturalną konsekwencję nietzscheańskich tez.'
    img={statue}
  />
)

export default ConceptSection;