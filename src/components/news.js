import React from "react";
import { Link } from "react-router-dom";
import NewsItem from "./newsItem";

import './index.scss';

const News = () => {
    return (
        <div className="news">
            <h3>Останні новини</h3>
            <div className="news-items">
                <NewsItem
                    date='20/03/2022'
                    header='Заголовок певної публікації'
                    text='Lorem ipsum dolor sit amet consectetur adipiscing elit donec congue, erat montes velit tristique elementum turpis vehicula dis. Suscipit fusce sodales lacinia faucibus ex himenaeos eros donec tellus, interdum torquent rutrum diam primis nisl facilisis sit, vivamus etiam convallis adipiscing dignissim scelerisque vehicula litora.'
                />
                <NewsItem
                    date='21/03/2022'
                    header='Заголовок певної публікації'
                    text='Lorem ipsum dolor sit amet consectetur adipiscing elit donec congue, erat montes velit tristique elementum turpis vehicula dis. Suscipit fusce sodales lacinia faucibus ex himenaeos eros donec tellus, interdum torquent rutrum diam primis nisl facilisis sit, vivamus etiam convallis adipiscing dignissim scelerisque vehicula litora.'
                />
            </div>
            <div className="news-link">
                <Link to='/news'>переглянути всі новини</Link>
            </div>
        </div>
    );
}

export default News;