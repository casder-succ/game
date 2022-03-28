import initialElements from './graphElements';
import {
    EDGES__ADD_EDGE, EDGES__ADD_EDGES, EDGES__REMOVE_EDGE, EDGES__REMOVE_EDGES,
} from "./types";

const initialState = {
    edges: initialElements.edges,
}

const edgesReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDGES__ADD_EDGES:
            return {
                edges: [
                    ...state.edges,
                    ...action.payload,
                ],
            };
        case EDGES__ADD_EDGE:
            return {
                edges: [
                    ...state.edges,
                    action.payload
                ]
            }
        case EDGES__REMOVE_EDGE:
            return {
                edges: [
                    ...state.edges.filter(edge => edge.id !== action.payload.id),
                ],
            };

        case EDGES__REMOVE_EDGES:
            const idList = action.payload.map(el => el.id);
            return {
                edges: [
                    ...state.edges.filter(edge => !idList.find(id => id === edge.id)),
                ],
            };
        // case REMOVE_ELEMENTS:
        //     const ids = action.payload.map((el) => el.id);
        //     return {
        //         ...state,
        //         elements: state.elements
        //             .filter((el) => !ids.includes(el.id))
        //             .filter((el) => !(el.id.endsWith(action.payload[0].id) || el.id.startsWith(`e${action.payload[0].id}`)))
        //     };
        // case REMOVE_BY_ID:
        //     return {
        //         ...state,
        //         elements: state.elements
        //             .filter((el) => {
        //                     if ('' + el.id === '' + action.payload.id) {
        //                         return false;
        //                     }
        //
        //                     return ((!(el.id.startsWith(`e`) && (el.id.endsWith('' + action.payload.id) || el.id.startsWith(action.payload.id)))));
        //
        //                 }
        //             )
        //     };
        // case CHANGE_LABEL:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             if (node.id === action.payload.id) {
        //                 node.data.label = action.payload.label;
        //             }
        //             return node;
        //         })
        //     };
        // case CHANGE_MEDIA:

        // case CHANGE_CONTENT:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             if (node.id === action.payload.id) {
        //                 node.data.content = action.payload.content;
        //             }
        //             return node;
        //         })
        //     };
        // case ADD_LINK:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             let content;
        //             state.elements.forEach(el => {
        //                 if (el.id === action.payload.link) {
        //                     content = el.data.label;
        //                 }
        //             })
        //             if (node.id === action.payload.id) {
        //                 node.data.links.push({id: action.payload.id, label: content});
        //             }
        //             return node;
        //         })
        //     };
        // case CHANGE_TITLE:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             if (node.id === action.payload.id) {
        //                 node.data.title = action.payload.title;
        //             }
        //             return node;
        //         })
        //     };
        // case UPDATE_CONTENT:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             let content;
        //             state.elements.forEach(el => {
        //                 if (el.id === action.payload.content) {
        //                     content = el.data.label || `id: ${el.id}`;
        //                 }
        //             })
        //
        //             if (node.id === action.payload.id) {
        //                 node.data.links.push({id: action.payload.id, label: content});
        //                 node.data.content += `[[${content}]]`;
        //             }
        //             return node;
        //         })
        //     };
        // case REMOVE_LINK:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             let link;
        //             if (node.data && (link = node.data.links.find(link => ('' + link.id === '' + action.payload.id)))) {
        //                 node.data.links = node.data.links.filter(link => !('' + link.id === '' + action.payload.id));
        //                 const tmp = node.data.content.split(link.label);
        //                 node.data.content = tmp[0].substring(0, -2) + tmp[1].substring(2);
        //             }
        //
        //             return node;
        //         })
        //     };
        // case SET_CURRENT_A:
        //     return {
        //         ...state,
        //         elements: state.elements
        //             .map((node) => {
        //                 if (node.data) {
        //                     node.data.isActive = false;
        //                 }
        //                 return node;
        //             })
        //             .map((node) => {
        //                 if (node.id === action.payload.id) {
        //                     node.data.isActive = true;
        //                 }
        //                 return node;
        //             })
        //     };
        // case UNSET_CURRENT_A:
        //     return {
        //         ...state,
        //         elements: state.elements.map((node) => {
        //             if (node.data) {
        //                 node.data.isActive = false;
        //             }
        //             return node;
        //         })
        //     }
        default:
            return state;
    }
}

export default edgesReducer;