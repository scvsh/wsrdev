import React, {Component} from 'react';
import './css/wsr.css';
import {
    MdStar,
    MdAccountCircle,
    MdPlace,
    MdMore,
    MdStars,
    MdDateRange,
    MdArrowForward,
    MdSearch,
    MdMail,
    MdPhone,
} from 'react-icons/lib/md';
import {
    FaTrophy,
    FaQuestionCircle,
    FaCheckSquareO,
    FaGlobe,
    FaVk,
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from 'react-icons/lib/fa';
import TextTruncate from 'react-text-truncate';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import MetaTags from 'react-meta-tags';
import {
    Clearfix,
    Thumbnail,
    Media,
    Popover,
    OverlayTrigger,
    InputGroup,
    Form,
    FormGroup,
    FormControl,
    Image,
    Panel,
    Label,
    Button,
    Grid,
    Row,
    Col,
    Nav,
    NavItem,
    Navbar,
    MenuItem,
    NavDropdown,
} from 'react-bootstrap';

export class WsrMeta extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <MetaTags>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </MetaTags>
            </div>
        );
    }
}

export class WsrProject extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={'wsr-block ' + (_props.type ? _props.type : '')}>
                <Row className="wsr-block__content">
                    <svg pointerEvents="none" width="0" height="0">
                        <clipPath
                            pointerEvents="none"
                            id="ClipBlock"
                            clipPathUnits="objectBoundingBox">
                            <polygon points="0 1, 1 1,1 0,0.09 0" />
                        </clipPath>
                    </svg>
                    <Col
                        xs={12}
                        sm={12}
                        md={7}
                        className="wsr_block__container">
                        <LinkContainer
                            className="text-left wsr-block__heading"
                            to={_props.link ? _props.link : '/'}>
                            <h4 className="text-left wsr-block__heading">
                                <TextTruncate
                                    line={4}
                                    truncateText="…"
                                    text={_props.heading}
                                />
                            </h4>
                        </LinkContainer>
                        <Label className="wsr-date-label">
                            <a href="/">
                                {_props.startdate + ' — ' + _props.enddate}
                            </a>
                        </Label>
                        <div className="wsr-block__description">
                            <TextTruncate
                                className="wsr-block__description"
                                line={_props.lines ? _props.lines : 2}
                                truncateText="…"
                                text={_props.description}
                                textTruncateChild={
                                    <a href="#">
                                        <MdArrowForward className="wsr-block__date-icon" />
                                    </a>
                                }
                            />
                        </div>

                        <Button block className="btn-more ">
                            Подробнее
                        </Button>
                    </Col>
                    <Col
                        xs={12}
                        sm={4}
                        md={5}
                        className="wsr-block__image"
                        style={{backgroundImage: 'url(' + _props.image + ')'}}
                    />
                </Row>
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
                    <div className="wsr-title-logo">
                        <img alt="" src="/Images/wsr-msk-logo2.svg" />
                        <div className="test-sizes" />
                    </div>
                </div>
            </Link>
        );
    }
}

export class WsrParticipateCategory extends React.Component {
    render() {
        let _props = this.props;
        return (
            <WsrBlockBlank type="wsr-block__participate">
                <Image
                    className="wsr-block__participate--image"
                    src={_props.image}
                    alt=""
                />
                <h4>{_props.title}</h4>
                <hr />

                <p className="wsr-block__participate--comment">{_props.text}</p>
                <Button block className="btn-export text-left">
                    <FaCheckSquareO />Стать участником
                </Button>
            </WsrBlockBlank>
        );
    }
}
export class WsrSkillCenter extends React.Component {
    render() {
        let _props = this.props;
        return (
            <WsrBlockBlank type="wsr-block__skillcenter-wrap">
                <WsrSkillCenterItem
                    number={1}
                    title="Тренинг-центр"
                    text="Основанная в 1950 году, WorldSkills – международная организация, продвигающая профессиональное, техническое и ориентированное на сферу услуг образование и обучение"
                />
                <WsrSkillCenterItem
                    number={2}
                    title="Методическое обеспечение"
                    text="Основанная в 1950 году, WorldSkills – международная организация, продвигающая профессиональное, техническое и ориентированное на сферу услуг образование и обучение"
                />

                <WsrSkillCenterItem
                    number={3}
                    title="Организационное обеспечение"
                    text="Основанная в 1950 году, WorldSkills – международная организация, продвигающая профессиональное, техническое и ориентированное на сферу услуг образование и обучение"
                />
                <Row>
                    <Col lg={1} />
                    <Col lg={5} className="wsr-block__skillcenter-description">
                        <Button block className="btn-export text-left">
                            <FaTrophy />Стать Skills-центром
                        </Button>
                    </Col>
                </Row>
            </WsrBlockBlank>
        );
    }
}

export class WsrSkillCenterItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row>
                <Col className="wsr-block__skillcenter-number" lg={1}>
                    <h2>{_props.number}</h2>
                </Col>
                <Col lg={11} className="wsr-block__skillcenter-description">
                    <h4 className="wsr-competence__title"> {_props.title}</h4>
                    <p> {_props.text}</p>
                    <hr />
                </Col>
            </Row>
        );
    }
}

export class Chosen extends React.Component {
    render() {
        return (
            <div>
                <div id="demo">
                    <div id="one" ref={el => (this.el = el)}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export class WsrSchool extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr-block__school--wrap">
                <Row>
                    {' '}
                    <Col xs={0} sm={2} md={2} />
                    <Col sm={10} md={10}>
                        <h3>Школа WorldSkills в Москве</h3>
                    </Col>
                </Row>
                <Row className="wsr-block__school ">
                    <Col xs={12} sm={3} md={3} lg={2} className="full-size" />

                    <Col xs={12} sm={10} md={10} lg={10} className="full-size">
                        <Row className="wsr-block__school__row-flex">
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <WsrParticipateCategory
                                    text="Мечтаете о ранней профориентации своего ребёнка? Определите его будущую профессию вместе со Школой WorldSkills!"
                                    image="Images/wsr_part_ic1.svg"
                                    title="Родителям"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <WsrParticipateCategory
                                    text="Хотите стать лучшими в своей профессии? Постройте свою карьеру с Движением WorldSkills!"
                                    image="Images/wsr_part_ic2.svg"
                                    title="Обучающимся"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <WsrParticipateCategory
                                    text="Хотите повысить свою квалификацию, научиться разрабатывать задания и участвовать в оценке чемпионатов и экзаменов по стандартам WorldSkills? Вступайте в нашу команду экспертов!"
                                    image="Images/wsr_part_ic3.svg"
                                    title="Экспертам"
                                />
                            </Col>{' '}
                            <Col xs={12} sm={6} md={6} lg={3}>
                                <WsrParticipateCategory
                                    text="Заинтересованы в интеграции международных профессиональных стандартов в образовательный процесс своей организации? Присоединяйтесь к Движению со Школой WorldSkills!"
                                    image="Images/wsr_part_ic4.svg"
                                    title="Организациям"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
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
        let value =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        let tensor = 1 / (value / anchor) * 7 - 1.8 * (value / anchor - 1);
        let point = value > anchor ? (tensor > 0 ? tensor : 0) : 7;

        if (this.scrollIcon !== null) {
            this.scrollIcon.setAttribute(
                'points',
                '0 1,0.5 1,0.67 ' + point / 87.5 + ',1 0,0 0',
            );
        }
        if (this.Affix !== null) {
            this.Affix.style.webkitClipPath =
                'polygon(65%' +
                point +
                '%, 50% 100%, 0px 100%, 0px 0px, 100% 0px)';
            this.Affix.style.clipPath =
                'polygon(65%' +
                point +
                '%, 50% 100%, 0px 100%, 0px 0px, 100% 0px)';
        }
    }

    render() {
        return (
            <Grid bsClass="containter-fluid">
                <Row>
                    <Navbar
                        inverse
                        collapseOnSelect
                        className="navbar-fixed-top">
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">
                                    {' '}
                                    <MdStar className="wsr-logo-mobile" />РКЦ
                                    WorldSkills Russia
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/about/rkc">
                                    <NavItem
                                        eventKey={1}
                                        title="WSR в Москве"
                                        id="basic-nav">
                                        WSR в Москве
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/team">
                                    <NavItem
                                        eventKey={2}
                                        title="Сборная Москвы"
                                        id="basic-nav">
                                        Сборная Москвы
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/experts">
                                    <NavItem
                                        eventKey={3}
                                        title="Эксперты"
                                        id="basic-nav">
                                        Эксперты
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/sck">
                                    <NavItem eventKey={4}>СЦК</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/competence">
                                    <NavItem
                                        eventKey={5}
                                        title="Компетенции"
                                        id="basic-nav">
                                        Компетенции
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/competence-junior">
                                    <NavItem
                                        eventKey={6}
                                        title="Компетенции Junior"
                                        id="basic-nav">
                                        Компетенции
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/page2.html">
                                    <NavItem
                                        eventKey={7}
                                        title="Проекты"
                                        id="basic-nav">
                                        Проекты
                                    </NavItem>
                                </LinkContainer>

                                <LinkContainer to="/partners">
                                    <NavItem eventKey={8}>Партнёры</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/press/important">
                                    <NavItem eventKey={9}>Пресс-центр</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Col xs={5} sm={4} md={4} lg={3}>
                        <div
                            ref={ref => (this.Affix = ref)}
                            dir="rtl"
                            className="wsr-affix">
                            <div className="wsr-affix">
                                <Row dir="ltr">
                                    <WsrMenuTitle />

                                    <hr className="wsr-menu__logo-divider" />

                                    <Nav
                                        className="wsr-menu wsr-main-menu__nav"
                                        stacked>
                                        <LinkContainer to="/about">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={1}>
                                                {'Wsr в Москве'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/team">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={1}>
                                                {'Сборная Москвы'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/experts">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={2}>
                                                {'Эксперты'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/sck">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={3}>
                                                {'СЦК'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/competence">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={4}>
                                                {'Компетенции'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/competence-junior">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={4}>
                                                {'КОМПЕТЕНЦИИ Junior'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <NavItem
                                            href="/page2.html"
                                            className="wsr-menu-item"
                                            eventKey={5}>
                                            {'Проекты'.toUpperCase()}
                                        </NavItem>
                                        <LinkContainer to="/partners">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={6}>
                                                {'Партнёры'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                        <LinkContainer to="/press/important">
                                            <NavItem
                                                className="wsr-menu-item"
                                                eventKey={3}>
                                                {'Пресс-центр'.toUpperCase()}
                                            </NavItem>
                                        </LinkContainer>
                                    </Nav>
                                    <hr className="wsr-menu__contacts-divider" />
                                    <div className="wsr-menu__contacts">
                                        <div>
                                            <MdMail className="ri-contacts" />
                                            <a href="mailto:mail@wsr.msk.ru">
                                                mail@wsr.msk.ru
                                            </a>
                                        </div>
                                        <div>
                                            <MdPhone className="ri-contacts" />
                                            <a href="tel:+74995770056">
                                                +7 499 577 00-56
                                            </a>
                                        </div>

                                        <div>
                                            <MdAccountCircle className="ri-contacts" />{' '}
                                            <a href="/">Личный кабинет </a>
                                        </div>
                                        <div>
                                            <MdSearch className="ri-contacts" />{' '}
                                            <a href="/">Поиск </a>
                                        </div>
                                    </div>

                                    <hr className="wsr-menu__contacts-divider" />
                                    <div className="wsr-menu__social">
                                        <a
                                            className="wsr-footer__social-icons"
                                            href="https://www.facebook.com/groups/wsrmoscow/">
                                            <FaFacebook />
                                        </a>
                                        <a
                                            className="wsr-footer__social-icons"
                                            href="https://vk.com/wsrmoscow">
                                            <FaVk />
                                        </a>
                                        <a
                                            className="wsr-footer__social-icons"
                                            href="https://www.instagram.com/wsrmoscow_/">
                                            <FaInstagram />
                                        </a>
                                        <a
                                            className="wsr-footer__social-icons"
                                            href="https://www.youtube.com/channel/UCoAA0xPF2lp2o_RsAuawwMQ">
                                            <FaYoutube />
                                        </a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="0"
                                            height="0">
                                            <clipPath
                                                pointerEvents="none"
                                                id="ClipAffix"
                                                clipPathUnits="objectBoundingBox">
                                                <polygon
                                                    ref={ref =>
                                                        (this.scrollIcon = ref)
                                                    }
                                                    id="clipmask"
                                                    points={
                                                        '0 1,0.5 1,0.67 0.08,1 0,0 0'
                                                    }
                                                />
                                            </clipPath>
                                        </svg>
                                    </div>
                                    <hr className="wsr-menu__contacts-divider" />
                                    <div className="wsr-menu__social wsr-menu__sponsors">
                                        <div className="wsr-menu__sponsors-wrapper">
                                            <img
                                                alt=""
                                                src="Images/wsr-msk-logo-dogm.svg"
                                            />
                                        </div>
                                        <div className="wsr-menu__sponsors-wrapper">
                                            <img
                                                alt=""
                                                src="Images/wsr-msk-logo-wsr.svg"
                                            />
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
            activeNav: 1,
        };
    }

    handleChange() {
        this.setState({
            activeNav: this.state.activeNav > 3 ? 1 : this.state.activeNav + 1,
        });
    }

    render() {
        let _props = this.props;
        return (
            <Col
                xsOffset={1}
                xs={11}
                className="wsr-col-inherit wsr-carousel-red"
            >
            <div className="pull-right wsr-carousel-menu col-lg-3 col-md-4 col-sm-3 col-xs-2">
    <ul className="text-right wsr-carousel-menu__nav nav">
                  <li role="presentation" className="wsr-carousel-menu-item"><a role="button" href="https://vos18.worldskills.moscow/" target="_blank">Всероссийские отборочные соревнования - 2018</a></li>
            <li role="presentation" className="wsr-carousel-menu-item"><a role="button" href="http://present.worldskills.moscow/" target="_blank">Чемпионат Москвы WorldSkills</a></li>
            <li role="presentation" className="wsr-carousel-menu-item"><a role="button" href="http://ocmj.worldskills.moscow/" target="_blank">Чемпионат Москвы WorldSkills Junior</a></li>
            <li role="presentation" className="wsr-carousel-menu-item active"><a role="button" href="https://de18.worldskills.moscow/index/" target="_blank">Демонстрационный экзамен по стандартам WorldSkills Russia </a></li>
    
    </ul>
</div>
            </Col>
        );
    }
}

export class WsrPartnerCompilation extends React.Component {
    render() {
        let _props = this.props;

        return (
            <Row>
                <Col sm={2} />
                <Col sm={10} md={7}>
                    <div className="wsr-partner-comp__wrap">
                        <div className="wsr-partner-comp__item">
                            <img alt="" src="/Images/1.png" />
                        </div>
                        <div className="wsr-partner-comp__item">
                            <img alt="" src="/Images/2.jpg" />
                        </div>
                        <div className="wsr-partner-comp__item">
                            <img alt="" src="/Images/3.jpg" />
                        </div>
                        <div className="wsr-partner-comp__item">
                            <img alt="" src="/Images/4.jpg" />
                        </div>
                        <div className="wsr-partner-comp__item">
                            <img alt="" src="/Images/5.jpg" />
                        </div>
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
            activeNav: 1,
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
                <WsrCarouselCaption
                    ref="redcaption"
                    activeKey={this.state.activeNav}
                />
                <OwlCarousel
                    ref="redstage"
                    rewind={false}
                    autoplay={false}
                    className="red-stage"
                    items={1}
                    margin={0}
                    loop={true}
                    onTranslate={this.handleKeyChange}>
                    <img src="/Images/carousel/44.jpg" />{' '}
                </OwlCarousel>
                <svg pointerEvents="none" width="0" height="0">
                    <clipPath id="ClipRight" clipPathUnits="objectBoundingBox">
                        <polygon points="0.28 1, 1 1,1 0,0 0" />
                    </clipPath>
                </svg>
                <svg pointerEvents="none" width="0" height="0">
                    <clipPath
                        id="ClipRightBg"
                        clipPathUnits="objectBoundingBox">
                        <polygon points="0.3 1, 1 1,1 0,0.02 0" />
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
            activeNav: 1,
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
                <WsrCarouselCaption
                    ref="redcaption"
                    activeKey={this.state.activeNav}
                />
                <OwlCarousel
                    ref="redstage"
                    rewind={false}
                    autoplay={true}
                    className="red-stage"
                    items={1}
                    margin={0}
                    loop={true}
                    onTranslate={this.handleKeyChange}>
                    <div>
                        <WsrPartnerCompilation />{' '}
                    </div>
                    <div>
                        <WsrPartnerCompilation />
                    </div>
                    <div>
                        <WsrPartnerCompilation />
                    </div>
                    <div>
                        <WsrPartnerCompilation />{' '}
                    </div>
                </OwlCarousel>
                <svg pointerEvents="none" width="0" height="0">
                    <clipPath id="ClipRight" clipPathUnits="objectBoundingBox">
                        <polygon points="0.28 1, 1 1,1 0,0 0" />
                    </clipPath>
                </svg>
                <svg pointerEvents="none" width="0" height="0">
                    <clipPath
                        id="ClipRightBg"
                        clipPathUnits="objectBoundingBox">
                        <polygon points="0.3 1, 1 1,1 0,0.02 0" />
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
            <Panel className={'wsr-cite ' + _props.className}>
                <Row className="wsr-cite__avatar ">
                    <Col xs={4} sm={3}>
                        <Row className="wsr-team__avatar__container">
                            <div className={'wsr-cite-photo-wrapper '}>
                                <Image
                                    src={
                                        _props.photo
                                            ? _props.photo
                                            : '/Images/avatar.png'
                                    }
                                    circle
                                    responsive
                                />
                            </div>
                        </Row>
                    </Col>
                </Row>

                <Row className="wsr-cite__avatar ">
                    <h4 className="wsr-cite__text text-center">
                        {_props.cite} <br />
                    </h4>
                    <hr />
                    <span className={'wsr-cite__name'}>
                        {_props.name} <br />
                    </span>

                    <div className="flex-grow">
                        <span className="wsr-cite__host ">
                            {
                                <span>
                                    <div className="wsr-team__member-expert" />
                                    {_props.host}
                                </span>
                            }
                        </span>
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
            <Panel className={'wsr-cite ' + _props.className}>
                <Row className="wsr-block__content is-flex">
                    <Col
                        className="wsr-cite-content"
                        xs={1}
                        sm={2}
                        md={2}
                        lg={1}>
                        <h1 className="wsr-quote-sign">“</h1>
                    </Col>
                    <Col
                        className="wsr-cite-content "
                        xs={7}
                        sm={10}
                        md={10}
                        lg={7}>
                        <h4 className="wsr-cite__text">
                            {_props.cite} <br />
                        </h4>
                        <hr />
                        <span className={'wsr-cite__name'}>
                            {_props.name} <br />
                        </span>
                        <span className="wsr-cite__position ">
                            {
                                <span>
                                    <div className="wsr-team__member-expert" />
                                    {_props.position}
                                </span>
                            }
                        </span>
                        <hr />
                        <span className="wsr-cite__host ">
                            {
                                <span>
                                    <div className="wsr-team__member-expert" />
                                    {_props.host}
                                </span>
                            }
                        </span>
                    </Col>

                    <Col
                        xs={4}
                        sm={4}
                        md={0}
                        smHidden
                        mdHidden
                        lg={4}
                        className="wsr-block__image"
                        style={{backgroundImage: 'url(' + _props.photo + ')'}}
                    />
                </Row>
            </Panel>
        );
    }
}

export class WsrImage extends Component {
    render() {
        let {mode, src, height, width, style, ...props} = this.props;
        let modes = {
            fill: 'cover',
            fit: 'contain',
        };
        let size = modes[mode] || 'contain';

        let defaults = {
            height: height || 100,
            width: width || 100,
            backgroundColor: 'gray',
        };

        let important = {
            backgroundImage: `url("${src}")`,
            backgroundSize: size,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        };

        return <div {...props} style={{...defaults, ...style, ...important}} />;
    }
}

export class WsrBlock extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={'wsr-block ' + (_props.type ? _props.type : '')}>
                <Row className="wsr-block__content">
                    <svg pointerEvents="none" width="0" height="0">
                        <clipPath
                            pointerEvents="none"
                            id="ClipBlock"
                            clipPathUnits="objectBoundingBox">
                            <polygon points="0 1, 1 1,1 0,0.09 0" />
                        </clipPath>
                    </svg>
                    <Col sm={8} md={7} className="wsr_block__container">
                        <LinkContainer
                            className="text-left wsr-block__heading"
                            to={_props.link ? _props.link : '/'}>
                            <h5 className="text-left wsr-block__heading">
                                <TextTruncate
                                    line={4}
                                    truncateText="…"
                                    text={_props.heading}
                                />
                            </h5>
                        </LinkContainer>
                        <div className="wsr-block__description">
                            <TextTruncate
                                className="wsr-block__description"
                                line={_props.lines ? _props.lines : 3}
                                truncateText="…"
                                text={_props.description}
                                textTruncateChild={
                                    <a href="#">
                                        <MdArrowForward className="wsr-block__date-icon" />
                                    </a>
                                }
                            />
                        </div>
                        <p className="wsr-block__date">
                            <MdDateRange className="wsr-block__date-icon" />
                            {_props.date}
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        sm={4}
                        md={5}
                        className="wsr-block__image"
                        style={{backgroundImage: 'url(' + _props.image + ')'}}
                    />
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
                <Col md={12} className="wsr_block-news__wrapper">
                    <h5 className="text-left wsr-block__heading">
                        <TextTruncate
                            line={4}
                            truncateText="…"
                            text={_props.heading}
                        />
                    </h5>
                    <div className="wsr-block__description">
                        <TextTruncate
                            className="wsr-block__description"
                            line={8}
                            truncateText="…"
                            text={_props.description}
                            textTruncateChild={
                                <a href="#">
                                    <MdArrowForward className="wsr-block__date-icon" />
                                </a>
                            }
                        />
                    </div>
                    <p className="wsr-block__date">
                        <MdDateRange className="wsr-block__date-icon" />
                        {_props.date}
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
                <strong>{_props.metro} </strong>
                <br />
                {_props.detailedAddress}
            </Popover>
        );
        return (
            <WsrBlockBlank type="wsr-block__sck-info">
                <Row>
                    <Col xs={8}>
                        <h4 className="wsr-block__heading">{_props.title}</h4>
                    </Col>
                    <Col xs={4}>
                        <Image src={_props.logo} rounded />
                    </Col>
                </Row>
                <Row className="wsr-block__sck-info-description">
                    <hr />
                    <Col xs={6} md={12} lg={6}>
                        <div className="name">
                            {'Ответственный: ' + _props.contact}{' '}
                        </div>
                    </Col>
                    <Col xs={6} md={12} lg={6}>
                        <Row>
                            <OverlayTrigger
                                trigger={['hover', 'focus']}
                                rootClose
                                placement="bottom"
                                overlay={popoverBottom}>
                                <div>
                                    {' '}
                                    <MdPlace className="ri-contacts" />г.
                                    Москва, ул. Поклонная, д. 2
                                </div>
                            </OverlayTrigger>
                            <div>
                                <MdPhone className="ri-contacts" />
                                <a
                                    className="contact"
                                    href={'tel:' + _props.phone}>
                                    {_props.phone}
                                </a>
                            </div>
                            <div>
                                <MdMail className="ri-contacts" />
                                <a
                                    className="contact"
                                    href={'mailto:' + _props.mail}>
                                    {_props.mail}
                                </a>
                            </div>
                            <div>
                                <FaGlobe className="ri-contacts" />
                                <a className="contact" href="">
                                    {_props.location}
                                </a>
                            </div>
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
            <Col className="wsr-numbers__item" md={6} xs={12}>
                <h1>{_props.number}</h1>
                <p className="wsr-numbers__description">
                    {_props.description}{' '}
                </p>
            </Col>
        );
    }
}

export class WsrPartnersItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr_block-menu__item">
                <Col md={12} className="text-center">
                    {_props.children}
                </Col>
            </Row>
        );
    }
}

export class WsrBlockBlank extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div className={'wsr-block ' + (_props.type ? _props.type : '')}>
                {_props.children}
            </div>
        );
    }
}

