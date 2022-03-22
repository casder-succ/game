import initialElements from './graphElements';
import {
    ADD_ELEMENTS,
    ADD_LINK,
    CHANGE_CONTENT,
    CHANGE_LABEL,
    CHANGE_MEDIA,
    CHANGE_TITLE,
    REMOVE_ELEMENTS, REMOVE_LINK, SET_CURRENT_A, UNSET_CURRENT_A,
    UPDATE_CONTENT
} from "./types";

const initialState = {
    elements: initialElements
}

const elementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ELEMENTS:
            return {
                ...state,
                elements: [
                    ...state.elements,
                    ...action.payload,
                ],
            };
        case REMOVE_ELEMENTS:
            const ids = action.payload.map((el) => el.id);
            return {
                ...state,
                elements: state.elements.filter((el) => !ids.includes(el.id))
            };
        case CHANGE_LABEL:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.label = action.payload.label;
                    }
                    return node;
                })
            };
        case CHANGE_MEDIA:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.media.video = action.payload.video;
                        node.data.media.photo = action.payload.photo;
                    }
                    return node;
                })
            };
        case CHANGE_CONTENT:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.content = action.payload.content;
                    }
                    return node;
                })
            };
        case ADD_LINK:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    let content;
                    state.elements.forEach(el => {
                        if (el.id === action.payload.link) {
                            content = el.data.label;
                        }
                    })
                    if (node.id === action.payload.id) {
                        node.data.links.push({id: action.payload.id, label: content});
                    }
                    return node;
                })
            };
        case CHANGE_TITLE:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.title = action.payload.title;
                    }
                    return node;
                })
            };
        case UPDATE_CONTENT:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    let content;
                    state.elements.forEach(el => {
                        if (el.id === action.payload.content) {
                            content = el.data.label || `id: ${el.id}`;
                        }
                    })

                    if (node.id === action.payload.id) {
                        node.data.links.push({id: action.payload.id, label: content});
                        node.data.content += `[[${content}]]`;
                    }
                    return node;
                })
            };
        case REMOVE_LINK:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    node.data.links = node.data.links.filter(link => !(link.id === action.payload.id));
                    return node;
                })
            };
        case SET_CURRENT_A:
            return {
                ...state,
                elements: state.elements
                    .map((node) => {
                        if (node.data) {
                            node.data.isActive = false;
                        }
                        return node;
                    })
                    .map((node) => {
                        if (node.id === action.payload.id) {
                            node.data.isActive = true;
                        }
                        return node;
                    })
            };
        case UNSET_CURRENT_A:
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.data) {
                        node.data.isActive = false;
                    }
                    return node;
                })
            }
        default:
            return state;
    }
}

export default elementsReducer;