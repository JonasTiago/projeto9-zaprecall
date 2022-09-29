import styled from "styled-components"

export default function Footer({ testResult, numeroPerguntas, numeroResposta }) {

    return (
        <Footers>
            <Action>
                <Error onClick={() => testResult('errada')}>Não lembrei</Error>
                <Almost onClick={() => testResult('quase')}>Quase não lembrei</Almost>
                <Zap onClick={() => testResult('zap')}>Zap!</Zap>
            </Action>
            <p><span>{numeroResposta <= numeroPerguntas ? numeroResposta : numeroPerguntas}</span>/<span>{numeroPerguntas}</span> CONCLUÍDOS</p>
        </Footers>
    )
}

const Footers = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    height:120px;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p{
        font-family: 'Recursive', cursive;
        font-weight: 400;
    }
`
const Button = styled.button`
    width: 80%;
    height: 40px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
    filter: brightness(0.7)
}
`
const Action = styled.div`
    display: flex;
    width: 80%;
    text-align:center;
    justify-content: space-around;
    gap: 10px;

`

const Error = styled(Button)`
    background-color: var(--cor-nao-lembrei);
`
const Almost = styled(Button)`
    background-color: var(--cor-quase-nao-lembrei);
`
const Zap = styled(Button)`
    background-color: var(--cor-zap)
`