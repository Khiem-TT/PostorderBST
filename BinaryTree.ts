import {TreeNode} from "./TreeNode";

export class BinarySearchTree<T> {
    root: TreeNode<T> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    insert(data: T): TreeNode<T> {
        if (!this.root) {
            this.root = new TreeNode(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode.right) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    }

    postorder(node: TreeNode<T>) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}