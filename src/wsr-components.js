import React, { Component } from "react";
import "./css/wsr.css";
import { MdApps, MdDateRange, MdArrowForward, MdSearch, MdVpnKey, MdMail, MdPhone } from "react-icons/lib/md";
import { FaVk, FaFacebook, FaInstagram, FaYoutube } from "react-icons/lib/fa";
import TextTruncate from "react-text-truncate";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom"

import MetaTags from 'react-meta-tags';
import { Carousel, Thumbnail, Media, Popover, OverlayTrigger, InputGroup, Form, FormGroup, FormControl, Image, Panel, Label, Button, Grid, Row, Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from "react-bootstrap";


export class WsrMeta extends React.Component {
    render() {
        return (
            <div className="wrapper">
              <MetaTags>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </MetaTags>
            </div>
        );
    }
}




export class WsrMenuBg extends React.Component {
    render() {
        return <div className="wsr-affix-background" />;
    }
}





export class WsrMenuTitle extends React.Component {
    render() {
        return (
            <Link to="/">
              <div className="wsr-title">
                <div className="wsr-title-descriptor">
                  Региональный координационный центр
                </div>
                <div className="wsr-title-primary">
                  WorldSkills Russia по городу Москва
                </div>
                <div className="wsr-title-logo">
                  <img alt="" src="/Images/wsr-msk-logo.svg" />
                </div>
              </div>
            </Link>
        );
    }
}

export class WsrMainMenu extends React.Component {
    render() {
        return (
            <Grid bsClass="containter-fluid">
            <svg width="0" height="0" >
            <clipPath id="ClipAffix" clipPathUnits="objectBoundingBox">
              <polygon points="0 1,0.5 1,0.72 0.05,1 0,0 0">
              </polygon>
            </clipPath>
          </svg>
              <Row>

                <Navbar inverse collapseOnSelect className="navbar-fixed-top">
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">РКЦ WorldSkills Russia</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav>
                      <NavDropdown eventKey={ 1 } title="Wsr в Москве" id="basic-nav-dropdown">
                        <LinkContainer to="/about/rkc">
                          <MenuItem eventKey={ 1.1 }>Об РКЦ</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/about/history">
                          <MenuItem eventKey={ 1.2 }>
                            История WorldSkills
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/about/active">
                          <MenuItem eventKey={ 1.3 }>
                            Активные мероприятия
                          </MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <NavDropdown eventKey={ 2 } title="Эксперты" id="basic-nav-dropdown">
                        <MenuItem eventKey={ 2.1 }>
                          Информация для экспертов
                        </MenuItem>
                      </NavDropdown>
                      <NavDropdown eventKey={ 3 } title="СЦК" id="basic-nav" />
                      <LinkContainer to="/competence">
                        <NavItem eventKey={ 4 } title="Компетенции" id="basic-nav">
                          Компетенции
                        </NavItem>
                      </LinkContainer>
                      <NavDropdown eventKey={ 5 } title="Проекты" id="basic-nav-dropdown">
                        <MenuItem eventKey={ 5.1 }>
                          Региональный эксперт WSR
                        </MenuItem>
                        <MenuItem eventKey={ 5.1 }>Эксперт ДЭ</MenuItem>
                        <MenuItem eventKey={ 5.1 }>
                          Обучение становлению СЦК
                        </MenuItem>
                        <MenuItem eventKey={ 5.1 }>
                          Обучение экспертов WorldSkills
                        </MenuItem>
                      </NavDropdown>
                      <NavDropdown eventKey={ 6 } title="Партнёры" id="basic-nav-dropdown">
                        <MenuItem eventKey={ 6.1 }>
                          Наши партнёры
                        </MenuItem>
                        <MenuItem eventKey={ 6.1 }>
                          Стать партнёром
                        </MenuItem>
                      </NavDropdown>
                      <NavDropdown eventKey={ 7 } title="Пресс-центр" id="basic-nav-dropdown">
                        <MenuItem eventKey={ 7.1 }>Новости</MenuItem>
                        <MenuItem eventKey={ 7.1 }>
                          Важная информация
                        </MenuItem>
                        <MenuItem eventKey={ 7.1 }>Фотогалерея</MenuItem>
                        <MenuItem eventKey={ 7.1 }>Видеогалерея</MenuItem>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <Col xs={ 5 } md={ 5 } lg={ 3 }>
                
                  <div dir="rtl" className="wsr-affix">
                    <div className="wsr-affix">
                      <Row dir="ltr">
                        <WsrMenuTitle />
                        <LinkContainer to="/login">
                          <div>
                            <Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn text-left">
                              <span className="skew-left">
                                                                                                 <MdVpnKey className="ri-big" />
                                                                                                  Личный кабинет                                                                                             </span>
                            </Button>
                          </div>
                        </LinkContainer>
                        <Nav className="wsr-menu" bsStyle="pills" stacked>
                          <LinkContainer to="/about">
                            <NavItem className="wsr-menu-item" eventKey={ 1 }>
                              { "Wsr в Москве".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/expert">
                            <NavItem className="wsr-menu-item" eventKey={ 2 }>
                              { "Эксперты".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/sck">
                            <NavItem className="wsr-menu-item" eventKey={ 3 }>
                              { "СЦК".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/competence">
                            <NavItem className="wsr-menu-item" eventKey={ 4 }>
                              { "Компетенции".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/projects">
                            <NavItem className="wsr-menu-item" eventKey={ 5 }>
                              { "Проекты".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/partners">
                            <NavItem className="wsr-menu-item" eventKey={ 6 }>
                              { "Партнёры".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/press">
                            <NavItem className="wsr-menu-item" eventKey={ 3 }>
                              { "Пресс-центр".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                        </Nav>
                        <Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn text-left">
                          { " " }
                          <span className="skew-left">
                                                                                                                                                                                                            <MdSearch className="ri-big" />
                                                                                                                                                                                                            Поиск
                                                                                                                                                                                                        </span>
                          { " " }
                        </Button>
                      </Row>
                    </div>
                    <WsrMenuBg />
                  </div>
                </Col>
              </Row>
            </Grid>
        );
    }
}


export class WsrCarouselCaption extends React.Component {
    render() {
        let _props = this.props;
        return (
          
          
              <Col xsOffset={1} xs={11} className="wsr-col-inherit">
              
                <Col xs={ 2 } sm={3} md={ 3 } lg={ 3 } className="wsr-carousel-menu__bg pull-right">
                  <Button bsClass="wsr-skewed-btn skew-left text-right">
                    
                    <span className="skew-right">
                                                                                                                <MdApps className="ri-big" />
                                                                                                                    Архив мероприятий
                                                                                                              </span>
                                                                                                              
                  </Button>
                  <Nav className="wsr-carousel-menu text-right pull-right" bsStyle="pills" stacked activeKey={ 1 }>
                    <LinkContainer exact to="/championship">
                      <NavItem className="wsr-carousel-menu-item " eventKey={ 1 }>
                        V ОЧМ «Московские мастера»
                      </NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/qualification">
                      <NavItem className="wsr-carousel-menu-item " eventKey={ 2 }>
                        Всероссийские отборочные соревнования
                      </NavItem>
                    </LinkContainer>
                    <NavItem className="wsr-carousel-menu-item " eventKey={ 3 }>
                      Демонстрационный экзамен по стандартам WorldSkills
                    </NavItem>
                    <NavItem className="wsr-carousel-menu-item " eventKey={ 4 } >
                      Juniorskills
                    </NavItem>
                  </Nav>
                </Col>
                </Col>

        );
    }
}

export class WsrCarousel extends React.Component {
    render() {
        let _props = this.props;
        return (
          <Row className="wsr-header__image">
          <svg width="0" height="0" >
            <clipPath id="ClipRight" clipPathUnits="objectBoundingBox">
              <polygon points="0.28 1, 1 1,1 0,0 0">
              </polygon>
            </clipPath>
          </svg>

            <WsrCarouselCaption />

          </Row>

        );
    }
}

export class WsrImage extends Component {
    render() {
        let {mode, src, height, width, style, ...props} = this.props;
        let modes = {
            fill: "cover",
            fit: "contain"
        };
        let size = modes[mode] || "contain";

        let defaults = {
            height: height || 100,
            width: width || 100,
            backgroundColor: "gray"
        };

        let important = {
            backgroundImage: `url("${src}")`,
            backgroundSize: size,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
        };

        return (
            <div {...props} style={ { ...defaults, ...style, ...important } } />
        );
    }
}

export class WsrBlock extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={ "wsr-block " + _props.type }>
              <Row className="row-eq-height">
              <svg width="0" height="0" >
            <clipPath id="ClipBlock" clipPathUnits="objectBoundingBox">
              <polygon points="0 1, 1 1,1 0,0.12 0">
              </polygon>
            </clipPath>
          </svg>
                <Col sm={ 9 } md={ 7 } className="wsr_block__container">
                <LinkContainer className="text-left wsr-block__heading" to={ _props.link ? _props.link : "/" }>
                  <h5 className="text-left wsr-block__heading">
                                                                                                    <TextTruncate
                        line={ 4 }
                        truncateText="…"
                        text={ _props.heading }
                        />
                                                                                                </h5>
                                                                                                </LinkContainer>
                  <div className="wsr-block__description">
                    <TextTruncate className="wsr-block__description" line={ 2 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
                                                                                                                                                   <MdArrowForward className="wsr-block__date-icon" />
                                                                                                                                                 </a> } />
                  </div>
                  <p className="wsr-block__date">
                    <MdDateRange className="wsr-block__date-icon" />
                    { _props.date }
                  </p>
                </Col>
                <Col sm={ 3 } md={ 5 } className="wsr-block__image-container">
                  <WsrImage className="wsr-block__image" src={ _props.image } height="200px" width="100%" mode="fill" />
                </Col>
              </Row>
            </div>
        );
    }
}


export class WsrNewsItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr_block-menu__item">
              <Col md={ 12 } className="wsr_block-news__wrapper">
                <h5 className="text-left wsr-block__heading">
                                                                                                <TextTruncate
                        line={ 4 }
                        truncateText="…"
                        text={ _props.heading }
                        />
                                                                                            </h5>
                <div className="wsr-block__description">
                  <TextTruncate className="wsr-block__description" line={ 4 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
                                                                                                                                                 <MdArrowForward className="wsr-block__date-icon" />
                                                                                                                                               </a> } />
                </div>
                <p className="wsr-block__date">
                  <MdDateRange className="wsr-block__date-icon" />
                  { _props.date }
                </p>
              </Col>
            </Row>
        );
    }
}

export class WsrNumbersItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Col className="wsr-numbers__item" md={ 6 } xs={ 12 }>
              <h1>{ _props.number }</h1>
              <p className="wsr-numbers__description">{ _props.description } </p>
              
            </Col>
        );
    }
}

