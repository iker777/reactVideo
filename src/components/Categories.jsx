import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, title }) => (
    <div className="carousel--title">
        <h3>{title}</h3>
        {children}
    </div>
)

export default Categories