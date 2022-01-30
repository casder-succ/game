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
                elements: initialState.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.label = action.payload.label;
                    }
                    return node;
                })
            };
        case "CHANGE_CONTENT":
            return {
                ...state,
                elements: initialState.elements.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.content = action.payload.content;
                    }
                    return node;
                })
            };
        default:
            return state;
    }
}

export default elementsReducer;