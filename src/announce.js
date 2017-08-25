import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Modal, Button, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrBlock, WsrNewsItem, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class Announce extends Component {

      constructor(props) {
        super(props);
        this.state = { showModal: false };
      }

      closeModal = () => {
        this.setState({ showModal: false });
      }

      openModal = () => {
        this.setState({ showModal: true });
      }

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

                  <Col xs={ 0 } sm={ 3 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 9 } md={ 9 } lg={ 7 }>
                    <WsrBlockTitle title="Анонс" />
                    <WsrPage type="wsr-page" heading="" description="" date="10.05.2017">
                      
                      <h3>Обучение в Академии WorldSkills на базе СЦК по компетенции «Электромонтаж»
</h3>
                      
                      <hr />
                      <p>
                        21 августа 2017 года в Колледже архитектуры дизайна и реинжиниринга №26 на базе СЦК по компетенции «Электромонтаж» стартует обучение по программе Академии WorldSkills Russia «Практика и методика подготовки кадров с учетом стандартов Ворлдскиллс Россия».

Программа нацелена на повышение профессионального уровня преподавателей (мастеров производственного обучения) по наиболее перспективным и востребованным профессиям в системе СПО на основе лучших отечественных и международных практик и методик подготовки, а также на формирование компетенции преподавателей (мастеров производственного обучения) по самостоятельной актуализации и реализации модулей профессиональной образовательной программы по конкретным профессиям с учетом стандартов Ворлдскиллс Россия.
                      </p>


                    </WsrPage>
                  </Col>
                  <Col xsHidden smHidden md={ 3 } lg={ 3 } className="wsr-aside">
                  <WsrBlockTitle title="Другие анонсы" />
                  <WsrBlockBlank type="wsr-block-news">
                      <WsrNewsItem heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)" description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                        date="26.04.2017" />
                      <div className="wsr_block-menu__divider" />
                      <WsrNewsItem heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)" description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                        date="26.04.2017" />
                      <div className="wsr_block-menu__divider" />
                      <WsrNewsItem heading="Консультация по процедуре аккредитации СЦК (Специализированного центра компетенций)" description="26 апреля 2017 года состоится консультация по процедуре аккредитации СЦК (Специализированного центра компетенций). "
                        date="26.04.2017" />
                    </WsrBlockBlank>
                  </Col>
                </Row>
                </Grid>
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
              
            </div>
        );
    }
}

export default Announce;

/* */
