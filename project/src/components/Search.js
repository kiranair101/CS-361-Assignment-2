import React from 'react';
import {useForm} from 'react-hook-form';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
import { useState, useEffect } from 'react';

export default function Search(){
    const {register, handleSubmit, reset, setValue} = useForm()

    const [totalImages, setTotalImages] = useState([]);
    const [imageNumber, setImageNumber] = useState([])

    let data = {}
    let card_number = 0
    let total_cards = 0

    let images = {}
    let image_number = 0
    let total_images = 0

    const onReset = async () => {
        document.getElementById("Card_Image").src="Yugioh_Card_Back.png"
        document.getElementById("image_counter").innerHTML = ""
        document.getElementById("card_counter").innerHTML = ""
        document.getElementById("price").innerHTML = ""
        reset({
            name: "",
            type: "",
            race: "",
            atk: "",
            def: "",
            level: "",
            archetype: "",
            attribute: ""
        })
    }

    const displayData = async (data, index) => {
        setValue("name", data['data'][index]['name'])
        setValue("type", data['data'][index]['type'])
        setValue("race", data['data'][index]['race'])
        setValue("atk", data['data'][index]['atk'])
        setValue("def", data['data'][index]['def'])
        setValue("level", data['data'][index]['level'])
        setValue("attribute", data['data'][index]['attribute'])
        setValue("archetype", data['data'][index]['archetype'])

        document.getElementById("price").innerHTML = `Cheapest Price: $${data['data'][index]['card_prices'][0]['tcgplayer_price']}`
        document.getElementById("card_counter").innerHTML = `${index + 1} / ${data['data'].length}`
    }

    const displayImage = async (data, index, image_index) => {
        document.getElementById("Card_Image").src=data['data'][index]['card_images'][image_index]['image_url']
        images = data['data'][index]['card_images']
        total_images = images.length
        document.getElementById("image_counter").innerHTML = `${image_index + 1} / ${total_images}`
    }

    const nextCard = async () => {
        try{
            card_number += 1
            image_number = 0
            await displayImage(data, card_number, image_number)
            await displayData(data, card_number)
        } catch(error){
            alert("No more cards!")
        }
    }

    const previousCard = async () => {
        try{
            card_number -= 1
            image_number = 0
            await displayImage(data, card_number, image_number)
            await displayData(data, card_number)
        } catch(error){
            alert("No more cards!")
        }
    }    

    const nextImage = async () => {
        try{
            image_number += 1
            document.getElementById("Card_Image").src=images[image_number]['image_url']
            document.getElementById("image_counter").innerHTML = `${image_number + 1} / ${total_images}`
        }catch(error){
            alert("No more images!")
        }
    }

    const previousImage = async () => {
        try{
            image_number -= 1
            document.getElementById("Card_Image").src=images[image_number]['image_url']
            document.getElementById("image_counter").innerHTML = `${image_number + 1} / ${total_images}`
        }catch(error){
            alert("No more images!")
        }
    }

    const onSubmit = async (formValues) => {
        console.log(formValues)

        // Build the url from the form values. 
        let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?'
        for (const parameter in formValues){
            if(formValues[parameter] !== ''){
                url = url + `${parameter}=${formValues[parameter]}&`
            }
        }

        // Send the GET request to the Yu-Gi-Oh! API. 
        try{
            const response = await fetch(url)
            data = await response.json()
            console.log(data)
            
            await displayImage(data, 0, 0)
        
            await displayData(data, 0)
        
        } catch(error){
            console.log(error)
            alert("No card matches your input. Please adjust your search criteria.")
            document.getElementById("Card_Image").src="Yugioh_Card_Back.png"
            reset()
        }
    }

    const getRandomCard = async (e) => {
        e.preventDefault()
        const response = await fetch('/randomcard', {method: 'GET'})
        data = await response.json()
        console.log(data)

        await displayImage(data, 0, 0)
        
        await displayData(data, 0)
    }

    const getRandomDeck = async (e) => {
        e.preventDefault()
        const response = await fetch('/randomdeck', {method: 'GET'})
        data = await response.json()
        console.log(data)

        await displayImage(data, 0, 0)
        
        await displayData(data, 0)
    }

    return(
        <div className='grid-container'>
        <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
            <input type="text" placeholder="Name" {...register("name")}/>
            <input type="number" placeholder="Level" {...register("level")}/>
            <select {...register("type")}>
                <option value="" disabled selected hidden>Type</option>
                <optgroup label="Main Deck Types">
                    <option value="Effect Monster">Effect Monster</option>
                    <option value="Flip Effect Monster">Flip Effect Monster</option>
                    <option value="Flip Tuner Monster">Flip Tuner Monster</option>
                    <option value="Gemini Monster">Gemini Monster</option>
                    <option value="Normal Monster">Normal Monster</option>
                    <option value="Normal Tuner Monster">Normal Tuner Monster</option>
                    <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
                    <option value="Pendulum Effect Ritual Monster">Pendulum Effect Ritual Monster</option>
                    <option value="Pendulum Flip Effect Monster">Pendulum Flip Effect Monster</option>
                    <option value="Pendulum Normal Monster">Pendulum Normal Monster</option>
                    <option value="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</option>
                    <option value="Ritual Effect Monster">Ritual Effect Monster</option>
                    <option value="Ritual Monster">Ritual Monster</option>
                    <option value="Spell Card">Spell Card</option>
                    <option value="Spirit Monster">Spirit Monster</option>
                    <option value="Toon Monster">Toon Monster</option>
                    <option value="Trap Card">Trap Card</option>
                    <option value="Tuner Monster">Tuner Monster</option>
                    <option value="Union Effect Monster">Union Effect Monster</option>
                </optgroup>
                <optgroup label="Extra Deck Types">
                    <option value="Fusion Monster">Fusion Monster</option>
                    <option value="Link Monster">Link Monster</option>
                    <option value="Pendulum Effect Fusion Monster">Pendulum Effect Fusion Monster</option>
                    <option value="Synchro Monster">Synchro Monster</option>
                    <option value="Synchro Pendulum Effect Monster">Synchro Pendulum Effect Monster</option>
                    <option value="Synchro Tuner Monster">Synchro Tuner Monster</option>
                    <option value="XYZ Monster">XYZ Monster</option>
                    <option value="XYZ Pendulum Effect Monster">XYZ Pendulum Effect Monster</option>
                </optgroup>
                <optgroup label="Other Types">
                    <option value="Skill Card">Skill Card</option>
                    <option value="Token">Token</option>
                </optgroup>
            </select>
            <select {...register("attribute")}>
                <option value="" disabled selected hidden>Attribute</option>
                <option value="DARK">DARK</option>
                <option value="DIVINE">DIVINE</option>
                <option value="EARTH">EARTH</option>
                <option value="FIRE">FIRE</option>
                <option value="LIGHT">LIGHT</option>
                <option value="WATER">WATER</option>
                <option value="WIND">WIND</option>
            </select>
            <input type="text" placeholder="Race" {...register("race")}/>
            <input type="text" placeholder="Archetype" {...register("archetype")}/>
            <input type="number" placeholder="Attack" {...register("atk")}/>
            <input type="number" placeholder="Defense" {...register("def")}/>
            <input id = "submit-button" type="submit"/>
            <input id = "reset-button" type="reset"/>
            <input id = "submit-button" type="button" value = "Random Card" onClick={getRandomCard}/>
            <input id = "submit-button" type="button" value = "Random Deck" onClick={getRandomDeck}/>
        </form>
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
            <BsFillArrowLeftSquareFill size = "2rem" className = "arrow-icon" onClick = {previousCard}/>
            <BsFillArrowRightSquareFill size = "2rem" className = "arrow-icon" onClick = {nextCard}/>                
        </div>
        <div>
            <BsFillArrowLeftSquareFill size = "2rem" className = "arrow-icon" onClick = {previousImage}/>
            <BsFillArrowRightSquareFill size = "2rem" className = "arrow-icon" onClick = {nextImage}/>
        </div>
        <div>
            <div id="card_counter"></div>
        </div>
        <div>
            <div id="image_counter"></div>
        </div>
    </div>
    )
}