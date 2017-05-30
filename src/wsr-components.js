import React, { Component } from "react";
import "./css/wsr.css";
import { MdDateRange, MdArrowForward } from "react-icons/lib/md";
import TextTruncate from "react-text-truncate";

import { Row, Col, Image } from "react-bootstrap";

export class WsrMenuBg extends React.Component {
    render() {
        return <div className="wsr-affix-background" />;
    }
}

export class WsrMenuTitle extends React.Component {
    render() {
        return (
            <div className="wsr-title">
                <div className="wsr-title-descriptor">
                    Региональный координационный центр
                </div>
                <div className="wsr-title-primary">
                    WorldSkills Russia по г. Москве
                </div>
                <div className="wsr-title-logo">
                    <img alt="" src="/Images/wsr-msk-logo.png" />
                </div>
            </div>
        );
    }
}

export class WsrImage extends Component {
    render() {
        let { mode, src, height, width, style, ...props } = this.props;
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
            <div {...props} style={{ ...defaults, ...style, ...important }} />
        );
    }
}

export class WsrBlock extends React.Component {
    render() {
        var _props = this.props;
        return (
            <div className={"wsr-block " + _props.type}>
                <Row>
                    <Col xs={10} md={7}>
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
                                line={3}
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
                    <Col md={5}>
                        <WsrImage
                            className="wsr-block__image"
                            src={_props.image}
                            height="200px"
                            width="100%"
                            mode="fill"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export class WsrNewsItem extends React.Component {
    render() {
        var _props = this.props;
        return (
            <Row className="wsr_block-menu__item">
                <Col md={12}>
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
                            line={2}
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

export class WsrNumbersItem extends React.Component {
    render() {
        var _props = this.props;
        return (
            <Col className="wsr-numbers__item" md={6} xs={12}>
                <h1>{_props.number}</h1>
                <TextTruncate
                    className="wsr-numbers__description"
                    line={10}
                    truncateText="…"
                    text={_props.description}
                    textTruncateChild={
                        <a href="#">
                            <MdArrowForward className="wsr-block__date-icon" />
                        </a>
                    }
                />
            </Col>
        );
    }
}

export class WsrPartnersItem extends React.Component {
    render() {
        var _props = this.props;
        return (
            <Row className="wsr_block-menu__item">
                <Col md={12} className="text-center">
                    <div className="center-block">
                        <Image
                            className="center-block wsr-parther-logo"
                            src="Images/panel_logo_01.svg"
                            responsive
                        />
                    </div>
                    <div className="wsr_block-menu__divider" />
                    <div className="center-block">
                        <Image
                            className="center-block wsr-parther-logo"
                            src="Images/panel_logo_02.svg"
                            responsive
                        />
                    </div>
                    <div className="wsr_block-menu__divider" />
                    <div className="center-block">
                        <Image
                            className="center-block wsr-parther-logo"
                            src="Images/panel_logo_03.svg"
                            responsive
                        />
                    </div>
                    <div className="wsr_block-menu__divider" />
                    <div className="center-block">
                        <Image
                            className="center-block wsr-parther-logo"
                            src="Images/panel_logo_04.svg"
                            responsive
                        />
                    </div>
                    <div className="wsr_block-menu__divider" />
                    <div className="center-block">
                        <Image
                            className="center-block wsr-parther-logo"
                            src="Images/panel_logo_05.svg"
                            responsive
                        />
                    </div>
                    <div className="wsr_block-menu__divider" />
                    <div className="center-block">
                        <Image
                            className="center-block wsr-parther-logo"
                            src="Images/panel_logo_06.svg"
                            responsive
                        />
                    </div>
                </Col>

            </Row>
        );
    }
}

export class WsrBlockBlank extends React.Component {
    render() {
        var _props = this.props;
        return (
            <div className={"wsr-block " + _props.type}>
                {_props.children}
            </div>
        );
    }
}

export class WsrBlockTitle extends React.Component {
    render() {
        var _props = this.props;
        return (
            <div className="wsr-block__title">
                <span>
                    {_props.title}
                </span>
            </div>
        );
    }
}

export class WsrGallery extends React.Component {
    render() {
        var _props = this.props;
        return (
            <Row className="wsr-gallery">
                {_props.children}
            </Row>
        );
    }
}

export class WsrFooter extends React.Component {
    render() {
        var _props = this.props;
        return (
            <Row className="wsr-footer">

                <div className="wsr_footer__divider" />
                <Col md={3} />
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"Wsr в Москве".toUpperCase()}
                    </h7>
                    <p>Об РКЦ</p>
                    <p>История WorldSkills</p>
                    <p>Активные мероприятия</p>
                </Col>
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"Эксперты".toUpperCase()}
                    </h7>
                    <p>Инофрмация для экспертов</p>
                </Col>
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"СЦК".toUpperCase()}
                    </h7>
                </Col>
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"Компетенции".toUpperCase()}
                    </h7>
                </Col>
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"Проекты".toUpperCase()}
                    </h7>
                    <p>Региональный эксперт WSR</p>
                    <p>"Эксперт ДЭ</p>
                    <p>Обучение становлению СЦК</p>
                    <p>Обучение экспертов WorldSkills</p>
                </Col>
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"Партнёры".toUpperCase()}
                    </h7>
                    <p>Наши партнёры</p>
                    <p>Стать партнёром</p>
                </Col>
                <Col md={1}>
                    <h7 className="wsr-footer__heading">
                        {"Пресс-центр".toUpperCase()}
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
