import { useState } from "react"


export function NewRecipeForm({ onSearch }) {
    const [query, setQuery] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        
        if (query === "") return

        onSearch(query)
        
        setQuery("") 

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search">
                <h1>Find A Recipe</h1>
                <input value={query} onChange={e => setQuery(e.target.value)} type="text" />
                <button className='searchBtn'>Find Recipe</button>
            </div>
        </form>
    )
}

