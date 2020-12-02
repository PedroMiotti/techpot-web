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
        groupInfo: {},
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
            grupo.groupInfo = { g: action.payload.g };

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

        GROUP_LISTED_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.error = false;
            grupo.success = true;
            grupo.groupList = action.payload;
        },


    }
});

export const { GROUP_REQUESTED, GROUP_FAILED, GROUP_INFO_SUCCESSFUL, GROUP_CREATED_SUCCESSFUL, GROUP_LIST_SUCCESSFUL, GROUP_EDITED_SUCCESSFUL, GROUP_DELETED_SUCCESSFUL, GROUP_LISTED_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = '/grupo';

export const createGroup = (nome, descricao, tipo_privacidade, user_id) => apiCallBegan({
    url: url + "/criar",
    headers: authHeader(),
    method: "post",
    data: { nome, descricao, tipo_privacidade, user_id },
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_CREATED_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});

export const infoGroup = (id) => apiCallBegan({
    url: url + `/info/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_INFO_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});

export const listGroup = (id) => apiCallBegan({
    url: url + `/listar/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_LISTED_SUCCESSFUL.type,
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
