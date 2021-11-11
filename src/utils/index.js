export const addNode = (NodeParams, elements) => {

  let node;
  node = NodeParams;

  if (NodeExists(node, elements)) {
    return elements;
  }

  return elements.concat(node);
};

const NodeExists = (node, elements) => {
  const ids = [];
  for (const element of elements) {
    ids.push(element.id);
  }

  return ids.includes(node.id)
}