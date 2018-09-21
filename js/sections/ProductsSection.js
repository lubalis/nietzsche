import React from 'react'

import Section from '../components/Section'
import Title from '../components/Title'
import FullParagraph from '../components/FullParagraph'
import Slider from '../components/Slider'

const ProductsSection = () => (
  <Section>
    <Title large>Twórczość</Title>
    <FullParagraph>
      W jego twórczości można wyróżnić trzy zasadnicze okresy. Pierwszy nazywany jest kultem sztuki. Wtedy to był on pod wielkim wpływem muzyki Wagnera. Napisał wówczas Narodziny tragedii (Die Gebert der Tragoedie) z 1869 roku oraz Niewczesne rozważania (Unzeitgemaesse Betrachtungen) w 1872 roku. Drugi okres nazywany jest dziś kultem nauki. Największy wpływ na filozofia miała wówczas teoria Darwina. Napisał on wtedy Ludzkie, arcyludzkie (Menschliches, Allzumenschliches) w 1878 roku, Jutrzenka (Morgenroethe) w 1881 roku i Wiedza radosna (Froehliche Wissenschaft) w 1882 roku. Trzeci okres to kult życia, siły i indywidualności. Z tego okresu pochodzą dzieła: Tako rzecze Zaratustra (Also sprach Zarathustra) w 1884 roku, Poza dobrem i złem (Jenseits von Gut und Boese) w 1886 roku oraz Z genealogii moralności (Zur Genealogie der Moral) w 1887 roku. Już po śmierci filozofa ukazało się jeszcze jedno jego dzieło – Ecce homo w 1908 roku.
    </FullParagraph>
    <Slider/>
  </Section>
)

export default ProductsSection;