import { basePath } from "./config";

export function createPredio(data) {
    const url = `${basePath}/api/predios`;
    console.log(JSON.stringify(data));
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
        if (result.user) {
            return result;
        }
        return result.message;
    })
    .catch((err) => {
        return err.message;
    });
}

export function getPredios() {
    const url = `${basePath}/api/predios`;
    var predios = [];

    const params = {
        method: "GET",
    };

    predios = fetch(url, params).then(response => response.json())
    .then(data => {return (data)})
    .catch(err => {
        return [];
    })

    return predios
}

export function updatePredios() {
    const url = `${basePath}/api/predios`;
    var predios = [];

    const params = {
        method: "GET",
    };

    predios = fetch(url, params).then(response => response.json())
    .then(data => {return (data)})
    .catch(err => {
        return [];
    })

    return predios
}