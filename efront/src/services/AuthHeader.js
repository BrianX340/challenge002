export const authHeader = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return { 'access-token': token };
    } else {
        return {};
    }
}