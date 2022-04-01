import React from 'react';
import './index.scss';

const NewsItem = ({ date, header, text }) => {
    return (
        <div className='news-item'>
            <h4>{date}</h4>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
}

export default NewsItem;