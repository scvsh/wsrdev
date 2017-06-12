import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Panel, Thumbnail, ListGroupItem, ListGroup, Button, Grid, Row, Col, Nav, NavItem, Carousel, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrGalleryItem, WsrPartner, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdApps } from "react-icons/lib/md";

/* Main app */

const PHOTO_SET = [
  {
    src: 'http://wsr.msk.ru/images/public/fotos/fotogallary/vserossijskie_otborochnye_sorevnovaniya_worldskills_v_moskve_mart_2017/1.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 4,
    height: 3,
    alt: 'image 1',
  },
  {
    src: 'http://example.com/example/img2.jpg',
    srcset: [
      'http://wsr.msk.ru/images/public/fotos/fotogallary/vserossijskie_otborochnye_sorevnovaniya_worldskills_v_moskve_mart_2017/2.jpg'
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 4,
    height: 3,
    alt: 'image 2',
  }
];

class PhotoGallery extends Component {

    render() {
        return (
            <div className="App">
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
                        <LinkContainer to="/press/video-gallery"><ListGroupItem>Важная информация</ListGroupItem></LinkContainer>
                        <LinkContainer exact to="/press/photo-gallery"><ListGroupItem>Фотогалерея</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/video-gallery"><ListGroupItem>Видеогалерея</ListGroupItem></LinkContainer>
                        <LinkContainer to="/press/video-gallery"><ListGroupItem>Контакты</ListGroupItem></LinkContainer>

    
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
