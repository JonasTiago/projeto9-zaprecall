import styled from "styled-components"
import Flashcard from "./Flashcard"

export default function Main({deck, openQ, setCardOpen, resultado}) {
    return (
        <DeckMain>
            {deck.map((flashCard, index) => <Flashcard key={index} pergunta={flashCard.Q}
                resposta={flashCard.R}
                ind={index}
                openQ={openQ}
                setCardOpen={setCardOpen}
                resultado={resultado}
            />)
            }
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