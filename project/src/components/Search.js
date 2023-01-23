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

    const onSubmit = async (formValues) => {
        console.log(formValues)

        let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?'
        for (const parameter in formValues){
            if(formValues[parameter] !== ''){
                url = url + `${parameter}=${formValues[parameter]}&`
            }
        }
        console.log(url)
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data['data'][0]['card_images'][0]['image_url'])
            document.getElementById("Card_Image").src=data['data'][0]['card_images'][0]['image_url']
            console.log(data)
            setValue("name", data['data'][0]['name'])
            setValue("type", data['data'][0]['type'])
            setValue("race", data['data'][0]['race'])
            setValue("atk", data['data'][0]['atk'])
            setValue("def", data['data'][0]['def'])
            setValue("level", data['data'][0]['level'])
            setValue("attribute", data['data'][0]['attribute'])
            setValue("archetype", data['data'][0]['archetype'])
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
            <input type="text" placeholder="Type" {...register("type")}/>
            <input type="text" placeholder="Attribute" {...register("attribute")}/>
            <input type="text" placeholder="Race" {...register("race")}/>
            <input type="text" placeholder="Archetype" {...register("archetype")}/>
            <input type="number" placeholder="Attack" {...register("atk")}/>
            <input type="number" placeholder="Defense" {...register("def")}/>
            <input type="submit"/>
            <input type="reset"/>
        </form>
    )
}