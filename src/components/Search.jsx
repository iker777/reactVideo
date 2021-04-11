import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => (
    <section className="searchbox">
        <h2 className="searchbox__title">¿Qué quieres ver hoy?</h2>
        <input className="searchbox__input" type="text" className="text" placeholder="Buscar..." />
    </section>
)

export default Search