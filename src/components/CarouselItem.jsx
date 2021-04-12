import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play.svg'
import plusIcon from '../assets/static/plus.svg'
import theBoys from '../assets/static/boys.jpg'

const CarouselItem = () => (
    <div className="carousel-item">
        <img src={theBoys} alt="" className="carousel-item__img" />
        <div className="carousel-item__details">
            <div className="carousel-item__details--img">
                <img src={playIcon} alt="" />
                <img src={plusIcon} alt="" />
            </div>                    
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2020 16+ 114 minutos</p>
        </div>
    </div>
)

export default CarouselItem