export class WsrPartnersItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr_block-menu__item">
              <Col md={ 12 } className="text-center">
                { _props.children }
              </Col>
            </Row>
        );
    }
}

export class WsrBlockBlank extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={ "wsr-block " + _props.type }>
              { _props.children }
            </div>
        );
    }
}


export class WsrBlockTitle extends React.Component {
    render() {
        let _props = this.props;
        return (
          
            <div className="wsr-block__title">
            <LinkContainer className="wsr-block__title" to={ _props.link ? _props.link : "/" }>
              <span>
                                                                                            { _props.title }
                                                                                        </span>
                                                                                        </LinkContainer>
            </div>
            
        );
    }
}

export class WsrGallery extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr-gallery">
              { _props.children }
            </Row>
        );
    }
}

export class WsrFooter extends React.Component {
    render() {
        let _props = this.props;
        return (
                    
            <Row className="wsr-footer">

            <Row>
            <Col xs={ 0 } sm={ 10 } md={ 2 } />
              <Col xs={ 12 } md={ 10 }>
              <span className="wsr-footer__heading">
              <a className="wsr-footer__social-icons" href="https://www.facebook.com/groups/wsrmoscow/">
              <FaFacebook /></a> 
              <a className="wsr-footer__social-icons" href="https://vk.com/wsrmoscow">
              <FaVk /></a>
              <a className="wsr-footer__social-icons" href="https://www.instagram.com/wsrmoscow_/">
              <FaInstagram/></a>
              <a className="wsr-footer__social-icons" href="https://www.youtube.com/channel/UCoAA0xPF2lp2o_RsAuawwMQ">
              <FaYoutube/></a>
              <i>© 2017 Региональный координационный центр WorldSkills Russia по городу Москва</i> </span>
              </Col>
              <Col xs={ 12 } md={ 5 } className="pull-right">
              <div className="text-right wsr-social-icons">
               
               </div>
               </Col>
              </Row>
             
            
            <Row className="wsr-footer__divider"></Row>
            <Row className="wsr-footer__menu">
              <Col xs={ 0 } sm={ 10 } md={ 2 } />
              <Col xs={ 12 } md={ 1 }>
                <h7 className="wsr-footer__title">
                  { "Wsr в Москве".toUpperCase() }
                </h7>
                <a href="">Об РКЦ</a>
                <a href="">История WorldSkills</a>
                <a href="">Активные мероприятия</a>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 1 }>
                <h7 className="wsr-footer__title">
                  { "Эксперты".toUpperCase() }
                </h7>
                <a href="">Информация для экспертов</a>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 1 }>
                <h7 className="wsr-footer__title">
                  { "СЦК".toUpperCase() }
                </h7>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 2 }>
                <h7 className="wsr-footer__title">
                  { "Компетенции".toUpperCase() }
                </h7>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 2 }>
                <h7 className="wsr-footer__title">
                  { "Проекты".toUpperCase() }
                </h7>
                <a href="">Региональный эксперт WSR</a>
                <a href="">Эксперт ДЭ</a>
                <a href="">Обучение становлению СЦК</a>
                <a href="">Обучение экспертов WorldSkills</a>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 1 }>
                <h7 className="wsr-footer__title">
                  { "Партнёры".toUpperCase() }
                </h7>
                <a href="">Наши партнёры</a>
                <a href="">Стать партнёром</a>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 2 }>
                <h7 className="wsr-footer__title">
                  { "Пресс-центр".toUpperCase() }
                </h7>
                <a href="">Новости</a>
                <a href="">Важная информация</a>
                <a href="">Фотогалерея</a>
                <a href="">Видеогалерея</a>
              </Col>
              </Row>
            </Row>
        );
    }
}

