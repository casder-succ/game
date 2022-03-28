import {parseElementContent} from "./parsing";
import {
    nodesMedia,
    currSet,
    currUnset,
    nodesLabel,
    nodesContent,
    nodesOnConnect, setDraggable, graphSetCurrent, graphUnsetCurrent, graphAddEdge, removeNodes
} from "../store/actionCreators";

export const onElementsRemove = (elementsToRemove, dispatch) => {
    // dispatch(removeEdges(elementsToRemove.filter(el => el.id.startsWith('e'))));
    dispatch(removeNodes(elementsToRemove.filter(el => !el.id.startsWith('e'))));

    //todo: maybe update content too
};

export const onConnect = (edge, dispatch) => {
    dispatch(graphAddEdge({...edge, id: 'e' + edge.source + '-' + edge.target}));

    dispatch(nodesOnConnect(edge.source, edge.target));
    document.getElementsByClassName('react-flow__pane')[0].click();

};

export const onPaneClick = (dispatch) => {
    dispatch(setDraggable());
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
        dispatch(nodesMedia(currElem.id, fields.photo, fields.video));
    }

    if (fields.label !== currElem.data.label) {
        dispatch(nodesLabel(currElem.id, fields.label));
    }

    if (fields.content && fields.content !== currElem.data.content) {
        dispatch(nodesContent(currElem.id, fields.content));

        parseElementContent(currElem.id, fields.content, node, currElem.position.x, currElem.position.y)
            .forEach(el => dispatch(el));
    }

    dispatch(currUnset());
    dispatch(graphUnsetCurrent(currElem.id));
}