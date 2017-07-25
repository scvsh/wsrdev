import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import $ from "jquery";
import { WsrJQCalendar } from "./wsrcalendar.js";


//import ".vendor/calendar.js";
 

import { LinkContainer } from "react-router-bootstrap";

import { FaArchive, FaCalendar } from "react-icons/lib/fa";

import InfiniteCalendar from 'react-infinite-calendar';
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Modal,  Button, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrProject, WsrBlock, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class PlayGround extends Component {
  constructor(props) {
        super(props);
        this.state = { showModal: false };
      }

      closeModal = () => {
        this.setState({ showModal: false });
      }

      openModal = () => {
        this.setState({ showModal: true });
      }

    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        var lastYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        return (
            <div className="App">



              { /* Header carousel */ }
              <WsrCarousel />
              { /* Left sidebar */ }
              <WsrMainMenu/>
              { /* Main content */ }
              <Grid bsClass="containter-fluid">
                <Row>
                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 9 } md={ 4 } lg={ 4 }>
                    <div id="demo">
        <h2>Inline calendar</h2>
        <div id="one"></div>
    </div>
                    <WsrJQCalendar />







                  </Col>
                  
                </Row>
                </Grid>
                { /* Bottom Gallery */ }
                <Row>
                  <OwlCarousel className="owl-theme" loop items={ 4 } margin={ 0 } nav={ false } dots={ false }>
                    <div className="item">
                      <Image src="/Images/thumb01.jpg" className="wsr-gallery-item" responsive />
                    </div>
                    <div className="item">
                      <Image src="/Images/thumb02.jpg" className="wsr-gallery-item" responsive />
                    </div>
                    <div className="item">
                      <Image src="/Images/thumb03.jpg" className="wsr-gallery-item" responsive />
                    </div>
                    <div className="item">
                      <Image src="/Images/thumb04.jpg" className="wsr-gallery-item" responsive />
                    </div>
                  </OwlCarousel>
                </Row>
                { /* Footer */ }
                <WsrFooter/>
              
            </div>
        );
    }
}

export default PlayGround;

/* */
