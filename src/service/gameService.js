const baseUrl = "http://localhost:3030/data/games"

export const getAll = async () => {
    const result = await fetch(baseUrl);
    const res = await result.json();

    return res
}

export const getGameById = async (gameId) => {
    const result = await fetch(`${baseUrl}/${gameId}`);
    const res = await result.json();

    return res
}

export const create = async (data) => {
    const result = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const res = await result.json();
    return res;
}

export const edit = async (data, gameId) => {
    const result = await fetch(`${baseUrl}/${gameId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const res = await result.json();

    return res;
}