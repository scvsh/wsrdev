import React, {Component} from 'react';
import '../bootswatch/cosmo/bootstrap.css';
import './css/wsr.css';
import './css/fonts.css';
/* import { Link } from 'react-router-dom' */
import {FaFileTextO} from 'react-icons/lib/fa';

import OwlCarousel from 'react-owl-carousel';

/* Import React-Boorstrap components*/
import {
    Button,
    Clearfix,
    Nav,
    NavItem,
    Grid,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

/* Import WSR React components*/

import {
    WsrCarousel,
    WsrMainMenu,
    WsrBlockTitle,
    WsrBlock,
    WsrBlockBlank,
    WsrNewsItem,
    WsrNumbersItem,
    WsrFooter,
} from './wsr-components.js';

/* Main app */

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Header carousel */}
                <WsrCarousel />

                {/* Left sidebar */}

                <WsrMainMenu />

                {/* Main content */}
                <Grid bsClass="containter-fluid">
                    <Row>
                        <Col xs={0} sm={3} md={3} lg={2} />
                        <Col xs={12} sm={6} md={4} lg={5}>
                            <div className="wsr-top-button-block">
                                <a className=" text-left btn btn-default btn-block">
                                    Всероссийские отборочные <br />соревнования
                                    - 2018
                                </a>
                                <a className=" text-left btn btn-default btn-block">
                                    Чемпионат Москвы WorldSkills
                                </a>
                                <a className=" text-left btn btn-default btn-block">
                                    Чемпионат Москвы <br />WorldSkills Junior
                                </a>
                                <a className=" text-left btn btn-default btn-block">
                                    Демонстрационный экзамен <br />по стандартам
                                    WorldSkills Russia{' '}
                                </a>
                            </div>
                            <WsrBlockTitle
                                link="/press/important"
                                title="Важная информация"
                                more
                            />
                            <WsrBlock
                                type="wsr-block-important"
                                heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»"
                                description="
