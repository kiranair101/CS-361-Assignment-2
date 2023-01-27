function AboutPage() {
 
    return (
        <>
            <h2>About Page</h2>
            <figure id = "about-figure">
                <figcaption>Parameter Information</figcaption>
                <dl>
                <dt>Name</dt>
                    <dd>The exact name of the card.</dd>
                <dt>Level</dt>
                    <dd>Filter by card level/RANK.</dd>
                <dt>Type</dt>
                    <dd>The type of card you want to filter by (Effect Monster, Trap Card, Synchro Monster, etc).</dd>
                <dt>Attribute</dt>
                    <dd>Filter by the card attribute (DARK, FIRE, WIND, etc).</dd>
                <dt>Race</dt>
                    <dd>Filter by the card race which is officially called type (Spellcaster, Warrior, Insect, etc). This is also used for Spell/Trap cards.</dd>
                <dt>Archetype</dt>
                    <dd>Filter the cards by archetype (Dark Magician, Prank-Kids, Blue-Eyes, etc).</dd>
                <dt>Attack</dt>
                    <dd>Filter by the attack value.</dd>
                <dt>Defense</dt>
                    <dd>Filter by the defense value.</dd>
                </dl>
            </figure>
        </>
    );
}


export default AboutPage;