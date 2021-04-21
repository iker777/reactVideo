import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play.svg'
import plusIcon from '../assets/static/plus.svg'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img src={cover} alt="{title}" className="carousel-item__img" />
        <div className="carousel-item__details">
            <div className="carousel-item__details--img">
                <img src={playIcon} alt="" />
                <img src={plusIcon} alt="" />
            </div>                    
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
)

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarouselItem