import initialElements from './graphElements';

const initialState = {
    elements: initialElements
}

const elementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ELEMENTS":
            return {
                ...state,
                elements: [
                    ...state.elements,
                    ...action.payload,
                ],
            };
        case "REMOVE_ELEMENTS":
            const ids = action.payload.map((el) => el.id);
            return {
                ...state,
                elements: state.elements.filter((el) => !ids.includes(el.id))
            };
        case "CHANGE_LABEL":
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.label = action.payload.label;
                    }
                    return node;
                })
            };
        case "CHANGE_CONTENT":
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.content = action.payload.content;
                    }
                    return node;
                })
            };
        case "ADD_LINK":
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.links.push(action.payload.link);
                    }
                    return node;
                })
            };
        case "CHANGE_TITLE":
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.title = action.payload.title;
                    }
                    return node;
                })
            };
        case "UPDATE_CONTENT":
            return {
                ...state,
                elements: state.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.content += action.payload.content;
                    }
                    return node;
                })
            };
        default:
            return state;
    }
}

export default elementsReducer;