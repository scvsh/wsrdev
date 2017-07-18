import React, { Component } from "react";
import $ from "jquery";

import "./css/wsr.css";
//import "./css/calendar.css";
//import "./calendar.js";

import { MdStar, MdAccountCircle, MdPlace, MdMore, MdStars, MdApps, MdDateRange, MdArrowForward, MdSearch, MdMail, MdPhone } from "react-icons/lib/md";
import { FaGlobe, FaVk, FaFacebook, FaInstagram, FaYoutube } from "react-icons/lib/fa";
import TextTruncate from "react-text-truncate";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel';
import MetaTags from 'react-meta-tags';
import { Thumbnail, Media, Popover, OverlayTrigger, InputGroup, Form, FormGroup, FormControl, Image, Panel, Label, Button, Grid, Row, Col, Nav, NavItem, Navbar, MenuItem, NavDropdown } from "react-bootstrap";


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

export class WsrProject extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={ "wsr-block " + _props.type }>
              <Row className="row-eq-height">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="0" height="0">
                  <clipPath id="ClipBlock" clipPathUnits="objectBoundingBox">
                    <polygon points="0 1, 1 1,1 0,0.09 0">
                    </polygon>
                  </clipPath>
                </svg>
                <Col sm={ 9 } md={ 7 } className="wsr_block__container wsr_block__flex-container">
                  <LinkContainer className="text-left wsr-block__heading" to={ _props.link ? _props.link : "/" }>
                    <h4 className="text-left wsr-block__heading">
                                                                                                                                                    <TextTruncate
                        line={ 4 }
                        truncateText="…"
                        text={ _props.heading }
                        />
                                                                                                                                                </h4>

                  </LinkContainer>
                  <Label className="wsr-date-label"><a href="/">{ _props.startdate + " — " + _props.enddate }</a></Label> 
                  <div className="wsr-block__description">
                    <TextTruncate className="wsr-block__description" line={ _props.lines? _props.lines : 2 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
                                                                                                                                                   <MdArrowForward className="wsr-block__date-icon" />
                                                                                                                                                 </a> } />
                  </div>

                 
                  <p className="wsr-block__date">
                    <MdDateRange className="wsr-block__date-icon" />
                    { _props.date }
                  </p>
                   <Button block className="btn-more ">
                           Подробнее
                          </Button>
                </Col>
                <Col sm={ 3 } md={ 5 } className="wsr-block__image-container">
                  <WsrImage className="wsr-block__image" src={ _props.image } height={ _props.height ? _props.height : 200 } width="100%" mode="fill" />
                </Col>
              </Row>
            </div>
        );
    }
}


export class WsrMenuBg extends React.Component {
    render() {
        return (
          <div className="wsr-affix-background"/>
        ); 
    }
}





export class WsrMenuTitle extends React.Component {
    render() {
        return (
           
            <Link to="/">
              <div className="wsr-title">
              { /* 
                <div className="wsr-title-primary">
                  Региональный координационный центр
                </div>
                <div className="wsr-title-descriptor">
                  WorldSkills Russia по городу Москвe
                </div>
                
                */}
                <div className="wsr-title-logo">
                  <img alt="" src="/Images/wsr-msk-logo2.svg" />
                </div>
              
              </div>
            </Link>
        );
    }
}




export class WsrMainMenu extends React.Component {
  
constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

    componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll() {
      
       let anchor = 120;
       let value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
       let tensor = (1/(value/anchor))*7 -  1.8 * ((value/anchor) -  1);
       let point = value > anchor ? ( tensor > 0 ? tensor : 0 ):  7;


       if (this.scrollIcon !== null) {
          this.scrollIcon.setAttribute('points', '0 1,0.5 1,0.67 ' + point/87.5 + ',1 0,0 0');
          }
       if (this.Affix !== null) {
          this.Affix.style.webkitClipPath = "polygon(65%" + point + "%, 50% 100%, 0px 100%, 0px 0px, 100% 0px)";
          this.Affix.style.clipPath = "polygon(65%" + point + "%, 50% 100%, 0px 100%, 0px 0px, 100% 0px)";
          } 
    }

