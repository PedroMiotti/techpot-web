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
        GROUP_CLEANUP: (grupo, action) => {
            grupo.loading = false;
            grupo.error = false;
            grupo.success = false;
            grupo.errorMessage = '';
            grupo.successMessage = '';
        },

        GROUP_FAILED: (grupo, action) => {
            grupo.loading = false;
            grupo.error = true;
            grupo.success = false;
            grupo.errorMessage = action.payload;
        },

        GROUP_INFO_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.groupInfo = { g: action.payload.g };

        },

        GROUP_CREATED_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.success = true;
            grupo.error = false;
            grupo.successMessage = action.payload.message;

        },

        GROUP_EDITED_SUCCESSFUL: (grupo, action) => {
            grupo.loading = false;
            grupo.success = true;
            grupo.error = false;
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
            grupo.groupList = action.payload;
        },


    }
});

export const { GROUP_REQUESTED, GROUP_CLEANUP, GROUP_FAILED, GROUP_INFO_SUCCESSFUL, GROUP_CREATED_SUCCESSFUL, GROUP_LIST_SUCCESSFUL, GROUP_EDITED_SUCCESSFUL, GROUP_DELETED_SUCCESSFUL, GROUP_LISTED_SUCCESSFUL } = slice.actions;

export default slice.reducer;

const url = '/api/v1/groups';

export const createGroup = (name, description, privacy_type, user_id) => apiCallBegan({
    url: url + "/",
    headers: authHeader(),
    method: "post",
    data: {name, description, privacy_type, user_id},
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_CREATED_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});

export const infoGroup = (id) => apiCallBegan({
    url: url + `/group/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_INFO_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});

export const listGroup = (id) => apiCallBegan({
    url: url + `/user/${id}`,
    headers: authHeader(),
    method: "get",
    onStart: GROUP_REQUESTED.type,
    onSuccess: GROUP_LISTED_SUCCESSFUL.type,
    onError: GROUP_FAILED.type
});


