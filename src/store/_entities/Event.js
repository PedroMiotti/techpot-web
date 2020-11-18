// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';

// Helper
import history from '../../helpers/history'

const slice = createSlice({
    name: "evento",
    initialState: {
        loading: false,
        error: false,
        success: false,
        successMessage: '',
        errorMessage: '',

    },

    reducers: {
        EVENT_REQUESTED: (evento, action) => {
            evento.loading = true;
            evento.error = false;
            evento.success = false;
            evento.errorMessage = '';
            evento.successMessage = '';
        },

        EVENT_FAILED: (evento, action) => {
            evento.loading = false;
            evento.error = true;
            evento.errorMessage = action.payload;
        },

        EVENT_CREATED_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.successMessage = action.payload.message;
        },

        EVENT_DELETED_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.successMessage = action.payload.message;
        },

        EVENT_LISTED_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
        },

        EVENT_UPDATED_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.successMessage = action.payload.message;
        },

        EVENT_LIST_SUBSCRIBERS_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
        },

        EVENT_LIST_INVITED_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
        },

        EVENT_INVITE_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.successMessage = action.payload.message;
        },

        EVENT_INFO_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
        },

        EVENT_LIST_CATEGORY_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
        },

        EVENT_CONFIRM_INVITE_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.successMessage = action.payload.message;
        }


    }
})

export const { EVENT_REQUESTED,  EVENT_FAILED, EVENT_CREATED_SUCCESSFUL, EVENT_DELETED_SUCCESSFUL, EVENT_LISTED_SUCCESSFUL, EVENT_UPDATED_SUCCESSFUL, EVENT_LIST_SUBSCRIBERS_SUCCESSFUL, EVENT_LIST_INVITED_SUCCESSFUL, EVENT_INVITE_SUCCESSFUL, EVENT_INFO_SUCCESSFUL, EVENT_LIST_CATEGORY_SUCCESSFUL, EVENT_CONFIRM_INVITE_SUCCESSFUL } = slice.actions;


export default slice.reducer;

const url = '/evento';


export const createEvent = (nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim) => apiCallBegan({
    url: url + "/criar",
    headers: null,
    method: "post",
    data: {nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_CREATED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});


export const deleteEvent = (id) => apiCallBegan({
    url: url + "/excluir",
    headers: null,
    method: "delete",
    data: { id },
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_DELETED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});


export const listEvent = () => apiCallBegan({
    url: url + "/listar",
    headers: null,
    method: "get",
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LISTED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});


export const updateEvent = ( id, nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim ) => apiCallBegan({
    url: url + "/editar",
    headers: null,
    method: "put",
    data: {id, nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_UPDATED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type,
});

export const listSubscribersEvent = (id) => apiCallBegan({
    url: url + "/inscritos",
    headers: null,
    method: "get",
    data: {id},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LIST_SUBSCRIBERS_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const listInvitedEvent = (id) => apiCallBegan({
    url: url + "/convidados",
    headers: null,
    method: "get",
    data: {id},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LIST_INVITED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const inviteEvent = (id_evento, id_usuario) => apiCallBegan({
    url: url + "/convidar",
    headers: null,
    method: "post",
    data: {id_evento, id_usuario},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_INVITE_SUCCESSFUL.type,
    onError: EVENT_FAILED
});

export const infoEvent = (id) => apiCallBegan({
    url: url + "/info",
    headers: null,
    method: "get",
    data: {id},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_INFO_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const listByCategoryEvent = (cat_id) => apiCallBegan({
    url: url + "/listar/categoria",
    headers: null,
    method: "get",
    data: {cat_id},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LIST_CATEGORY_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const confirmInviteEvent = (id_evento, id_usuario) => apiCallBegan({
    url: url + "/aceitar-convite",
    headers: null,
    method: "put",
    data: {id_evento, id_usuario},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_CONFIRM_INVITE_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

