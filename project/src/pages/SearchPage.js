import React from 'react';
import Search from '../components/Search.js'

export default function SearchPage(){
    return(
    <>
        <h2>
            Search Page
        </h2>
        <p>
            Enter as much information into the form on the left as you want<br></br>
            for the card you want to search, then press Submit!<br></br>
            To reset the form, press Reset!<br></br>
            You can find the cheapest price of the card at the bottom of the page after Submitting!<br></br>
            Navigate to the About page for more information on the parameters.
        </p>
        <Search/>
        <div id = "price"></div>
    </>
    )
}

