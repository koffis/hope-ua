import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';

import flag from '../../assets/images/flag.png'
import logo from '../../assets/images/logo.svg'
import granny from '../../assets/images/granny.png'

import './index.scss';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className='home'>
            <div className='home-header'>
                <img src={logo} alt="logo" />
                <button>Зробити Внесок</button>
            </div>
            <div className='home-about'>
                <div className='home-about-left'>
                    <h3 className='home-about-left-we'>Хто ми</h3>
                    <p>Hope UA – український благодійний фонд, спрямований на повернення миру та порятунку життя військовим, цивільним, медикам, освітянам, які постраждали внаслідок повномасштабного воєнного вторгнення росії в Україну. </p>
                    <Link to="/">Дізнатись більше про нас</Link>
                    <Link to="/">переглянути список корисних посилань</Link>
                    <button>Зробити Внесок</button>
                    <h3 className='home-about-left-help'>Допомога</h3>
                    <p>В даному розділі Ви можете оформити заявку на Отримання або Надання  допомоги за кожним з таких напрямів: Медикаменти, Гуманітарна допомога і Тактичне забезпечення.</p>
                    <img src={granny} alt="granny" />
                </div>
                <div className='home-about-right'>
                    <img src={flag} alt="flag" />
                    <h3 className='home-about-right-first'>Творимо Сьогодні заради нашого Завтра.</h3>
                    <div>
                        <h3 className='home-about-right-second'>Отримати</h3>
                        <Link to="/">Вибрати напрям</Link>
                    </div>
                    <div className='home-about-right-yellow'>
                        <h3>Надати</h3>
                        <Link to="/">заповнити форму зворотього зв’язку</Link>
                    </div>
                </div>
            </div>
            <div className='home-numbers'>
                <h3>Трохи цифр</h3>
                <div className='home-numbers-items'>
                    <div className='home-numbers-items-item'>
                        <h4>10</h4>
                        <p>тонн гуманітарної допомоги вже надійшло до отримувачів</p>
                    </div>
                    <div className='home-numbers-items-item'>
                        <h4>25</h4>
                        <p>бригад різного призначення отримали необхідне забезпечення для продовження їхньої ефективної роботи</p>
                    </div><div className='home-numbers-items-item'>
                        <h4>15</h4>
                        <p>іноземних компаній стали нашими партнерами і це число продовжує рости.</p>
                    </div><div className='home-numbers-items-item'>
                        <h4>10</h4>
                        <p>тонн гуманітарної допомоги вже надійшло до отримувачів</p>
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
            <Footer />
        </div>
    );
};

export default HomePage