export class WsrPage extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={ "wsr-block " + _props.type }>
              <Row>
                <Col sm={ 9 } md={ 12 } className="wsr_page__container">
                  <h3>
                                                                                                    { _props.heading ? _props.heading : "" }
                                                                                                </h3>
                  <div className="wsr-page__content">
                    { _props.description ? " <p> { _props.description } </p> " : false }
                    { _props.children }
                  </div>
                </Col>
              </Row>
            </div>
        );
    }
}

export class WsrTierLabel extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Label className={ _props.tier === "primary" ? "wsr-team-label__primary" : "wsr-team-label__secondary" }>
              { _props.tier === "primary" ? "Основной состав" : "Запасной состав" }
            </Label>

        );
    }
}


export class WsrSizeLabel extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Label className="wsr-file-list__file-size pull-right">
              { _props.size }
              { _props.extension }
            </Label>
        );
    }
}

export class WsrTeamMember extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Panel footer={ "Эксперт: " + _props.expert }>
              <Row className="is-flex">
                <Col lg={ 3 }>
                  <Image className={ _props.tier === "primary" ? "wsr-team__member-photo--primary" : "wsr-team__member-photo--secondary" } src={ _props.photo } circle responsive />
                </Col>
                <Col lg={ 9 } className="wsr-team__description">
                  <Row className="is-flex">
                    <span className={ _props.tier === "primary" ? "wsr-team__member--primary" : "wsr-team__member--secondary" }>{ _props.name } <br/><WsrTierLabel tier={ _props.tier } /></span>
                  </Row>
                  <div className="wsr-team__divider" />
                </Col>
              </Row>
              <Row className="is-flex">
                <span className="wsr-team__host">{ _props.host }</span>
              </Row>
            </Panel>
        );
    }
}


