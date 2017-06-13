import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

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
                  <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 }>
                    <WsrBlockTitle title="СЦК" />
                    <WsrPage type="wsr-page" heading="Специализированный центр компетенций" description="" date="10.05.2017">
                      <p>Специализированный центр компетенций (СЦК) — это центр развития профессий и профессиональных сообществ WorldSkills, ресурсный центр, обладающий современным оборудованием и технологиями, отвечающими требованиям WorldSkills, а также наличием экспертов для осуществления обучения и оценки соответствующей квалификации по стандартам WorldSkills.
                      </p>
                      <ListGroup className="wsr-file-list">
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Информационное письмо от Союза WorldSkills Russia<WsrSizeLabel size="10 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Положение об аккредитации СЦК<WsrSizeLabel size="15 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Форма заявки на прохождение аккредитации в качестве СЦК<WsrSizeLabel size="11 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Документы по соответсвию деятельности<WsrSizeLabel size="20 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Обязательства СЦК перед Союзом WorldSkills Russia<WsrSizeLabel size="10 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Договор<WsrSizeLabel size="130 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="/sck"><MdFileDownload className="ri-down"/>Положительные результаты и статус СЦК<WsrSizeLabel size="10 кб" extension=".doc"/></ListGroupItem>
                      </ListGroup>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Сцк" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/sck"><ListGroupItem>СЦК</ListGroupItem></LinkContainer>
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

export default Sck;

/* */
