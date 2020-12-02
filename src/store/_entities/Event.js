// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';


const slice = createSlice({
    name: "evento",
    initialState: {
        loading: false,
        error: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        eventsList: [],
        categoriesList: [],
        typesList: [],
        info: [],
        inviteList: [],
        subscribeList: [],
    },

    reducers: {
        EVENT_REQUESTED: (evento) => {
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
            evento.eventsList = action.payload;
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
            evento.subscribeList = action.payload;
        },

        EVENT_LIST_INVITED_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.inviteList = action.payload;
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
            evento.info = action.payload;
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
        },

        EVENT_CATEGORY_LIST_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.categoriesList = action.payload;
        },

        EVENT_TYPES_LIST_SUCCESSFUL: (evento, action) =>{
            evento.loading = false;
            evento.success = true;
            evento.error = false;
            evento.typesList = action.payload;
        }




    }
})

export const { EVENT_REQUESTED, EVENT_FAILED, EVENT_INFO_SUCCESSFUL,  EVENT_CREATED_SUCCESSFUL, EVENT_DELETED_SUCCESSFUL, EVENT_LISTED_SUCCESSFUL, EVENT_UPDATED_SUCCESSFUL, EVENT_LIST_SUBSCRIBERS_SUCCESSFUL, EVENT_LIST_INVITED_SUCCESSFUL, EVENT_INVITE_SUCCESSFUL, EVENT_LIST_CATEGORY_SUCCESSFUL, EVENT_CONFIRM_INVITE_SUCCESSFUL, EVENT_CATEGORY_LIST_SUCCESSFUL, EVENT_TYPES_LIST_SUCCESSFUL} = slice.actions;



export default slice.reducer;

const url = '/evento';


export const createEvent = (nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim, tipoId, criador) => apiCallBegan({ 
    url: url + "/criar",
    headers: null,
    method: "post",
    data: {nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim, tipoId, criador},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_CREATED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});


export const deleteEvent = (id) => apiCallBegan({
    url: url + `/${id}`,
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


export const updateEvent = ( id, nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim, tipoId, criador) => apiCallBegan({ 
    url: url + "/atualizar",
    headers: null,
    method: "put",
    data: {id, nome, descricao, data_inicio, imagemUrl, categoriaId, data_fim, tipoId, criador},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_UPDATED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type,
});

/* export const listSubEvent = (id) => apiCallBegan({
    url: url + `/${id}/inscritos`,
    headers: null,
    method: "get",
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LIST_SUBSCRIBERS_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
}); */

export const listInvitedEvent = (id) => apiCallBegan({  
    url: url + `/${id}/convidados`,
    headers: null,
    method: "get",
    data: {id},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LIST_INVITED_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const inviteEvent = (id_evento, id_usuario) => apiCallBegan({
    url: url + `/${id_evento}/convidar/${id_usuario}`,
    headers: null,
    method: "post",
    data: {id_evento, id_usuario},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_INVITE_SUCCESSFUL.type,
    onError: EVENT_FAILED
});

export const infoEvent = (id) => apiCallBegan({ 
    url: url + `/${id}`,
    headers: null,
    method: "get",
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_INFO_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const listByCategoryEvent = (cat_id) => apiCallBegan({ 
    url: url + `/listar/${cat_id}`,
    headers: null,
    method: "get",
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_LIST_CATEGORY_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const confirmInviteEvent = (id_evento, id_usuario) => apiCallBegan({ 
    url: url + `/${id_evento}/aceitar-convite/${id_usuario}`,
    headers: null,
    method: "put",
    data: {id_evento, id_usuario},
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_CONFIRM_INVITE_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const listCategories = () => apiCallBegan({ 
    url: url + "/listar-categorias",
    headers: null,
    method: "get",
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_CATEGORY_LIST_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

export const listTypes = () => apiCallBegan({ 
    url: url + "/listar-tipos",
    headers: null,
    method: "get",
    onStart: EVENT_REQUESTED.type,
    onSuccess: EVENT_TYPES_LIST_SUCCESSFUL.type,
    onError: EVENT_FAILED.type
});

