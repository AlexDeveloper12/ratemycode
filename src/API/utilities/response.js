export function handleResponse(response){
    if(response.results){
        return response.results;
    }
}

export function handleError(error){
    if(error.data){
        return error.data;
    }
    return error;
};