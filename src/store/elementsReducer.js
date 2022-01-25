import initialElements from './graphElements';

const initialState = {
    elements: initialElements
}

const elementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NODE":
            break;
        case "ADD_EDGE":
            return {
                ...state,
                elements: [
                    ...state.elements,
                    action.payload,
                ],
            };
            break;
        case "CHANGE_LABEL":
            break;
        case "CHANGE_CONTENT":
            break;
        default:
            return state;
    }
}

export default elementsReducer;