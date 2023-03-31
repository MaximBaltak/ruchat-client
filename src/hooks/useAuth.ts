export const useAuth = () => {
    const accessToken: string| null = localStorage.getItem('access_token')
    return !!accessToken
}
