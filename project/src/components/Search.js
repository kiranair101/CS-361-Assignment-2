import React from 'react';
import {useForm} from 'react-hook-form';


export default function Search(){
    const {register, handleSubmit, errors} = useForm()
    
    const onSubmit = (formValues) => {
        console.log(formValues)
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