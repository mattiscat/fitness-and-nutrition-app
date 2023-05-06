import { useState } from "react"

//accepts user search input and sets the query state
export function NewRecipeForm({ onSearch }) {
    const [query, setQuery] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        
        if (query === "") return

        onSearch(query)//prop that calls getRecipe function and accepts the search query as a parameter
        
        setQuery("") //clears input for easier rapid searching

    }

    return (
        //responsible for the setting of the query state
        <form onSubmit={handleSubmit}>
            <div className="search">
                <h1>Find A Recipe</h1>
                <input value={query} onChange={e => setQuery(e.target.value)} type="text" />
                <button className='searchBtn'>Find Recipe</button>
            </div>
        </form>
    )
}

