export const isAuth = () => {
    const accessToken: string| null = localStorage.getItem('access_token')
    console.log(!!accessToken)
    return !!accessToken
}
