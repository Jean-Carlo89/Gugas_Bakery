
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from '../GlobalStyles.js'
import Header from "./Header";
import {useState} from 'react'
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import Home from './Home.js'
import FoodOption from './foodOptions.js'

export default function App(){

    const [cartItems, setCartItems] = useState([])
    
    return(
        <Router>
            <GlobalStyle/>
                <Switch>
                    <Route path="/" exact component={SignIn}/>   
                    <Route path="/sign-up" exact component={SignUp}/>
                    
                    <Route path="/home" exact >
                        <Header cartItems={cartItems} setCartItems={setCartItems}/>
                        <Home/>
                    </Route>

                    <Route path="/categoryItens/:idCategory" exact >
                        
                        <FoodOption cartItems={cartItems} setCartItems={setCartItems}/>
                    </Route>
                
                </Switch>
        </Router>
    )

}
