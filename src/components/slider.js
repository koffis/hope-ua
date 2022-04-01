import React from 'react';
import './index.scss';

const SliderItem = ({ image, name, desc }) => {
    return (
        <div className='slider-item'>
            <img src={image} alt='employee' />
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    );
};

const Slider = () => {
    return (
        <div className='slider'>
            <SliderItem
                image='https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png'
                name="Monkey D. Luffy"
                desc='King of Pirates'
            />
            <SliderItem
                image='https://cdn.vox-cdn.com/thumbor/23dWY86RxkdF7ZegvfnY8gFjR7s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg'
                name="Midoriya Izumi"
                desc='Hero Academy'
            />
            <SliderItem
                image='https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg'
                name="Nezuku"
                desc='Pretty Demon'
            />
            <SliderItem
                image='https://doms2cents.com/wp-content/uploads/2022/01/Solo-Leveling-Anime.jpg'
                name="Sung Jinwoo"
                desc='Solo Leveler'
            />
            <SliderItem
                image='https://www.hollywoodreporter.com/wp-content/uploads/2018/09/coming_to_netflix_in_october_2018-_the_seven_deadly_sins-_revival_of_the_commandments-publicity_-production_still-_h_2018.jpg?w=681&h=383&crop=1'
                name="Meliodas"
                desc='King of Demons'
            />
            <SliderItem
                image='https://static.fandomspot.com/images/11/10193/00-featured-killua-zoldyck-hunter-x-hunter-anime-preview.jpg'
                name="Killua Zoldik"
                desc='Proffesional Hunter'
            />
        </div>
    );
}

export default Slider;