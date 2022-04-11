import {combineReducers, createStore} from "redux";
import editorFieldsReducer from "./fields/editorFieldsReducer";
import elementsReducer from "./elements/elementsReducer";

const rootReducer = combineReducers({
    elements: elementsReducer,
    editorFields: editorFieldsReducer,
})

const store = createStore(rootReducer);

export default store;