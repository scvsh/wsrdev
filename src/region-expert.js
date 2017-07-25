import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Table, Panel, ListGroupItem, ListGroup, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrCarousel, WsrSizeLabel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Import Icons */

import { MdFileDownload } from "react-icons/lib/md";

/* Main app */

class RegionExpert extends Component {
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
                  <Col xs={ 0 } sm={ 4 } md={ 3 } lg={ 2 } />
                  <Col xs={ 12 } sm={ 5 } md={ 6 } lg={ 7 }>
                    <WsrBlockTitle title="Образовательный проект" />
                    <WsrPage type="wsr-page" heading="Региональный эксперт WSR" description="" date="10.05.2017">
                      <p>В рамках программы Союза WorldSkills Russia по подготовке региональных экспертов открыт прием заявок на обучение.
                        <br />
                        <br /> Старт группы по обучению по программе «Региональный эксперт» состоится 13-14 июня 2017г</p>
                      <ListGroup className="wsr-file-list">
                        <ListGroupItem href="#">
                          <MdFileDownload className="ri-down" />Форма заявки на обучение по программе «Региональный эксперт»
                          <WsrSizeLabel size="10 кб" extension=".doc" />
                        </ListGroupItem>
                      </ListGroup>
                      <p>Заявку необходимо направить по эл.почте: partner@wsr.msk.ru
                        <br />
                        <br /> Во избежание дальнейших проблем с доступом к тестированию, просим обратить особое внимание на корректность указываемых при подаче заявки электронных
                        адресов слушателей.</p>
                      <Panel className="wsr-page__panel">
                        <span>Продолжительность программы: 24  ак. часа (3 дня)<br /></span>
                        <span>Стоимость для одного слушателя: 50 000 руб. (с учетом НДС)<br /></span>
                      </Panel>
                      <ListGroup className="wsr-file-list">
                        <ListGroupItem href="#">
                          <MdFileDownload className="ri-down" />Программа обучения «Региональный эксперт WorldSkills Russia»
                          <WsrSizeLabel size="10 кб" extension=".doc" />
                        </ListGroupItem>
                      </ListGroup>
                      <p>По итогам обучения и успешного прохождения тестирования слушателю присваивается Свидетельство регионального эксперта, позволяющее выступать в роли главного
                        эксперта на региональных чемпионатах. Но что также очень важно, получение Свидетельства регионального эксперта является важным этапом на пути к процедуре
                        сертификации в качестве эксперта WorldSkills. Обучение включает в себя следующие модули:
                      </p>
                      <Table   hover>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>История, основные понятия и стандарты WorldSkills</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Информационное и программное обеспечение работы эксперта</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Проведение чемпионатов по стандартам WorldSkills Russia и ознакомление с работой в электронной системе CIS</td>
                          </tr>
                            <tr>
                            <td>4</td>
                            <td>Тестирование</td>
                          </tr>
                        </tbody>
                      </Table>
                      <Panel collapsible header="Дополнительная информация по программе" eventKey="2">
                        <p>Региональные эксперты по профессиям имеют возможность получить Свидетельство регионального эксперта, предоставляющее право на организацию и проведение чемпионатов с возможностью последующего прохождения процедуры сертификации экспертов WorldSkills.

<br/><br/>Данное Свидетельство предоставляет право выступать в роли главного эксперта на следующих чемпионатах:

Региональные, в том числе отборочные и открытые;
Финалы федеральных округов.
Функционал регионального главного эксперта:

<br/><br/>на основе разработанных Технической дирекцией Союза «Ворлдскиллс Россия» пакетов конкурсной документации, вносить перед чемпионатом 30% изменения в конкурсные задания, в случае необходимости и по согласованию с национальными экспертами WorldSkills Russia вносить изменения в инфраструктурные листы; 
формировать планы застройки; 
принимать конкурсные площадки; 
проводить инструктаж экспертов/наставников команд перед чемпионатом;
вносить результаты конкурсных дней в электронную базу CIS по своей компетенции.
Для получения Свидетельства регионального эксперта кандидату необходимо:

<br/><br/>иметь опыт участия в движении WSR (участие в роли наставника, организатора и прочее);
пройти программу обучения «Эксперт WorldSkills Россия» по стандартам WSR и электронной системе CIS;
пройти тестирование (тестирование проводится непосредственно после прохождения курса): стандарты WSR и система CIS;
провести чемпионат в роли главного эксперта при оценке действий со стороны технической дирекции Союза.
После соблюдения вышеперечисленных условий, эксперту выдается Свидетельство регионального эксперта и право проведения описанных выше чемпионатов в роли главного эксперта. Полученный статус действует два года с момента получения Свидетельства.</p>
                    </Panel>
                    <span>По всем вопросам обращайтесь по телефону в Москве: +7 (929) 041-63-33 или по электронной почте: partner@wsr.msk.ru </span>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Другие проекты" />
                    <WsrBlockBlank className="wsr-block-select">
                      <ListGroup>
                        <LinkContainer to="/experts/region-expert">
                          <ListGroupItem>Региональный эксперт WSR</ListGroupItem>
                        </LinkContainer>
                        <LinkContainer to="/projects/expert-de">
                          <ListGroupItem>Эксперт ДЭ</ListGroupItem>
                        </LinkContainer>
                        <LinkContainer to="/sck/locations">
                          <ListGroupItem>Обучение становлению СЦК</ListGroupItem>
                        </LinkContainer>
                        <LinkContainer to="/sck/locations">
                          <ListGroupItem>Обучение экспертов WorldSkills в 1C:Учебном центре №1</ListGroupItem>
                        </LinkContainer>
                      </ListGroup>
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

export default RegionExpert;

/* */
