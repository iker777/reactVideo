import React from 'react'
import Header from '../components/Header'
import '../assets/styles/App.scss'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

const App = () => (
    <div className="App" >
        <Header />
        <Search />
        <Carousel>
            <Categories title="Películas" />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
        </Carousel>

        <Carousel>
            <Categories title="Series" />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
        </Carousel>

        <Footer />
    </div>
)

export default App