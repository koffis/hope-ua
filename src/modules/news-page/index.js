import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsItem from '../../components/newsItem';
import Footer from '../../components/footer';
import { Helmet } from "react-helmet";
import Sidebar from '../../components/sidebar';

import './index.scss';

const NewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <Helmet>
                <title>Hope.ua - News</title>
            </Helmet>
            <Sidebar />
            <div className='allnews'>
                <h2>Останні новини</h2>
                <div className='allnews-items'>
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
                    <Link to='/'>переглянути всі новини</Link>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default NewsPage;