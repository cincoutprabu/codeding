#include <climits>

/*
    "Is this a valid Binary Search Tree (BST)?" Problem Statement:

    A Binary Search Tree (BST) is said to be valid if:
        - Every node in a node's left subtree is less than that node.
        - Every node in a node's right subtree is greater than that node.
        - Every node is distinct.
 */

/*
    Hidden stub code will pass a root argument to the function below.
    Complete the function to solve the challenge.

    The Node struct is defined as follows:
        struct Node {
            int data;
            Node* left;
            Node* right;
        }
*/

    void showNode(Node* n, int depth) {
        if (n == NULL) return;
        std::cout << "[" << depth << "] n=" << n->data
            << " left: " << (n->left == NULL ? 0 : n->left->data)
            << " right: " << (n->right == NULL ? 0 : n->right->data)
            << std::endl;
        showNode(n->left, depth + 1);
        showNode(n->right, depth + 1);
    }

    bool check(Node *n, int min, int max) {
        if (n == NULL) return true;
        
        return  min < n->data &&
                max > n->data &&
                check(n->left, min, n->data) &&
                check(n->right, n->data, max);
    }

    bool checkBST(Node* root) {
        // showNode(root, 0);
        // return true;
        return check(root, INT_MIN, INT_MAX);
    }
