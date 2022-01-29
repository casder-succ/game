import {combineReducers, createStore} from "redux";
import elementsReducer from "./elementsReducer";
import currElemReducer from "./currElemReducer";
import editorFieldsReducer from "./editorFieldsReducer";

const rootReducer = combineReducers({
    currElement: currElemReducer,
    elements: elementsReducer,
    editorFields: editorFieldsReducer,
})

const store = createStore(rootReducer);

export default store;