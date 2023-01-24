import React from 'react';
import {useForm} from 'react-hook-form';
import { json } from 'react-router-dom';


export default function Search(){
    const {register, handleSubmit, reset, setValue} = useForm()
    
    const onReset = async () => {
        document.getElementById("Card_Image").src="Yugioh_Card_Back.png"
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
    }

    const displayImage = async (data, index, image_index) => {
        document.getElementById("Card_Image").src=data['data'][index]['card_images'][image_index]['image_url']
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
            const data = await response.json()
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

    return(
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
            <input type="submit"/>
            <input type="reset"/>
        </form>
    )
}