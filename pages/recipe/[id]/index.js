import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";

const Recipe = () => {
    const router = useRouter();
    const {id} = router.query;
    const [currentRecipe, setCurrentRecipe] = useState([]);
    

    useEffect(() => {
        console.log(id)
        const doFetch = async() => {
            if(id != "" || !id){
                console.log('id undefined')
                return;
            }
            else {
                const searchParams = doc(db, "Recipes", id.replaceAll("_", " "));
                const seachSnapshot = await getDoc(searchParams);
                return seachSnapshot.data()
            }
           
        }
        doFetch().then((recipe_data) => {
            setCurrentRecipe(recipe_data)
        }).catch((err) => {
    
            console.log(err);
        });
    },[]);
    return (
    <>
        <div>
            <h1>Post: {id}</h1>
            <strong>{JSON.stringify(currentRecipe)}</strong>
        </div>
    </>)
}
export default Recipe