import {NodeFlow} from "./nodes";
import {graphAddEls, graphAddLink} from "../store/actionCreators";

const REG_FOR_NODES = /\[[[\sA-Za-z]+]]/gm;

export const parseElementContent = (oldId, content, node, x, y) => {
    const x_y = [{x: 180, y: 160}, {x: 250, y: 90}, {x: 240, y: -90}, {x: 150, y: -180}]

    const actions = [];
    let matches = [];
    let match;
    let firstMatch;

    while (true) {
        match = REG_FOR_NODES.exec(content)
        if (!match) break;
        if (!firstMatch) firstMatch = match.index;
        matches.push(match[0]);
    }

    const linkNames = node.data.links.map(el => el.label);

    [...new Set(matches)]
        .filter(el => !linkNames.find(link => link === el))
        .forEach((el, i) => {
            console.log(el)
            const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
            const label = el.slice(2, -2);

            const x_r = x + x_y[node.data.links.length ? node.data.links.length + i - 1 : i].x;
            const y_r = y + x_y[node.data.links.length ? node.data.links.length + i - 1 : i].y;

            const params1 = new NodeFlow(x_r, y_r, label, id);
            const params2 = {
                id: `e${oldId}-${id}`,
                source: `${oldId}`,
                target: `${id}`
            };

            actions.push(
                graphAddLink({id: oldId, link: id}),
                graphAddEls([params1, params2])
            );
            
        });

    return actions;
}