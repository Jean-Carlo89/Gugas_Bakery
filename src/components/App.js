//import dotenv from 'dotenv'
//

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyles.js";
import Header from "./Header";
import { useState } from "react";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import Home from "./Home.js";
import FoodOption from "./foodOptions.js";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const [cartItems, setCartItems] = useState([]);
  //dotenv.config();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />

          <Route path="/home" exact>
            <Header cartItems={cartItems} setCartItems={setCartItems} />
            <Home />
          </Route>

          <Route path="/categoryItens/:idCategory" exact>
            <FoodOption cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
