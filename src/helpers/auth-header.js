export function authHeader() {
    let token = localStorage.getItem('_auth');

    if (token) {
        return { 'authorization': token };
    } else {
        return {};
    }
}