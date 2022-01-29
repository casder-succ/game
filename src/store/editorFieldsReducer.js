const initialState = {
    fields: {
        id: "",
        label: "",
        content: "",
    }
}

const editorFieldsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                fields: {
                    ...initialState.fields,
                    id: action.payload.id,
                    label: action.payload.label,
                    content: action.payload.content,
                }
            };
        case "CHANGE":
            return {
                ...state,
                fields: {
                    ...initialState.fields,
                    id: action.payload.id,
                    content: action.payload.content,
                    label: action.payload.label,
                }
            };
        default:
            return state;
    }
}

export default editorFieldsReducer;