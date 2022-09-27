import styled from 'styled-components';
import Main from "./Main";
import Header from './Header';
import logo from '../assets/img/logo-pequeno.png'
import Footer from './Footer'

export default function Deck(){

  return (
    <Fragments>
      <Header logo={logo} alt={'logotipo'} />
      <Main />
      <Footer />
    </Fragments>

  )
}

const Fragments = styled.div`
    display: flex;
    flex-direction: column;
`