export class WsrBlockTitle extends React.Component {
    render() {
        let _props = this.props;
        return (
            <div
                className={
                    'wsr-block__title ' + _props.className
                        ? _props.className
                        : ''
                }>
                <LinkContainer
                    className="wsr-block__title "
                    to={_props.link ? _props.link : '/'}>
                    <a className="align-bottom">
                        {_props.title}
                        {_props.more ? <MdMore className="ri-more" /> : ''}{' '}
                    </a>
                </LinkContainer>
            </div>
        );
    }
}

export class WsrGallery extends React.Component {
    render() {
        let _props = this.props;
        return <Row className="wsr-gallery">{_props.children}</Row>;
    }
}

export class WsrFooter extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr-footer">
                <Row>
                    <Col xs={0} sm={3} md={2} />
                    <Col xs={6} sm={6} md={6}>
                        <span className="wsr-footer__heading">
                            <i>
                                © 2017 Региональный координационный центр
                                WorldSkills Russia по городу Москве
                            </i>{' '}
                        </span>
                    </Col>
                    <Col xs={6} sm={3} md={3} className="pull-right">
                        <div className="text-right wsr-social-icons">
                            <span className="wsr-footer__heading">
                                <a
                                    className="wsr-footer__social-icons"
                                    href="https://www.facebook.com/groups/wsrmoscow/">
                                    <FaFacebook />
                                </a>
                                <a
                                    className="wsr-footer__social-icons"
                                    href="https://vk.com/wsrmoscow">
                                    <FaVk />
                                </a>
                                <a
                                    className="wsr-footer__social-icons"
                                    href="https://www.instagram.com/wsrmoscow_/">
                                    <FaInstagram />
                                </a>
                                <a
                                    className="wsr-footer__social-icons"
                                    href="https://www.youtube.com/channel/UCoAA0xPF2lp2o_RsAuawwMQ">
                                    <FaYoutube />
                                </a>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="wsr-footer__divider" />
                <Row className="wsr-footer__menu">
                    <Col xs={0} sm={3} md={2} />
                    <Col xs={12} sm={2} md={1}>
                        <a href="#" className="wsr-footer__title">
                            {'Wsr в Москве'.toUpperCase()}
                        </a>
                        <a href="#">История WSR в Москве</a>
                        <a href="#">Регламентирующие документы</a>
                        <a href="#">Контакты</a>
                    </Col>
                    <Col xs={12} sm={2} md={1}>
                        <a href="#" className="wsr-footer__title">
                            {'Сборная Москвы'.toUpperCase()}
                        </a>
                    </Col>
                    <Col xs={12} sm={2} md={2}>
                        <a href="#" className="wsr-footer__title">
                            {'Эксперты'.toUpperCase()}
                        </a>
                        <a href="#">Региональный эксперт</a>
                        <a href="#">Эксперт демонстрационного экзамена</a>
                        <a href="#">Обучение в 1С:Учебном центре №1</a>
                    </Col>
                    <Col xs={12} sm={2} md={1}>
                        <a href="#" className="wsr-footer__title">
                            {'СЦК'.toUpperCase()}
                        </a>
                        <a href="#">Стать СЦК</a>
                    </Col>
                    <Clearfix visibleSmBlock />

                    <Col xs={12} sm={2} md={1} smPush={3} mdPush={0}>
                        <a href="#" className="wsr-footer__title">
                            {'Компетенции'.toUpperCase()}
                        </a>
                        <a href="#" className="wsr-footer__title">
                            {'Компетенции Junior'.toUpperCase()}
                        </a>
                    </Col>
                    <Col xs={12} sm={2} md={1} smPush={3} mdPush={0}>
                        <a href="#" className="wsr-footer__title">
                            {'Проекты'.toUpperCase()}
                        </a>
                        <a href="#">Архив проектов</a>
                        <a href="#">Архив мероприятий</a>
                    </Col>
                    <Col xs={12} sm={2} md={1} smPush={3} mdPush={0}>
                        <a href="#" className="wsr-footer__title">
                            {'Партнёры'.toUpperCase()}
                        </a>
                        <a href="#">Наши партнёры</a>
                        <a href="#">Стать партнёром</a>
                    </Col>
                    <Col xs={12} sm={2} md={2} smPush={3} mdPush={0}>
                        <a href="#" className="wsr-footer__title">
                            {'Пресс-центр'.toUpperCase()}
                        </a>
                        <a href="#">Новости</a>
                        <a href="#">Важная информация</a>
                        <a href="#">Фотогалерея</a>
                        <a href="#">Видеогалерея</a>
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
            <div
                className={
                    _props.type ? 'wsr-block ' + _props.type : 'wsr-block'
                }>
                <Row>
                    <Col xs={12} className="wsr_page__container">
                        <h3>{_props.heading ? _props.heading : ''} </h3>

                        <div className="wsr-page__content">
                            {_props.description
                                ? ' <p> { _props.description } </p> '
                                : false}
                            {_props.children}
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
            <Label
                className={
                    _props.tier === 'primary'
                        ? 'wsr-team-label__primary'
                        : 'wsr-team-label__secondary'
                }>
                {_props.tier === 'primary'
                    ? 'Основной состав'
                    : 'Запасной состав'}
            </Label>
        );
    }
}

