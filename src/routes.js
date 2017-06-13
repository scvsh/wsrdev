import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ScrollToTop from "./router-scroll"
import App from "./App"
import Login from "./login"
import Rkc from "./rkc"
import History from "./history"
import Competence from "./competence"
import ExpertCommunity from "./expert-community"
import Sck from "./sck"
import Locations from "./locations"
import Projects from "./projects"
import RegionExpert from "./region-expert"
import Partners from "./partners"
import BecomePartner from "./become-a-partner"
import PhotoGallery from "./photo-gallery"
import Championship from "./championship"
import ChampionshipHistory from "./championship-history"
import ChampionshipPartners from "./championship-partners"
import ChampionshipLocations from "./championship-locations"
import Qualification from "./qualification"
import QualificationCompetence from "./qualification-competence"



const Routes = () => (
    <Router>
        <ScrollToTop>
            <Route exact path="/" component={ App } />
            <Route exact path="/login" component={ Login } />

            { /* About */ }
            <Route exact path="/about" render={ () => ( <Redirect to="/about/rkc" /> ) } />
            <Route path="/about/rkc" component={ Rkc } />
            <Route path="/about/history" component={ History } />

            <Route exact path="/competence" component={ Competence } />
            <Route exact path="/expert" render={ () => ( <Redirect to="/expert/community" /> ) } />
            <Route path="/expert/community" component={ ExpertCommunity } />

            { /* Sck */ }

            <Route exact path="/sck" component={ Sck } />
            <Route path="/sck/locations" component={ Locations } />

            { /* Projects */ }
            <Route exact path="/projects" component={ Projects } />
            <Route path="/projects/region-expert" component={ RegionExpert } />
            <Route exact path="/partners" component={ Partners } />
            <Route  path="/partners/become-a-partner" component={ BecomePartner } />
            
            { /* Press */ }

            <Route path="/press/photo-gallery" component={ PhotoGallery } />

            { /* Championship */ }

            <Route exact path="/championship" component={ Championship } />
            <Route path="/championship/history" component={ ChampionshipHistory } />
            <Route path="/championship/partners" component={ ChampionshipPartners } />
            <Route path="/championship/locations" component={ ChampionshipLocations} />

            { /* Qualification */ }
            <Route exact path="/qualification" component={ Qualification } />
            <Route path="/qualification/competence" component={ QualificationCompetence } />
        </ScrollToTop>
    </Router>
)


export default Routes