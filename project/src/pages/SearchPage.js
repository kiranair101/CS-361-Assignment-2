import React from 'react';
import Search from '../components/Search.js'

export default function SearchPage(){
    return(
    <>
        <h2>
            Search Page
        </h2>
        <div className='grid-container'>
            <Search/>
            <img id="Card_Image" src="Yugioh_Card_Back.png" alt="Yugioh Card Back"></img>
        </div>
    </>
    )
}