import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Panel, Thumbnail, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrExpert, WsrCertification, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class Rkc extends Component {
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
                   <Col xs={ 0 } sm={ 3 } md={ 2 } lg={ 2 } />
                   <Col xs={ 12 } sm={ 7 } md={ 7 } lg={ 7 } className="full-size">  
                  <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } className="full-size">  
                    <WsrBlockTitle title="Контакты" />
                    <Row className="row-flex row-flex-wrap wsr-row__contacts">

                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 6 }>
                                    <WsrExpert name="Калугина Ксения Евгеньевна" phone="+7 499 577 00-56" mail="direct@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель РКЦ WorldSkills Russia по городу Москва" expert="Шкребтиенко Сергей Олегович" photo="/Images/avatar.png"
                                    />
                                    
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 6 }>
                                    <WsrExpert name="Лабуза Иван" phone="+7 499 577 00-56" mail="partner@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель направления по работе с партнерами" expert="Шкребтиенко Сергей Олегович" photo="/Images/avatar.png"
                                    />
                                  </Col>
                                  
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 6 }>
                                    <WsrExpert name="Шпитонова Пелагея" phone="+7 499 577 00-56" mail="mail@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель организационного отдела" expert="Шкребтиенко Сергей Олегович" photo="/Images/avatar.png"
                                    />
                                  </Col>
                                  <Col xs={12} sm={ 6 } md={ 4 } lg={ 6 }>
                                    
                                    <WsrExpert name="Тарасова Наталия" phone="+7 499 577 00-56" mail="media@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель медиапроектов" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                  </Col>
                                  
                                  
                                  </Row></Col></Col>
                       
                          
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="WSR в Москве" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/about/rkc"><ListGroupItem>РКЦ Москвы</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/history"><ListGroupItem>История WSR в Москве</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/reglament"><ListGroupItem>Регламентирующие документы</ListGroupItem></LinkContainer>
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

export default Rkc;

/* */
