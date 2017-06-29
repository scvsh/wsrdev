import React, { Component } from "react";
import "./css/wsr.css";
import { MdMore, MdMoreVert, MdKeyboardControl, MdStarHalf, MdStarOutline, MdStar, MdStars, MdApps, MdDateRange, MdArrowForward, MdSearch, MdVpnKey, MdMail, MdPhone } from "react-icons/lib/md";
import { FaArchive, FaGraduationCap, FaStarHalfEmpty, FaStarHalf, FaStarO, FaStar, FaVk, FaFacebook, FaInstagram, FaYoutube } from "react-icons/lib/fa";
import TextTruncate from "react-text-truncate";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';

import MetaTags from 'react-meta-tags';
import { Table, Tooltip, Carousel, Thumbnail, Media, Popover, OverlayTrigger, InputGroup, Form, FormGroup, FormControl, Image, Panel, Label, Button, Grid, Row, Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from "react-bootstrap";


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
              <svg width="0" height="0">
                <clipPath id="ClipAffix" clipPathUnits="objectBoundingBox">
                  <polygon points="0 1,0.5 1,0.67 0.08,1 0,0 0">
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
                          <MenuItem eventKey={ 1.1 }>РКЦ Москвы</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/about/history">
                          <MenuItem eventKey={ 1.2 }>
                            История
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/about/active">
                          <MenuItem eventKey={ 1.3 }>
                            Регламентирующие документы
                          </MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <LinkContainer to="/expert/community">
                        <NavItem eventKey={ 2 } title="Сборная команда" id="basic-nav">
                          Сборная команда
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/expert/community">
                        <NavItem eventKey={ 3 } title="Эксперты" id="basic-nav">
                          Эксперты
                        </NavItem>
                      </LinkContainer>
                      <NavDropdown eventKey={ 4 } title="СЦК" id="basic-nav-dropdown">
                        <LinkContainer to="/sck">
                          <MenuItem eventKey={ 4.1 }>
                            СЦК
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/sck/locations">
                          <MenuItem eventKey={ 4.2 }>
                            Базовые площадки в Москве
                          </MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <LinkContainer to="/competence">
                        <NavItem eventKey={ 5 } title="Компетенции" id="basic-nav">
                          Компетенции
                        </NavItem>
                      </LinkContainer>
                      <NavDropdown eventKey={ 6 } title="Проекты" id="basic-nav-dropdown">
                        <LinkContainer to="/projects/region-expert">
                          <MenuItem eventKey={ 6.1 }>
                            Региональный эксперт WSR
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/projects/expert-de">
                          <MenuItem eventKey={ 6.2 }>Эксперт ДЭ</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/projects/become-sck">
                          <MenuItem eventKey={ 6.3 }>
                            Обучение становлению СЦК
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/projects/1c-learn">
                          <MenuItem eventKey={ 6.4 }>
                            Обучение экспертов WorldSkills в 1С:Учебном центре №1
                          </MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <NavDropdown eventKey={ 7 } title="Партнёры" id="basic-nav-dropdown">
                        <LinkContainer to="/partners">
                          <MenuItem eventKey={ 7.1 }>
                            Наши партнёры
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/partners/become-a-partner">
                          <MenuItem eventKey={ 7.2 }>
                            Стать партнёром
                          </MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <NavDropdown eventKey={ 8 } title="Пресс-центр" id="basic-nav-dropdown">
                        <LinkContainer to="/press/contact">
                          <MenuItem eventKey={ 8.1 }>Контакты</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/press/important">
                          <MenuItem eventKey={ 8.2 }>
                            Важная информация
                          </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/press/photo-gallery">
                          <MenuItem eventKey={ 8.3 }>Фотогалерея</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/press/video-gallery">
                          <MenuItem eventKey={ 8.4 }>Видеогалерея</MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <Col xs={ 5 } sm={ 4 } md={ 3 } lg={ 3 }>
                  <div dir="rtl" className="wsr-affix">
                    <div className="wsr-affix">
                      <Row dir="ltr">
                        <WsrMenuTitle />
                        <LinkContainer to="/">
                          <div>
                            <Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn text-left skew-left">
                              <div>
                                <MdSearch className="ri-big" /> Поиск </div>
                            </Button>
                          </div>
                        </LinkContainer>
                        <Nav className="wsr-menu" bsStyle="pills" stacked>
                          <LinkContainer to="/about">
                            <NavItem className="wsr-menu-item" eventKey={ 1 }>
                              { "Wsr в Москве".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/team">
                            <NavItem className="wsr-menu-item" eventKey={ 1 }>
                              { "Сборная Москвы".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/experts">
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
                        <hr className="wsr-menu__contacts-divider" />
                        <div className="wsr-menu__contacts">
                          <div>
                            <MdMail className="ri-contacts" /><a href="mailto:mail@wsr.msk.ru">mail@wsr.msk.ru</a></div>
                          <div>
                            <MdPhone className="ri-contacts" /><a href="tel:+74995770056">+7 499 577 00-56</a></div>
                        </div>
                        <hr className="wsr-menu__contacts-divider" />
                        <div className="wsr-menu__social">
                          <a className="wsr-footer__social-icons" href="https://www.facebook.com/groups/wsrmoscow/">
                            <FaFacebook />
                          </a>
                          <a className="wsr-footer__social-icons" href="https://vk.com/wsrmoscow">
                            <FaVk />
                          </a>
                          <a className="wsr-footer__social-icons" href="https://www.instagram.com/wsrmoscow_/">
                            <FaInstagram/>
                          </a>
                          <a className="wsr-footer__social-icons" href="https://www.youtube.com/channel/UCoAA0xPF2lp2o_RsAuawwMQ">
                            <FaYoutube/>
                          </a>
                        </div>
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
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            activeNav: 1
        };
    }

    handleChange() {
        this.setState({
            activeNav: this.state.activeNav > 3 ? 1 : this.state.activeNav + 1
        });
    }

    render() {
        let _props = this.props;
        return (


            <Col xsOffset={ 1 } xs={ 11 } className="wsr-col-inherit wsr-carousel-red">
              <Col xs={ 2 } sm={ 3 } md={ 4 } lg={ 3 } className="pull-right wsr-carousel-menu">
                <Nav ref="red-stage-nav" className=" text-right wsr-carousel-menu__nav" activeKey={ 1 }>
                  <LinkContainer exact to="/championship" eventKey={ 1 }>
                    <NavItem className="wsr-carousel-menu-item ">
                      V ОЧМ «Московские мастера»
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer exact to="/qualification" eventKey={ 2 }>
                    <NavItem className="wsr-carousel-menu-item">
                      Всероссийские отборочные соревнования
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer exact to="/championship" eventKey={ 3 }>
                    <NavItem className="wsr-carousel-menu-item">
                      Демонстрационный экзамен по стандартам WorldSkills
                    </NavItem>
                  </LinkContainer>
                  <LinkContainer exact to="/championship" eventKey={ 4 }>
                    <NavItem className="wsr-carousel-menu-item">
                      Juniorskills
                    </NavItem>
                  </LinkContainer>
                </Nav>
                <Button bsClass="wsr-skewed-btn text-left skew-right">
                  <MdApps className="ri-big" />
                  <a href="/projects">Архив мероприятий</a>
                </Button>
              </Col>
            </Col>

        );
    }
}

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};