    render() {
        return (

            <Grid bsClass="containter-fluid">
              <Row>
              
                <Navbar inverse collapseOnSelect className="navbar-fixed-top">
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#"> <MdStar className="wsr-logo-mobile" />РКЦ WorldSkills Russia</a>
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
                        <LinkContainer to="/about/reglament">
                          <MenuItem eventKey={ 1.3 }>
                            Регламентирующие документы
                          </MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <LinkContainer to="/team">
                        <NavItem eventKey={ 2 } title="Сборная команда" id="basic-nav">
                          Сборная команда
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/experts">
                        <NavItem eventKey={ 3 } title="Эксперты" id="basic-nav">
                          Эксперты
                        </NavItem>
                      </LinkContainer>
                        <LinkContainer to="/sck">
                          <NavItem eventKey={ 4 }>
                            СЦК
                          </NavItem>
                        </LinkContainer>
                      <LinkContainer to="/competence">
                        <NavItem eventKey={ 5 } title="Компетенции" id="basic-nav">
                          Компетенции
                        </NavItem>
                      </LinkContainer>
                      <LinkContainer to="/projects">
                        <NavItem eventKey={ 6 } title="Компетенции" id="basic-nav">
                          Проекты
                        </NavItem>
                      </LinkContainer>
                      
                        <LinkContainer to="/partners">
                          <NavItem eventKey={ 7 }>
                            Партнёры
                          </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/press/important">
                          <NavItem eventKey={ 8 }>Пресс-центр</NavItem>
                        </LinkContainer>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <Col xs={ 5 } sm={ 5 } md={ 4 } lg={ 3 }>
                  <div ref={(ref) => this.Affix = ref} dir="rtl" className="wsr-affix">
                    <div className="wsr-affix">
                      <Row dir="ltr">
                        <WsrMenuTitle />
                        
                        
                        <hr className="wsr-menu__logo-divider" />
                       
                        <Nav className="wsr-menu wsr-main-menu__nav" stacked>
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
                            <NavItem href="/page.html" className="wsr-menu-item" eventKey={ 5 }>
                              { "Проекты".toUpperCase() }
                            </NavItem>
                          <LinkContainer to="/partners">
                            <NavItem className="wsr-menu-item" eventKey={ 6 }>
                              { "Партнёры".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                          <LinkContainer to="/press/important">
                            <NavItem className="wsr-menu-item" eventKey={ 3 }>
                              { "Пресс-центр".toUpperCase() }
                            </NavItem>
                          </LinkContainer>
                        </Nav>

                      <Row className="">

                      </Row>
                        <hr className="wsr-menu__contacts-divider" />
                        <div className="wsr-menu__contacts">
                          <div>
                            <MdMail className="ri-contacts" /><a href="mailto:mail@wsr.msk.ru">mail@wsr.msk.ru</a></div>
                          <div>
                            <MdPhone className="ri-contacts" /><a href="tel:+74995770056">+7 499 577 00-56</a></div>
                            
                            <div>
                            <MdAccountCircle className="ri-contacts" /> <a href="/">Личный кабинет </a></div>  
                            <div>
                            <MdSearch className="ri-contacts" /> <a href="/">Поиск </a></div>  

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
                          <svg xmlns="http://www.w3.org/2000/svg"   width="0" height="0">
                <clipPath  pointerEvents="none" id="ClipAffix" clipPathUnits="objectBoundingBox">
                  <polygon ref={(ref) => this.scrollIcon = ref} id="clipmask" points={"0 1,0.5 1,0.67 0.08,1 0,0 0"}>
                  </polygon>
                </clipPath>
              </svg>
              
                        </div>
                        <hr className="wsr-menu__contacts-divider" />
                        <div className="wsr-menu__social wsr-menu__sponsors">
                        <div className="wsr-menu__sponsors-wrapper" >
                        <img alt="" src="Images/wsr-msk-logo-dogm.svg"></img>
                        </div>
                        <div className="wsr-menu__sponsors-wrapper" >
                        <img alt="" src="Images/wsr-msk-logo-wsr.svg"></img>
                        </div>
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
                <Nav ref="red-stage-nav" className=" text-right wsr-carousel-menu__nav" activeKey={  this.state.activeNav  }>
                    <NavItem className="wsr-carousel-menu-item " eventKey={ 1 }>
                      V ОЧМ «Московские мастера»
                    </NavItem>
                    <NavItem className="wsr-carousel-menu-item" eventKey={ 2 }>
                      Всероссийские отборочные соревнования
                    </NavItem>
                    <NavItem className="wsr-carousel-menu-item" eventKey={ 3 }>
                      Демонстрационный экзамен по стандартам WorldSkills
                    </NavItem>
                    <NavItem className="wsr-carousel-menu-item" eventKey={ 4 }>
                      Juniorskills
                    </NavItem>
                </Nav>
              </Col>
            </Col>

        );
    }
}


export class WsrPartnerCompilation extends React.Component {

