import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from "./App"
import Rkc from "./rkc"
import History from "./history"
import Competence from "./competence"
import ExpertCommunity from "./expert-community"



const Routes = () => (
    <Router>
      <div>
        <Route exact path="/" component={ App }/>
        <Route exact path="/about" render={() => ( <Redirect to="/about/rkc"/> ) }/>
		<Route path="/about/rkc" component={ Rkc } />
		<Route path="/about/history" component={ History } />
		<Route path="/competence" component={ Competence } />
		<Route exact path="/expert" render={() => ( <Redirect to="/expert/community"/> ) }/>
		<Route path="/expert/community" component={ ExpertCommunity } />
      </div>
    </Router>
)


export default Routes