const events = {
};

export class WsrCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.state = {
            activeNav: 1
        };
    }
    handleKeyChange() {
        this.refs.redcaption.handleChange();
    }
    render() {
        let _props = this.props;
        //setTimeout(this.handleKeyChange, 5000)
        return (
            <Row className="top_gal">
              <WsrCarouselCaption ref="redcaption" activeKey={ this.state.activeNav } />
              <img src="/Images/carousel/gallery02.jpg" alt="The Last of us" />
              <svg width="0" height="0">
                <clipPath id="ClipRight" clipPathUnits="objectBoundingBox">
                  <polygon points="0.28 1, 1 1,1 0,0 0">
                  </polygon>
                </clipPath>
              </svg>
              <svg width="0" height="0">
                <clipPath id="ClipRightBg" clipPathUnits="objectBoundingBox">
                  <polygon points="0.3 1, 1 1,1 0,0.02 0">
                  </polygon>
                </clipPath>
              </svg>
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
                <svg width="0" height="0">
                  <clipPath id="ClipBlock" clipPathUnits="objectBoundingBox">
                    <polygon points="0 1, 1 1,1 0,0.09 0">
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
                    <TextTruncate className="wsr-block__description" line={ _props.lines? _props.lines : 2 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
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











export class WsrSckInfo extends React.Component {
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

            <WsrBlockBlank type="wsr-block__sck-info">
              <Row>
              <Col xs={ 8 }>
                  <h4 className="wsr-block__heading">
                  { _props.title }
                                          
                                          </h4>
                </Col>
                <Col xs={ 4 }>
                   <Image src={ _props.logo } rounded />
                </Col>
                

              </Row>
              <Row className="wsr-block__sck-info-description">
              <hr />
                <Col xs={ 6 }>
                  <div className="name">{ _props.contact } </div>
                  <div><MdPhone className="ri-contacts" /><a className="contact" href={ "tel:" + _props.phone }>{ _props.phone }</a></div>
                  <div><MdMail className="ri-contacts" /><a className="contact" href={ "mailto:" + _props.mail }>{ _props.mail }</a></div>
                </Col>
                <Col xs={ 6 }>
                  
                  <OverlayTrigger trigger={ ['hover', 'focus'] } rootClose placement="bottom" overlay={ popoverBottom }>
                  <Row>
                    г. Москва, ул. Поклонная, д. 2<Label className="wsr-location-label">Как доехать?</Label>
                  </Row>
                </OverlayTrigger>
                </Col>
              </Row>
            </WsrBlockBlank>
        );
    }
}


export class WsrNumbersItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Col className="wsr-numbers__item" md={ 6 } xs={ 12 }>
              <h1>{ _props.number }</h1>
              <p className="wsr-numbers__description">
                { _props.description } </p>
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
              <LinkContainer className="wsr-block__title " to={ _props.link ? _props.link : "/" }>
                <span className="align-bottom">
                                                                                                                                            { _props.title }
                                                                                                                                        { _props.more ? <MdMore className="ri-more"/> : "" } </span>
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
                <Col xs={ 12 } md={ 7 }>
                  <span className="wsr-footer__heading"><i>© 2017 Региональный координационный центр WorldSkills Russia по городу Москва</i> </span>
                </Col>
                <Col xs={ 12 } md={ 3 } className="pull-right">
                  <div className="text-right wsr-social-icons">
                    <span className="wsr-footer__heading">
                                                              <a className="wsr-footer__social-icons" href="https://www.facebook.com/groups/wsrmoscow/">
                                                              <FaFacebook /></a>
                                                              <a className="wsr-footer__social-icons" href="https://vk.com/wsrmoscow">
                                                              <FaVk /></a>
                                                              <a className="wsr-footer__social-icons" href="https://www.instagram.com/wsrmoscow_/">
                                                              <FaInstagram/></a>
                                                              <a className="wsr-footer__social-icons" href="https://www.youtube.com/channel/UCoAA0xPF2lp2o_RsAuawwMQ">
                                                              <FaYoutube/></a>
                                                              </span>
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
                <Col xs={ 12 } className="wsr_page__container">
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
              { _props.competence }
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
        let medals = ["Золотая медаль", "Серебряная медаль", "Бронзовая медаль", "Медаль за профессионализм"];
        let medal;

        switch (_props.medal) {
        case "gold":
            medal = 0;
            break;
        case "silver":
            medal = 1;
            break;
        case "bronze":
            medal = 2;
            break;
        case "professional":
            medal = 3;
            break;
        }

        let curmed = medals[medal];

        let tooltip = (
        <Popover id="popover-positioned-bottom">
          { curmed }
        </Popover>
        );
        return (
            <Panel className="wsr-team__member " header={ <TextTruncate line={ 1 } truncateText="…" text={ _props.host } /> }>
              <Row className="wsr-team__avatar ">
                <div className={ "wsr-team__member-photo-wrapper " + (_props.tier === "primary" ? "member-primary" : "member-secondary") }>
                  <Image src={ _props.photo } circle responsive />
                </div>
                <OverlayTrigger trigger={ ['hover', 'focus'] } placement="bottom" overlay={ tooltip }>
                  <div className={ "wsr-team__member-star-wrapper " + (_props.tier === "primary" ? "member-primary" : "member-secondary") }>
                    <MdStars className={ "ri-star " + _props.medal } />
                  </div>
                </OverlayTrigger>
                <span className={ _props.tier === "primary" ? "wsr-team__member--primary" : "wsr-team__member--secondary" }>{ _props.name } <br/><WsrTierLabel competence={ _props.competence } tier={ _props.tier } /></span>
                <hr />
                <div className="flex-grow">
                  <span className="wsr-team__host ">{ <span><div className="wsr-team__member-expert">Эксперт:</div>{ _props.expert }</span> }</span>
                </div>
              </Row>
            </Panel>
        );
    }
}


