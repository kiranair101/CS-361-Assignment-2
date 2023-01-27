import React from 'react';
import Search from '../components/Search.js'

export default function SearchPage(){
    return(
    <>
        <h2>
            Search Page
        </h2>
        <p>
            Enter the information into the form on the left for the<br></br>
            card you want to search, then press Submit!<br></br>
            To reset the form, press Reset!<br></br>
            Navigate to the About page for more information on the parameters.
        </p>
        <Search/>
        <div id = "price"></div>
    </>
    )
}

