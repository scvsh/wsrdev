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

class Techdocs extends Component {
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
                    <WsrBlockTitle title="Информационные технологии" />
                    <WsrPage type="wsr-page" heading="Техническая документация" description="" date="10.05.2017">
                      <p>Краткое описание раздела
                      </p>
                      <ListGroup className="wsr-file-list">
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Приказ Департамента образования города Москвы «Об открытом чемпионате профессионального мастерства города Москвы «Московские мастера» по стандартам WorldSkills Russia.<WsrSizeLabel size="10 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Положение об открытом чемпионате профессионального мастерства города Москвы «Московские мастера» по стандартам WorldSkills Russia.<WsrSizeLabel size="15 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Приказ Департамента образования города Москвы об организации и проведении Московского профессионального чемпионата «Профессиональные кадры столичных колледжей». <WsrSizeLabel size="11 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Положение о проведении Московского профессионального чемпионата «Профессиональные кадры столичных колледжей». <WsrSizeLabel size="20 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Состав оргкомитета Московского профессионального чемпионата «Профессиональные кадры столичных колледжей». <WsrSizeLabel size="10 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Приказ Союза «WorldSkills Russia» об утверждении перечня компетенций Финала Национального чемпионата «Молодые профессионалы» (WorldSkills Russia) - 2017г.<WsrSizeLabel size="130 кб" extension=".doc"/></ListGroupItem>
                        <ListGroupItem href="#"><MdFileDownload className="ri-down"/>Другой документ<WsrSizeLabel size="10 кб" extension=".doc"/></ListGroupItem>
                      </ListGroup>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/competence"><ListGroupItem>Другие компетенции</ListGroupItem></LinkContainer>
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

export default Techdocs;

/* */
