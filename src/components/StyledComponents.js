import styled from 'styled-components'
const Container = styled.div`
    //background-color: #E8E2C8;
    background-image: url('https://www.bakemeawish.com/images/products/merch/640/23_640.jpg');
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: ${props=>props.justify || 'center'};
    align-items: center;
    flex-direction: column;
`

const DataInfo = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive!important;
    color: white;
    //color: black;
    
    font-size: 32px;
    margin-bottom: 24px;
`

const Input = styled.input`
   // width: 95%;
   width: 600px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 10px;

        ::placeholder{
            font-family: 'Raleway', sans-serif;
            color:black;
            font-size: 20px;
        }



        
`

const ConfirmButton = styled.button`
    //width: 95%;
    width: 600px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    color:white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
`

const MessageH3 = styled.h3`
    font-size:19px;
   color: white;
   //color: black;
`

const ActionsHeader = styled.h1`
font-size:26px;
color: white;
margin-top: 25px;
margin-bottom: 40px;
width: 326px;
`

const Return = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
margin-bottom: 20px;
font-size: 15px;

    svg{
        color: white;
        font-size: 35px;
    }
`


export {Container,DataInfo,Logo,Input,MessageH3,ActionsHeader,Return}
export{ConfirmButton}