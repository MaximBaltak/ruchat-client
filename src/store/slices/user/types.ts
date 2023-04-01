export interface CurrentUser {
    id: number,
    userName: string,
    avatar: string | null,
    isConfirmEmail: boolean
}

export interface UserState {
        auth: boolean
        user: CurrentUser | null
}
