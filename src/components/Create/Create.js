import { useState } from "react"

export function Create({
    addGame
}) {

    const [value, setValue] = useState({
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        summary: ""
    });

    const onValueChange = (e) => {
        setValue(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addGame(value)
    }

    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
            <div className="container">

                <h1>Create Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" value={value.title} onChange={onValueChange} name="title" placeholder="Enter game title..." />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" value={value.category} onChange={onValueChange} name="category" placeholder="Enter game category..." />

                <label htmlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" value={value.maxLevel} onChange={onValueChange} name="maxLevel" min="1" placeholder="1" />

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" value={value.imageUrl} onChange={onValueChange} name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="summary">Summary:</label>
                <textarea value={value.summary} onChange={onValueChange} name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Create Game" />
            </div>
        </form>
    </section>
    )
}