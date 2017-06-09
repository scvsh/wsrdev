import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";



import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Label, Panel, Tab, ListGroupItem, ListGroup, Button, Grid, Row, Col, Nav, NavItem, Carousel, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCompetence, WsrTeamMember, WsrTierLabel, WsrMeta, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdApps } from "react-icons/lib/md";

/* Main app */

class Competence extends Component {
    render() {
        return (
            <div className="App">
              <WsrMeta/>
              { /* Header carousel */ }
              <Carousel wrap={ false } className="wsr-header__carousel" indicators={ false } controls={ false }>
                <Carousel.Item>
                  { /* Carousel menu */ }
                  <Grid bsClass="containter-fluid">
                    <Row>
                      <Col xs={ 2 } md={ 5 } lg={ 3 } className="wsr-carousel-menu__bg pull-right">
                        <Button bsClass="wsr-skewed-btn skew-left text-right">
                          <span className="skew-right">
                                                                                                                                                    <MdApps className="ri-big" />
                                                                                                                                                        Архив мероприятий
                                                                                                                                                  </span>
                        </Button>
                        <Nav className="wsr-carousel-menu text-right pull-right" bsStyle="pills" stacked activeKey={ 1 }>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 1 } href="/home">
                            V ОЧМ «Московские мастера»
                          </NavItem>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 2 } href="/home">
                            Всероссийские отборочные соревнования
                          </NavItem>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 3 } href="/home">
                            Демонстрационный экзамен по стандартам WorldSkills
                          </NavItem>
                          <NavItem className="wsr-carousel-menu-item " eventKey={ 4 } href="/home">
                            Juniorskills
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </Grid>
                  <img className="wsr-carousel-image" alt="900x500" src="/Images/gallery03.jpg" />
                </Carousel.Item>
              </Carousel>
              { /* Left sidebar */ }
              <WsrMainMenu/>
              { /* Main content */ }
              <Grid bsClass="containter-fluid">
                <Row>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <Row className="clearfix">
                      <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                      <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 3 }>
                        <WsrBlockTitle title="Категории" />
                        <WsrBlockBlank className="wsr-block-select">
                          <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                            <NavItem eventKey="1" href="">
                              Специалисты строительной сферы
                            </NavItem>
                            <NavItem eventKey="2" href="">
                              Творчество и дизайн
                            </NavItem>
                            <NavItem eventKey="3">
                              Специалисты, занятые на промышленном производстве
                            </NavItem>
                            <NavItem eventKey="4">
                              Сфера услуг
                            </NavItem>
                            <NavItem eventKey="5">
                              Обслуживание гражданского транспорта
                            </NavItem>
                            <NavItem eventKey="6">
                              RU
                            </NavItem>
                            <NavItem eventKey="7">
                              FutureSkills (FS)
                            </NavItem>
                            <NavItem eventKey="8">
                              Презентационная (FS)
                            </NavItem>
                            <NavItem eventKey="9">
                              Презентационная
                            </NavItem>
                            <NavItem eventKey="10">
                              JuniorSkills
                            </NavItem>
                            <NavItem eventKey="11">
                              Презентационная (JS)
                            </NavItem>
                          </Nav>
                        </WsrBlockBlank>
                      </Col>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="1">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_1.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Специалисты строительной сферы</h3>
                                      </Col>
                                    </Row>
                                    <ListGroup fill>
                                      <WsrCompetence competences={ [ "Камнетёсное дело" , "Облицовка плиткой" , "Столярное дело" , "Плотницкое дело" , "Кирпичная кладка" , "Холодильная техника и системы кондиционирования" , "Сантехника и отопление" , "Сухое строительство и штукатурные работы" , "Малярные и декоративные работы" , "Ландшафтный дизайн" , "Электромонтаж" , "Производство мебели"] } />
                                    </ListGroup>
                                    Всего 12 компетенций
                                  </Panel>
                                </WsrBlockBlank>
                              </Col>
                              <Tab.Content animation>
                                <Tab.Pane eventKey="1c">
                                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                                    <WsrBlockTitle title="Сборная Москвы" />
                                    <WsrTeamMember name="Дармограй Тимофей Юрьевич " tier="primary" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                    <WsrTeamMember name="Воронков Никита Александрович" tier="secondary" host="ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    />
                                  </Col>
                                </Tab.Pane>
                              </Tab.Content>
                            </Row>
                          </Tab.Container>
                        </Tab.Pane>
                      </Tab.Content>
                    </Row>
                  </Tab.Container>
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

export default Competence;

/* */
