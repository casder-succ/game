import {INIT, CHANGE_CONTENT, CHANGE_LABEL, CHANGE_VIDEO, CHANGE_PHOTO, UNSET} from "../types/types";

const initialState = {
    fields: {
        id: "",
        label: "",
        content: "",
        photo: "",
        video: "",
    }
};



const editorFieldsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                fields: {
                    id: action.payload.id,
                    label: action.payload.label,
                    content: action.payload.content,
                    photo: action.payload.photo,
                    video: action.payload.video,
                }
            };

        case CHANGE_LABEL:
            return {
                fields: {
                    ...state.fields,
                    label: action.payload.label
                }
            };

        case CHANGE_CONTENT:
            return {
                fields: {
                    ...state.fields,
                    content: action.payload.content
                }
            };

        case CHANGE_PHOTO:
            return {
                fields: {
                    ...state.fields,
                    photo: action.payload.photo
                }
            };

        case CHANGE_VIDEO:
            return {
                fields: {
                    ...state.fields,
                    video: action.payload.video
                }
            };
        case UNSET:
            return {
                fields: {
                    id: "",
                    label: "",
                    content: "",
                    photo: "",
                    video: "",
                }
            }


        default:
            return state;
    }
}

export default editorFieldsReducer;