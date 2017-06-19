import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroup, ListGroupItem, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrBecomePartnerForm, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdFileDownload } from "react-icons/lib/md";

/* Main app */

class BecomePartner extends Component {
    render() {
        return (
            <div className="App">
              { /* Header carousel */ }
              <WsrCarousel />
              { /* Left sidebar */ }
              <WsrMainMenu/>
              { /* Main content */ }
              <Grid bsClass="containter-fluid">
                <Row>
                  <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 }>
                    <WsrBlockTitle title="Стать партнером" />
                    <WsrPage type="wsr-page" heading="Стать партнером" description="" date="10.05.2017">
                      <p>Приглашаем к сотрудничеству заинтересованные компании и предприятия города Москвы различных сфер деятельности. У вас есть возможность стать частью масштабного,
                        перспективного и социально важного движения WorldSkills Russia!
                      </p>
                      <ListGroup className="wsr-file-list">
                        <ListGroupItem>
                          <MdFileDownload className="ri-down" />Партнерство и Сотрудничество
                          <WsrSizeLabel size="10 кб" extension=".doc" />
                        </ListGroupItem>
                      </ListGroup>
                      <WsrBecomePartnerForm />
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Партнёрство" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/partners">
                          <ListGroupItem>Наши партнёры</ListGroupItem>
                        </LinkContainer>
                        <LinkContainer to="/partners/become-a-partner">
                          <ListGroupItem>Стать партнёром</ListGroupItem>
                        </LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
                  </Col>
                </Row>
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
              </Grid>
            </div>
        );
    }
}

export default BecomePartner;

/* */
