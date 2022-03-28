import {
    INIT,
    UNSET,
    CHANGE_VIDEO,
    CHANGE_LABEL,
    CHANGE_PHOTO,
    CHANGE_CONTENT,
    SET_CURR,
    UNSET_CURR,
    REMOVE_ELEMENTS,
    NODES__CHANGE_MEDIA,
    UPDATE_CONTENT,
    ADD_ELEMENTS,
    SET_DRAG,
    UNSET_DRAG,
    ADD_LINK,
    REMOVE_LINK,
    REMOVE_BY_ID,
    EDGES__ADD_EDGE,
    EDGES__REMOVE_EDGES,
    NODES__REMOVE_NODES,
    NODES__SET_CURRENT, NODES__UNSET_CURRENT, NODES__CHANGE_LABEL, NODES__CHANGE_CONTENT
} from "./types";

export const fieldsInit = (fields) => (
    {
        type: INIT,
        payload: fields,
    }
);

export const fieldsLabel = (label) => (
    {
        type: CHANGE_LABEL,
        payload: {label}
    }
);

export const fieldsContent = (content) => (
    {
        type: CHANGE_CONTENT,
        payload: {content}
    }
);

export const fieldsPhoto = (photo) => (
    {
        type: CHANGE_PHOTO,
        payload: {photo}
    }
);

export const fieldsVideo = (video) => (
    {
        type: CHANGE_VIDEO,
        payload: {video}
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

export const graphRemove = (elements) => (
    {
        type: REMOVE_ELEMENTS,
        payload: elements,
    }
);

export const nodesMedia = (id, photo, video) => (
    {
        type: NODES__CHANGE_MEDIA,
        payload: {id, photo, video}
    }
);

export const nodesLabel = (id, label) => (
    {
        type: NODES__CHANGE_LABEL,
        payload: {id, label}
    }
);

export const nodesContent = (id, content) => (
    {
        type: NODES__CHANGE_CONTENT,
        payload: {id, content}
    }
);

export const graphContentUpdate = (id, content) => (
    {
        type: UPDATE_CONTENT,
        payload: {id, content}
    }
);

export const graphAddEls = (els) => (
    {
        type: ADD_ELEMENTS,
        payload: els,
    }
);

export const setDraggable = () => (
    {
        type: SET_DRAG,
    }
);

export const unsetDraggable = () => (
    {
        type: UNSET_DRAG,
    }
);

export const graphAddLink = (params) => (
    {
        type: ADD_LINK,
        payload: params,
    }
);

export const graphRemoveLink = (id) => (
    {
        type: REMOVE_LINK,
        payload: {
            id
        }
    }
);

export const graphSetCurrent = (id) => (
    {
        type: NODES__SET_CURRENT,
        payload: {
            id
        }
    }
);

export const graphUnsetCurrent = (id) => (
    {
        type: NODES__UNSET_CURRENT,
        payload: {
            id
        }
    }
);

export const graphRemoveById = (id) => (
    {
        type: REMOVE_BY_ID,
        payload: {
            id
        },
    }
);

export const graphAddEdge = (edge) => (
    {
        type: EDGES__ADD_EDGE,
        payload: edge,
    }
)

export const removeNodes = (nodes) => (
    {
        type: NODES__REMOVE_NODES,
        payload: nodes,
    }
);

export const removeEdges = (edges) => (
    {
        type: EDGES__REMOVE_EDGES,
        payload: edges,
    }
);

