const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    Accept: "application/json",
    Authorization: token,
};

export const get = async (bookId) => {
    const data = (
        await (await fetch(`${api}/books/${bookId}`, { headers })).json()
    ).book;
    return data;
};

export const getAll = async () => {
    const data = (await (await fetch(`${api}/books`, { headers })).json())
        .books;
    return data;
};

export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: "PUT",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ shelf }),
    }).then((res) => res.json());

export const search = async (query, maxResults) => {
    const searchResults = (
        await (
            await fetch(`${api}/search`, {
                method: "POST",
                headers: {
                    ...headers,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, maxResults }),
            })
        ).json()
    ).books;
    const allResults = await getAll();
    if (searchResults.map) {
        const results = searchResults.map((r) => {
            const match = allResults.find((m) => m.id === r.id);
            if (match) r.shelf = match.shelf;
            return r;
        });

        return results;
    }
    return [];
};