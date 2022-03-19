import {INIT, UNSET, CHANGE_VIDEO, CHANGE_LABEL, CHANGE_PHOTO, CHANGE_CONTENT, SET_CURR, UNSET_CURR} from "./types";

export const fieldsInit = (fields) => (
    {
        type: INIT,
        payload: fields,
    }
);

export const fieldsLabel = (label) => (
    {
        type: CHANGE_LABEL,
        payload: { label }
    }
);

export const fieldsContent = (content) => (
    {
        type: CHANGE_CONTENT,
        payload: { content }
    }
);

export const fieldsPhoto = (photo) => (
    {
        type: CHANGE_PHOTO,
        payload: { photo }
    }
);

export const fieldsVideo = (video) => (
    {
        type: CHANGE_VIDEO,
        payload: { video }
    }
);

export const fieldsUnset = () => (
    {
        type: UNSET,
    }
);

export const currSet = (element) => (
    {
        type: SET_CURR,
        payload: element

    }
);

export const currUnset = () => (
    {
        type: UNSET_CURR,
    }
);