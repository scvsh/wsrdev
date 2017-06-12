import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ScrollToTop from "./router-scroll"
import App from "./App"
import Rkc from "./rkc"
import History from "./history"
import Competence from "./competence"
import ExpertCommunity from "./expert-community"
import Sck from "./sck"
import Locations from "./locations"
import Projects from "./projects"
import RegionExpert from "./region-expert"
import Partners from "./partners"
import PhotoGallery from "./photo-gallery"




const Routes = () => (
    <Router>
        <ScrollToTop>
        <Route exact path="/" component={ App } />
        
        <Route exact path="/about" render={ () => ( <Redirect to="/about/rkc" /> ) } />
        <Route path="/about/rkc" component={ Rkc } />
        <Route path="/about/history" component={ History } />
        <Route path="/competence" component={ Competence } />
        <Route exact path="/expert" render={ () => ( <Redirect to="/expert/community" /> ) } />
        <Route path="/expert/community" component={ ExpertCommunity } />
        <Route exact path="/sck" component={ Sck } />
        <Route path="/sck/locations" component={ Locations } />
        <Route exact path="/projects" component={ Projects } />
        <Route path="/projects/region-expert" component={ RegionExpert } />
        <Route exact path="/partners" component={ Partners } />
        <Route path="/press/photo-gallery" component={ PhotoGallery } />
      
      </ScrollToTop>
    </Router>
)


export default Routes