export class WsrCompetenceCategory extends React.Component {
    render() {
        let _props = this.props;
        let listItems = _props.competences.map((competence, index) => <NavItem key={ index } eventKey={ index + 1 + "c" } >
                                                                        { competence }
                                                                      </NavItem>
        );
        return (
            <Nav bsStyle="pills" className="wsr-competence-category" stacked>
              { listItems }
            </Nav>
        );
    }
}



export class WsrCompetence extends React.Component {
    render() {
        let _props = this.props;
        let listItems = _props.competences.map((competence, index) => <NavItem key={ index } eventKey={ index + 1 + "c" }>
                                                                        { competence }
                                                                      </NavItem>
        );
        return (
            <Nav bsStyle="pills" className="wsr-competence-category" stacked>
              { listItems }
            </Nav>
        );
    }
}


export class WsrExpertSearch extends React.Component {
    render() {
        let _props = this.props;
        let listCategories = _props.categories.map((category, index) => <option key={ index } value="select">
                                                                          { category }
                                                                        </option>
        );
        let listCompetences = _props.competences.map((competence, index) => <option key={ index } value="select">
                                                                              { competence }
                                                                            </option>
        );
        return (
            <Row className="wsr-row-negative">
              <Form>
                <Col lg={ 4 }>
                  <FormGroup controlId="formControlsSelect">
                    <WsrBlockTitle title="Категория" />
                    <FormControl componentClass="select" placeholder="select">
                      { listCategories }
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col lg={ 4 }>
                  <FormGroup controlId="formControlsSelect">
                    <WsrBlockTitle title="Компетенция" />
                    <FormControl componentClass="select" placeholder="select">
                      { listCompetences }
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col lg={ 4 }>
                  <FormGroup>
                    <WsrBlockTitle title="Поиск" />
                    <InputGroup>
                      <FormControl className="wsr-input-search" type="text" placeholder="Например, Столярное дело" />
                      <InputGroup.Button>
                        <Button className="wsr-btn-search">
                          <MdSearch className="ri-search" />
                        </Button>
                      </InputGroup.Button>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Form>
            </Row>
        );

    }
}

