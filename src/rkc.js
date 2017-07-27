import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Clearfix, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrExpert, WsrCarousel, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

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
                   <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 }/>
                   <Col sm={ 2 } md={ 3 } lg={ 3 } smPush={7} mdPush={6} lgPush={7}>
                    <WsrBlockTitle title="WSR&nbsp;в&nbsp;Москве" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/about/rkc"><ListGroupItem>РКЦ Москвы</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/history"><ListGroupItem>История WSR в Москве</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/reglament"><ListGroupItem>Регламентирующие документы</ListGroupItem></LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
                  </Col>
                   <Col xs={ 12 } sm={ 7 } md={ 6 } lg={ 7 } smPull={2} mdPull={3} className="full-size">  
                    
                    <WsrBlockTitle title="Контакты" />
                    <Row>

                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 6 }>
                                    <WsrExpert className="rkc-team" name="Калугина Ксения Евгеньевна" phone="+7 499 577 00-56" mail="direct@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель РКЦ WorldSkills Russia по городу Москва" expert="Шкребтиенко Сергей Олегович" photo="/Images/avatar.png"
                                    />
                                    
                                  </Col>
                                  
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 6 }>
                                    <WsrExpert className="rkc-team"  name="Лабуза Иван" phone="+7 499 577 00-56" mail="partner@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель направления по работе с партнерами" expert="Шкребтиенко Сергей Олегович" photo="/Images/avatar.png"
                                    />
                                  </Col>
                                  <Clearfix/>
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 6 }>
                                    <WsrExpert className="rkc-team"  name="Шпитонова Пелагея" phone="+7 499 577 00-56" mail="mail@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель организационного отдела" expert="Шкребтиенко Сергей Олегович" photo="/Images/avatar.png"
                                    />
                                  </Col>
                                  
                                  <Col xs={12} sm={ 6 } md={ 6 } lg={ 6 }>
                                    
                                    <WsrExpert className="rkc-team" name="Тарасова Наталия" phone="+7 499 577 00-56" mail="media@wsr.msk.ru" certification="certified"  competence="Камнетесное дело" tier="primary" medal="gold" host="Руководитель медиапроектов" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                  </Col>
                                  
                                  
                                  </Row></Col>
                       
                          
                  
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

export default Rkc;

/* */
