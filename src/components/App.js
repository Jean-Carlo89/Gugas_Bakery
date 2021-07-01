
//import dotenv from 'dotenv'
//

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from '../GlobalStyles.js'
import Header from "./Header";

import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import Home from './Home.js'
import FoodOption from './foodOptions.js'

export default function App(){
    //dotenv.config();
    return(
        <Router>
            <GlobalStyle/>
                <Switch>
                    <Route path="/" exact component={SignIn}/>   
                    <Route path="/sign-up" exact component={SignUp}/>
                    
                    <Route path="/home" exact >
                        <Header />
                        <Home/>
                    </Route>

                    <Route path="/categoryItens/:idCategory" exact >
                        <Header />
                        <FoodOption/>
                    </Route>
                
                </Switch>
        </Router>
    )

}
