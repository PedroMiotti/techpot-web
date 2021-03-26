// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';

// Helper
import history from '../../helpers/history';
import { getCookie , deleteCookie } from '../../helpers/handleCookie';

// JWT
import jwt_decode from 'jwt-decode';

let hasToken = getCookie('_auth');
let infoUser;
if (hasToken != "") infoUser = jwt_decode(hasToken);

const slice = createSlice({
    name: "usuario",
    initialState: {
        loading: false,
        error: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        isLoggedIn: hasToken != "" ? true : false,
        id: hasToken != "" ? infoUser.u.id : '',
        token: '',
        profile: {},
        otherUserProfile: {}
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

        USER_PROFILE_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.profile = { u: action.payload.u };
        },

        USER_INFO_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.otherUserProfile = { u: action.payload.u };
        },

        USER_INFO_CLEANUP: (usuario, action) => {
            usuario.loading = false;
            usuario.otherUserProfile = {};
        },


        USER_LOGIN_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.isLoggedIn = true;

            localStorage.setItem("_auth", action.payload.token)

            setTimeout(() => {
                history.push("/");
                window.location.reload(true);
            }, 1000);

        },

        USER_LOGOUT: (usuario, action) => {
            usuario.isLoggedIn = false;
            usuario.profile = {};
            usuario.id = null;
            usuario.token = null;
            
            deleteCookie('_auth');
            localStorage.removeItem("_firstAccess")
            history.push("/")
        },

        USER_CREATED_SUCCESSFUL: (usuario, action) => {
            usuario.loading = false;
            usuario.success = true;
            usuario.isLoggedIn = true;
            usuario.successMessage = action.payload.message;
            usuario.token = action.payload.token;

            localStorage.setItem("_auth", usuario.token)
            localStorage.setItem("_firstAccess", true)

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
            console.log(action.payload)
            
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

export const { USER_REQUESTED, USER_FAILED, USER_PROFILE_SUCCESSFUL, USER_INFO_SUCCESSFUL, USER_INFO_CLEANUP, USER_LOGIN_SUCCESSFUL, USER_LOGOUT, USER_CREATED_SUCCESSFUL, USER_LIST_SUCCESSFUL, USER_EDITED_SUCCESSFUL, USER_DELETED_SUCCESSFUL, USER_EDIT_PROFILE_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = 'api/v1/user';

export const createUser = (nome, sobrenome, email, senha) => apiCallBegan({
    url: url + "/",
    headers: null,
    method: "post",
    data: { nome, sobrenome, email, senha },
    onStart: USER_REQUESTED.type,
    onSuccess: USER_CREATED_SUCCESSFUL.type,
    onError: USER_FAILED.type
});

export const userInfo = (id, self) => apiCallBegan({
    url: url + `/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: USER_REQUESTED.type,
    onSuccess: self ? USER_PROFILE_SUCCESSFUL.type : USER_INFO_SUCCESSFUL.type ,
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

export const editUser = (id, userInfo) => apiCallBegan({
    url: url + `/${ id }`,
    headers: authHeader(),
    method: "put",
    data:  userInfo ,
    onStart: USER_REQUESTED.type,
    onSuccess: USER_EDITED_SUCCESSFUL.type,
    onError: USER_FAILED.type
});

export const deleteUser = (id) => apiCallBegan({
    url: url + `/${ id }`,
    headers: authHeader(),
    method: "delete",
    data: null ,
    onStart: USER_REQUESTED.type,
    onSuccess: USER_DELETED_SUCCESSFUL.type,
    onError: USER_FAILED.type
})
