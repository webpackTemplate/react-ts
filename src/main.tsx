import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter,Route,Link} from 'react-router-dom'

import { Hello } from "./components/Hello"
import Hroute from "./components/route"

ReactDOM.render(
    <HashRouter>
        <div>你好</div>
        <Link to="/repos">About</Link>
        <Link to="/route">页面2</Link>
        <Route path="/repos">
            <Hello compiler="TypeScript" framework="React" />
        </Route> 
        <Route path="/route">
          <Hroute hello="页面2" />
        </Route>  
    </HashRouter>
    ,
    document.getElementById("app")
);