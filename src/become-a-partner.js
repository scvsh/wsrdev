import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroup, ListGroupItem, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrExpert, WsrBecomePartnerForm, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdFileDownload, MdPhone, MdMail } from "react-icons/lib/md";

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
                    <WsrBlockTitle title="Заявка" />
                    <WsrPage type="wsr-page" heading="Заявка" description="" date="10.05.2017">
                      <p>Приглашаем к сотрудничеству заинтересованные компании и предприятия города Москвы различных сфер деятельности. У вас есть возможность стать частью масштабного,
                        перспективного и социально важного движения WorldSkills Russia!
                      </p>
                      <ListGroup className="wsr-file-list">
                        <ListGroupItem href="#">
                          <MdFileDownload className="ri-down" />Партнерство и Сотрудничество
                          <WsrSizeLabel size="10 кб" extension=".doc" />
                        </ListGroupItem>
                      </ListGroup>
                      <WsrBecomePartnerForm />
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                     <WsrBlockTitle title="Стать партнёром" />
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/partners/become-a-partner"><ListGroupItem>Заполнить заявку</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Скачать документы</ListGroupItem></LinkContainer>

                        <LinkContainer exact to="/"><ListGroupItem><WsrExpert name="Воронков  Никита Александрович" certification="certified" comment="Ответственный за направление" host={<div>
                          <div><MdPhone className="ri-contacts" />+7 235 523 25-15</div> <div><MdMail className="ri-contacts" />responsible@mail.com</div></div> } responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></ListGroupItem></LinkContainer>
                        
                      </ListGroup>
                    </WsrBlockBlank>
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

export default BecomePartner;

/* */
