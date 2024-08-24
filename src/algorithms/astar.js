import { getAllNodes, sortNodesByDistance, getUnvisitedNeighbours } from "./index";

export function astar(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    // If we encounter a wall, we skip it.
    if (!closestNode.isWall) {
      if (closestNode.distance === Infinity)
        return visitedNodesInOrder;
      
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      // if the finish node is reached then we return the visitedNodes array
      if (closestNode === finishNode)
        return visitedNodesInOrder;
      
      updateUnvisitedNeighbours(closestNode, grid, finishNode); // Pass finishNode as a parameter
    }
  }
}

// updates the neighbors,
// in correspondence to the algorithm 
function updateUnvisitedNeighbours(node, grid, finishNode) {
  const unvisitedNeighbors = getUnvisitedNeighbours(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    // Calculate the Euclidean distance from neighbor to finishNode
    const heuristicDistance = calculateEuclideanDistance(neighbor, finishNode);
    neighbor.distance = node.distance + 1 + heuristicDistance;
    neighbor.previousNode = node;
  }
}

// Calculate the Euclidean (Pythagorean) distance between two nodes
function calculateEuclideanDistance(nodeA, nodeB) {
  const dx = nodeA.row - nodeB.row;
  const dy = nodeA.col - nodeB.col;
  return Math.sqrt(dx * dx + dy * dy);
}