    render() {
        let _props = this.props;

        return (
         <Row>
          <Col sm={ 2 }  />
          <Col sm={ 7 } >
            <div className="wsr-partner-comp__wrap">
              
              <div className="wsr-partner-comp__item" ><img src="/Images/1.png"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/2.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/3.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/4.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/5.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/6.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/7.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/8.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/9.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/10.png"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/11.png"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/12.png"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/13.png"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/14.jpg"/></div>
              <div className="wsr-partner-comp__item" ><img src="/Images/15.png"/></div>


            </div>
             </Col> 
            </Row>




        );
    }
}

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
            <OwlCarousel ref="redstage" rewind={ false } autoplay={ true } className="red-stage" items={ 1 } margin={ 0 }
                loop={ true } onTranslate={ this.handleKeyChange }>
                <div><img src="/Images/carousel/gallery02.jpg" alt="" /></div>
                <div><img src="/Images/carousel/gallery01.jpg" alt="" /></div>
                <div><img src="/Images/carousel/gallery03.jpg" alt="" /></div>
                <div><img src="/Images/carousel/gallery04.jpg" alt="" /></div>
              </OwlCarousel>    
              <svg pointerEvents="none" width="0" height="0">
                <clipPath id="ClipRight" clipPathUnits="objectBoundingBox">
                  <polygon points="0.28 1, 1 1,1 0,0 0">
                  </polygon>
                </clipPath>
              </svg>
              <svg pointerEvents="none" width="0" height="0">
                <clipPath id="ClipRightBg" clipPathUnits="objectBoundingBox">
                  <polygon points="0.3 1, 1 1,1 0,0.02 0">
                  </polygon>
                </clipPath>
              </svg>
            </Row>



        );
    }
}

export class WsrPartnerCarousel extends React.Component {

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
            <OwlCarousel ref="redstage" rewind={ false } autoplay={ true } className="red-stage" items={ 1 } margin={ 0 }
                loop={ true } onTranslate={ this.handleKeyChange }>
                <div><WsrPartnerCompilation/> </div>
                <div><WsrPartnerCompilation/></div>
                <div><WsrPartnerCompilation/></div>
                <div><WsrPartnerCompilation/> </div>
</OwlCarousel>
              <svg pointerEvents="none" width="0" height="0">
                <clipPath id="ClipRight" clipPathUnits="objectBoundingBox">
                  <polygon points="0.28 1, 1 1,1 0,0 0">
                  </polygon>
                </clipPath>
              </svg>
              <svg pointerEvents="none" width="0" height="0">
                <clipPath id="ClipRightBg" clipPathUnits="objectBoundingBox">
                  <polygon points="0.3 1, 1 1,1 0,0.02 0">
                  </polygon>
                </clipPath>
              </svg>
            </Row>



        );
    }
}


export class WsrCite extends React.Component {

    render() {
        let _props = this.props;
      
        return (
                      <Panel className={"wsr-cite " + _props.className }>

          <Row className="wsr-cite__avatar ">
              <Col xs={4} sm={3}>
              <Row className="wsr-team__avatar__container">
                <div className={ "wsr-cite-photo-wrapper " }>
                  <Image src={ _props.photo ? _props.photo : "/Images/avatar.png"} circle responsive />
                </div>
                </Row>

                </Col>
 </Row>

        <Row className="wsr-cite__avatar ">

                <h4 className="wsr-cite__text text-center">{ _props.cite } <br/>
                </h4>
                <hr/>
                <span className={ "wsr-cite__name" }>{ _props.name } <br/></span>  

                                <div className="flex-grow">
                  <span className="wsr-cite__host ">{ <span><div className="wsr-team__member-expert"></div>{ _props.host }</span> }</span>
                </div>
              </Row>
 </Panel>
              
        );
    }
}