На международном чемпионата China International Skills Competition 2017 (CISC-2017)"
                                date="10.06.2017"
                                image="/Images/thumb06.jpg"
                                link="/default"
                            />
                            <WsrBlock
                                type="wsr-block-important"
                                heading="Старт группы по обучению по программе «Региональный эксперт WorldSkills» перенесен на 13-14 июня!"
                                description="Старт группы по обучению по программе «Региональный эксперт WorldSkills» состоится на 13-14 июня 2017г. 
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                                date="06.06.2017"
                                image="/Images/thumb03.jpg"
                            />
                            <WsrBlockTitle
                                title="Анонсы мероприятий"
                                link="/default"
                                more
                            />
                            <WsrBlock
                                type="wsr-block-announce"
                                heading="Обучение в Академии WorldSkills на базе СЦК по компетенции «Электромонтаж»"
                                description="21 августа 2017 года в Колледже архитектуры дизайна и реинжиниринга №26 на базе СЦК по компетенции «Электромонтаж» стартует обучение по программе Академии WorldSkills Russia «Практика и методика подготовки кадров с учетом стандартов Ворлдскиллс Россия»."
                                date="10.05.2017"
                                image="/Images/thumb07.jpg"
                                link="/announce"
                            />
                            <WsrBlock
                                type="wsr-block-announce"
                                heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»"
                                description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                                date="10.05.2017"
                                image="/Images/thumb01.jpg"
                                link="/default"
                            />
                            <WsrBlock
                                type="wsr-block-announce"
                                heading="Демонстрационный экзамен, летняя сессия: изменения по компетенции
                                                                                       «Ландшафтный дизайн»"
                                description="25 апреля 2017 года состоится консультация по процедуре введения новых компетенций. Необходима предварительная регистрация на период времени с 11:00 до 16:00. Консультация проходит в течение часа.
                                                                                                                   Адрес проведения: г. Москва, Дмитровское шоссе, д.51, корпус 1 (РКЦ WSR в городе Москве)."
                                date="10.05.2017"
                                image="/Images/thumb01.jpg"
                                link="/default"
                            />
                            {/* <WsrSpinner /> */}
                        </Col>

                        {/* Block numbers */}
                        <Col xs={12} sm={3} md={3}>
                            <WsrBlockTitle title="РКЦ в цифрах" />
                            <WsrBlockBlank type="wsr-block-numbers">
                                <Row>
                                    <WsrNumbersItem
                                        number="1"
                                        description="Место в медальном зачете по РФ"
                                    />
                                    <WsrNumbersItem
                                        number="448"
                                        description="Региональных экспертов"
                                    />
                                </Row>
                                <Row className="wsr-numbers__row">
                                    <WsrNumbersItem
                                        number="32"
                                        description="Победителя V Национального чемпионата «Молодые профессионалы» 2017"
                                    />
                                    <WsrNumbersItem
                                        number="10 068"
                                        description="Участников демонстрационного экзамена по стандартам WSR в 2017"
                                    />
                                </Row>
                            </WsrBlockBlank>
                            {/* Block News */}
                            <WsrBlockTitle
                                title="Новости"
                                className="wsr-block__title--news"
                                more
                            />
                            <WsrBlockBlank type="wsr-block-news">
                                <WsrNewsItem
                                    heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)"
                                    description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                                    date="26.04.2017"
                                />
                                <div className="wsr_block-menu__divider" />
                                <WsrNewsItem
                                    heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)"
                                    description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                                    date="26.04.2017"
                                />
                                <div className="wsr_block-menu__divider" />
                                <WsrNewsItem
                                    heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)"
                                    description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                                    date="26.04.2017"
                                />
                            </WsrBlockBlank>
                        </Col>

                        <Clearfix visibleSmBlock />
                        {/* Block partners */}
                        <Col xs={12} sm={5} md={2} smHidden>
                            <WsrBlockTitle title="Партнёры" />
                            <WsrBlockBlank className="wsr-block-select">
                                <Nav
                                    bsStyle="pills"
                                    className="wsr-partner-list"
                                    stacked>
                                    <NavItem eventKey="0">
                                        <div className="center-block ">
                                            <Image
                                                className="center-block wsr-parther-logo"
                                                src="/Images/1.png"
                                                responsive
                                            />
                                        </div>
                                    </NavItem>
                                    <NavItem eventKey="1">
                                        <div className="center-block ">
                                            <Image
                                                className="center-block wsr-parther-logo"
                                                src="/Images/2.jpg"
                                                responsive
                                            />
                                        </div>
                                    </NavItem>
                                    <NavItem eventKey="2">
                                        <div className="center-block">
                                            <Image
                                                className="center-block wsr-parther-logo"
                                                src="/Images/3.jpg"
                                                responsive
                                            />
                                        </div>
                                    </NavItem>
                                    <NavItem eventKey="3">
                                        <div className="center-block ">
                                            <Image
                                                className="center-block wsr-parther-logo"
                                                src="/Images/4.jpg"
                                                responsive
                                            />
                                        </div>
                                    </NavItem>
                                    <NavItem eventKey="4">
                                        <div className="center-block">
                                            <Image
                                                className="center-block wsr-parther-logo"
                                                src="/Images/5.jpg"
                                                responsive
                                            />
                                        </div>
                                    </NavItem>
                                    <NavItem eventKey="5">
                                        <div className="center-block">
                                            <Image
                                                className="center-block wsr-parther-logo"
                                                src="/Images/6.jpg"
                                                responsive
                                            />
                                        </div>
                                    </NavItem>
                                </Nav>
                            </WsrBlockBlank>
                        </Col>
                    </Row>
                </Grid>
                {/* Bottom Gallery */}
                <Row>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        items={4}
                        margin={0}
                        nav={false}
                        dots={false}>
                        <div className="item">
                            <Image
                                src="/Images/thumb01.jpg"
                                className="wsr-gallery-item"
                                responsive
                            />
                        </div>
                        <div className="item">
                            <Image
                                src="/Images/thumb02.jpg"
                                className="wsr-gallery-item"
                                responsive
                            />
                        </div>
                        <div className="item">
                            <Image
                                src="/Images/thumb03.jpg"
                                className="wsr-gallery-item"
                                responsive
                            />
                        </div>
                        <div className="item">
                            <Image
                                src="/Images/thumb04.jpg"
                                className="wsr-gallery-item"
                                responsive
                            />
                        </div>
                    </OwlCarousel>
                </Row>

                {/* Footer */}
                <WsrFooter />
            </div>
        );
    }
}

export default App;

/* */
