import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";



import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {  Accordion, Table, Panel, Button, Grid, Row, Col, Nav, NavItem, Carousel, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrBlock, WsrExpertSearch, WsrMeta, WsrMainMenu, WsrBlockTitle,  WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdApps } from "react-icons/lib/md";

/* Main app */

class ExpertCommunity extends Component {
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
                  <Col lg={ 2 } />
                  <Col lg={ 10 }>
                    <WsrExpertSearch categories={ ["Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                    <Col lg={ 8 }>
                    
                      <Accordion className="wsr-expert-panel" defaultActiveKey="1">
                        <Panel header="Сертифицированные эксперты WorldSkills" eventKey="1">
                          <Table className="wsr-expert-table" striped hover>
                            <thead>
                              <tr>
                                <th>ФИО</th>
                                <th>Организация</th>
                                <th>Статус/Опыт участия</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Нуртдинов Юрий Рашитович</td>
                                <td>ФГУП «НПЦ Газотурбостроения «Салют»</td>
                                <td>Сертифицированный эксперт</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Panel>
                        <Panel header="Эксперты, прошедшие обучение по программе «Национальный эксперт» WorldSkills" eventKey="2">
                          <Table className="wsr-expert-table" striped hover>
                            <thead>
                              <tr>
                                <th>ФИО</th>
                                <th>Колледж</th>
                                <th>Опыт участия</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Суров Максим Валерьевич</td>
                                <td>ФГУП «НПЦ Газотурбостроения «Салют»</td>
                                <td>Эксперт,  прошедший обучение по программе национального эксперта</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Panel>
                        <Panel header="Эксперты, имеющие право проведения корпоративных или региональных чемпионатов" eventKey="3">
                          <Table className="wsr-expert-table" striped hover>
                            <thead>
                              <tr>
                                <th>ФИО</th>
                                <th>Организация</th>
                                <th>Статус</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Кураченкова Мария Владимировна </td>
                                <td>Московский государственный образовательный комплекс </td>
                                <td>Завершено обучение по программе «Региональный эксперт» </td>
                              </tr>
                              <tr>
                                <td>Попов Михаил Евгеньевич</td>
                                <td>Политехнический техникум № 47 имени В.Г. Федорова </td>
                                <td>Завершено обучение по программе «Региональный эксперт»  </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Panel>
                        <Panel header="Эксперты, имеющие право проведения демонстрационного экзамена" eventKey="4">
                          <Table className="wsr-expert-table" striped hover>
                            <thead>
                              <tr>
                                <th>ФИО</th>
                                <th>Организация</th>
                                <th>Статус</th>
                                <th>№ Свидетельства</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Рыжиков Юрий Николаевич</td>
                                <td>Московский технологический колледж</td>
                                <td>Эксперт демонстрационного экзамена</td>
                                <td>00487</td>
                              </tr>
                              <tr>
                                <td>Савин Александр Леонидович </td>
                                <td>Политехнический техникум № 47 имени В.Г. Федорова</td>
                                <td>Эксперт демонстрационного экзамена</td>
                                <td>01750</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Panel>
                      </Accordion>
                    </Col>
                    <Col lg={4}>
                    <WsrBlockTitle title="Важная информация" />
                    <WsrBlock type="wsr-block-important" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" />
                    <WsrBlock type="wsr-block-important" heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»" description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                      date="10.05.2017" image="/Images/thumb01.jpg" />
                    </Col>
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

export default ExpertCommunity;

/* */
