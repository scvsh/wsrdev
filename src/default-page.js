import React, { Component } from "react";
import "../bootswatch/cosmo/bootstrap.css";
import "./css/wsr.css";
import "./css/fonts.css";
import { LinkContainer } from "react-router-bootstrap";

import OwlCarousel from 'react-owl-carousel';
/* Import React-Boorstrap components*/
import { Panel, Thumbnail, Grid, Row, Col, Image } from "react-bootstrap";

/* Import WSR React components*/

import { WsrNewsItem, WsrCarousel, WsrPage, WsrMainMenu, WsrBlockTitle, WsrBlockBlank, WsrFooter } from "./wsr-components.js";

/* Main app */

class DefaultPage extends Component {
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
                    <WsrBlockTitle title="Важная информация" />
                    <WsrPage type="wsr-page" heading="Анна Беликова, участница Сборной Москвы, заработала серебряную медаль в компетенции «Графический дизайн»" description="" date="10.05.2017">
                      <p>Национальная сборная WorldSkills Russia попала в командный рейтинг международного чемпионата Китая, завоевав 2 золотые, 5 серебряных и 4 бронзовые медали. Результаты соревнований по профессиональному мастерству были объявлены 9 июня в Шанхае на торжественной церемонии закрытия международного чемпионата China International Skills Competition 2017 (CISC-2017).
                      </p>
                      <p>Российские конкурсанты завоевали две золотые медали: по электронике и технологиям моды. Серебряные медали в копилку российской сборной добавили участники соревнований CISC-2017 по компетенциям: кузовной ремонт, кондитерское дело, мобильная робототехника, хлебопечение, а также графический дизайн. Серебряную медаль по компетенции «Графический дизайн» в копилку команды принесла участница Сборной команды WorldSkills Москвы - Анна Беликова (на фото слева), занявшая на Национальном чемпионате 2016 по компетенции «Графический дизайн» второе место (серебряная медаль).
                      </p>
                      <Thumbnail href="#" alt="171x180" src="/Images/thumb06.jpg" />
                      <p>
                        Обладателями бронзовых медалей стали члены национальной сборной WorldSkills Russia по сварочным технологиям, промышленной автоматике, парикмахерскому искусству и по компетенции «Программные решения для бизнеса».
                      </p>
                      <p>
                        Медальоны за профессионализм были присуждены участникам соревнований по компетенциям «Мехатроника», «Прикладная эстетика», «Ресторанный сервис», «Информационные кабельные сети» и «Ремонт и обслуживание легковых автомобилей». Такую награду присуждают конкурсантам, которые качественно и полностью выполнили задание, но не дотянули до медали.
                      </p>
                      <p>
                      Российская национальная сборная приняла участие в чемпионате Китая в составе 23 человек. Конкурсантов сопровождал 21 международный эксперт WorldSkills Russia.
                      </p>
                      <Panel className="wsr-page__panel">
                        <span>Источник новости: worldskills.ru</span>
                      </Panel>
                    </WsrPage>
                  </Col>
                  <Col sm={ 3 } md={ 3 } lg={ 3 }>
                    <WsrBlockTitle title="Новости" />
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
              </Grid>
            </div>
        );
    }
}

export default DefaultPage;

/* */
