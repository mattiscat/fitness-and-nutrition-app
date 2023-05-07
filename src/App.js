import './App.css';
import {useState} from "react";
import { NewRecipeForm } from './newRecipeForm';
import axios from "axios";




function App() {
  const [recipes, setRecipes] = useState([]);

    function getRecipe(query) {
      const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`

      const config = {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      }

      axios.get(url, config).then((res) => {
        setRecipes(res.data);
        console.log({query});
      }).catch(error => {
          console.log(error);
      }) 

      return [
        {recipes} 
      ]
    }
  
  
  return ( 
    <>
      <NewRecipeForm onSearch={getRecipe}/> 

      <div className='results'>
        <ul>
          {recipes.map((recipe) => (
            <li>
              <h1>{recipe.title}</h1>
              <h3>{recipe.ingredients}</h3>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;


