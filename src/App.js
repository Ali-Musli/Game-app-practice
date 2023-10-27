import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";
import { Register } from "./components/Register/Register";
import { Edit } from "./components/Edit/Edit";
import { Details } from "./components/Details/Details";
import { Login } from "./components/Login/Login";
import { Create } from "./components/Create/Create";
import { useEffect, useState } from "react";

import * as gameService from "./service/gameService"


function App() {
    const navigate = useNavigate()
    const user = false;
    const [games, setGame] = useState([])

    useEffect(() => {
        gameService.getAll()
        .then(res => setGame(res));
    }, []);

    const addGame = (data) => {
        let res = gameService.create(data)
        console.log(res);

        // .then(res => setGame(state => ({...state, res})))
        // .then(navigate("catalog"))
    }

    const editGame = async (data, gameId) => {
        await gameService.edit(data, gameId);
        
        navigate("/catalog")
    }

    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog games={games} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<Create addGame={addGame} />} />
                    <Route path="/edit/:gameId" element={<Edit editGame={editGame} />} />
                    <Route path="/details/:gameId" element={<Details user={user} />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
