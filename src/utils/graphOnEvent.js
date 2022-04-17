import {parseElementContent} from "./parsing";
import {
    nodesMedia,
    nodesLabel,
    nodesContent,
    nodesOnConnect, graphAddEdge, toggleCurrent
} from "../store/types/actionCreators";

export const onConnect = (edge, dispatch) => {
    dispatch(graphAddEdge({...edge, id: 'e' + edge.source + '-' + edge.target}));
    dispatch(nodesOnConnect(edge.source, edge.target));
};

export const onPaneClick = (dispatch) => {
    dispatch(toggleCurrent());
};

export const onElementClick = (event, element, dispatch) => {
    event.preventDefault();

    if (!(element.id.startsWith("e"))) {
        dispatch(toggleCurrent(element));
    }
}

export const onElementEdit = (fields, node, currElem, dispatch) => {
    if (fields.photo !== currElem.data.media.photo || fields.video !== currElem.data.media.video) {
        dispatch(nodesMedia(currElem.id, fields.photo, fields.video));
    }

    if (fields.label !== currElem.data.label) {
        dispatch(nodesLabel(currElem.id, fields.label));
    }

    if (fields.content !== currElem.data.content) {
        dispatch(nodesContent(currElem.id, fields.content));

        parseElementContent(fields.content, node, currElem.position.x, currElem.position.y)
            .forEach(el => dispatch(el));
    }

    dispatch(toggleCurrent());
}