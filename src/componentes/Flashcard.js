import { useState } from "react";
import styled from "styled-components";
import play from '../assets/img/play.svg';
import setar from '../assets/img/setinha.svg';
import zap from '../assets/img/zap.svg';
import errada from '../assets/img/erro.svg';
import quase from '../assets/img/quase.svg';

export default function Flashcard({ pergunta, resposta, ind, openQ, setCardOpen, cardOpen, resultado, setStep}) {
    const estado = [`Pergunta ${ind + 1}`, pergunta, resposta, `Pergunta ${ind + 1}`]
    const img = [play, setar, setar, { zap: zap, errada: errada, quase: quase }];
    const [card, setCard] = useState(0)

    function test(ind) {
        setCard(card + 1)
        setCardOpen(ind)
        setStep(card + 1)
    }

    return (
        <Card fase={openQ.includes(ind) ? card + 1 : card}
            res={resultado.filter(i => i.id === ind)}  >
            <CardOf cardOp={(cardOpen === ind || cardOpen ===undefined) ? true : false}></CardOf>
            <p>{estado[openQ.includes(ind) ? card + 1 : card]}</p>
            <div>
                <img src={openQ.includes(ind) ?
                    img[card + 1][resultado.filter(i => i.id === ind)[0].respo]
                    : img[card]}
                    alt=""
                    onClick={() => test(ind)} disabled />
            </div>
        </Card>

    )
};

const CardOf = styled.section`
    ${props => props.cardOp === true ? `display:none`/*`width:0; height: 0; position: relative`*/
    :
    `position: absolute;
    width: 95%;
    height: 100%;`
    }
`

const Card = styled.div`
    position:relative;
    width: 300px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    min-height: ${props => props.fase === 0 || props.fase === 3 ? 'initial' : '130px'};
    font-size: ${props => props.fase === 0 || props.fase === 3 ? '16px' : '18px'};
    padding: ${props => props.fase === 0 || props.fase === 3 ? '25px 10px' : '20px 15px 5px 15px'};
    flex-direction: ${props => props.fase === 0 || props.fase === 3 ? 'initial' : 'column'};
    align-items: ${props => props.fase === 0 || props.fase === 3 ? 'center' : 'initial'};
    background-color: ${props => props.fase === 0 || props.fase === 3 ? 'white' : 'var(--cor-fundo-card)'};
    font-weight:${props => props.fase === 0 || props.fase === 3 ? '700' : '400'};
    text-decoration: ${props => props.fase === 3 ? 'line-through' : ''};
    color: ${props => props.fase === 0 || props.fase === 1 || props.fase === 2
        ? 'black'
        : (props.res[0].respo === 'errada' ? 'var(--cor-nao-lembrei)' :
            (props.res[0].respo === 'quase' ? 'var(--cor-quase-nao-lembrei)' : 'var(--cor-zap);'))};
    border-radius: 5px;
    margin: 20px 0px;
    font-family: 'Recursive', cursive;

    p{ 
        width:100%;
    }

    img {
        width: 23px;
        height: 23px;
        color:red;
    }

    div {
        ${props => props.fase === 2 ? 'display: none' :
        `width: 100%;
        display: flex;
        justify-content: flex-end;`}
        ;
    }
`;
