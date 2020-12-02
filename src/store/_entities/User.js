// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';

// Helper
import history from '../../helpers/history'

// JWT
import jwt_decode from 'jwt-decode';


const hasToken = localStorage.getItem('_auth');
let infoUser;
if (hasToken) infoUser = jwt_decode(hasToken);


const slice = createSlice({
    name: "usuario",
    initialState: {
        loading: false,
        error: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        isLoggedIn: hasToken ? true : false,
        id: hasToken ? infoUser.u.id : '',
        token: '',
        perfil: {},
        firstAccess: false
    },

    reducers: {
        USER_REQUESTED: (usuario, action) => {
            usuario.loading = true;
            usuario.error = false;
            usuario.success = false;
            usuario.errorMessage = '';
            usuario.successMessage = '';
        },

        USER_FAILED: (usuario, action) => {
            usuario.loading = false;
            usuario.error = true;
            usuario.errorMessage = action.payload;
        },

        USER_INFO_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.perfil = { u: action.payload.u }; 

        },

        USER_LOGIN_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.isLoggedIn = true;
            usuario.firstAccess = false;

            localStorage.setItem("_auth", action.payload.token)
            
            setTimeout(() => {
                history.push("/");
                window.location.reload(true);
            }, 1000);

        },

        USER_LOGOUT: (usuario, action) => {
            usuario.isLoggedIn = false;
            usuario.perfil = {};
            usuario.id = null;
            usuario.token = null;
            usuario.firstAccess = false;

            localStorage.removeItem("_auth")
            history.push("/")
        },

        USER_CREATED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.success = true;
            usuario.isLoggedIn = true;
            usuario.successMessage = action.payload.message;
            usuario.token = action.payload.token;
            usuario.firstAccess = true;
            
            localStorage.setItem("_auth", usuario.token)
            
            // If it changes route in the middle of a reducer action it throws this error (TEMP FIX : Use setTimeout) --> Error: You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.
            setTimeout(() => {
                history.push("/");
                window.location.reload(true);
            }, 1000);
            
        },

        USER_EDITED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;
            usuario.token = action.payload.token;

            // Switch Tokens
            localStorage.removeItem("_auth")
            localStorage.setItem("_auth", usuario.token)

        },

        USER_DELETED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.error = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;

        },

        USER_EDIT_PROFILE_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.error = false;
            usuario.success = true;
            usuario.successMessage = action.payload.message;
        },

    }
});

export const { USER_REQUESTED, USER_FAILED, USER_INFO_SUCCESSFUL, USER_LOGIN_SUCCESSFUL, USER_LOGOUT ,USER_CREATED_SUCCESSFUL, USER_LIST_SUCCESSFUL, USER_EDITED_SUCCESSFUL, USER_DELETED_SUCCESSFUL, USER_EDIT_PROFILE_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = '/usuario';

export const createUser = (nome, sobrenome, email, senha ) => apiCallBegan({
    url: url + "/criar",
    headers: null,
    method: "post",
    data: { nome, sobrenome, email, senha  },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_CREATED_SUCCESSFUL.type,
    onError: USER_FAILED.type
});

export const userInfo = ( id ) => apiCallBegan({
    url: url + `/info/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: USER_REQUESTED.type,
    onSuccess: USER_INFO_SUCCESSFUL.type,
    onError: USER_FAILED.type
});

export const loginUser = (email, senha) => apiCallBegan({
    url: url + "/login",
    headers: null,
    method: "post",
    data: { email, senha },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_LOGIN_SUCCESSFUL.type,
    onError: USER_FAILED.type
});


export const editUser = (id, nome, sobrenome, bio, ocupacao, github, linkedin ) => apiCallBegan({
    url: url + "/editar",
    headers: authHeader(),
    method: "post",
    data: { id, nome, sobrenome, bio, ocupacao, github, linkedin },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_EDITED_SUCCESSFUL.type,
    onError: USER_FAILED.type
});

export const deleteUser = (id) => apiCallBegan({
    url: url + "/excluir",
    headers: authHeader(),
    method: "post",
    data: { id },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_DELETED_SUCCESSFUL.type,
    onError: USER_FAILED.type
})
