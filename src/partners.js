import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import { MdPhone, MdMail } from "react-icons/lib/md";
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {   Panel, NavItem, Tab, Nav, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrBlock, WsrSckInfo, WsrExpert, WsrCompetence, WsrTeamMember, WsrPartnersItem, WsrCarousel, WsrPartner, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class Partners extends Component {
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
                  <Col md={7}>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className="clearfix">
                      
                      <Col xs={ 12 } sm={ 5 } md={ 2 } lg={ 4 }>
                        <WsrBlockTitle title="Партнёры" />
                        <WsrBlockBlank className="wsr-block-select">
                          <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                            <NavItem eventKey="0">
                              Cisco
                            </NavItem>
                            <NavItem eventKey="1">
                              Heidelberg
                            </NavItem>
                            <NavItem eventKey="2">
                              Bosch
                            </NavItem>
                            <NavItem eventKey="3">
                              DMG MORI
                            </NavItem>
                            <NavItem eventKey="4">
                              XEROX
                            </NavItem>
                            <NavItem eventKey="5">
                              KNAUF
                            </NavItem>
                            <NavItem eventKey="6">
                              Samsung
                            </NavItem>
                            <NavItem eventKey="7">
                              Мостотрест
                            </NavItem>
                            <NavItem eventKey="8">
                              EF
                            </NavItem>
                            <NavItem eventKey="9">
                              Салют
                            </NavItem>
                          </Nav>
                        </WsrBlockBlank>
                      </Col>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 8 } className="full-size">
                                <WsrBlockTitle title="Информация о партнёре" />
                                <WsrPartner 
                    title="CISCO" 
                    description="Cisco — американская транснациональная компания, разрабатывающая и продающая сетевое оборудование, предназначенное в основном для крупных организаций и телекоммуникационных предприятий. Одна из крупнейших в мире компаний, специализирующихся в области высоких технологий. Одной из особенностей бизнес-модели компании стала многоуровневая разветвлённая система сертификации инженеров по компьютерным сетям. Благодаря тому, что экзамены этой системы проверяют знание не только продукции Cisco, но и знание сетевых технологий и протоколов, многие организации, даже работающие на сетевом оборудовании других фирм, признают ценность профессиональных сертификатов Cisco. В частности, сертификация на уровне эксперта (CCIE) является одной из самых известных и уважаемых в компьютерной индустрии."
                    website="http://www.cisco.com"
                    logo="/Images/partners/1.png"
                    />

                                <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                              </Col>
                              
                            </Row>
                          </Tab.Container>
                        </Tab.Pane>
                      </Tab.Content>

                    </Row>
                  </Tab.Container>
                  </Col>
                  <Col lg={ 3 } className="">
                                  <WsrBlockTitle title="Стать партнёром" />
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/"><ListGroupItem>Заполнить заявку</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Скачать документы</ListGroupItem></LinkContainer>

                        <LinkContainer exact to="/"><ListGroupItem><WsrExpert name="Воронков  Никита Александрович" certification="certified" comment="Ответственный за направление" host={<div>
                          <div><MdPhone className="ri-contacts" />+7 235 523 25-15</div> <div><MdMail className="ri-contacts" />responsible@mail.com</div></div> } responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></ListGroupItem></LinkContainer>
                        
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

export default Partners;

/* */
