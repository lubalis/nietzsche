import React from 'react'
import ParaAndImgSection from '../components/ParaAndImgSection'

import good from '../../images/good.png'

const NihilismSection = () => (
  <ParaAndImgSection
    title = 'Śmierć Boga i Nihilizm'
    firstParagraph = 'Gott ist tot – Bóg umarł. Zdaniem Nietzschego, człowiek współczesny przestał odczuwać obecność Boga w świecie, w odróżnieniu od ludzi żyjących w starożytności czy choćby w średniowieczu. W owych czasach czyny człowieka pociągały za sobą prędką reakcję Boga w życiu doczesnym, Boga należało się bać tu i teraz. Dziś każdy może liczyć na jego miłosierdzie – rozważa się problem, czy piekło w ogóle istnieje. Komu potrzebny jest jeszcze taki Bóg? Dlatego musiał on przenieść się w sferę abstrakcji, odejść w zapomnienie. Jest jeszcze, lecz jako martwy.'
    secondParagraph = 'Stąd bierze się nihilizm – udawanie, że nic się nie stało, zaprzeczanie, że istnieją jakiekolwiek problemy. Nihilizm w rozumieniu Nietzschego to akceptacja pozorów, uznanie za wartość tego, co jest już bez-wartością. Łatwe i wygodne życie, przyjemne i pozbawione napięcia. Tak rozumiany nihilizm jest wrogi życiu, bo domaga się wpasowania w obowiązujący system norm oparty na moralności niewolniczej.'
    img={good}
  />
)

export default NihilismSection;