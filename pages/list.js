import React from 'react'
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from "firebase/firestore";
import { db, storage } from '../firebase/config';

export default function list() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const doFetch = async() => {
        const searchParams = query(collection(db, "Recipes"));
        const querySnapshot = await getDocs(searchParams);
        return querySnapshot.docs.map((recipe) => recipe.data());
      }
      doFetch().then((recipe_data) => {
        setRecipes(recipe_data);
      }).catch((err) => {

        console.log(err);
      });
    }, []);
  
    function handleClick() {
      console.log(recipes)
    }
  return (
    <div>
      {(recipes.length > 0) ? recipes.map((recipe, idx) => (
        <div key={idx}>
          <a href={`recipe/${recipe.name.replaceAll(' ', '_')}`}><h2 >{recipe.name}</h2></a>
        </div>
      
      )) : <h2>Loading...</h2>}
    </div>
  )
}
