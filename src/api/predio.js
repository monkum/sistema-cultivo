import { basePath, apiVersion } from "./config";

export function createPredio(data) {
    const url = `${basePath}/apipredios`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(url, params).then(response => {
        console.log(response);
    })
}