import { useState } from "react";
import styled from "styled-components";
import play from '../assets/img/play.svg';
import setar from '../assets/img/setinha.svg';
import zap from '../assets/img/zap.svg';
import errada from '../assets/img/erro.svg';
import quase from '../assets/img/quase.svg';

export default function Flashcard({ pergunta, resposta, ind, openQ, setCardOpen, resultado }) {
    const estado = [`Pergunta ${ind + 1}`, pergunta, resposta, `Pergunta ${ind + 1}`]
    const img = [play, setar, setar, { zap: zap, errada: errada, quase: quase }];
    const [card, setCard] = useState(0)

    function test(ind) {
        setCard(card + 1)
        setCardOpen(ind)
    }

    return (
        <Card teste={openQ.includes(ind) ? card + 1 : card}
            res={resultado.filter(i => i.id === ind)}>
            <p>{estado[openQ.includes(ind) ? card + 1 : card]}</p>
            <div>
                <img src={openQ.includes(ind) ?
                    img[card + 1][resultado.filter(i => i.id === ind)[0].respo]
                    : img[card]}
                    alt=""
                    onClick={() => test(ind)} />
            </div>
        </Card>
    )
};

const Card = styled.div`
    width: 300px;
    height: 65px;
    display: flex;
    font-size: ${props => props.teste === 0 || props.teste === 3 ? '16px' : '18px'};
    padding: ${props => props.teste === 0 || props.teste === 3 ? '25px 10px' : '20px 15px 5px 15px'};
    flex-direction: ${props => props.teste === 0 || props.teste === 3 ? 'initial' : 'column'};
    min-height: ${props => props.teste === 0 || props.teste === 3 ? 'initial' : '130px'};
    justify-content: space-between;
    align-items: ${props => props.teste === 0 || props.teste === 3 ? 'center' : 'initial'};
    background-color: ${props => props.teste === 0 || props.teste === 3 ? 'white' : 'var(--cor-fundo-card)'};
    text-decoration: ${props => props.teste === 3 ? 'line-through' : ''};
    color: ${props => props.teste === 0 || props.teste === 1 || props.teste === 2
        ? 'black'
        : (props.res[0].respo === 'errada' ? 'var(--cor-nao-lembrei)' :
            (props.res[0].respo === 'quase' ? 'var(--cor-quase-nao-lembrei)' : 'var(--cor-zap);'))};
    border-radius: 5px;
    margin: 20px 0px;
    font-family: 'Recursive', cursive;
    font-weight:${props => props.teste === 0 || props.teste === 3 ? '700' : '400'};

    p{ 
        width:100%;
    }

    img {
        width: 23px;
        height: 23px;
        color:red;
    }
    
    div {
        ${props => props.teste === 2 ? 'display: none' :
        `width: 100%;
        display: flex;
        justify-content: flex-end;`}
        ;
    }
`;

/*
        color: ${props => props.teste === 0 || props.teste === 1 || props.teste === 2
        ? ''
        : (props.res[0].respo === 'errada' ? 'var(--cor-nao-lembrei)' :
            (props.res[0].respo === 'quase' ? 'var(--cor-quase-nao-lembrei)' : 'var(--cor-zap);'))};
    */