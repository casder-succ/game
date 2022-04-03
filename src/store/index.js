import {combineReducers, createStore} from "redux";
import currElemReducer from "./currElemReducer";
import editorFieldsReducer from "./editorFieldsReducer";
import elementsReducer from "./elementsReducer";

const rootReducer = combineReducers({
    currElement: currElemReducer,
    elements: elementsReducer,
    editorFields: editorFieldsReducer,
})

const store = createStore(rootReducer);

export default store;