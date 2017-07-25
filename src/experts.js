import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import TextTruncate from "react-text-truncate";
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Label, Media, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrTierLabel, WsrCertification, WsrExpert, WsrExpertSearch, WsrTeamMember, WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdArrowForward, MdFileDownload } from "react-icons/lib/md";

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
                      <WsrPage type="wsr-page" heading="" description="" date="10.05.2017">
                        <Col md={ 12 } >
                          <Media className="wsr-certification-explanation__media">
                            <Media.Left className="wsr-certification-explanation">
                              <img width={ 100 } src="/Images/certified.svg" alt="" />
                            </Media.Left>
                            <Media.Body className="wsr-certification-description">
                              <Media.Heading>
                                Сертифицированный эксперт
                              </Media.Heading>
                              <p className="wsr-expert-description">
                                Прошедшие процедуру сертификации Союза, представляющие Союз «Ворлдскиллс Россия» на чемпионатах любого уровня
                              </p>
                              <Label><a href="/docs/certificate.txt">Образец Сертификата</a></Label>
                            </Media.Body>
                          </Media>
                        </Col>
                        <Col md={ 12 } className="wsr-certification-description__col">
                          <Media className="wsr-certification-explanation__media">
                            <Media.Left className="wsr-certification-explanation">
                              <img width={ 100 } src="/Images/primary_regional.svg" alt="" />
                            </Media.Left>
                            <Media.Body className="wsr-certification-description">
                              <Media.Heading>
                                Главный региональный эксперт
                              </Media.Heading>
                              <p className="wsr-expert-description">
                                Краткое описание категории
                              </p>
                              <Label><a href="/docs/certificate.txt">Образец Свидетельства</a></Label>
                            </Media.Body>
                          </Media>
                        </Col>
                        <Col md={ 12 } className="wsr-certification-description__col">
                          <Media className="wsr-certification-explanation__media">
                            <Media.Left className="wsr-certification-explanation">
                              <img width={ 100 } src="/Images/regional.svg" alt="" />
                            </Media.Left>
                            <Media.Body className="wsr-certification-description">
                              <Media.Heading>
                                Региональный эксперт
                              </Media.Heading>
                              <p className="wsr-expert-description">
                                Прошедшие двух/трёхдневную программу обучения, сдавшие тестирование по итогам обучения. Имеют право проведения региональных (корпоративных) чемпионатов, а также
                                оценки заданий демонстрационного экзамена
                              </p>
                              <Label><a href="/docs/certificate.txt">Образец Свидетельства</a></Label>
                            </Media.Body>
                          </Media>
                        </Col>
                        <Col md={ 12 } className="wsr-certification-description__col">
                          <Media className="wsr-certification-explanation__media">
                            <Media.Left className="wsr-certification-explanation">
                              <img width={ 100 } src="/Images/demo.svg" alt="" />
                            </Media.Left>
                            <Media.Body className="wsr-certification-description">
                              <Media.Heading>
                                Эксперт Демонстрационного экзамена
                              </Media.Heading>
                              <p className="wsr-expert-description">
                                Прошедшие однодневную программу обучения, успешно сдавшие тестирование. Допущены к оценке заданий демонстрационного экзамена
                              </p>
                              <Label><a href="/docs/certificate.txt">Образец Свидетельства</a></Label>
                            </Media.Body>
                          </Media>
                        </Col>
                      </WsrPage>
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
                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 9 } md={ 9 } lg={ 10 } className="full-size">
                    <WsrExpertSearch export categories={ ["Все категории", "Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Все компетенции", "Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                    <WsrBlockTitle title="Строительная сфера" />
                    <Row className="row-flex row-flex-wrap">
                      <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 6 }>
                        <WsrExpert name="Дармограй Тимофей Юрьевич" certification="certified" head={ true } competence="Камнетесное дело" tier="member-expert " medal="gold"
                          host="Колледж Архитектуры, Дизайна и Реинжиниринга №26" expert="Шкребтиенко Сергей Олегович" photo="/Images/competence/1.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="regional" />
                        </WsrExpert>
                      </Col>
                      <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 6 }>
                        <WsrExpert name="Воронков  Никита Александрович" certification="certified" head={ true } competence="Камнетесное дело" tier="member-expert " medal="silver"
                          host=" ООО «Практика реставрации»" expert="Шеблов Александр Николаевич" photo="/Images/competence/2.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="regional" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
                      </Col>
                      <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 6 }>
                        <WsrExpert name="Юсупов Набихон Маннонович" certification="certified" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="bronze"
                          host="Политехнический Колледж № 50" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/3.jpg">
                          <WsrCertification certification="certified" />
                          <WsrCertification certification="demo" />
                        </WsrExpert>
                      </Col>
                      <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 6 }>
                        <WsrExpert name="Моренкова Анастасия Андреевна" certification="regional" head={ true } competence="Кирпичная кладка" tier="member-expert " medal="professional"
                          host="Колледж архитектуры и строительства № 7 " expert="Федорова Елена Викторовна" photo="/Images/competence/4.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
                      </Col>
                      <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 6 }>
                        <WsrExpert name="Солосовский Николай Дмитриевич" certification="regional" head={ true } competence="Краснодеревщик" tier="primary" medal="gold" host="Колледж архитектуры и строительства № 7"
                          expert="Кошелев Кирилл Александрович" photo="/Images/competence/5.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
                      </Col>
                      <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 6 }>
                        <WsrExpert name="Ткачёв Александр Дмитриевич " certification="demo" head={ true } competence="Камнетесное дело" tier="secondary" medal="professional"
                          host="Образовательный комплекс градостроительства «Столица»" expert="Калединцев Сергей Юрьевич" photo="/Images/competence/6.jpg">
                          <WsrCertification certification="demo" />
                        </WsrExpert>
                      </Col>
                    </Row>
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

export default Team;

/* */
