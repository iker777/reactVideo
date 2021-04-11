import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img src="/img/adu.jpg" alt="" className="carousel-item__img" />
        <div className="carousel-item__details">
            <div className="carousel-item__details--img">
                <img src="img/play.svg" alt="" />
                <img src="img/plus.svg" alt="" />
            </div>                    
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2020 16+ 114 minutos</p>
        </div>
    </div>
)

export default CarouselItem