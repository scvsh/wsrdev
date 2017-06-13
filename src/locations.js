import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {  Table, Accordion, Panel, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrLocationItem, WsrExpertSearch, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class Locations extends Component {
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

                    <WsrExpertSearch categories={ ["Специалисты строительной сферы", "Творчество и дизайн", "Специалисты, занятые на промышленном производстве", "Сфера услуг", "Обслуживание гражданского транспорта", "RU", "FutureSkills (FS)", "Презентационная (FS)", "Презентационная", "JuniorSkills", "Презентационная (JS)"] } competences={ ["Камнетёсное дело", "Облицовка плиткой", "Столярное дело", "Плотницкое дело", "Кирпичная кладка", "Холодильная техника и системы кондиционирования", "Сантехника и отопление", "Сухое строительство и штукатурные работы", "Малярные и декоративные работы", "Ландшафтный дизайн", "Электромонтаж", "Производство мебели"] } />
                    <Accordion className="wsr-expert-panel" defaultActiveKey="1">
                        <Panel header="Государственное автономное образовательное учреждение высшего образования города Москвы «Московский городской педагогический университет»" eventKey="1">
                          <Table className="wsr-location-table" striped hover>
                            <thead>
                              <tr>
                                <th>Компетенция</th>
                                <th>Технический эксперт</th>
                                <th>Адрес проведения</th>
                              </tr>
                            </thead>
                            <tbody>
                            <WsrLocationItem 
                            competence="Дошкольное воспитание"
                            expert="Бабалаева Мария Викторовна"
                            phone="8 (963) 600-82-12"
                            mail="babalaewa73@inbox.ru"
                            address="г. Москва, ул. Поклонная, д. 2 "
                            metro="м. «Кутузовская»"
                            detailedAddress="последний вагон из центра, далее пешком 3-5 минут в сторону области."/>
                            
                            <WsrLocationItem 
                            competence="Дошкольное воспитание"
                            expert="Бабалаева Мария Викторовна"
                            phone="8 (963) 600-82-12"
                            mail="babalaewa73@inbox.ru"
                            address="г. Москва, ул. Поклонная, д. 2 "
                            metro="м. «Первомайская»"
                            detailedAddress="выход из первого вагона из центра, прямо до светофора, перейти на противоположную сторону, далее вдоль Измайловского сквера по правой стороне улицы примерно 10 минут пешком. Красное школьное здание типовое 60-х годов."
                            />

                            </tbody>
                          </Table>
                        </Panel>
                        <Panel header="Государственное автономное профессиональное образовательное учреждение города Москвы «Колледж предпринимательства № 11»" eventKey="2">
                          <Table className="wsr-location-table" striped hover>
                            <thead>
                              <tr>
                                <th>ФИО</th>
                                <th>Колледж</th>
                                <th>Опыт участия</th>
                              </tr>
                            </thead>
                            <tbody>
                              <WsrLocationItem 
                            competence="Видеопроизводство"
                            expert="Дьяконенко Яна Борисовна"
                            phone="8 (964) 533-92-21"
                            mail="yana-bd@yandex.ru"
                            address="г. Москва, ул. Фестивальная, д. 51"
                            metro="м. «Кутузовская»"
                            detailedAddress="последний вагон из центра, далее пешком 3-5 минут в сторону области."/>

                            <WsrLocationItem 
                            competence="Предпринимательство"
                            expert="Кузнецова Татьяна Николаевна"
                            phone="8 (916) 512-82-62"
                            mail="om@kp11.ru"
                            address="г. Москва, Ленинградское шоссе, 13 А"/>
                            <WsrLocationItem 
                            competence="Туризм"
                            expert="Леонов Анатолий Мартемьянович"
                            phone="8 (903) 774-81-03"
                            mail="leonov-65@mail.ru"
                            address="г. Москва, ул. Онежская, д. 3"/>
                            </tbody>
                          </Table>
                        </Panel>
                      </Accordion>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Сцк" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer exact to="/sck"><ListGroupItem>СЦК</ListGroupItem></LinkContainer>
                        <LinkContainer to="/sck/locations"><ListGroupItem>Базовые площадки в Москве</ListGroupItem></LinkContainer>
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

export default Locations;

/* */
