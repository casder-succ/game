import {parseElementContent} from "./parsing";
import {
    nodesMedia,
    currSet,
    currUnset,
    graphLabel,
    graphContent,
    graphContentUpdate, setDraggable, graphSetCurrent, graphUnsetCurrent, graphAddEdge, removeEdges, removeNodes
} from "../store/actionCreators";

export const onElementsRemove = (elementsToRemove, dispatch) => {
    dispatch(removeEdges(elementsToRemove.filter(el => el.startsWith('e'))));
    dispatch(removeNodes(elementsToRemove.filter(el => !el.startsWith('e'))));
};

export const onConnect = (edge, dispatch) => {
    dispatch(graphAddEdge({...edge, id: 'e' + edge.source + '-' + edge.target}));

    dispatch(graphContentUpdate(edge.source, edge.target)); //TODO: change reducer
};

export const onPaneClick = (dispatch) => {
    dispatch(currUnset());
    dispatch(graphUnsetCurrent()); //TODO: change reducer
};

export const onElementClick = (event, element, dispatch) => {
    event.preventDefault();

    if (!(element.id.startsWith("e"))) {
        dispatch(currSet(element));
        dispatch(graphSetCurrent(element.id)); //TODO: change reducer
    }
}

export const onElementEdit = (fields, node, currElem, dispatch) => {
    if (fields.photo !== currElem.data.media.photo || fields.video !== currElem.data.media.video) {
        dispatch(nodesMedia(currElem.id, fields.photo, fields.video)); //TODO: change reducer
    }

    if (fields.label !== currElem.data.label) {
        dispatch(graphLabel(currElem.id, fields.label)); //TODO: change reducer
    }

    if (fields.content && fields.content !== currElem.data.content) {
        dispatch(graphContent(currElem.id, fields.content)); //TODO: change reducer

        parseElementContent(currElem.id, fields.content, node, currElem.position.x, currElem.position.y)
            .forEach(el => dispatch(el));
    }

    dispatch(currUnset());
    dispatch(graphUnsetCurrent(currElem.id)); //TODO: change reducer
    document.getElementsByClassName('react-flow__pane')[0].click();
    dispatch(setDraggable());
}