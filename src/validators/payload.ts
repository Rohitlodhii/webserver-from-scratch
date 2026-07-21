

type HttpMethod = 'GET' | 'POST';



export function isValidMethod( method : unknown ) : method is HttpMethod {
    return method === 'GET' || method === 'POST';
}