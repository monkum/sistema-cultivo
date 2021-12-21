import { basePath } from "./config";

export function createCosecha(data) {
    const url = `${basePath}/api/cultivos`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result
    })
    .catch((err) => {
        return err.message;
    });
}

export function getCosechas() {
    const url = `${basePath}/api/cultivos`;
    var cosechas = [];

    const params = {
        method: "GET",
    };

    cosechas = fetch(url, params).then(response => response.json())
    .then(data => {return (data)})
    .catch(err => {
        return [];
    })

    return cosechas
}