export class WsrSizeLabel extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Label className="wsr-file-list__file-size pull-right">
                {_props.size}
                {_props.extension}
            </Label>
        );
    }
}

export class WsrTeamMemberItem extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Row className="wsr-team__avatar ">
                <Col sm={3} md={3} xs={3} smHidden>
                    <Row className="wsr-team__avatar__container">
                        <div
                            className={
                                'wsr-team__member-photo-wrapper ' +
                                (_props.tier === 'primary'
                                    ? 'member-primary'
                                    : 'member-secondary')
                            }>
                            <Image
                                src={
                                    _props.photo
                                        ? _props.photo
                                        : '/Images/avatar.png'
                                }
                                circle
                                responsive
                            />
                        </div>
                    </Row>
                </Col>
                <Col sm={12} md={8} xs={8}>
                    <span
                        className={
                            _props.tier === 'primary'
                                ? 'wsr-team__member--primary'
                                : 'wsr-team__member--secondary'
                        }>
                        {_props.name} <br />
                    </span>

                    <hr />
                    <div className="flex-grow">
                        <span className="wsr-team__host ">
                            {
                                <span>
                                    <div className="wsr-team__member-expert" />
                                    {_props.host}
                                </span>
                            }
                        </span>
                    </div>
                    <Row className="wsr-expert__cert-container row-flex">
                        {_props.children}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export class WsrMedal extends React.Component {
    render() {
        let _props = this.props;
        let medals = [
            'Золотая медаль',
            'Серебряная медаль',
            'Бронзовая медаль',
            'Медаль за профессионализм',
        ];
        let medal;

        switch (_props.medal) {
            default:
                break;
            case 'gold':
                medal = 0;
                break;
            case 'silver':
                medal = 1;
                break;
            case 'bronze':
                medal = 2;
                break;
            case 'professional':
                medal = 3;
                break;
            case 'gold-eagle':
                medal = 4;
                break;
            case 'silver-eagle':
                medal = 5;
                break;
            case 'bronze-eagle':
                medal = 6;
                break;
            case 'professional-eagle':
                medal = 6;
                break;
        }

        let curmed = medals[medal];

        let tooltip = (
            <Popover id="popover-positioned-bottom">{curmed}</Popover>
        );

        return (
            <OverlayTrigger
                trigger={['hover', 'focus']}
                placement="bottom"
                overlay={tooltip}>
                <div
                    className={
                        'wsr-team__member-star-wrapper ' +
                        (_props.tier === 'primary'
                            ? 'member-primary'
                            : 'member-secondary')
                    }>
                    <img
                        alt=""
                        className="wsr-expert-status"
                        src={'/Images/' + _props.medal + '.svg'}
                    />
                </div>
            </OverlayTrigger>
        );
    }
}

