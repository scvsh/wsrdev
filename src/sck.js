import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { PanelGroup, Tab, Nav, NavItem, Panel, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrSckInfo, WsrExpert, WsrBlock, WsrCompetence, WsrTeamMember, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdFileDownload } from "react-icons/lib/md";

/* Main app */

class Sck extends Component {

  constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeNav: 1,
            activeKey: 2
        };
    }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

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
                <Col md={2} />
                <Col md={7}>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className="clearfix">
                      <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 5 }>
                        <WsrBlockTitle title="СЦК" />
                        <WsrBlockBlank className="wsr-block-select">

                        <PanelGroup  activeKey={ this.state.activeKey } onSelect={this.handleSelect} accordion className="wsr-block__sck-info__panel">
        <Panel header="Преподавание музыки" eventKey="1">
                          <Nav  bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav>
        </Panel>
        <Panel header="Видеопроизводство" eventKey="2">
        <Nav bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav>
        </Panel>
        <Panel header="Предпринимательство" eventKey="3">
        <Nav bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav></Panel>
        <Panel header="Сетевое и системное администрирование" eventKey="4">
        <Nav bsStyle="pills" className="wsr-competence-category wsr-sck-competence" stacked>
                            <NavItem eventKey="1.1">
                              «Московский городской педагогический университет»»
                            </NavItem>
                            <NavItem eventKey="1.2">
                              «Колледж предпринимательства № 11»
                            </NavItem>
                            <NavItem eventKey="1.3">
                              «Западный комплекс непрерывного образования»
                            </NavItem>
                          </Nav></Panel>
        <Panel header="Мобильная робототехника" eventKey="5">Камнетёсное дело</Panel>
        <Panel header="Автопокраска" eventKey="6">Камнетёсное дело</Panel>
      </PanelGroup>


                          
                        </WsrBlockBlank>
                      </Col>
                      <Tab.Content animation>
                      <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                          
                            <Row className="clearfix">

                              <Col sm={ 3 } md={ 3 } lg={ 7 } className="full-size">
                              <WsrBlockTitle title={"Важная информация"} />
                              <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
                      <WsrBlock type="" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                      date="10.06.2017" image="/Images/thumb06.jpg" link="/default" />
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
                        <Tab.Pane eventKey="1.1">

                          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                          
                            <Row className="clearfix">

                              <Col sm={ 3 } md={ 3 } lg={ 7 } className="full-size">
                              <WsrBlockTitle title={"Об учреждении"} />
                              <WsrSckInfo title="ГАОУ ВО г. Москвы «Московский городской педагогический университет»" logo="/Images/sck/1.svg" contact="Бабалаева Мария Викторовна" phone="+7 963 600 82-12" mail="babalaewa73@inbox.ru" detailedAddress="м. «Кутузовская», последний вагон из центра, далее пешком 3-5 минут в сторону области." />
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
                                  <WsrBlockTitle title="Стать СЦК" />
                    
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/"><ListGroupItem>Информационное письмо от Союза WorldSkills Russia</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Положение об аккредитации СЦК</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Форма заявки на прохождение аккредитации в качестве СЦК</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Документы по соответсвию деятельности</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Обязательства СЦК перед Союзом WorldSkills Russia</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Договор</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem>Положительные результаты и статус СЦК</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/"><ListGroupItem><WsrExpert name="Воронков  Никита Александрович" certification="certified" comment="Ответственный за направление" ompetence="Камнетесное дело" tier="secondary" medal="silver" host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
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

export default Sck;

/* */
