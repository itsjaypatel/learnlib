export const baseUrl = "http://localhost:8080";

export const get = async (url,isAuthRequired,token) => {
    const headers = {}
    if(isAuthRequired){
        headers["Authorization"] = `Bearer ${token}`;
    }
    try {
        let response = await fetch(url, {
            method: "GET",
            headers: headers
        });
        return await response.json();
    } catch (err) {
        console.log(`Error from ${url}`);
    }
}

export const post = async (url,body,isAuthRequired,token) => {
    const headers = {}
    if(isAuthRequired){
        headers["Authorization"] = `Bearer ${token}`;
    }
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });
        return await response.json();
    } catch (err) {
        console.log(`Error from ${url}`);
    }
}