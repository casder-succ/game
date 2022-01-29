const initialState = {
    fields: {
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
                    label: action.payload.label,
                    content: action.payload.content,
                }
            };
        case "CHANGE_LABEL":
            return {
                ...state,
                fields: {
                    ...initialState.fields,
                    label: action.payload.label,
                }
            };
        case "CHANGE_CONTENT":
            return {
                ...state,
                fields: {
                    ...initialState.fields,
                    content: action.payload.content,
                }
            };
        default:
            return state;
    }
}

export default editorFieldsReducer;