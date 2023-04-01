import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authFormState} from "./types";
import {listForm, typeForm} from "../../../types/typeForm";
import {statusInput} from "../../../types/statusInput";
import {RootState, store} from "../../index";
import {api} from "../../../api";
import {LoginUser} from "../../../types/loginUser";
import {addUser} from "../user/user.slice";
import {ExecException} from "child_process";

const initialState : authFormState = {
    typeForm: typeForm.Registration,
    error: '',
    submitDisabled: true,
    inputName: {
        id: listForm.Name,
        status: statusInput.Normal,
        value: ''
    },
    inputPassword: {
        id: listForm.Password,
        status: statusInput.Normal,
        value: ''
    },
    inputEmail: {
        id: listForm.Email,
        status: statusInput.Normal,
        value: ''
    }
}
export const registrationThunkRequest = createAsyncThunk(
    'auth/registrationThunkRequest',
    async (file: Blob | '' , {getState,rejectWithValue,dispatch}) => {
        const {auth} = getState() as RootState
        const formData  = new FormData()
        formData.append('file',file)
        formData.append('userName',auth.inputName.value)
        formData.append('password',auth.inputPassword.value)
        formData.append('email',auth.inputEmail.value)
        try {
            const {data} = await api.auth.registration(formData)
            dispatch(addUser({user: data?.user}))
            return data
        } catch (e: any) {
            return rejectWithValue(e.response?.data)
        }
    }
)
export const loginThunkRequest = createAsyncThunk(
    'auth/loginThunkRequest',
    async (_, {getState,rejectWithValue,dispatch}) => {
        const {auth} = getState() as RootState
        const payload: LoginUser = {
            password: auth.inputPassword.value,
            email: auth.inputEmail.value
        }
        try {
            const {data} =  await api.auth.login(payload)
            dispatch(addUser({user: data?.user}))
            return data
        } catch (e: any) {
            return rejectWithValue(e.response?.data)
        }
    }
)
 const AuthFormSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleForm (state, action: PayloadAction<{type: typeForm}>) {
            state.typeForm = action.payload.type
        },
        changeUserName (state, action: PayloadAction<{value: string}>) {
            const name: string = action.payload.value
            if (name.length === 0) {
                state.inputName.status = statusInput.Error
                state.submitDisabled = true
            }
            if (name.length > 30) {
                state.inputName.status = statusInput.Error
                state.submitDisabled = true
            }
            if (name.length >= 1 && name.length <= 30) {
                state.inputName.status = statusInput.Rigth
                state.submitDisabled = false
            }
            state.inputName.value = name
        },
        changePassword (state, action: PayloadAction<{value: string}>) {
            const regExp: RegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
            const password: string = action.payload.value
            if (regExp.test(password)) {
                state.inputPassword.status = statusInput.Rigth
                state.submitDisabled = true
            } else {
                state.inputPassword.status = statusInput.Error
                state.submitDisabled = false
            }
            state.inputPassword.value = password
        },
        changeEmail (state, action: PayloadAction<{value: string}>) {
            const regExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const email: string = action.payload.value
            if (regExp.test(email)) {
                state.inputEmail.status = statusInput.Rigth
                state.submitDisabled = true
            } else {
                state.inputEmail.status = statusInput.Error
                state.submitDisabled = false
            }
            state.inputEmail.value = email
        }
    },
     extraReducers: (builder) => {
        builder.addCase(registrationThunkRequest.fulfilled, (state,action) => {
            localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken))
            localStorage.setItem('refresh_token',JSON.stringify(action.payload.accessToken))
            state.error = ''
            state.inputName.value = ''
            state.inputName.status = statusInput.Normal
            state.inputPassword.value = ''
            state.inputPassword.status = statusInput.Normal
            state.inputEmail.value = ''
            state.inputEmail.status = statusInput.Normal

        })
         builder.addCase(registrationThunkRequest.rejected, (state,action:any) => {
             state.error = action.payload.message
             state.inputName.value = ''
             state.inputName.status = statusInput.Normal
             state.inputPassword.value = ''
             state.inputPassword.status = statusInput.Normal
             state.inputEmail.value = ''
             state.inputEmail.status = statusInput.Normal
             state.submitDisabled = true
         })
         builder.addCase(loginThunkRequest.fulfilled, (state,action) => {
             localStorage.setItem('access_token',JSON.stringify(action.payload.accessToken))
             localStorage.setItem('refresh_token',JSON.stringify(action.payload.refreshToken))
             state.error = ''
             state.inputName.value = ''
             state.inputName.status = statusInput.Normal
             state.inputPassword.value = ''
             state.inputPassword.status = statusInput.Normal
             state.inputEmail.value = ''
             state.inputEmail.status = statusInput.Normal
             state.submitDisabled = true
         })
         builder.addCase(loginThunkRequest.rejected, (state,action: any) => {
             state.error = action.payload.message
             state.inputName.value = ''
             state.inputName.status = statusInput.Normal
             state.inputPassword.value = ''
             state.inputPassword.status = statusInput.Normal
             state.inputEmail.value = ''
             state.inputEmail.status = statusInput.Normal
             state.submitDisabled = true
         })
     }
 })
 export const {
    toggleForm,
    changeUserName,
    changePassword,
    changeEmail,
} = AuthFormSlice.actions
 export default AuthFormSlice.reducer
