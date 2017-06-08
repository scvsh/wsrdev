import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from "./App"
import Rkc from "./rkc"
import History from "./history"


const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={ App }/>
        <Route exact path="/about" render={() => ( <Redirect to="/about/rkc"/> ) }/>
		<Route path="/about/rkc" component={ Rkc } />
		<Route path="/about/history" component={ History } />
      </div>
    </Router>
)


export default Routes