export class WsrTeamMember extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Panel
                className={'wsr-team__member ' + _props.tier}
                header={
                    <Row>
                        <Col xs={6}> {_props.competence}</Col>
                        <Col xs={6} className="full-size text-right pull-right">
                            {_props.tier === 'primary'
                                ? 'Основной состав'
                                : 'Запасной состав'}
                        </Col>
                    </Row>
                }
                footer={
                    <TextTruncate
                        line={1}
                        truncateText="…"
                        text={'Эксперт: ' + _props.expert}
                    />
                }>
                {_props.children}
            </Panel>
        );
    }
}

export class WsrCertification extends React.Component {
    render() {
        let _props = this.props;
        let certifications = [
            'Сертифицированный эксперт',
            'Региональный эксперт',
            'Эксперт Демонстрационного Экзамена',
        ];
        let cert;

        switch (_props.certification) {
            default:
                break;
            case 'certified':
                cert = 0;
                break;
            case 'regional':
                cert = 1;
                break;
            case 'demo':
                cert = 2;
                break;
        }

        let curcert = certifications[cert];

        let tooltip = (
            <Popover id="popover-positioned-bottom">{curcert}</Popover>
        );

        return (
            <OverlayTrigger
                trigger={['hover', 'focus']}
                placement="bottom"
                overlay={tooltip}>
                <div className={'wsr-team__member-star-wrapper member-expert '}>
                    <img
                        alt=""
                        className="wsr-expert-status"
                        src={'/Images/icons/' + _props.certification + '.svg'}
                    />
                </div>
            </OverlayTrigger>
        );
    }
}

