import React from 'react'

function SearchBar() {
    return (
        <div className="search__bar">
                <div className="input__bar border-right">
                    <i className="fas fa-book "></i>
                    <input placeholder="Matière" />
                </div>
                <div className="input__bar border-right">
                    <i className="fas fa-map-marker-alt "></i>
                    <input placeholder="Lieu" />
                </div>
                <div className="input__bar">
                    <i className="fas fa-graduation-cap "></i>
                    <input placeholder="Niveau" />
                </div>
                <button >Rechercher</button>
            </div>
    )
}

export default SearchBar
