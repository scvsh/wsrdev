import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ScrollToTop from "./router-scroll"
import App from "./App"
import DefaultPage from "./default-page"
import Login from "./login"
import Rkc from "./rkc"
import History from "./history"
import Reglament from "./reglament"
import Team from "./team"
import Experts from "./experts"
import Competence from "./competence"
import Techdocs from "./techdocs"
import ExpertCommunity from "./expert-community"
import Sck from "./sck"
import Locations from "./locations"
import BecomeSck from "./become-sck"
import Archive from "./archive"
import Projects from "./projects"
import RegionExpert from "./region-expert"
import Partners from "./partners"
import BecomePartner from "./become-a-partner"
import PhotoGallery from "./photo-gallery"
import Album from "./album"
import Announce from "./announce"
import Contact from "./contact"
import Important from "./important"
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
            <Route exact path="/default" component={ DefaultPage } />
            <Route exact path="/login" component={ Login } />

            { /* About */ }
            <Route exact path="/about" render={ () => ( <Redirect to="/about/rkc" /> ) } />
            <Route path="/about/rkc" component={ Rkc } />
            <Route path="/about/history" component={ History } />
            <Route path="/about/reglament" component={ Reglament } />

            { /* Team */ }

            <Route exact path="/team" component={ Team } />

            <Route exact path="/competence" component={ Competence } />
            <Route exact path="/competence-junior" component={ Competence } />
            <Route path="/competence/techdocs" component={ Techdocs } />
            <Route exact path="/expert" render={ () => ( <Redirect to="/expert/community" /> ) } />
            <Route path="/expert/community" component={ ExpertCommunity } />
            <Route exact path="/experts" component={ Experts } />
            <Route path="/experts/region-expert" component={ RegionExpert } />

            { /* Sck */ }

            <Route exact path="/sck" component={ Sck } />
            <Route path="/sck/locations" component={ Locations } />
            <Route path="/sck/become-sck" component={ BecomeSck } />

            { /* Projects */ }
            <Route exact path="/projects" component={ Projects } />

            <Route exact path="/partners" component={ Partners } />
            <Route  path="/partners/become-a-partner" component={ BecomePartner } />
            
            { /* Press */ }

            <Route exact path="/press" render={ () => ( <Redirect to="/press/contact" /> ) } />
            <Route path="/press/contact" component={ Contact } />
            <Route path="/press/important" component={ Important } />
            <Route path="/press/photo-gallery" component={ PhotoGallery } />
            <Route path="/press/album" component={ Album } />

            { /* Championship */ }

            <Route exact path="/projects/championship" component={ Championship } />
            <Route path="/projects/championship/history" component={ ChampionshipHistory } />
            <Route path="/projects/championship/partners" component={ ChampionshipPartners } />
            <Route path="/projects/championship/locations" component={ ChampionshipLocations} />

            { /* Qualification */ }
            <Route exact path="/qualification" component={ Qualification } />
            <Route path="/qualification/competence" component={ QualificationCompetence } />

            <Route path="/archive" component={ Archive } />
            <Route path="/announce" component={ Announce } />
        </ScrollToTop>
    </Router>
)


export default Routes