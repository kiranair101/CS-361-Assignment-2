import React from 'react';
import {useForm} from 'react-hook-form';
import { json } from 'react-router-dom';


export default function Search(){
    const {register, handleSubmit, errors} = useForm()
    
    const onSubmit = async (formValues) => {
        console.log(formValues)
        
        let parameters = []
        let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?'

        for (const parameter in formValues){
            if(formValues[parameter] !== ''){
                url = url + `${parameter}=${formValues[parameter]}&`
            }
        }

        console.log(url)

        try{
            const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician')
            const data = await response.json()
            console.log(data)
        } catch(error){
            console.log(error)
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("name")}/>
            <input type="text" placeholder="Type" {...register("type")}/>
            <input type="text" placeholder="Race" {...register("race")}/>
            <input type="number" placeholder="Attack" {...register("atk")}/>
            <input type="number" placeholder="Defense" {...register("def")}/>
            <input type="number" placeholder="Level" {...register("lev")}/>
            <input type="submit"/>
        </form>
    )
}