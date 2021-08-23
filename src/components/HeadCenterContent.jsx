import React from 'react'
import './HeaderCenterContent.css';
import SearchBar from './SearchBar';
// import bImg from '../../public/images/banimg.jpg';

function HeadCenterContent() {
    return (
        <div className="center__content" style={{backgroundImage: 'url("/images/banimg.jpg")',}}>
            <h2>IL T'ATTEND... TON PROF'</h2>
            <SearchBar/>
            <div className="contact">
                <i className="fas fa-headset "></i>
            </div>
        </div >
    )
}

export default HeadCenterContent
