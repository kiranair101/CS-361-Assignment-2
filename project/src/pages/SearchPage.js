import React from 'react';
import Search from '../components/Search.js'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'

export default function SearchPage(){
    return(
    <>
        <h2>
            Search Page
        </h2>
        <div className='grid-container'>
            <Search/>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img id="Card_Image" src="Yugioh_Card_Back.png" alt="Yugioh Card Back"></img>
                    </div>
                    <div className="flip-card-back">
                        <img id="Card_Image" src="Yugioh_Card_Back.png" alt="Yugioh Card Back"></img>
                    </div>
                </div>
            </div>
            <div>
                <BsFillArrowLeftSquareFill className = "arrow-icon"/>
                <BsFillArrowRightSquareFill className = "arrow-icon"/>                
            </div>
            <div>
                <BsFillArrowLeftSquareFill className = "arrow-icon"/>
                <BsFillArrowRightSquareFill className = "arrow-icon"/>
            </div>
        </div>
    </>
    )
}

