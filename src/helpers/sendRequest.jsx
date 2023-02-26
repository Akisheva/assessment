const API = "https://frontend-case-api.sbdev.nl/api/";

export const sendRequest = async (url, requestOptions) => {
    return await fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log("error",error))
    }

export const getPosts = (currentPage, itemsPerPage) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
         headers: {
            'token': 'pj11daaQRz7zUIH56B9Z'
        },
      };
    return sendRequest(`${API}posts?page=${currentPage}&perPage=${itemsPerPage}&sortBy=title&sortDirection=asc&categoryId=2`, requestOptions)
}
    
export const sendPost = (requestBody) => sendRequest(`${API}posts`, {
    method:"POST",
    body: requestBody,
    redirect: 'follow',
    headers: {
        'token': 'pj11daaQRz7zUIH56B9Z',
    },})

export const getCategories = () =>
    sendRequest(`${API}categories`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'token': 'pj11daaQRz7zUIH56B9Z'
        },
    });