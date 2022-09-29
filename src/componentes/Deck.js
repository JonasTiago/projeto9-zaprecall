import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from "./Main";
import Footer from './Footer'
import logo from '../assets/img/logo-pequeno.png'

export default function Deck() {
  const deck = [{ Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
  { Q: 'O React é __', R: 'uma biblioteca JavaScript para construção de interfaces' },
  { Q: 'Componentes devem iniciar com __', R: 'letra maiúscula' },
  { Q: 'Podemos colocar __ dentro do JSX', R: 'expressões' },
  { Q: 'O ReactDOM nos ajuda __', R: 'interagindo com a DOM para colocar componentes React na mesma' },
  { Q: 'Usamos o npm para __', R: 'gerenciar os pacotes necessários e suas dependências' },
  { Q: 'Usamos props para __', R: 'passar diferentes informações para componente' },
  { Q: 'Usamos estado (state) para __', R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }];

  const [openQ, setOpenQ] = useState([])
  const [cardOpen, setCardOpen] = useState()
  const [resultado, setResultado] = useState([])

  function testResult(userResp) {
    setOpenQ([...openQ, cardOpen])
    setCardOpen()
    setResultado([...resultado, { id: cardOpen, respo: userResp }])
    setStep(0)
  }

  return (
    <Screen>
      <Header logo={logo} alt={'logotipo'} />
      <Main
        deck={deck}
        openQ={openQ}
        setCardOpen={setCardOpen}
        cardOpen={cardOpen}
        resultado={resultado}
        setStep={setStep}
      />
      <Footer
        testResult={testResult}
        numeroPerguntas={deck.length}
        numeroResposta={openQ.length}
        step={step}
      />
    </Screen>

  )
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    background-color: #FB6B6B;

`


