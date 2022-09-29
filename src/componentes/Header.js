import styled from 'styled-components';


export default function Header({logo, alt}) {
    return (
        <Head>
            <img src={logo} alt={alt} />
            <h1>ZapRecall</h1>
        </Head>
    )
}


const Head = styled.div`
   position: fixed;
    height: 80px;
    top: 50px;
    left: 0;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-bottom:50px;
    font-size: 36px;
    color: white;
    font-family: 'Righteous', cursive;
    z-index: 1;



    
    img {
        width: 52px;
        height: 60px;
        margin:0 15px;
    }
    
`