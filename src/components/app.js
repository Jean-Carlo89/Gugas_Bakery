import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from '../GlobalStyles.js'


import SignUp from './SignUp.js'
export default function App(){

    return(
        <Router>
            <GlobalStyle/>
                <Switch>
                    <Route path="/" exact component={SignUp}/>   
                    <Route path="/sign-up" exact component={SignUp}/>
                </Switch>
            
        </Router>
    )

}