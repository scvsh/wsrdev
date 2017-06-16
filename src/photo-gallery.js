import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";
/* import Gallery from 'react-photo-gallery';
   import Lightbox from 'react-images'; */
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrGalleryItem, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class PhotoGallery extends Component {

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
                    <WsrBlockTitle title="Альбомы" />
                  
                      <Row className="wsr-photo-gallery-row">
                        <WsrGalleryItem album="press/photo-gallery/album1/" title="Сборная команда WorldSkills Москвы — 2017" thumbnail="/Images/photo-gallery/album1/1.jpg" description="Альбом сборной"/>
                        <WsrGalleryItem album="press/photo-gallery/album2/" title="Финал V Национального чемпионата «Молодые профессионалы» (WorldSkills Russia), май 2017" thumbnail="/Images/photo-gallery/album2/1.jpg" description="Альбом сборной"/>
                        <WsrGalleryItem album="press/photo-gallery/album3/" title="Всероссийские отборочные соревнования WorldSkills в Москве, март 2017" thumbnail="/Images/photo-gallery/album3/1.jpg" description="Альбом сборной"/>
                      </Row>
                      <Row className="wsr-photo-gallery-row">  
                        <WsrGalleryItem album="press/photo-gallery/album4/" title="Демонстрационный экзамен по стандартам WS, январь-февраль 2017" thumbnail="/Images/photo-gallery/album4/1.jpg" description="Альбом сборной"/>
                        <WsrGalleryItem album="press/photo-gallery/album5/" title="Региональные отборочные соревнования WS в Москве, февраль 2017" thumbnail="/Images/photo-gallery/album5/1.jpg" description="Альбом сборной"/>
                        <WsrGalleryItem album="press/photo-gallery/album6/" title="Сборы Сборной команды WS Москва, январь 2017" thumbnail="/Images/photo-gallery/album6/1.jpg" description="Альбом сборной"/>
                      </Row>
                  



                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                   <WsrBlockTitle title={'\u00A0'} />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/press/contact"><ListGroupItem>Контакты</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/press/important"><ListGroupItem>Важная информация</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/photo-gallery"><ListGroupItem>Фотогалерея</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/video-gallery"><ListGroupItem>Видеогалерея</ListGroupItem></LinkContainer>

    
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

export default PhotoGallery;

/* */
