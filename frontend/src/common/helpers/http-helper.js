const API_URL = 'http://localhost:3000'

export async function httpRequest(route, method, data = null) {
    const url = API_URL + route;
    const options = {
        method,
    };

    if (data){
        options.body = data;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json();
}