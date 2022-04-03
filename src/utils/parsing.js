import {NodeFlow} from "./nodes";
import {
    addLink, addNode, removeEdgeLink, removePhLink
} from "../store/actionCreators";

const REG_FOR_NODES = /\[[[\sA-Za-z]+]]/gm;

export const parseElementContent = (oldId, content, node, x, y) => {
    const x_y = [{x: 180, y: 160}, {x: 250, y: 90}, {x: 240, y: -90}, {x: 150, y: -180}]

    const actions = [];
    const matches = [];
    let match;
    let firstMatch;

    while (true) {
        match = REG_FOR_NODES.exec(content)
        if (!match) break;
        if (!firstMatch) firstMatch = match.index;
        if (match[0] !== "[[]]") {
            matches.push(match[0].replace('[[', '').replace(']]', ''));
        }
    }

    const removedLinks = node.data.links.filter(link => !matches.includes(link.label));
    removedLinks.forEach(link => {
        actions.push(
            removePhLink(link.id, node.id),
            removeEdgeLink(link.id, node.id));
    })

    const newLinks = matches.filter(match => !node.data.links.find(link => link.label === match));
    newLinks.forEach((link, i) => {
        const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
        const label = link;

        const x_r = x + x_y[node.data.links.length ? node.data.links.length : i].x;
        const y_r = y + x_y[node.data.links.length ? node.data.links.length : i].y;

        const nodeToAdd = new NodeFlow(x_r, y_r, label, id);
        const newEdge = {
            id: `e${oldId}-${id}`, source: `${oldId}`, target: `${id}`
        };


        actions.push(
            addNode(nodeToAdd, newEdge),
            addLink(oldId, label, id)
        );
    })

    return actions;
}