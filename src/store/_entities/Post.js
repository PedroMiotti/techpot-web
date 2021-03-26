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
        postsUserLiked: [],
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
            post.postListByUser = action.payload.listPosts;
            post.postsUserLiked = action.payload.postUserLikedParsed;
        },

        POST_LISTED_GROUP_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.error = false;
            post.postListByGroup = action.payload;
        },

        POST_LIKED_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.error = false;
        },

        
        POST_UNLIKED_SUCCESSFUL: (post, action) => {
            post.loading = false;
            post.error = false;
        },

    }
});

export const { POST_REQUESTED, POST_FAILED, POST_INFO_SUCCESSFUL, POST_CREATED_SUCCESSFUL, POST_LIST_SUCCESSFUL, POST_EDITED_SUCCESSFUL, POST_DELETED_SUCCESSFUL, POST_LISTED_USER_SUCCESSFUL, POST_LISTED_GROUP_SUCCESSFUL, POST_LIKED_SUCCESSFUL,POST_UNLIKED_SUCCESSFUL, } = slice.actions;

export default slice.reducer;

const url = '/api/v1/posts';

export const createPost = (post_body, post_body_html, user_id, group_id) => apiCallBegan({
    url: url + "/",
    headers: authHeader(),
    method: "post",
    data: { post_body, post_body_html, user_id, group_id },
    onStart: POST_REQUESTED.type,
    onSuccess: POST_CREATED_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

export const listPostByUser = (id) => apiCallBegan({
    url: url + `/feed/user/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_LISTED_USER_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

export const listPostByGroup = (id) => apiCallBegan({
    url: url + `/feed/group/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_LISTED_GROUP_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

// Not implemented yet
export const infoPost = (id) => apiCallBegan({
    url: url + `/info/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_INFO_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

// Not implemented yet
export const editPost = (id) => apiCallBegan({
    url: url + `/${id}`,
    headers: authHeader(),
    method: "put",
    data: {},
    onStart: POST_REQUESTED.type,
    onSuccess: POST_EDITED_SUCCESSFUL.type,
    onError: POST_FAILED.type
});

// Not implemented yet
export const deletePost = (id) => apiCallBegan({
    url: url + `/${id}`,
    headers: authHeader(),
    method: "delete",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_DELETED_SUCCESSFUL.type,
    onError: POST_FAILED.type
})

export const likePost = (user_id, post_id) => apiCallBegan({
    url: url + `/like/post/${post_id}/user/${user_id}`,
    headers: authHeader(),
    method: "post",
    data: {user_id, post_id},
    onStart: POST_REQUESTED.type,
    onSuccess: POST_LIKED_SUCCESSFUL.type,
    onError: POST_FAILED.type
});


export const unlikePost = (user_id, post_id) => apiCallBegan({
    url: url + `/unlike/post/${post_id}/user/${user_id}`,
    headers: authHeader(),
    method: "put",
    onStart: POST_REQUESTED.type,
    onSuccess: POST_UNLIKED_SUCCESSFUL.type,
    onError: POST_FAILED.type
});