export class WsrExpert extends React.Component {
    render() {
        let _props = this.props;

        return (
            <Panel
                className={
                    'wsr-team__member wsr-team__expert ' + _props.className
                }
                header={
                    _props.head ? (
                        <TextTruncate
                            line={1}
                            truncateText="…"
                            text={_props.competence}
                        />
                    ) : (
                        false
                    )
                }>
                <Row className="wsr-team__avatar ">
                    <Col xs={3} sm={3} smHidden md={3}>
                        <Clearfix />
                        <Row className="wsr-team__avatar__container">
                            <div
                                className={
                                    'wsr-team__member-photo-wrapper ' +
                                    _props.tier
                                }>
                                <Image src={_props.photo} circle responsive />
                            </div>
                        </Row>
                        <Row className="wsr-team__member__star-container row-flex" />
                    </Col>
                    <Col xs={9} sm={12} md={9}>
                        <span className="wsr-team__member--expert">
                            {_props.name} <br />
                        </span>
                        <hr />
                        <div className="flex-grow">
                            <span className="wsr-team__host ">
                                {
                                    <span>
                                        <div className="wsr-team__member-expert" />
                                        {_props.host}
                                    </span>
                                }
                            </span>
                        </div>

                        {_props.phone ? (
                            <div>
                                <hr />
                                <MdPhone className="ri-contacts" />
                                <a
                                    className="coordinator-contact"
                                    href={'tel:' + _props.phone}>
                                    {_props.phone}
                                </a>
                            </div>
                        ) : (
                            ''
                        )}
                        {_props.mail ? (
                            <div>
                                <MdMail className="ri-contacts" />
                                <a
                                    className="coordinator-contact"
                                    href={'mailto:' + _props.mail}>
                                    {_props.mail}
                                </a>
                            </div>
                        ) : (
                            ''
                        )}
                        {_props.children ? (
                            <div>
                                {' '}
                                <hr />
                                <Row className="wsr-expert__cert-container row-flex">
                                    {_props.children}
                                </Row>{' '}
                            </div>
                        ) : (
                            ''
                        )}
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export class WsrCompetenceCategory extends React.Component {
    render() {
        let _props = this.props;
        let listItems = _props.competences.map((competence, index) => (
            <NavItem key={index} eventKey={index + 1 + 'c'}>
                {competence}
            </NavItem>
        ));
        return (
            <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                {listItems}
            </Nav>
        );
    }
}

export class WsrCompetence extends React.Component {
    render() {
        let _props = this.props;
        let listItems = _props.competences.map((competence, index) => (
            <NavItem key={index} eventKey={index + 1 + 'c'}>
                {competence}
            </NavItem>
        ));
        return (
            <Nav bsStyle="pills" className="wsr-competence-category" stacked>
                {listItems}
            </Nav>
        );
    }
}

export class WsrExpertSearch extends React.Component {
    render() {
        let _props = this.props;
        let listCategories = _props.categories.map((category, index) => (
            <option key={index} value="select">
                {category}
            </option>
        ));
        let listCompetences = _props.competences.map((competence, index) => (
            <option key={index} value="select">
                {competence}
            </option>
        ));
        return (
            <Row>
                <Col xs={6} sm={4} md={4} lg={4}>
                    <WsrBlockTitle title="Категория" />
                    <FormControl componentClass="select" placeholder="select">
                        {listCategories}
                    </FormControl>
                </Col>
                <Col xs={6} sm={4} md={4} lg={4}>
                    <WsrBlockTitle title="Компетенция" />
                    <FormControl componentClass="select" placeholder="select">
                        {listCompetences}
                    </FormControl>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <WsrBlockTitle title="Поиск" />
                    <InputGroup>
                        <FormControl
                            className="wsr-input-search"
                            type="text"
                            placeholder="Например, Столярное дело"
                        />
                        <InputGroup.Button>
                            <Button className="wsr-btn-search">
                                <MdSearch className="ri-search" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </Col>

                {/* <Col md={ 4 } lg={ 2 } xsHidden>
                    <WsrBlockTitle title={'\u00A0'} />
                        <Button block className="btn-export ">
                           Выгрузить
                          </Button>
                </Col> */}
            </Row>
        );
    }
}

export class WsrSckSearch extends React.Component {
    render() {
        let _props = this.props;
        let listCategories = _props.categories.map((category, index) => (
            <option key={index} value="select">
                {category}
            </option>
        ));
        let listSck = _props.scks.map((sck, index) => (
            <option key={index} value="select">
                {sck}
            </option>
        ));
        return (
            <Row>
                <Col xs={12} sm={4} md={8} lg={4}>
                    <WsrBlockTitle title="Поиск СЦК" />
                    <InputGroup>
                        <FormControl
                            className="wsr-input-search"
                            type="text"
                            placeholder="Например, Столярное дело"
                        />
                        <InputGroup.Button>
                            <Button className="wsr-btn-search">
                                <MdSearch className="ri-search" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </Col>
                <Col xs={6} sm={4} md={8} lg={3}>
                    <WsrBlockTitle title="Компетенция" />
                    <FormControl componentClass="select" placeholder="select">
                        {listCategories}
                    </FormControl>
                </Col>
                <Col xs={6} sm={4} md={4} lg={3}>
                    <WsrBlockTitle title="СЦК" />
                    <FormControl componentClass="select" placeholder="select">
                        {listSck}
                    </FormControl>
                </Col>

                <Col md={4} lg={2} xsHidden>
                    <WsrBlockTitle title={'\u00A0'} />
                    <Button block className="btn-export ">
                        Выгрузить
                    </Button>
                </Col>
            </Row>
        );
    }
}

export class WsrPartnerSearch extends React.Component {
    render() {
        let _props = this.props;
        let listPartners = _props.partners.map((partner, index) => (
            <option key={index} value="select">
                {partner}
            </option>
        ));
        return (
            <Row>
                <Col xs={12} sm={4} md={8} lg={3}>
                    <WsrBlockTitle title="Партнёр" />
                    <FormControl componentClass="select" placeholder="select">
                        {listPartners}
                    </FormControl>
                </Col>
            </Row>
        );
    }
}

export class WsrAccordeonExpert extends React.Component {
    render() {
        let _props = this.props;
        return (
            <Panel
                header={
                    <Row>
                        <Col sm={1}>
                            <img
                                width={20}
                                src="/Images/certified.svg"
                                alt=""
                            />
                        </Col>
                        <Col sm="9">
                            <h4> Главный региональный эксперт </h4>
                        </Col>
                    </Row>
                }
                eventKey={_props.paneleventKey}>
                <Media className="wsr-certification-explanation__media">
                    <Media.Body className="wsr-certification-description">
                        <p className="wsr-expert-description">
                            Прошедшие двух/трёхдневную программу обучения,
                            сдавшие тестирование по итогам обучения. Имеют право
                            проведения региональных (корпоративных) чемпионатов,
                            а также оценки заданий демонстрационного экзамена
                        </p>
                        {/*  <Label><a href="/docs/certificate.txt">Образец Сертификата</a></Label> */}
                    </Media.Body>
                </Media>
            </Panel>
        );
    }
}

export class WsrLocationItem extends React.Component {
    render() {
        let _props = this.props;
        const popoverBottom = (
            <Popover id="popover-positioned-bottom">
                <strong>{_props.metro} </strong>
                <br />
                {_props.detailedAddress}
            </Popover>
        );
        return (
            <tr>
                <td>{_props.competence}</td>
                <td>
                    <Row className="wsr-expert__name">{_props.expert}</Row>
                    <Row>
                        <MdPhone className="ri-contacts" />
                        {_props.phone}
                    </Row>
                    <Row>
                        <MdMail className="ri-contacts" />
                        {_props.mail}
                    </Row>
                </td>
                <td>
                    {_props.address}
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="bottom"
                        overlay={popoverBottom}>
                        <Row>
                            <Label className="wsr-location-label">
                                Как доехать?
                            </Label>
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
            <div
                className={
                    _props.type ? 'wsr-block ' + _props.type : 'wsr-block'
                }>
                <Row>
                    <Col sm={9} md={12} className="wsr_partner__container ">
                        <div className="wsr-page__description">
                            <Media>
                                <Media.Body className="wsr-partner-description">
                                    <Media.Heading>
                                        <a href="http://www.cisco.com/">
                                            {_props.title}
                                        </a>
                                    </Media.Heading>
                                    {_props.children}
                                    <p className="wsr-block__description">
                                        {' '}
                                        {_props.description}{' '}
                                    </p>
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
            <Col xs={12} md={4}>
                <LinkContainer
                    className="wsr-photo-gallery-item"
                    to={_props.album}>
                    <Thumbnail src={_props.thumbnail} alt={_props.title}>
                        <div className="wsr-photo-gallery-item__description">
                            <h5 className="wsr-block__heading">
                                {_props.title}
                            </h5>
                            <p>{_props.description}</p>
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
            <Col xs={6} md={4}>
                <LinkContainer
                    className="wsr-photo-gallery-photo"
                    to={_props.album}>
                    <Thumbnail src={_props.thumbnail} alt={_props.title} />
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
                <Nav
                    bsStyle="pills"
                    className="wsr-side-menu"
                    stacked
                    activeKey={1}>
                    <NavDropdown
                        eventKey="1"
                        title="О чемпионате"
                        id="nav-dropdown">
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
                            <MenuItem eventKey="2.1">
                                Конкурсные площадки
                            </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/championship/partners">
                            <MenuItem eventKey="2.2">
                                Размещение гостей
                            </MenuItem>
                        </LinkContainer>
                    </NavDropdown>
                    <NavDropdown
                        eventKey="3"
                        title="Мероприятия"
                        id="nav-dropdown">
                        <LinkContainer to="/championship/history">
                            <MenuItem eventKey="3.1">
                                Программа чемпионата
                            </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/championship/partners">
                            <MenuItem eventKey="3.2">
                                Деловая программа
                            </MenuItem>
                        </LinkContainer>
                    </NavDropdown>
                    <NavDropdown
                        eventKey="4"
                        title="Соревнования"
                        id="nav-dropdown">
                        <LinkContainer to="/championship/history">
                            <MenuItem eventKey="4.1">Компетенци</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/championship/partners">
                            <MenuItem eventKey="4.2">
                                График проведения
                            </MenuItem>
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
                <Nav
                    bsStyle="pills"
                    className="wsr-side-menu"
                    stacked
                    activeKey={1}>
                    <NavDropdown
                        eventKey="1"
                        title="Всероссийские отборочные соревнования"
                        id="nav-dropdown">
                        <LinkContainer to="/qualification">
                            <MenuItem eventKey="1.1">
                                График проведения
                            </MenuItem>
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
                            <MenuItem eventKey="3.2">
                                Размещение участников
                            </MenuItem>
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
                    <Col sm={12}>
                        <FormControl
                            type="text"
                            placeholder="Название компании"
                        />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col sm={12}>
                        <FormControl
                            type="text"
                            placeholder="Вид деятельности"
                        />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col sm={12}>
                        <FormControl type="text" placeholder="Имя и фамилия" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col sm={12}>
                        <FormControl type="email" placeholder="Почта" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col sm={12}>
                        <FormControl type="tel" placeholder="Телефон" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={12}>
                        <Button type="submit">Отправить заявку</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export class WsrSpinner extends React.Component {
    render() {
        let _props = this.props;
        return <div className="loader">Загрузка...</div>;
    }
}
