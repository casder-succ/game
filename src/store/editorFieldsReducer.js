const initialState = {
    fields: {
        id: "",
        label: "",
        content: "",
        photo: "",
        video: "",
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
                    photo: action.payload.photo,
                    video: action.payload.video,
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
                    photo: action.payload.photo,
                    video: action.payload.video,
                }
            };
        default:
            return state;
    }
}

export default editorFieldsReducer;