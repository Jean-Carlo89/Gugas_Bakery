import { useEffect ,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


export default function Home(){
    const history = useHistory()
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`)
        .then((response)=>{
            
            setCategories(response.data)
           
        })
        .catch((err)=>{
            
        })
    },[])

    
    
    return(

        <>
         
        <Container >
            <CategoriesList>
               {
                   categories.map((item)=>{
                       return(
                           
                                <CategoryType key={item.id} background={item.image} onClick={()=>history.push(`/categoryItens/${item.id}`)}>
                                    <h2>{item.category}</h2>
                                </CategoryType>
                            
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
    background-image: url('https://www.padariarequinte.com.br/wp-content/uploads/Bolo-Sonho-de-Valsa.jpg');
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
width: 200px;
height: 200px;
border-radius:50%;
display: flex;
justify-content: center;
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
        z-index:10;

        &:hover{
            cursor:pointer;
        }
    }
`