export class WsrLocationItem extends React.Component {
    render() {
        let _props = this.props;
        const popoverBottom = (
        <Popover id="popover-positioned-bottom">
          <strong>{ _props.metro } </strong>
          <br />
          { _props.detailedAddress }
        </Popover>
        );
        return (
            <tr>
              <td>
                { _props.competence }
              </td>
              <td>
                <Row className="wsr-expert__name">
                  { _props.expert }
                </Row>
                <Row>
                  <MdPhone className="ri-contacts" />
                  { _props.phone }
                </Row>
                <Row>
                  <MdMail className="ri-contacts" />
                  { _props.mail }
                </Row>
              </td>
              <td>
                { _props.address }
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={ popoverBottom }>
                  <Row>
                    <Label className="wsr-location-label">Как доехать?</Label>
                  </Row>
                </OverlayTrigger>
              </td>
            </tr>
        );
    }
}

export class WsrPartner extends React.Component {
    render() {
        let _props = this.props;

        return (
            <div className={ "wsr-block " + _props.type }>
              <Row>
                <Col sm={ 9 } md={ 12 } className="wsr_partner__container ">
                  <div className="wsr-page__description">
                    <Media>
                      <Media.Left className="wsr-partner-logo">
                        <img width={ 100 } src={ _props.logo } alt="" />
                      </Media.Left>
                      <Media.Body className="wsr-partner-description">
                        <Media.Heading>
                          { _props.title }
                        </Media.Heading>
                        <TextTruncate className="wsr-block__description" line={ 3 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
                                                                                                                                                       <MdArrowForward className="wsr-block__date-icon" />
                                                                                                                                                     </a> } />
                      </Media.Body>
                    </Media>
                  </div>
                </Col>
              </Row>
            </div>


        );
    }
}


