// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';


const slice = createSlice({
    name: "grupo",
    initialState: {
        loading: false,
        error: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        groupList: [],
    },

    reducers: {
        GROUP_REQUESTED: (grupo, action) => {
            grupo.loading = true;
            grupo.error = false;
            grupo.success = false;
            grupo.errorMessage = '';
            grupo.successMessage = '';
        },

        GROUP_FAILED: (grupo, action) => {
            grupo.loading = false;
            grupo.error = true;
            grupo.errorMessage = action.payload;
        },

        GROUP_INFO_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.perfil = { u: action.payload.u };

        },

        GROUP_CREATED_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.success = true;
            grupo.successMessage = action.payload.message;

        },

        GROUP_EDITED_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.success = true;
            grupo.successMessage = action.payload.message;

        },

        GROUP_DELETED_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.error = false;
            grupo.success = true;
            grupo.successMessage = action.payload.message;

        },


    }
});

export const { GROUP_REQUESTED, GROUP_FAILED, GROUP_INFO_SUCCESSFUL, GROUP_CREATED_SUCCESSFUL, GROUP_LIST_SUCCESSFUL, GROUP_EDITED_SUCCESSFUL, GROUP_DELETED_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = '/grupo';

export const createGroup = (nome, descricao, tipo_privacidade) => apiCallBegan({
    url: url + "/criar",
    headers: authHeader(),
    method: "post",
    data: { nome, descricao, tipo_privacidade },
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_CREATED_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});

export const userInfo = (id) => apiCallBegan({
    url: url + `/info/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_INFO_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});


export const editUser = (id, nome, sobrenome, bio, ocupacao, github, linkedin) => apiCallBegan({
    url: url + "/editar",
    headers: authHeader(),
    method: "post",
    data: { id, nome, sobrenome, bio, ocupacao, github, linkedin },
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_EDITED_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});

export const deleteUser = (id) => apiCallBegan({
    url: url + "/excluir",
    headers: authHeader(),
    method: "post",
    data: { id },
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_DELETED_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
})
