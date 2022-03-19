import {NodeFlow} from "./nodes";

const REG_FOR_NODES = /\[[[\sA-Za-z]+]]/gm;

export const parseElementContent = (oldId, content, node, x, y) => {
    const x_y = [{x: 180, y: 160}, {x: 250, y: 90}, {x: 240, y: -90}, {x: 150, y: -180}]
    const names_arr = [...content.matchAll(REG_FOR_NODES)];

    const actions = [];


    if (names_arr.length && node.data.links.length < names_arr.length) {
        names_arr.forEach((el, i) => {

            if (i > node.data.links.length - 1) {
                const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
                const label = el[0].slice(2, -2);

                const x_r = x + x_y[node.data.links.length ? node.data.links.length + i - 1 : 0].x;
                const y_r = y + x_y[node.data.links.length ? node.data.links.length + i - 1 : 0].y;

                const params1 = new NodeFlow(x_r, y_r, label, id);

                const params2 = {
                    id: `e${oldId}-${id}`,
                    source: `${oldId}`,
                    target: `${id}`
                };

                actions.push({type: "ADD_LINK", payload: {id: oldId, link: id}},
                    {type: "ADD_ELEMENTS", payload: [params1, params2]});
            }
        })
    }
    return actions;
}