export class WsrQuote extends React.Component {

    render() {
        let _props = this.props;
      
        return (
                      <Panel className={"wsr-cite " + _props.className }>

          <Row>
          <Col className="wsr-cite-content" sm={1}>
          <h1 className="wsr-quote-sign">“</h1>
          </Col>
            <Col className="wsr-cite-content" sm={7}>
            <h4 className="wsr-cite__text">{ _props.cite } <br/>
                </h4>
                <hr />
                <span className={ "wsr-cite__name" }>{ _props.name } <br/></span>
                <span className="wsr-cite__position ">{ <span><div className="wsr-team__member-expert"></div>{ _props.position }</span> }</span>
                <hr />
                <span className="wsr-cite__host ">{ <span><div className="wsr-team__member-expert"></div>{ _props.host }</span> }</span>

            </Col>
            <Col sm={4} className="wsr-block__image-container full-size">
            
                  <WsrImage className="wsr-block__image" src={ _props.photo ? _props.photo : "/Images/avatar.png" } height="100%" width="100%" mode="fill" /> 
                
            </Col>

          </Row>
 </Panel>
              
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
                <svg pointerEvents="none" width="0" height="0">
                  <clipPath pointerEvents="none" id="ClipBlock" clipPathUnits="objectBoundingBox">
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
                  <WsrImage className="wsr-block__image" src={ _props.image } height={ _props.height ? _props.height : 200 } width="100%" mode="fill" />
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
                  <TextTruncate className="wsr-block__description" line={ 8 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
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
                  <div className="name">{ "Ответственный: " + _props.contact } </div>
                  
                </Col>
                <Col xs={ 6 }>
                  
                  
                  <Row>
                  <OverlayTrigger trigger={ ['hover', 'focus'] } rootClose placement="bottom" overlay={ popoverBottom }>
                   <div> <MdPlace className="ri-contacts" />г. Москва, ул. Поклонная, д. 2<Label className="wsr-location-label">Как доехать?</Label></div>
                  </OverlayTrigger>
                  <div><MdPhone className="ri-contacts" /><a className="contact" href={ "tel:" + _props.phone }>{ _props.phone }</a></div>
                  <div><MdMail className="ri-contacts" /><a className="contact" href={ "mailto:" + _props.mail }>{ _props.mail }</a></div>
                  <div><FaGlobe className="ri-contacts" /><a className="contact" href="">{ _props.location }</a></div>
                  </Row>
                
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

            <div className={ "wsr-block__title " + _props.className ? _props.className : "" } >
              <LinkContainer className="wsr-block__title " to={ _props.link ? _props.link : "/" }>
                <a className="align-bottom">
                                                                                                                                            { _props.title }
                                                                                                                                        { _props.more ? <MdMore className="ri-more"/> : "" } </a>
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
                  <span className="wsr-footer__heading"><i>© 2017 Региональный координационный центр WorldSkills Russia по городу Москве</i> </span>
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


export class WsrTeamMemberItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr-team__avatar ">
              <Col sm={3}>
              <Row className="wsr-team__avatar__container">
                <div className={ "wsr-team__member-photo-wrapper " + (_props.tier === "primary" ? "member-primary" : "member-secondary") }>
                  <Image src={ _props.photo ? _props.photo : "/Images/avatar.png"} circle responsive />
                </div>
                </Row>

                </Col>
                <Col sm={8}>
                <span className={ _props.tier === "primary" ? "wsr-team__member--primary" : "wsr-team__member--secondary" }>{ _props.name } <br/></span>
                
                <hr />
                <div className="flex-grow">
                  <span className="wsr-team__host ">{ <span><div className="wsr-team__member-expert"></div>{ _props.host }</span> }</span>
                </div>
                 <Row className="wsr-expert__cert-container row-flex"> 
                { _props.children }
                </Row>
                </Col>
                
                

              </Row>
        );
    }
}

export class WsrMedal extends React.Component {
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
        case  "professional":
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
            <OverlayTrigger trigger={ ['hover', 'focus'] } placement="bottom" overlay={ tooltip }>
                  <div className={ "wsr-team__member-star-wrapper " + (_props.tier === "primary" ? "member-primary" : "member-secondary") }>
                    <MdStars className={ "ri-star " + _props.medal } />
                  </div>
            </OverlayTrigger>
        );
    }
}

