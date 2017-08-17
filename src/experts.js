import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";
import { FaFileTextO } from "react-icons/lib/fa";
import { MdSearch } from "react-icons/lib/md";
import TextTruncate from "react-text-truncate";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { PanelGroup, InputGroup, FormControl, Tab, Nav, NavItem, Panel, Button, Clearfix, Label, Media, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrAccordeonExpert, WsrCertification, WsrMedal, WsrTeamMember, WsrTeamMemberItem, WsrSckInfo, WsrCompetence, WsrExpert, WsrExpertSearch, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class Team extends Component {
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
                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 } className="full-size">
                    <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                      <WsrBlockTitle title="Эксперты" />
                      
                      <PanelGroup accordion className="wsr-block__sck-info__panel" defaultActiveKey="1">
                      <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/certified.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Сертифицированный эксперт</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="1">
                              <p className="wsr-expert-description">
                              Прошедшие двух/трёхдневную программу обучения, сдавшие тестирование по итогам обучения. Имеют право проведения региональных (корпоративных) чемпионатов, а также
                                оценки заданий демонстрационного экзамена
                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>

                        <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/icons/certified_junior.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Сертифицированный эксперт возрастной категории 14-16 (WorldSkills Junior)</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="2">
                              <p className="wsr-expert-description">
Эксперт, представляющий Союз «Ворлдскиллс Россия» на чемпионатах любого уровня в категории 14-16.
                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>

                        <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/icons/primary_regional.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Главный региональный эксперт</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="3">
                              <p className="wsr-expert-description">
                              Главный региональный эксперт осуществляет развитие компетенции в Москве, является главным экспертом регионального чемпионата
                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>
                        <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/icons/primary_junior.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Заместитель главного регионального эксперта по категории 14-16 (WorldSkills Junior)</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="4">
                              <p className="wsr-expert-description">
Осуществляет развитие категории 14-16 в компетенции в Москве, является главным экспертом регионального чемпионата в категории 14-16.
                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>
                        <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/icons/compatriot.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Эксперт-компатриот</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="5">
                              <p className="wsr-expert-description">
                                Описание категории                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>
                        
        
      </PanelGroup>
      <WsrBlockTitle title="Эксперты" />
                      
                      <PanelGroup accordion className="wsr-block__sck-info__panel">
                      <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/icons/regional.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Региональный эксперт</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="6">
                              <p className="wsr-expert-description">
                              Прошедшие двух/трёхдневную программу обучения, сдавшие тестирование по итогам обучения. Имеют право проведения региональных (корпоративных) чемпионатов, а также
                                оценки заданий демонстрационного экзамена
                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>

                        <Panel header={ 
                        <div className="wsr-expert-accordeon__heading">
                        <div className="wsr-expert-accordeon__heading">
                        <div>
                          <img width={30} src="/Images/icons/demo.svg" alt="Image"/>
                        </div>
                        <div className="wsr-expert-accordeon__heading_text ">
                          <h5>Эксперт Демонстрационного экзамена</h5>
                          </div>
                        </div>
                        </div>
                        
                         } eventKey="7">
                              <p className="wsr-expert-description">
Эксперт, прошедший однодневную программу обучения, успешно сдавший тестирование. Эксперт демоэкзамена допущен к оценке заданий демонстрационного экзамена.
                                
                               </p>
                               <Label className="wsr-certificate-label"><a href="/docs/certificate.txt">Образец Сертификата</a></Label>

                        </Panel>


                        
        
      </PanelGroup>
      <WsrBlockTitle title="Поиск экспертов" />
      <WsrBlockBlank>
      <InputGroup>
                      <FormControl className="wsr-input-search" type="text" placeholder="Введите категорию, компетенцию или имя эксперта" />
                      <InputGroup.Button>
                        <Button className="wsr-btn-search">
                          <MdSearch className="ri-search" />
                        </Button>
                      </InputGroup.Button>
                    </InputGroup>    
                    </WsrBlockBlank>


                    </Col>
                  </Col>
                  <Col sm={ 4 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Координатор" />
                    <WsrBlockBlank className="wsr-block-select">
                      <LinkContainer exact to="/">
                        <WsrExpert phone="+7 912 351 25-12" mail="coords@wsrmsk.ru" name="Воронков  Никита Александрович" certification="certified" tier="secondary" medal="silver"
                          host=" ООО «Практика реставрации»" responsible="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg" />
                      </LinkContainer>
                    </WsrBlockBlank>
                    <WsrBlockTitle title="Стать экспертом" />
                    <WsrBlockBlank className="wsr-block-select ">
                      <ListGroup>
                        <LinkContainer exact to="/experts/region-expert">
                          <ListGroupItem>Региональный эксперт</ListGroupItem>
                        </LinkContainer>
                        <LinkContainer exact to="/">
                          <ListGroupItem>Эксперт демонстрационного экзамена</ListGroupItem>
                        </LinkContainer>
                        <LinkContainer exact to="/">
                          <ListGroupItem>Мастер ПО</ListGroupItem>
                        </LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
                    <WsrBlockBlank className="wsr-block-select ">
                      <ListGroup>
                        <LinkContainer exact to="/">
                          <ListGroupItem>Обучение в 1С:Учебном центре №1</ListGroupItem>
                        </LinkContainer>
                      </ListGroup>
                    </WsrBlockBlank>
                  </Col>
                </Row>
                <Row>
                   <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className="clearfix">
                      <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />


                      <Col xs={ 12 } sm={ 2 } md={ 3 } lg={ 2 } xsHidden>
                        <WsrBlockTitle title="Категории" />
                        <WsrBlockBlank className="wsr-block-select">
                          <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                            <NavItem eventKey="0">
                              Все категории
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
                            <NavItem eventKey="12">
                              Отборочные соревнования
                            </NavItem>
                          </Nav>
                        </WsrBlockBlank>
                        <Button block className="btn-export ">
                           Скачать списком 
                          </Button>
                      </Col>
                      <Tab.Content animation>
                        <Tab.Pane eventKey="0">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix ">
                              <Col sm={ 3 } md={ 3 } xsHidden>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="wsr-competence__icon-wrapper is is-flex">
                                      <Col xs={3}  md={3} smHidden>
                                        <Image src="/Images/icon_all.svg" />
                                      </Col>
                                      <Col xs={9} sm={12} md={9} className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Все компетенции</h3>
                                      </Col>
                                    </Row>
                                    <ListGroup fill>
                                      <WsrCompetence competences={ [ "Все компетенции", "Камнетёсное дело" , "Облицовка плиткой" , "Столярное дело" , "Плотницкое дело" , "Кирпичная кладка" , "Холодильная техника и системы кондиционирования" , "Сантехника и отопление" , "Сухое строительство и штукатурные работы" , "Малярные и декоративные работы" , "Ландшафтный дизайн" , "Электромонтаж" , "Производство мебели", "..." ]} />
                                    </ListGroup>
                                    Всего 456 компетенций
                                  </Panel>
                                </WsrBlockBlank>
                                
                              </Col>

                              <Tab.Content animation>
                                <Tab.Pane eventKey="1c">
                                  <Col sm={ 4 } md={ 3 } lg={ 5 }>
                                     <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="primary " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="certified_junior" />
                          <WsrCertification certification="primary_regional" />
                          <WsrCertification certification="primary_junior" />
                          <WsrCertification certification="regional" />
                          <WsrCertification certification="compatriot" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>

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
                                  <Col sm={ 3 } md={ 4 } lg={ 3 }>
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                   <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
                                  </Col>
                                </Tab.Pane>
                              </Tab.Content>
                            </Row>
                          </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="12">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="1c">
                            <Row className="clearfix">
                              <Col sm={ 3 } md={ 3 } lg={ 4 }>
                                <WsrBlockTitle title="Компетенции" />
                                <WsrBlockBlank description="" date="10.05.2017">
                                  <Panel defaultExpanded>
                                    <Row className="is-flex">
                                      <Col lg={ 3 }>
                                        <Image src="/Images/icon_13.svg" />
                                      </Col>
                                      <Col lg={ 9 } className="wsr-team__description">
                                        <h3 className="wsr-competence__title">Отборочные соревнования</h3>
                                      </Col>
                                    </Row>
                                    Всего 12 компетенций
                                  </Panel>
                                </WsrBlockBlank>
                              </Col>
                              <Tab.Content animation>
                                <Tab.Pane eventKey="1c">
                                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                                    <WsrBlockTitle title="Эксперты" />
                                                            <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
<WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
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

export default Team;

/* */
