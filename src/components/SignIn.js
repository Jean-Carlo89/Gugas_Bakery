
import {Container,DataInfo,Logo,
    Input,ConfirmButton,MessageH3} from './StyledComponents.js'

import{useHistory} from 'react-router-dom'
import { useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Loader from "react-loader-spinner";
import UserContext from "../contexts/UserContext";

export default function SignIn(){
    const history = useHistory()
    const [loginData,setLoginData] = useState({})

    const {user,setUser} = useContext(UserContext)

    const [loading,setLoading] = useState(false)
    function SaveInfo(e,key){
        loginData[key]=e.target.value
        setLoginData({...loginData})
    }



    useEffect(()=>{
        if(user){
            history.push('/home');
        }
      },[user,history])

    

    

    return(
    
        <Container>
            <DataInfo>
                    <Logo>Guga's Bakery</Logo>
                    <Input placeholder="E-mail" type='text'
                            onChange={(e)=>SaveInfo(e,'email')}
                            disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={loginData.email || ''}
                    />
                    
                    <Input placeholder="Senha" type='password'
                            onChange={(e)=>SaveInfo(e,'password')}
                            disabled={loading}
                            onKeyPress={(e)=>{if(e.code==="Enter"){login()}}}
                            value={loginData.password || ''}
                    />
                    
                    
                    <ConfirmButton onClick={login}>
                        {loading 
                        ?  <Loader
                                type="ThreeDots"
                                color="white"
                                height={100}
                                width={100}
                                
                            />
                        :'Entrar'}
                    </ConfirmButton>
                    <MessageH3 onClick={()=>history.push("/sign-up")}>Primeira vez? Cadastre-se</MessageH3>
            </DataInfo> 
           
         
        </Container>

        
    )

    function login(){
        
        const body = {...loginData}

        if(!body["email"] || !body["password"]){
            alert('Os campos não podem estar vazios')
            return
        }

        if( body["email"]==="" || body["password"]===""){
            alert('Os campos não podem estar vazios')
            return
        }

        setLoading(true)
        
        
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`,body)
        .then((response)=>{
            


            setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
          
        
         history.push("/home")
         setLoading(false)
        })
        .catch((e)=>{
            
            alert('Email ou senha incorretos')
            setLoading(false)
        })
    }

}


