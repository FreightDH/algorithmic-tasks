const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    let node = (rootTree) => {
      if (rootTree === null) {
        this.rootTree = new Node(data);
      } else if (data < rootTree.data) {
        if (rootTree.left === null) rootTree.left = new Node(data);
        else node(rootTree.left);
      } else if (data > rootTree.data) {
        if (rootTree.right === null) rootTree.right = new Node(data);
        else node(rootTree.right);
      }
    };
    node(this.rootTree);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.rootTree === null) return null;
    let node = this.rootTree;
    if (node.data === data) return node;
    else {
      while (node)
        if (node.data === data) return node;
        else {
          if (data < node.data) node = node.left;
          else node = node.right;
        }
    }
    return null;
  }

  remove(data) {
    this.rootTree = removeTree(this.rootTree, data);
    function removeTree(node, data) {
      if (!node) return null;
      else if (data < node.data) {
        node.left = removeTree(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeTree(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
        let min = node.right;

        while (min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = removeTree(node.right, min.data);
        return node;
      }
    }
  }

  min() {
    let node = this.rootTree;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootTree;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
