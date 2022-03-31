import React from "react";
import telegram from '../assets/images/telegram.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg';
import logoBlack from '../assets/images/logoBlack.svg';

import './index.scss';

const Footer = () => {
    return (
        <div className="footer">
            <h3>Контакти</h3>
            <div className="footer-main">
                <div className="footer-main-contacts">
                    <div className="footer-main-contacts-item">
                        <h5>адреса</h5>
                        <p>79000, Україна, м. Львів <br />вул. Героїв УПА, 64</p>
                    </div>
                    <div className="footer-main-contacts-item">
                        <h5>телефон</h5>
                        <p>+380 (67) 000 00 00</p>
                    </div>
                    <button>зробити внесок</button>
                </div>
                <div className="footer-main-networks">
                    <div className="footer-main-networks-item">
                        <h5>електронна пошта</h5>
                        <p>info@hope.ua</p>
                    </div>
                    <div className="footer-main-networks-links">
                        <div className="footer-main-networks-links-pair">
                            <a href='/'>facebook <img src={facebook} alt='facebook' /></a>
                            <a href='/'>instagram <img src={instagram} alt='instagram' /></a>
                        </div>
                        <div className="footer-main-networks-links-pair">
                            <a href='/'>telegram <img src={telegram} alt='telegram' /></a>
                            <a href='/'>linkedin <img src={linkedin} alt='linkedin' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <span>Всі права захищено. Hope UA, {new Date().getFullYear()}.</span>
                <img src={logoBlack} alt='logo' />
            </div>
        </div>
    );
};

export default Footer;