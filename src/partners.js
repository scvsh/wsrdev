import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import { MdPhone, MdMail } from "react-icons/lib/md";
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {  Label, Panel, NavItem, Tab, Nav, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCite, WsrQuote, WsrPartnerCarousel, WsrTierLabel, WsrBlock, WsrSckInfo, WsrExpert, WsrCompetence, WsrTeamMember, WsrPartnersItem, WsrCarousel, WsrPartner, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class Partners extends Component {
    render() {
        return (
            <div className="App">
              { /* Header carousel */ }
              <WsrPartnerCarousel />
              { /* Left sidebar */ }
              <WsrMainMenu/>
              { /* Main content */ }
              <Grid bsClass="containter-fluid">
                <Row>
                  <Col xs={ 0 } sm={ 3 } md={ 2 } lg={ 2 } />
                  <Col sm = {7}  md={7}>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className="clearfix">
                      
                      <Col xs={ 12 } sm={ 5 } md={ 5 } lg={ 3 }>
                        <WsrBlockTitle title="Партнёры" />
                        <WsrBlockBlank className="wsr-block-select">
                          <Nav bsStyle="pills" className="wsr-partner-list" stacked>
                            <NavItem eventKey="0">
                              <div className="center-block wsr-parther-logo--news">
                          <Image className="center-block wsr-parther-logo" src="/Images/1.png" responsive />
                        </div>
                            </NavItem>
                            <NavItem eventKey="1">
                              <div className="center-block ">
                          <Image className="center-block wsr-parther-logo" src="/Images/2.jpg" responsive />
                        </div>
                            </NavItem>
                            <NavItem eventKey="2">
                              <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/3.jpg" responsive />
                        </div>
                            </NavItem>
                            <NavItem eventKey="3">
                               <div className="center-block wsr-parther-logo--news">
                          <Image className="center-block wsr-parther-logo" src="/Images/4.jpg" responsive />
                        </div>
                            </NavItem>
                            <NavItem eventKey="4">
                              <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/5.jpg" responsive />
                        </div>
                            </NavItem>
                            <NavItem eventKey="5">
                              <div className="center-block">
                          <Image className="center-block wsr-parther-logo" src="/Images/6.jpg" responsive />
                        </div>
                            </NavItem>
                            
                            
                          </Nav>
                        </WsrBlockBlank>               
                      </Col>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 7 } md={ 7 } lg={ 9 } className="full-size">
                                <WsrBlockTitle title="Информация о партнёре" />
                                <WsrPartner 
                    title="CISCO" 
                    description="Cisco — американская транснациональная компания, разрабатывающая и продающая сетевое оборудование, предназначенное в основном для крупных организаций и телекоммуникационных предприятий. Одна из крупнейших в мире компаний, специализирующихся в области высоких технологий. Одной из особенностей бизнес-модели компании стала многоуровневая разветвлённая система сертификации инженеров по компьютерным сетям. Благодаря тому, что экзамены этой системы проверяют знание не только продукции Cisco, но и знание сетевых технологий и протоколов, многие организации, даже работающие на сетевом оборудовании других фирм, признают ценность профессиональных сертификатов Cisco. В частности, сертификация на уровне эксперта (CCIE) является одной из самых известных и уважаемых в компьютерной индустрии."
                    website="http://www.cisco.com"
                    logo="/Images/partners/1.png"
                    ><Label><a href="/">Камнетесное дело</a></Label> 
                    </WsrPartner>

                                 <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" /> <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                              </Col>
                              
                            </Row>
                          </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="10">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 7 } md={ 7 } lg={ 9 } className="full-size">
                                <WsrBlockTitle title="Новости партнёров" />


                                <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" /> <WsrBlock type="wsr-block-important" heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!" description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="06.06.2017" image="/Images/thumb03.jpg" />
                              </Col>
                              
                            </Row>
                          </Tab.Container>
                        </Tab.Pane>
                      </Tab.Content>

                    </Row>
                  </Tab.Container>
                  </Col>
                  <Col sm={ 2 } md={ 3 } lg={ 3 } className="">
                  <WsrBlockTitle title="Координатор" />
                                  <WsrBlockBlank className="wsr-block-select">
                      
                      <LinkContainer exact to="/"><WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified"  tier="secondary" medal="silver" host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></LinkContainer>

                    </WsrBlockBlank>

                      <WsrQuote host="ООО «Практика реставрации»" name="Ткачёв Александр Дмитриевич" position="Генеральный директор" cite="Если у тебя есть сад и библиотека, то у тебя есть все, что тебе нужно" photo="/Images/user1.jpg"
                                    />
                                    <WsrQuote host="Колледж архитектуры и строительства № 7" position="Менеджер по связям с общественностью"  name="Сергеев Николай Валерьевич" cite="Exceptio probat regulam in casibus non exceptis"  photo="/Images/user2.jpg"
                                    />
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

export default Partners;

/* */
