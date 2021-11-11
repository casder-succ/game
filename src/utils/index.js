export const addNode = (NodeParams, elements) => {

  let node;
  node = {...nodeParams}

  if (NodeExists(node, elements)) {
    return elements;
  }

  return elements.concat(edge);
};

const NodeExists = (node, elements) {
  const ids = [];
  for (const element of elements) {
    ids.push(element.id);
  }

  return ids.includes(node.id)
}