import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
 
    return (
        <>
            <h2>Home Page</h2>
            <p id="description-paragraph">
                "Yu-Gi-Oh! is an exciting universe based on a card game played with Monsters, Spells, and Traps. <br></br>
                The Yu-Gi-Oh! franchise includes manga series, television series, several video games, the Yu-Gi-Oh! TRADING CARD GAME, and more!" - yugioh-card.com<br></br><br></br>
                This web application can be used to search for Yu-Gi-Oh! cards. <br></br><br></br>
                Click the links in the header to navitagte the application.
            </p>
            <Link id="random-link" to="/search">Click Here to Search for a Random Card!</Link>
            <figure>
                <figcaption>Update Log</figcaption>
                <dl>
                <dt>January 27, 2023</dt>
                    <dd>Added CSS styling to the web applicaiton.</dd>
                <dt>January 26, 2023</dt>
                    <dd>Finalized individual card search, single image viewer, and price search features under Search.</dd>
                <dt>January 24, 2023</dt>
                    <dd>Began implementation of the individual card search feature.</dd>
                </dl>
            </figure>
        </>
    );
}


export default HomePage;