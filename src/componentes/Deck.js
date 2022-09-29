import styled from 'styled-components';
import Main from "./Main";
import Header from './Header';
import logo from '../assets/img/logo-pequeno.png'
import Footer from './Footer'
import { useState } from 'react';

export default function Deck() {
  const deck = [
    { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
    { Q: 'O React é __', R: 'uma biblioteca JavaScript para construção de interfaces' },
    { Q: 'Componentes devem iniciar com __', R: 'letra maiúscula' },
    { Q: 'Podemos colocar __ dentro do JSX', R: 'expressões' },
    { Q: 'O ReactDOM nos ajuda __', R: 'interagindo com a DOM para colocar componentes React na mesma' },
    { Q: 'Usamos o npm para __', R: 'gerenciar os pacotes necessários e suas dependências' },
    { Q: 'Usamos props para __', R: 'passar diferentes informações para componente' },
    { Q: 'Usamos estado (state) para __', R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }
  ]
  const [openQ, setOpenQ] = useState([])
  const [cardOpen, setCardOpen] = useState()
  const [resultado, setResultado] = useState([])

  function testResult(userResp) {
    setOpenQ([...openQ, cardOpen])
    setCardOpen()
    setResultado([...resultado, {id:cardOpen, respo:userResp}])
    
  }

  return (
    <Fragments>
      <Header logo={logo} alt={'logotipo'} />
      <Main 
        deck={deck}
        openQ={openQ}
        setCardOpen={setCardOpen}
        resultado={resultado}
      />
      <Footer
        testResult={testResult}
        numeroPerguntas={deck.length}
        numeroResposta={openQ.length}
      />
    </Fragments>

  )
}

const Fragments = styled.div`
    display: flex;
    flex-direction: column;
`


