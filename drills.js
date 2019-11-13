// 1. How many searches?
// Q: Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
// A: 11, 5, 6, 8 (n=4)
// Q: Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
// A: 11, 15, 17; returns -1 (16 not found)

// 2. Adding a React UI
// Q: Linear search, binary search
// A: See react app in 'search-drills' folder

// 3. Find a book
// Q: Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.
// A:
//create a search algo that takes the dewey as the key and the title as the value 

function findBook(searchDewey, searchTitle, arr, start, end) {
  start = start == null ? 0 : start;
  end = end == null ? arr.length - 1 : end;

  if (start > end) {
    return -1
  }

  let index = Math.floor((start + end)/2);
  let currItem = arr[index];

  if (currItem.dewey === searchDewey) {
    if (currItem.title === searchTitle) {
      return currItem;
    } else {
      //forward
      let forwardIndex = index++;
      currItem = arr[forwardIndex];
      while (currItem.dewey === searchDewey) {
        if (currItem.title === searchTitle) {
          return currItem;
        }
        forwardIndex++;
        currItem = arr[forwardIndex];
      }
      //back half
      let backwardsIndex = index--;
      currItem = arr[backwardsIndex];
      while (currItem.dewey === searchDewey) {
        if (currItem.title === searchTitle) {
          return currItem;
        }
        backwardsIndex++;
        currItem = arr[backwardsIndex];
      }  
    }
  }
  else if (searchDewey > currItem.dewey) {
    return findBook(searchDewey, searchTitle, arr, index + 1, end);
  }
  else if (searchDewey < currItem.dewey) {
    return findBook(searchDewey, searchTitle, arr, start, index - 1);
  }
}

const library = [
  { author: "Cowlishaw, Mike", dewey: "005.133", title: "The REXX Language" },
  { author: "Sams", dewey: "005.133", title: "Teach Yourself C++ In 21 Days" },
  {
    author: "Stroustrup., Bjarne",
    dewey: "005.133",
    title: "The C++ Programming Language"
  },
  {
    author: "Crockford, Douglas",
    dewey: "005.2762",
    title: "JavaScript: The Good Parts"
  },
  {
    author: "Flanagan, David",
    dewey: "005.2762",
    title: "JavaScript: The Definitive Guide"
  },
  {
    author: "Schmidt, Meinhard",
    dewey: "005.44684",
    title: "Windows Vista for Dummies"
  },
  { author: "Zondervan", dewey: "220.52081", title: "NIV Study Bible" },
  {
    author: "Humphries, Russell, Dr.",
    dewey: "231.7652",
    title: "Starlight and Time"
  },
  {
    author: "Jane, Frederick Thomas",
    dewey: "623.82509051",
    title: "Jane's Fighting Ships"
  },
  {
    author: "Norris, Chuck",
    dewey: "796.8092",
    title: "The Official Chuck Norris Fact Book"
  }
];

console.log(findBook('005.133', 'Teach Yourself C++ In 21 Days', library)) // returns { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' }

console.log(findBook('623.82509051', 'Jane\'s Fighting Ships', library)) // { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' }

console.log(findBook('005.133', 'The C++ Programming Language', library)) // author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' }


// 4. Searching in a BST
// ** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

// 1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

// 5. Implement different tree traversals
// 6. Find the next commanding officer
// 7. Max profit
// 8. Egg drop (optional)
