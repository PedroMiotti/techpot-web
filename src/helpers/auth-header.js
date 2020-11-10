export function authHeader() {
    let token = localStorage.getItem('jwt');

    if (token) {
        return { 'authorization': token };
    } else {
        return {};
    }
}