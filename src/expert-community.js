import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";



import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {  Accordion, Table, Panel, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrBlock, WsrExpertSearch, WsrMeta, WsrMainMenu, WsrBlockTitle,  WsrFooter } from "./wsr-components.js";


/* Main app */

class ExpertCommunity extends Component {
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
                  <Col lg={ 2 } />
                  <Col lg={ 10 }>
                    <WsrExpertSearch categories={ ["Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                    <Row className="wsr-row-negative">
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
                                <td className="wsr-expert__name">Нуртдинов Юрий Рашитович</td>
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
                                <td className="wsr-expert__name">Суров Максим Валерьевич</td>
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
                                <td className="wsr-expert__name">Кураченкова Мария Владимировна </td>
                                <td>Московский государственный образовательный комплекс </td>
                                <td>Завершено обучение по программе «Региональный эксперт» </td>
                              </tr>
                              <tr>
                                <td className="wsr-expert__name">Попов Михаил Евгеньевич</td>
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
                                <td className="wsr-expert__name">Рыжиков Юрий Николаевич</td>
                                <td>Московский технологический колледж</td>
                                <td>Эксперт демонстрационного экзамена</td>
                                <td>00487</td>
                              </tr>
                              <tr>
                                <td className="wsr-expert__name">Савин Александр Леонидович </td>
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
                    </Row>
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

export default ExpertCommunity;

/* */
