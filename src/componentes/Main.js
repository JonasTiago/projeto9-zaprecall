
import styled from "styled-components"
import Flashcard from "./Flashcard"

export default function Main(){
    const deck = [
        { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
        { Q: 'O React é __', R: 'uma biblioteca JavaScript para construção de interfaces' },
        { Q: 'Componentes devem iniciar com __', R: 'letra maiúscula' },
        { Q: 'Podemos colocar __ dentro do JSX', R: 'expressões' },
        { Q: 'O ReactDOM nos ajuda __', R: 'interagindo com a DOM para colocar componentes React na mesma'},
        { Q: 'Usamos o npm para __', R: 'gerenciar os pacotes necessários e suas dependências'},
        { Q: 'Usamos props para __', R: 'passar diferentes informações para componente'},
        { Q: 'Usamos estado (state) para __', R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ]

    return (
        <DeckMain>
            {deck.map((flash) => <Flashcard pergunta={flash.Q} respost={flash.R} />)}
        </DeckMain>
    )
}

const DeckMain = styled.div`
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
}
` 