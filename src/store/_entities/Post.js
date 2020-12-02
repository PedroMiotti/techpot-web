// Redux
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

// Helpers
import { authHeader } from '../../helpers/auth-header';


const slice = createSlice({
    name: "post",
    initialState: {
        loading: false,
        error: false,
        success: false,
        successMessage: '',
        errorMessage: '',
        postListByUser: [],
        postListByGroup: [],
        postInfo: {},
    },

    reducers: {
        POST_REQUESTED: (post, action) => {
            post.loading = true;
            post.error = false;
            post.success = false;
            post.errorMessage = '';
            post.successMessage = '';
        },

        POST_FAILED: (post, action) => {
            post.loading = false;
            post.error = true;
            post.errorMessage = action.payload;
        },

        POST_INFO_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.groupInfo = { g: action.payload.g };

        },

        POST_CREATED_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.success = true;
            post.successMessage = action.payload.message;

        },

        POST_EDITED_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.success = true;
            post.successMessage = action.payload.message;

        },

        POST_DELETED_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.error = false;
            post.success = true;
            post.successMessage = action.payload.message;

        },

        POST_LISTED_USER_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.error = false;
            post.success = true;
            post.postListByUser = action.payload;
        },

        POST_LISTED_GROUP_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.error = false;
            post.success = true;
            post.postListByGroup = action.payload;
        },


    }
});

export const { POST_REQUESTED, POST_FAILED, POST_INFO_SUCCESSFUL, POST_CREATED_SUCCESSFUL, POST_LIST_SUCCESSFUL, POST_EDITED_SUCCESSFUL, POST_DELETED_SUCCESSFUL, POST_LISTED_USER_SUCCESSFUL, POST_LISTED_GROUP_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = '/post';

export const createPost = (post_body, post_body_html, user_id, group_id) => apiCallBegan({
    url: url + "/criar",
    headers: authHeader(),
    method: "post",
    data: { post_body, post_body_html, user_id, group_id },
    onStart: POST_REQUESTED.type,
    onSuccess: POST_CREATED_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

export const listPostByUser = (id) => apiCallBegan({
    url: url + `/feed/listar/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_LISTED_USER_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

export const listPostByGroup = (id) => apiCallBegan({
    url: url + `/feed/grupo/listar/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_LISTED_GROUP_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

export const infoPost = (id) => apiCallBegan({
    url: url + `/info/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_INFO_SUCCESSFUL.type,
    onError: POST_FAILED.type
});



export const editPost = (id, nome, sobrenome, bio, ocupacao, github, linkedin) => apiCallBegan({
    url: url + "/editar",
    headers: authHeader(),
    method: "post",
    data: { id, nome, sobrenome, bio, ocupacao, github, linkedin },
    onStart: POST_REQUESTED.type,
    onSuccess: POST_EDITED_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

export const deletePost = (id) => apiCallBegan({
    url: url + "/excluir",
    headers: authHeader(),
    method: "post",
    data: { id },
    onStart: POST_REQUESTED.type,
    onSuccess: POST_DELETED_SUCCESSFUL.type,
    onError: POST_FAILED.type
})
