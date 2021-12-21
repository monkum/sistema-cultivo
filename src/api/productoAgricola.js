import { basePath } from "./config";

export function createProductoAgricola(data) {
    const url = `${basePath}/api/productos`;

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

export function getProductos() {
    const url = `${basePath}/api/productos`;
    var productos = [];

    const params = {
        method: "GET",
    };

    productos = fetch(url, params).then(response => response.json())
    .then(data => {return (data)})
    .catch(err => {
        return [];
    })

    return productos
}