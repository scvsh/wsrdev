import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";



import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Panel, Tab, ListGroup, Grid, Row, Col, Nav, NavItem, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrPartner, WsrSckInfo, WsrCarousel, WsrCompetence, WsrTeamMember, WsrMeta, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";



/* Main app */

class Competence extends Component {
    render() {
        return (
            <div className="App">
              <WsrMeta/>
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
                      <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 3 }>
                        <WsrBlockTitle title="Категории" />
                        <WsrBlockBlank className="wsr-block-select">
                          <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                            <NavItem eventKey="0">
                              Специалисты строительной сферы
                            </NavItem>
                            <NavItem eventKey="1">
                              Специалисты информационных и коммуникационных технологий
                            </NavItem>
                            <NavItem eventKey="2">
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
                        <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 3 }>
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
                                  <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                    <WsrBlockTitle title="Сборная Москвы" />
                                    <WsrTeamMember name="Дармограй Тимофей Юрьевич " tier="primary" host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg"
                                    />
                                    <WsrTeamMember name="Воронков Никита Александрович" tier="secondary" host="ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg"
                                    />
                                    <WsrBlockTitle title="Базовая площадка" />
                                    <WsrSckInfo title="ГАОУ ВО г. Москвы «Московский городской педагогический университет»" logo="/Images/sck/1.svg" contact="Бабалаева Мария Викторовна" phone="+7 963 600 82-12" mail="babalaewa73@inbox.ru" detailedAddress="м. «Кутузовская», последний вагон из центра, далее пешком 3-5 минут в сторону области." />
                                 <WsrBlockTitle title="Партнёр" />
                                  <WsrPartner 
                    title="CISCO" 
                    description="Cisco — американская транснациональная компания, разрабатывающая и продающая сетевое оборудование, предназначенное в основном для крупных организаций и телекоммуникационных предприятий. Одна из крупнейших в мире компаний, специализирующихся в области высоких технологий. Одной из особенностей бизнес-модели компании стала многоуровневая разветвлённая система сертификации инженеров по компьютерным сетям. Благодаря тому, что экзамены этой системы проверяют знание не только продукции Cisco, но и знание сетевых технологий и протоколов, многие организации, даже работающие на сетевом оборудовании других фирм, признают ценность профессиональных сертификатов Cisco. В частности, сертификация на уровне эксперта (CCIE) является одной из самых известных и уважаемых в компьютерной индустрии."
                    website="http://www.cisco.com"
                    logo="/Images/partners/1.png"
                    />

                                  </Col>
                                </Tab.Pane>
                              </Tab.Content>
                            </Row>
                          </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="1">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_2.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Специалисты информационных и коммуникационных технологий</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="2">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_3.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Творчество и дизайн</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="3">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_4.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Специалисты, занятые на промышленном производстве</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="4">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_5.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Сфера услуг</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="5">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_6.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Обслуживание гражданского транспорта</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="6">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_7.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">RU</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="7">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_8.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">FutureSkills (FS)</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="8">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_9.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Презентационная (FS)</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="9">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_10.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Презентационная</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="10">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_11.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">JS</h3>
                                      </Col>
                                    </Row>
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
                        <Tab.Pane eventKey="11">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_12.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Презентационная(JS)</h3>
                                      </Col>
                                    </Row>
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
