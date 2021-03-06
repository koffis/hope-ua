import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import News from "../../components/news";
import Footer from '../../components/footer';

import plus from '../../assets/images/plus.svg';
import hat from '../../assets/images/hat.svg';
import bag from '../../assets/images/bag.svg';
import flag from '../../assets/images/flagBig.png';

import './index.scss'
import Slider from "../../components/slider";
import Sidebar from "../../components/sidebar";

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Helmet>
                <title>Hope.ua - About</title>
            </Helmet>
            <Sidebar />
            <div className="about">
                <div className="about-main">
                    <div className="about-main-left">
                        <h3>Про нас</h3>
                        <p>Hope UA – український благодійний фонд, спрямований на повернення миру та порятунку життя військовим, цивільним, медикам, освітянам, які постраждали внаслідок повномасштабного воєнного вторгнення росії в Україну.
                            <br />
                            <br />
                            Cubilia nisl libero dictum tincidunt magna ac curae, auctor aptent posuere torquent vulputate pretium. Mus eleifend sed fringilla donec inceptos posuere hendrerit pretium, nec curae primis dolor vivamus sapien platea tellus rhoncus, curabitur massa maecenas lacinia arcu urna augue.
                            <br />
                            <br />
                            Elementum quis mus aliquam diam eleifend at montes eu praesent arcu, fermentum morbi donec cursus fames pellentesque vel imperdiet et, venenatis ullamcorper aenean nisi sapien libero duis maecenas tortor. Platea neque scelerisque dictumst rutrum volutpat ipsum in rhoncus nam.
                        </p>
                        <h3>Напрямки нашої діяльності</h3>
                        <div className="about-main-left-plus">
                            <img src={plus} alt="plus" />
                            <h4>Медикаменти</h4>
                        </div>
                    </div>
                    <div className="about-main-right">
                        <img src={flag} alt="flag" />
                        <div className="about-main-right-orange">
                            <h3>Бажаєте надати допомогу</h3>
                            <Link to="/">заповнити форму зворотього зв’язку</Link>
                        </div>
                        <div className="about-main-right-yellow">
                            <img src={bag} alt="bag" />
                            <h4>Гуманітарна <br />допомога</h4>
                        </div>
                        <div className="about-main-right-green">
                            <img src={hat} alt="hat" />
                            <h4>Тактичне забезпечення</h4>
                        </div>
                    </div>
                </div>
                <div className='home-team'>
                    <h3>Місце для слогану/ тексту, що потребує виділення.</h3>
                    <div className='home-team-info'>
                        <h3>Команда</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec congue, erat montes velit tristique elementum turpis vehicula dis. Suscipit fusce sodales lacinia faucibus ex himenaeos eros donec tellus, interdum torquent rutrum diam primis nisl facilisis sit, vivamus etiam convallis adipiscing dignissim scelerisque vehicula litora.</p>
                    </div>
                </div>
                <Slider />
                <News />
                <div className="about-photos">
                    <h3>Ми у соцмережах</h3>
                    <div className="about-photos-list">
                        <a href='/'><img src='https://uainfo.org/static/img/_/v/_volonteri_2000x0.jpg' alt='network' /></a>
                        <a href='/'><img src='https://www.volynpost.com/img/modules/news/8/84/98e0ce5dd39dc1e210adc017afa28848/top-photo.jpg' alt='network' /></a>
                        <a href='/'><img src='https://itc.ua/wp-content/uploads/2022/03/group-1.jpg' alt='network' /></a>
                        <a href='/'><img src='https://www.5.ua/media/pictures/original/147147.jpg?t=1535479418' alt='network' /></a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default AboutPage;