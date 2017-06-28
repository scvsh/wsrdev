import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Tab, Nav, NavItem, Panel, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrExpert, WsrBlock, WsrCompetence, WsrTeamMember, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdFileDownload } from "react-icons/lib/md";

/* Main app */

class Sck extends Component {
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
                  <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className="clearfix">
                      <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                      <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 2 }>
                        <WsrBlockTitle title="Компетенции" />
                        <WsrBlockBlank className="wsr-block-select">
                          <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                            <NavItem eventKey="0">
                              Камнетёсное дело
                            </NavItem>
                            <NavItem eventKey="1">
                              Облицовка плиткой
                            </NavItem>
                            <NavItem eventKey="2">
                              Столярное дело
                            </NavItem>
                            <NavItem eventKey="3">
                              Плотницкое дело
                            </NavItem>
                            <NavItem eventKey="4">
                              Кирпичная кладка
                            </NavItem>
                            <NavItem eventKey="5">
                              Холодильная техника и системы кондиционирования
                            </NavItem>
                            <NavItem eventKey="6">
                              Сухое строительство и штукатурные работы
                            </NavItem>
                            <NavItem eventKey="7">
                              Малярные и декоративные работы
                            </NavItem>
                            <NavItem eventKey="8">
                              Ландшафтный дизайн
                            </NavItem>
                            <NavItem eventKey="9">
                              Электромонтаж
                            </NavItem>
                            <NavItem eventKey="10">
                              Производство мебели
                            </NavItem>
                          </Nav>
                        </WsrBlockBlank>
                      </Col>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                          
                            <Row className="clearfix">

                              <Col sm={ 3 } md={ 3 } lg={ 5 }>
                              <WsrBlockTitle title={'\u00A0'} />
                              <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="wsr-block-important" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                              </Col>
                              <Col sm={ 2 } md={ 3 } lg={ 3 }>
                                  <WsrBlockTitle title="Стать СЦК" />
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/projects/region-expert"><ListGroupItem>Об аккредитации СЦК</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Документ №2</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Документ №3</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem><WsrExpert name="Воронков  Никита Александрович" competence="Камнетесное дело" tier="secondary" medal="silver" host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    /></ListGroupItem></LinkContainer>
                        
                      </ListGroup>
                    </WsrBlockBlank>
                  </Col>
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

export default Sck;

/* */
