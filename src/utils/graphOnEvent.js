import {parseElementContent} from "./parsing";
import {currSet, currUnset} from "../store/actionCreators";

export const onElementsRemove = (elementsToRemove, dispatch) => {
    dispatch({type: "REMOVE_ELEMENTS", payload: elementsToRemove});
};

export const onConnect = (params, dispatch) => {
    dispatch({type: "ADD_ELEMENTS", payload: [{...params, id: 'e' + params.source + '-' + params.target}]});
    dispatch({type: "UPDATE_CONTENT", payload: {id: params.source, content: params.target}});
};

export const onPaneClick = (dispatch) => {
    dispatch(currUnset());
};

export const onElementClick = (event, element, dispatch) => {
    event.preventDefault();

    if (!(element.id.startsWith("e"))) {
        dispatch(currSet(element));
    }
}

export const onElementEdit = (fields, node, currElem, dispatch) => {
    if (fields.photo !== currElem.data.media.photo || fields.video !== currElem.data.media.video) {
        dispatch({
            type: "CHANGE_MEDIA",
            payload: {
                id: currElem.id,
                photo: fields.photo,
                video: fields.video
            }
        });
    }

    if (fields.label !== currElem.data.label) {
        dispatch({
            type: "CHANGE_LABEL",
            payload: {
                id: currElem.id,
                label: fields.label
            }
        });
    }

    if (fields.content && fields.content !== currElem.data.content) {
        dispatch({type: "CHANGE_CONTENT", payload: {id: currElem.id, content: fields.content}});

        parseElementContent(currElem.id, fields.content, node, currElem.position.x, currElem.position.y)
            .forEach(el => dispatch(el));
    }

    dispatch(currUnset());
    document.getElementsByClassName('react-flow__pane')[0].click();
}