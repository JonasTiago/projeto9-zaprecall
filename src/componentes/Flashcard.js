import { useState } from "react"
import styled from "styled-components";
import play from '../assets/img/play-outline-icon.svg';
import setar from '../assets/img/setinha.png'

export default function Flashcard({ pergunta, respost }) {
    const estados = ['Pergunta', pergunta, respost, 'Pergunta']
    const [card, setCard] = useState(0)
    const img = [play, setar];


    function test() {
        setCard(card + 1)
    }

    return (
        <Card teste={card}>
            <p>{estados[card]}</p>
            <div>
                <img src={img[card]} alt="" onClick={() => test()} />
            </div>
        </Card>
    )
};

const Card = styled.div`

    width: 300px;
    height: 50px;
    display: flex;
    padding: ${props => props.teste === 0 || props.teste === 3 ? '20px 10px' : '20px 10px'};
    flex-direction: ${props => props.teste === 0 || props.teste === 3 ? 'initial' : 'column'};
    min-height: ${props => props.teste === 0 || props.teste === 3 ? 'initial' : '130px'};
    justify-content: space-between;
    align-items: ${props => props.teste === 0 || props.teste === 3 ? 'center' : 'initial'};
    background-color: ${props => props.teste === 0 || props.teste === 3 ? 'white' : 'var(--cor-fundo-card)'};
    color: black;
    border-radius: 5px;
    margin: 15px 0px;
    padding: ${props => props.teste === 0 || props.teste === 3 ? '10px 10px' : '20px 10px'};
    font-family: 'Recursive', cursive;

    img {
        width: 23px;
        height: 23px;
    }
    
    div {
        ${props => props.teste === 0 || props.teste === 3 ? '' :
        `width: 100%;
        display: flex;
        justify-content: flex-end;`};
    }
`;

/*
const Resposta = styled(CardAberto)`
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`*/