export class WsrGalleryItem extends React.Component {
    render() {
        let _props = this.props;

        return (
            <Col xs={ 6 } md={ 4 }>
              <LinkContainer className="wsr-photo-gallery-item" to={ _props.album }>
                <Thumbnail src={ _props.thumbnail } alt={ _props.title }>
                  <div className="wsr-photo-gallery-item__description">
                    <h5 className="wsr-block__heading">{ _props.title }</h5>
                    <p>
                      { _props.description }
                    </p>
                  </div>
                </Thumbnail>
              </LinkContainer>
            </Col>

        );
    }
}


export class WsrChampionshipSideMenu extends React.Component {
    render() {
        let _props = this.props;

        return (

            <WsrBlockBlank className="wsr-block-select">
              <Nav bsStyle="pills" className="wsr-side-menu" stacked activeKey={ 1 }>
                <NavDropdown eventKey="1" title="О чемпионате" id="nav-dropdown">
                  <LinkContainer to="/championship/history">
                    <MenuItem eventKey="1.1">История</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="1.2">Партнёрство</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/press/photo-gallery">
                    <MenuItem eventKey="1.3">Фотогалерея</MenuItem>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown eventKey="2" title="Локации" id="nav-dropdown">
                  <LinkContainer to="/championship/history">
                    <MenuItem eventKey="2.1">Конкурсные площадки</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="2.2">Размещение гостей</MenuItem>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown eventKey="3" title="Мероприятия" id="nav-dropdown">
                  <LinkContainer to="/championship/history">
                    <MenuItem eventKey="3.1">Программа чемпионата</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="3.2">Деловая программа</MenuItem>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown eventKey="4" title="Соревнования" id="nav-dropdown">
                  <LinkContainer to="/championship/history">
                    <MenuItem eventKey="4.1">Компетенци</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="4.2">График проведения</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="4.3">Участники</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="4.4">Эксперты</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="4.5">Результаты</MenuItem>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </WsrBlockBlank>
        );
    }
}

export class WsrQualificationSideMenu extends React.Component {
    render() {
        let _props = this.props;

        return (

            <WsrBlockBlank className="wsr-block-select">
              <Nav bsStyle="pills" className="wsr-side-menu" stacked activeKey={ 1 }>
                <NavDropdown eventKey="1" title="Всероссийские отборочные соревнования" id="nav-dropdown">
                  <LinkContainer to="/qualification">
                    <MenuItem eventKey="1.1">График проведения</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/qualification">
                    <MenuItem eventKey="1.2">Партнёрство</MenuItem>
                  </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/championship/history">
                  <MenuItem eventKey="2">Соревнования</MenuItem>
                </LinkContainer>
                <NavDropdown eventKey="3" title="Локации" id="nav-dropdown">
                  <LinkContainer to="/championship/history">
                    <MenuItem eventKey="3.1">Логистика</MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/championship/partners">
                    <MenuItem eventKey="3.2">Размещение участников</MenuItem>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </WsrBlockBlank>
        );
    }
}


export class WsrBecomePartnerForm extends React.Component {

    render() {
        let _props = this.props;

        return (

            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col sm={ 12 }>
                  <FormControl type="text" placeholder="Название компании" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={ 12 }>
                  <FormControl type="text" placeholder="Вид деятельности" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={ 12 }>
                  <FormControl type="text" placeholder="Имя и фамилия" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={ 12 }>
                  <FormControl type="email" placeholder="Почта" />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={ 12 }>
                  <FormControl type="tel" placeholder="Телефон" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={ 12 }>
                  <Button type="submit">
                    Отправить заявку
                  </Button>
                </Col>
              </FormGroup>
            </Form>


        );
    }
}



export class WsrSpinner extends React.Component {

    render() {
        let _props = this.props;
        return (
            <div className="loader">Загрузка...</div>
        );
    }
}

