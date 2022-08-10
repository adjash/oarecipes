import React from 'react'
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from "firebase/firestore";
import { db, storage } from '../firebase/config';

export default function list() {
    const [recipes, setRecipes] = useState([]);
    const searchParams = query(collection(db, "Recipes"));
    
    useEffect(() => {
      const doFetch = async() => {
        const querySnapshot = await getDocs(searchParams);
        
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          setRecipes(...recipes => [...recipes, doc.data()]);
          //setRecipes([...recipes, doc.data()]);
        });
        //console.log(querySnapshot)
      }
      doFetch().catch((err) => {
        console.log(err);
      })
    }, []);
  
    function handleClick() {
        console.log(recipes)
      }
  return (
    <div>
        
      <button onClick={handleClick}>show</button>
    </div>
  )
}
