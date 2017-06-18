import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Panel, Thumbnail, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class Rkc extends Component {
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
                    <WsrPage type="wsr-page" heading="Основные задачи регионального координационного центра WorldSkills Russia по городу Москва " description="" date="10.05.2017">
                      <p>Основная задача Регионального координационного центра WorldSkills Russia по городу Москва — это осуществление многоуровневой системы связи между образовательными
                        организациями Москвы, бизнес-партнерами и экспертными сообществами по различным компетенциям с Союзом «Агентство развития профессиональных сообществ
                        и рабочих кадров «Ворлдскиллс Россия» (Союз наделяется полномочием представлять Российскую Федерацию в международной организации WorldSkills International
                        при подготовке мероприятий по подаче заявки на проведение мирового чемпионата по профессиональному мастерству WorldSkills Competition в 2019 году в России).
                        Также РКЦ WorldSkills Russia по городу Москва осуществляет организацию и координацию чемпионатов, конкурсов и соревнований в рамках движения WorldSkills
                        в городе Москва.
                      </p>
                      <Image alt="171x180" src="/Images/about/1.jpg" />
                      <h4 className="wsr-page__heading">Достижения регионального координационного центра WorldSkills Russia по городу Москва</h4>
                      <p>
                        Участвуя в IV Национальном чемпионате «Молодые профессионалы» — 2016, который проходил по стандартам WorldSkills, сборная команда Москвы завоевала 15 золотых, 13 серебряных,
                        11 бронзовых медалей и 6 медалей за профессионализм из 84 компетенций, которые были заявлены на чемпионате. По итогам чемпионата команда Москвы завоевала
                        127 призовых медалей в 60 компетенциях, став первой в Национальном чемпионате!
                      </p>
                      <Image alt="171x180" src="/Images/about/2.jpg" />
                      <p>
                        V Открытый чемпионат профессионального мастерства города Москвы «Московские мастера» по стандартам WorldSkills Russia, который состоялся в октябре, стал самым масштабным
                        соревнованием профессионального мастерства в Москве в 2016 году! В V Открытом чемпионате профессионального мастерства «Московские мастера» по стандартам
                        WorldSkills Russia приняли участие более 2000 человек!
                      </p>
                      <Image alt="171x180" src="/Images/about/3.jpg" />
                      <p>
                        С 1 по 3 декабря в Швеции, в городе Гётеборг, состоялись соревнования EuroSkills-2016. Копилка сборной команды WorldSkills Москвы пополнилась еще одной медалью.
                        Серебро заработала участница от Москвы сборной команды WorldSkills Russia в компетенции «Графический дизайн».
                      </p>
                      <Image alt="171x180" src="/Images/about/4.jpg" />
                      <p>
                        По итогам чемпионата у россиян два золота, две серебряных медали, одна бронза и 11 почетных наград. Сборная команда WorldSkills Russia стала 1-й в балльном и 7-й
                        в общемедальном зачете! Президент России Владимир Путин встретился с победителями европейского чемпионата рабочих профессий EuroSkills-2016, поздравил
                        ребят с победой и пожелал дальнейших побед сборной команде России на предстоящих чемпионатах WorldSkills!
                      </p>
                      <Image alt="171x180" src="/Images/about/5.jpg" />
                      <p>
                        РКЦ WorldSkills Russia по городу Москва в 2017 году продолжит работу по подготовке участников сборной команды WorldSkills Москвы к участию в Национальном чемпионате
                        России. А также к участию в составе сборной команды WorldSkills Russia в международном чемпионате WorldSkills, который состоится в Абу-Даби, столице
                        Объединенных Арабских Эмиратов, в октябре 2017 года.
                      </p>
                      <h4 className="wsr-page__heading">Региональный координационный центр WorldSkills Russia по городу Москва</h4>
                      <Panel className="wsr-page__panel">
                        <span>Контактное лицо: Калугина Ксения Евгеньевна <br /></span>
                        <span>Тел.:  8 (499) 577-00-56 <br /></span>
                        <span>E-mail: mail@wsr.msk.ru <br /></span>
                        <span>Адрес: Москва, Дмитровское ш., д. 51 <br /></span>
                      </Panel>
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

export default Rkc;

/* */