export class WsrExpert extends React.Component {

    render() {
        let _props = this.props;
        let certifications = ["Сертифицированный эксперт", "Региональный эксперт", "Эксперт Демонстрационного Экзамена"];
        let cert;

        switch (_props.certification) {
        case "certified":
            cert = 0;
            break;
        case "regional":
            cert = 1;
            break;
        case "demo":
            cert = 2;
            break;
        }

        let curcert = certifications[cert];

        let tooltip = (
        <Popover id="popover-positioned-bottom">
          { curcert }
        </Popover>
        );
        return (
            <Panel className="wsr-team__member " header={ _props.comment ? <div className="wsr-team__member-expert"> { _props.coment }</div> : "" }>
              <Row className="wsr-team__avatar ">
                <div className={ "wsr-team__member-photo-wrapper member-expert " }>
                  <Image src={ _props.photo } circle responsive />
                </div>
                <OverlayTrigger trigger={ ['hover', 'focus'] } placement="bottom" overlay={ tooltip }>
                  <div className={ "wsr-team__member-star-wrapper member-expert " }>
                    <img className="wsr-expert-status" src= {"/Images/" + _props.certification + ".svg"} />
                  </div>
                </OverlayTrigger>
                <span className="wsr-team__member--expert">{ _props.name } <br/>
                 <Label className="member-expert">
                  { _props.competence }
                </Label>
                </span>
                <hr />
                <div className="flex-grow">
                  <span className="wsr-team__host ">{ _props.host }</span>
                </div>
              </Row>
            </Panel>
        );
    }
}


export class WsrCompetenceCategory extends React.Component {
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
            <Row>
              <Form>
                <Col md={ 4 } lg={ 4 }>
                  <FormGroup controlId="formControlsSelect">
                    <WsrBlockTitle title="Категория" />
                    <FormControl componentClass="select" placeholder="select">
                      { listCategories }
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col md={ 4 } lg={ 4 }>
                  <FormGroup controlId="formControlsSelect">
                    <WsrBlockTitle title="Компетенция" />
                    <FormControl componentClass="select" placeholder="select">
                      { listCompetences }
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col md={ 4 } lg={ 4 }>
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

export class WsrGalleryPhoto extends React.Component {
    render() {
        let _props = this.props;

        return (
            <Col xs={ 6 } md={ 4 }>
              <LinkContainer className="wsr-photo-gallery-photo" to={ _props.album }>
                <Thumbnail src={ _props.thumbnail } alt={ _props.title }>
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

