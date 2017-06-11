import React, { Component } from "react";
import "./css/wsr.css";
import { MdDateRange, MdArrowForward, MdSearch, MdVpnKey, MdMail, MdPhone } from "react-icons/lib/md";
import TextTruncate from "react-text-truncate";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom"

import MetaTags from 'react-meta-tags';
import { Popover, OverlayTrigger, InputGroup, Form, FormGroup, FormControl, Image, Panel, Label, Button, Grid, Row, Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from "react-bootstrap";


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
              <div className="wsr-title" href="/">
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
                        <Button bsClass=" wsr-skewed-btn__account wsr-skewed-btn text-left">
                          <span className="skew-left">
                                                                         <MdVpnKey className="ri-big" />
                                                                          Личный кабинет                                                                                                    </span>
                        </Button>
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
                          <NavItem className="wsr-menu-item" eventKey={ 6 } href="/home">
                            { "Партнёры".toUpperCase() }
                          </NavItem>
                          <NavItem className="wsr-menu-item" eventKey={ 3 } href="/home">
                            { "Пресс-центр".toUpperCase() }
                          </NavItem>
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
                <Col sm={ 9 } md={ 7 } className="wsr_block__container">
                  <h5 className="text-left wsr-block__heading">
                                                                            <TextTruncate
                        line={ 4 }
                        truncateText="…"
                        text={ _props.heading }
                        />
                                                                        </h5>
                  <div className="wsr-block__description">
                    <TextTruncate className="wsr-block__description" line={ 3 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
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
              <Col md={ 12 }>
                <h5 className="text-left wsr-block__heading">
                                                                        <TextTruncate
                        line={ 4 }
                        truncateText="…"
                        text={ _props.heading }
                        />
                                                                    </h5>
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
              <TextTruncate className="wsr-numbers__description" line={ 10 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
                                                                                                                                                <MdArrowForward className="wsr-block__date-icon" />
                                                                                                                                              </a> } />
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
              <span>
                                                                    { _props.title }
                                                                </span>
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
              <div className="wsr_footer__divider" />
              <Col xs={ 0 } sm={ 10 } md={ 2 } />
              <Col xs={ 12 } md={ 1 }>
                <h7 className="wsr-footer__heading">
                  { "Wsr в Москве".toUpperCase() }
                </h7>
                <p>Об РКЦ</p>
                <p>История WorldSkills</p>
                <p>Активные мероприятия</p>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 1 }>
                <h7 className="wsr-footer__heading">
                  { "Эксперты".toUpperCase() }
                </h7>
                <p>Информация для экспертов</p>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 1 }>
                <h7 className="wsr-footer__heading">
                  { "СЦК".toUpperCase() }
                </h7>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 2 }>
                <h7 className="wsr-footer__heading">
                  { "Компетенции".toUpperCase() }
                </h7>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 2 }>
                <h7 className="wsr-footer__heading">
                  { "Проекты".toUpperCase() }
                </h7>
                <p>Региональный эксперт WSR</p>
                <p>Эксперт ДЭ</p>
                <p>Обучение становлению СЦК</p>
                <p>Обучение экспертов WorldSkills</p>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 1 }>
                <h7 className="wsr-footer__heading">
                  { "Партнёры".toUpperCase() }
                </h7>
                <p>Наши партнёры</p>
                <p>Стать партнёром</p>
              </Col>
              <Col xs={ 12 } sm={ 2 } md={ 2 }>
                <h7 className="wsr-footer__heading">
                  { "Пресс-центр".toUpperCase() }
                </h7>
                <p>Новости</p>
                <p>Важная информация</p>
                <p>Фотогалерея</p>
                <p>Видеогалерея</p>
              </Col>
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
                  <h3 className="text-left wsr-page__heading">
                                                                            { _props.heading }
                                                                        </h3>
                  <div className="wsr-page__description">
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
        let listItems = _props.competences.map((competence, index) => <NavItem key={ index } eventKey={ index + 1 + "c" } href="">
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
        let listItems = _props.competences.map((competence, index) => <NavItem key={ index } eventKey={ index + 1 + "c" } href="">
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
              <Popover id="popover-positioned-bottom" >
                <strong>{ _props.metro } </strong><br /> { _props.detailedAddress }
              </Popover>
            );
        return (
            <tr>
              <td>
                { _props.competence }</td>
              <td>
                <Row className="wsr-expert__name">{ _props.expert }</Row>
                <Row>
                  <MdPhone className="ri-contacts" />{ _props.phone }
                </Row>
                <Row>
                  <MdMail className="ri-contacts" />{ _props.mail }
                </Row>
              </td>
              <td>
                { _props.address }
                 <OverlayTrigger trigger="click"  rootClose placement="bottom" overlay={popoverBottom}>
                <Row>
                <Label className="wsr-location-label">Как доехать?</Label>
                </Row>
                </OverlayTrigger>
              </td>
            </tr>
        );
    }
}

