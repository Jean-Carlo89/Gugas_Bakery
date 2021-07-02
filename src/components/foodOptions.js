import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header.js'

export default function FoodOption({cartItems,setCartItems}){
    
    const {idCategory} = useParams()
  
    const [categoryItens,setCategoryItens] = useState([])
    
    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/food/${idCategory}`)
        .then((response)=>{
            setCategoryItens(response.data)
        })
        .catch((err)=>{
            
        })

    },[idCategory])

    function addToCart(e,image,name,price){
        
        const newItem={
            image,
            name,
            price
        }

        setCartItems([...cartItems,newItem])
    }
    
    return(
        <>
        <Header addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />
        <Container>

             <CategoriesList>
                {
                    categoryItens.map((item)=>{
                        return(
                            <>
                                <CategoryType key={item.id} background={item.image} onClick={(e)=>addToCart(e,item.image,item.name,item.price)} >
                                    <h2>{item.name}</h2>
                                    <Price> R$ {((item.price)/100).toFixed(2)}</Price>
                                </CategoryType>
                               
                            </>
                        
                        )
                    })
                }

            </CategoriesList>
                

        </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
 height: 100vh;
 background-image: url('https://bombocadosbs.com.br/wp-content/uploads/2020/02/morango.jpg');
background-size: cover;

display: flex;
justify-content: center;
`

const CategoriesList= styled.ul`
width: 800px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

const CategoryType = styled.li`
width: 300px;
height: 300px;
border-radius:50%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: url(${props=>(props.background)});
background-size:cover;
position: relative;

&:after {
    content: '';
    border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(0, 0, 0, 0.5) 70%, #000)
            ;
  }

    h2{
        color: White;
        font-size: 25px;
        margin-top: 125px;
        
        z-index:10
    }
`

const Price = styled.div`
    color: white;
    z-index:10;
    margin-top: 15px;
    font-size: 20px;
`