export class WsrTeamMember extends React.Component {

    render() {
        
        let _props = this.props;
        return (
            <Panel className={ "wsr-team__member " +  _props.tier } header={ <Row><Col xs={6}> { _props.competence }</Col><Col xs={6} className="full-size text-right pull-right">{ _props.tier === "primary" ? "Основной состав" : "Запасной состав" }</Col></Row>}  footer={ <TextTruncate line={ 1 } truncateText="…" text={ "Эксперт: " +_props.expert } /> } >
              {_props.children }


            </Panel>
        );
    }
}

export class WsrCertification extends React.Component {

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
            <OverlayTrigger trigger={ ['hover', 'focus'] } placement="bottom" overlay={ tooltip }>
                  <div className={ "wsr-team__member-star-wrapper member-expert " }>
                    <img alt="" className="wsr-expert-status" src={"/Images/" + _props.certification + ".svg"} />
                  </div>
                </OverlayTrigger>
        );
    }
}

export class WsrExpert extends React.Component {

    render() {
        let _props = this.props;

        return (

            <Panel className={"wsr-team__member wsr-team__expert " + _props.className } header={ _props.head ? <TextTruncate line={ 1 } truncateText="…" text={ _props.competence } /> : false }>
              <Row className="wsr-team__avatar ">
              <Col xs={3} sm={3}>
              <Row className="wsr-team__avatar__container">
                <div className={ "wsr-team__member-photo-wrapper " + _props.tier }>
                  <Image src={ _props.photo } circle responsive />
                </div>
                </Row>
                <Row className="wsr-team__member__star-container row-flex"> 
                
                </Row>
                </Col>
                <Col xs={9} sm={9}>
                <span className="wsr-team__member--expert">{ _props.name } <br/></span>
                <hr />
                <div className="flex-grow">
                  <span className="wsr-team__host ">{ <span><div className="wsr-team__member-expert"></div>{ _props.host }</span> }</span>
                </div>
                
                { _props.phone ?  <div><hr /><MdPhone className="ri-contacts" /><a className="coordinator-contact" href={ "tel:" + _props.phone }>{ _props.phone }</a></div> : ""}
                { _props.mail ? <div><MdMail className="ri-contacts" /><a className="coordinator-contact" href={ "mailto:" + _props.mail }>{ _props.mail }</a></div> : ""}
                { _props.children ? <div> <hr /> 
                  <Row className="wsr-expert__cert-container row-flex"> 
                { _props.children }
                </Row> </div> : "" }
                

                </Col>
                
                

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
                <Col md={ 8 } lg={ 3 }>
                  <FormGroup controlId="formControlsSelect">
                    <WsrBlockTitle title="Категория" />
                    <FormControl componentClass="select" placeholder="select">
                      { listCategories }
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col md={ 4 } lg={ 3 }>
                  <FormGroup controlId="formControlsSelect">
                    <WsrBlockTitle title="Компетенция" />
                    <FormControl componentClass="select" placeholder="select">
                      { listCompetences }
                    </FormControl>
                  </FormGroup>
                </Col>
                <Col md={ 8 } lg={ 4 }>
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
                <Col md={ 4 } lg={ 2 } >
                  <FormGroup>
                    <WsrBlockTitle title={'\u00A0'} />

                        <Button block className="btn-export ">
                           Выгрузить
                          </Button>

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
                      <Media.Body className="wsr-partner-description">
                        <Media.Heading>
                          <a href="http://www.cisco.com/">{ _props.title }</a>
                        </Media.Heading>
                        { _props.children }
                        <TextTruncate className="wsr-block__description" line={ 3 } truncateText="…" text={ _props.description } textTruncateChild={ <a href="#">
                                                                                                                                                       <MdArrowForward className="wsr-block__date-icon" />
                                                                                                                                                     </a>
                                                                                                                                                      } />
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






