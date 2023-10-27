import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../service/gameService"

export function Edit({
    editGame
}) {
    const [game, setgame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getGameById(gameId)
        .then(res => setgame(res));

    }, [gameId]);

    const onClickEvent = (e) => {
        setgame(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        editGame(game, gameId);
    }   
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" value={game.title} onChange={onClickEvent} name="title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" value={game.category} onChange={onClickEvent} name="category" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" value={game.maxLevel} onChange={onClickEvent} name="maxLevel" min="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" value={game.imageUrl} onChange={onClickEvent} name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={game.summary} onChange={onClickEvent} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}