const Queue = require ('./drills3.js');

class binaryST {
  constructor(key = null, value = null, parent = null) {
    this.value = value;
    this.key = key;
    this.parent = parent;
    this.right = null;
    this.left = null;
  }
  insert(key, value) {
    // If tree is empty, insert root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    /* If the tree exists, start at root, compare it to the key
      If key is less than the node it goes to the left */
    else if (key < this.key) { 
      /* If no left child (`left` pointer is empty), then instantiate 
      and insert a new node as a left child, passing `this` as the parent */
      if (this.left === null) {
        this.left = new binaryST(key, value, this);
      }
      /* If the node has a left child, recursively call the `insert` 
      method to add it further down the tree */
      else { this.left.insert(key, value) }
    }
    else {
      if (this.right === null) {
        this.right = new binaryST(key, value, this);
      }
      else { this.right.insert(key, value); }
    }
  }

  find(key) { //2
    if (this.key === key) {
      console.log(this.key);
      return this.value;
    }
    else if (key < this.key && this.left) { //else if the key is less than the root and there is a node to the left
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  _findMin() {
    if (!this.left) { return this; }
    return this.left._findMin();
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  remove(key) {
    if (this.key === key) { //if current is key to delete
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) { this._replaceWith(this.left);}
      else if (this.right) { this._replaceWith(this.right);}
      else { this._replaceWith(null);}
    }
    else if (key < this.key && this.left) { this.left.remove(key);}
    else if (key > this.key && this.right) { this.right.remove(key);}
    else { throw new Error('Key Error');}
  }

  dsfInOrder() {
    if (this.left) { this.left.dsfInOrder();}
    console.log(this.key);
    if (this.right) { this.right.dsfInOrder();}
  }
  
  dsfPreOrder() {
    //preorder
    console.log(this.key);
    if (this.left) { this.left.dsfPreOrder();}
    if (this.right) { this.right.dsfPreOrder();}
  }
  
  dsfPostOrder() {
    if (this.left) { this.left.dsfPostOrder();}
    if (this.right) { this.right.dsfPostOrder();}
    console.log(this.key);
  }
  
}

bfs(tree, values = []) {
  const queue = new Queue(); // Assuming a Queue is implemented
  const node = tree.root;
  queue.enqueue(node);
  while (queue.length) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array
      //add left child to queue
      if (node.left) { queue.enqueue(node.left); }
      // add right child to the queue
      if (node.right) { queue.enqueue(node.right); }
  }
  return values;
}



function printPretty(BST) {
  if (BST.value === null) { return; } 
  else {
    return {
      node: BST.value,
      left: BST.left ? printPretty(BST.left) : null,
      right: BST.right ? printPretty(BST.right) : null
    };
  }
}

function main() {
  let bst = new binaryST();

  /*  bst.insert(25);
  bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(24);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.insert(22); */

/*  bst.insert(25);
  bst.insert(14);
  bst.insert(15);
  bst.insert(35);
  bst.insert(89);
  bst.insert(79);
  bst.insert(19);
  bst.insert(91);
  bst.insert(27);
  bst.insert(90); */

  console.log('InOrder:');
  bst.dsfInOrder();
  console.log('PreOrder:');
  bst.dsfPreOrder();
  console.log('PostOrder:');
  bst.dsfPostOrder();


  //console.log(JSON.stringify(printPretty(bst)));
 

}
main();
