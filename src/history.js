import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Button, Grid, Row, Col, Nav, NavItem, Carousel, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdApps } from "react-icons/lib/md";

/* Main app */

class History extends Component {
    render() {
        return (
            <div className="App">
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
                  <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 }>
                    <WsrBlockTitle title="Об РКЦ" />
                    <WsrPage type="wsr-page" heading="История" description="" date="10.05.2017">
                      <p>Движение WorldSkills существует с 1946 года. Россия вступила в Движение в 2012 году и Московский регион одним из первых начал деятельность по его продвижению.
                        С каждым годом все больше специалистов разнообразных рабочих профессий из различных регионов стремятся принять участие в соревнованиях.
                        <br/>
                        <br/>Проведение соревнований в рамках Движения преследует несколько целей, таких как: популяризация рабочих профессий, подготовка высококвалифицированных
                        рабочих кадров в соответствии с лучшими мировыми стандартами и передовыми технологиями, а также стандарты WorldSkills вносят существенный вклад в развитие
                        отраслей экономики страны.
                        <br/>
                        <br/>Соревнования проводятся в форме конкурса профессионального мастерства, где участник должен продемонстрировать все свои навыки и за определенное количество
                        времени выполнить ряд практических заданий. Стандарты WorldSkills позволяют «задавать планку» для подготовки специалистов высокого уровня и формулировать
                        требования к выпускникам образовательных учреждений.
                        <br/>
                        <br/>В качестве жюри привлекаются ведущие эксперты в своей профессиональной области из различных бизнес-структур и образовательных организаций.
                        <br/>
                        <br/>Поддержку Движения WorldSkills в России осуществляют Министерство образования и науки РФ, Министерство промышленности и торговли РФ, Министерство труда
                        и социальной защиты РФ, Агентство стратегических инициатив и многие другие.
                        <br/>
                      </p>
                    </WsrPage>
                    <WsrPage type="wsr-page" heading="Статистика участия московского региона в соревнованиях WorldSkills" description="" date="10.05.2017">
                      <p>Движение WorldSkills существует с 1946 года. Россия вступила в Движение в 2012 году и Московский регион одним из первых начал деятельность по его продвижению.
                        С каждым годом все больше специалистов разнообразных рабочих профессий из различных регионов стремятся принять участие в соревнованиях.
                        <br/>
                      </p>
                      <Nav bsStyle="tabs" activeKey="1" onSelect={ this.handleSelect }>
                        <NavItem active eventKey="1" href="/home">2012 год</NavItem>
                        <NavItem eventKey="2" href="/home">2013</NavItem>
                        <NavItem eventKey="3" href="/home">2014</NavItem>
                        <NavItem eventKey="4" href="/home">2015</NavItem>
                        <NavItem eventKey="5" href="/home">2016</NavItem>
                        <NavItem eventKey="6" href="/home">2017</NavItem>
                      </Nav>
                      <p>На I Московском чемпионате были представлены 6 компетенций и 1 участник от города Москва.
                      </p>
                      <Row className="wsr-page__gallery">
                        <OwlCarousel className="owl-theme" loop items={ 2 } margin={ 15 } nav={ false } dots={ true }>
                          <div className="item">
                            <Image src="/Images/about/history/1.jpg" className="wsr-gallery-item" />
                          </div>
                          <div className="item">
                            <Image src="/Images/about/history/2.jpg" className="wsr-gallery-item" />
                          </div>
                          <div className="item">
                            <Image src="/Images/about/history/2.jpg" className="wsr-gallery-item" />
                          </div>
                        </OwlCarousel>
                      </Row>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="WSR в Москве" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/about/rkc"><ListGroupItem>Об РКЦ</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/history"><ListGroupItem>История WorldSkills</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/active"><ListGroupItem>Активные мероприятия</ListGroupItem></LinkContainer>
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

export default History;

/* */
