
import React,{useState, useEffect} from "react";
import Recipe from "./Recipe";
import "./App.css";

function App (){
  const APP_ID = "54990704"
const APP_KEY ="81ab0eb2b1c8ec7184f1d952b3199612"

const [recipes, setRecipes] = useState([]);
const [search, setSearch]  =  useState("");
const [query, setQuery]    =  useState('chicken')

useEffect(()=>{
getRecipes();
}, [query]);
 
//const response = await fetch
//(` https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//const data = await response.json();
//setRecipes(data.hits)
const getRecipes = () =>{
fetch(` https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
.then(response =>{
 return response.json()
})
.then(data =>{
  return setRecipes(data.hits)
})
 
}
const updateSearch = e =>{
  setSearch(e.target.value)
}
const getSearch = e =>{
  e.preventDefault()
  setQuery(search)
  setSearch(" ")
}
  

return(
  <div className="App">
<form onSubmit={getSearch} className="search-form">
  <input  className="search-bar" value={search} 
  onChange={updateSearch} type="text"/>
  <button className="search-button"  type="submit">search</button>
</form>


<div  className ="recipe">
{recipes.map(recipe =>(

<Recipe 
key={recipe.recipe.calories}
title={recipe.recipe.label}
  calories={recipe.recipe.calories}
  image={recipe.recipe.image}
  ingredients={recipe.recipe.ingredients}/>

))}
</div>
  </div>
)
}
export default App