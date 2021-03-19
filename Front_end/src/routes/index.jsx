import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "../styles/GlobalStyles"

import Products from "../pages/Products/Products"
import ViewProduct from "../pages/ViewProduct/ViewProduct"



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/products" component ={Products}  />
                <Route path="/products/:id" component = {ViewProduct}  />
            </Switch>

            <GlobalStyles />
        </BrowserRouter>
    );
}

export default Routes