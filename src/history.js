import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Nav, NavItem, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class History extends Component {
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
                      <div className ="wsr-page__tabs">
                      <Nav bsStyle="tabs" className="wsr-page__tabs" activeKey="1" onSelect={ this.handleSelect }>
                        <NavItem active eventKey="1">2012 год</NavItem>
                        <NavItem eventKey="2">2013</NavItem>
                        <NavItem eventKey="3">2014</NavItem>
                        <NavItem eventKey="4">2015</NavItem>
                        <NavItem eventKey="5">2016</NavItem>
                        <NavItem eventKey="6">2017</NavItem>
                      </Nav>
                      </div>
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
                        <LinkContainer to="/about/rkc"><ListGroupItem>РКЦ Москвы</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/history"><ListGroupItem>История WSR в Москве</ListGroupItem></LinkContainer>
                        <LinkContainer to="/about/reglament"><ListGroupItem>Регламентирующие документы</ListGroupItem></LinkContainer>
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

export default History;

/* */
