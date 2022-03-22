import {parseElementContent} from "./parsing";
import {
    graphMedia,
    currSet,
    currUnset,
    graphRemove,
    graphLabel,
    graphContent,
    graphContentUpdate, graphAddEls, setDraggable, graphSetCurrent, graphUnsetCurrent
} from "../store/actionCreators";

export const onElementsRemove = (elementsToRemove, dispatch) => {
    dispatch(graphRemove(elementsToRemove));
};

export const onConnect = (params, dispatch) => {
    dispatch(graphAddEls([{...params, id: 'e' + params.source + '-' + params.target}]))
    dispatch(graphContentUpdate(params.source, params.target));
};

export const onPaneClick = (dispatch) => {
    dispatch(currUnset());
    dispatch(graphUnsetCurrent());
};

export const onElementClick = (event, element, dispatch) => {
    event.preventDefault();

    if (!(element.id.startsWith("e"))) {
        dispatch(currSet(element));
        dispatch(graphSetCurrent(element.id));
    }
}

export const onElementEdit = (fields, node, currElem, dispatch) => {
    if (fields.photo !== currElem.data.media.photo || fields.video !== currElem.data.media.video) {
        dispatch(graphMedia(currElem.id, fields.photo, fields.video));
    }

    if (fields.label !== currElem.data.label) {
        dispatch(graphLabel(currElem.id, fields.label));
    }

    if (fields.content && fields.content !== currElem.data.content) {
        dispatch(graphContent(currElem.id, fields.content));

        parseElementContent(currElem.id, fields.content, node, currElem.position.x, currElem.position.y)
            .forEach(el => dispatch(el));
    }

    dispatch(currUnset());
    dispatch(graphUnsetCurrent(currElem.id));
    document.getElementsByClassName('react-flow__pane')[0].click();
    dispatch(setDraggable());
}