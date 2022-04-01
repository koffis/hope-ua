import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/sideLogo.svg';
import burger from '../assets/images/burger.svg';
import telegram from '../assets/images/telegram.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg';

import './sidebar.scss';


const Sidebar = () => {
    const [menu, setMenu] = useState(false);

    return menu ? (
        <div className='sidebar'>
            <div className='sidebar-closed' onClick={() => setMenu(!menu)}>
                <img className='sidebar-closed-logo' src={logo} alt='logo' />
                <div className='sidebar-closed-menu'>
                    <img src={burger} alt='burger' />
                    <h5>меню</h5>
                </div>
                <span>GAMNO</span>
            </div>
            <div className='sidebar-opened'>
                <button>Зробити Внесок</button>
                <div className='sidebar-opened-menu'>
                    <Link to="/">
                        Головна
                    </Link>
                    <Link to="/about">
                        Про нас
                    </Link>
                    <Link to="/help">
                        Отримати допомогу
                    </Link>
                    <Link to="/">
                        Стати волонтером
                    </Link>
                    <Link to="/">
                        Корисні посилання
                    </Link>
                    <Link to="/news">
                        Новини
                    </Link>
                </div>
                <div className='sidebar-opened-networks'>
                    <a href='/'>facebook <img src={facebook} alt='facebook' /></a>
                    <a href='/'>instagram <img src={instagram} alt='instagram' /></a>
                    <a href='/'>telegram <img src={telegram} alt='telegram' /></a>
                    <a href='/'>linkedin <img src={linkedin} alt='linkedin' /></a>
                </div>
            </div>
        </div>
    ) : (
        <div className='sidebar-closed' onClick={() => setMenu(!menu)}>
            <img className='sidebar-closed-logo' src={logo} alt='logo' />
            <div className='sidebar-closed-menu'>
                <img src={burger} alt='burger' />
                <h5>меню</h5>
            </div>
            <span>GAMNO</span>
        </div>
    );
}

export default Sidebar;