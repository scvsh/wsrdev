import React, { Component } from "react";
import "./css/wsr.css";
import { MdDateRange, MdArrowForward, MdMenu } from "react-icons/lib/md";
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
                    WorldSkills Russia по городу Москва
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
                    <Col sm={9} md={7} className="wsr_block__container">
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
                    <Col sm={3} md={5} className="wsr-block__image-container">
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
                    {_props.children }
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
                {_props.children}
            </Row>
        );
    }
}
