import {React, useState, useEffect} from 'react'
import {doc, setDoc, collection} from 'firebase/firestore';
import { db } from '../firebase/config';
import Recipe from '../firebase/model/recipe';

export default function add() {
    const [rTitle, setRTitle] = useState("");
    const [rTimings, setRTimings] = useState({preptime: 0, cookingtime: 0});
    const [rIngredients, setRIngredients] = useState([]);
    const [rSteps, setRSteps] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        if (!rTitle || !rTimings || !rIngredients || !rSteps) {
            alert('Please enter all required fields');
        }else {
            setDoc(doc(db, "Recipes/", rTitle), {
                name: rTitle,
                timings: rTimings,
                ingredients: rIngredients[1],
                steps: rSteps[1]
            });  
        }
        //Firestore doesn't support custom objects apparently, will come back to creating an object later.
        /*let newRecipe = new Recipe(rTitle, rTimings, rIngredients[1], rSteps[1]);*/
        
        return console.log("document uploaded")
    }
    function handleChange(e){
        switch(e.target.name){
            case "title":
                setRTitle(e.target.value);
            break;
            case "ingredients":
                let splitInputArray = e.target.value.split(/\r?\n/);
                setRIngredients([rIngredients, splitInputArray]);
            break;
            case "steps":
                let stepInputArray = e.target.value.split(/\r?\n/);
                setRSteps([rSteps, stepInputArray]);
            break;
            case "cooking time":
                setRTimings({...rTimings, cookingtime: e.target.value});
            break;
            case "preperation time":
                setRTimings({...rTimings, preptime: e.target.value});
            break;
        }
    }
    return (
    <section>
        <form onSubmit={handleSubmit}>
            <label>Name: <input name="title" type="text" placeholder='recipe title' onChange={handleChange} required/></label>
            <label>Ingredients: <textarea name="ingredients" placeholder='Enter new ingredients, 1 per line' cols="100" onChange={handleChange} required></textarea>
            </label>
            <label>Steps: <textarea name="steps" placeholder='Enter each step, 1 per line' cols="100" onChange={handleChange} required></textarea></label>
            <label>Cooking Time: <input name="cooking time" type="number" placeholder='in minutes' onChange={handleChange} required/></label>
            <label>Preperation Time: <input name="preperation time" type="number" placeholder='in minutes' onChange={handleChange}required/></label>
            <input type="submit" value="submit"/>
        </form>
    </section>
    )
}
