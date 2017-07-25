import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";


import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import {  ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";


/* Main app */

class Championship extends Component {
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
                  <Col xs={ 12 } sm={ 7 } md={ 5 } lg={ 6 }>
                    <WsrBlockTitle title="V Открытый чемпионат профессионального мастерства" />
                    <WsrPage type="wsr-page" heading="Московские мастера" description="" date="10.05.2017">
                      <p>V Открытый чемпионат профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia пройдет в период с 18 по 27 октября, закрытие чемпионата состоится 10 ноября 2016 года. В Чемпионате Москвы 2016 года заявлено: 75 компетенций, серия региональных отборочных соревнований по 15 компетенциям, а также 1 экспериментальная компетенция, которая ранее нигде представлена не была, 32 специализированных центра компетенций (СЦК). Для соревнований организовано 817 рабочих мест, из них 222 отведено для участников из других регионов.
                        <br/>
                        <br/>Соревнования направлены на повышение престижа рабочих профессий и развитие профессионального образования путем внедрения лучших практик и профессиональных стандартов. Формат мероприятия предполагает выявление лучших специалистов по каждому направлению. Оценивать качество работ будут настоящие профессионалы -  эксперты, имеющие огромный опыт и лучшие практические навыки.
                        <br/>
                        <br/>Соревнования проводятся в форме конкурса профессионального мастерства, где участник должен продемонстрировать все свои навыки и за определенное количество
                        времени выполнить ряд практических заданий. Стандарты WorldSkills позволяют «задавать планку» для подготовки специалистов высокого уровня и формулировать
                        требования к выпускникам образовательных учреждений.
                        <br/>
                        <br/>V ОЧМ станет самым масштабным соревнованием профессионального мастерства в Москве в 2016 году! В V Открытом чемпионате профессионального мастерства «Московские мастера» по стандартам WorldSkills Russia примет участие более 2000 человек!
                        <br/>
                        <br/>Поддержку Движения WorldSkills в России осуществляют Министерство образования и науки РФ, Министерство промышленности и торговли РФ, Министерство труда
                        и социальной защиты РФ, Агентство стратегических инициатив и многие другие.
                        <br/>
                      </p>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="WSR в Москве" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/championship/history"><ListGroupItem>История чемпионата</ListGroupItem></LinkContainer>
                        <LinkContainer to="/championship/partners"><ListGroupItem>Партнёры</ListGroupItem></LinkContainer>
                        <LinkContainer to="/championship/locations"><ListGroupItem>Локации</ListGroupItem></LinkContainer>
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

export default Championship;

/* */
