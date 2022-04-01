import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../../assets/images/plus.svg';
import hat from '../../assets/images/hat.svg';
import bag from '../../assets/images/bag.svg';
import { Helmet } from "react-helmet";
import Sidebar from "../../components/sidebar";

import './index.scss';

const HelpPage = () => {
    return (
        <>
            <Helmet>
                <title>Hope.ua - Help</title>
            </Helmet>
            <Sidebar />
            <div className='help'>
                <Link to='/' className='help-block medcine'>
                    <img src={plus} alt='plus' />
                    <h3>Медикаменти</h3>
                </Link>
                <Link to='/' className='help-block eats'>
                    <img src={hat} alt='hat' />
                    <h3>Гуманітарна допомога</h3>
                </Link>
                <Link to='/' className='help-block weapons'>
                    <img src={bag} alt='bag' />
                    <h3>Тактичне забезпечення</h3>
                </Link>
            </div>
        </>
    );
}

export default HelpPage;