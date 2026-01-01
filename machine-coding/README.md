# JavaScript Machine Coding Questions

A curated list of **JavaScript machine coding questions** commonly asked in FAANG and top tech interviews.  
The list is categorized into **Easy**, **Intermediate**, and **Advanced** levels, including polyfills and core JavaScript exercises.

---

## Easy

1. Implement `debounce` and `throttle` functions.
2. Implement a simple cache with `get`, `set`, and expiration (**TimeLimitedCache**).
3. Reverse a string or array without using built-in functions.
4. Implement a promise-based `delay` function.
5. Implement a simple event emitter with `on`, `off`, and `emit`.
6. Flatten a nested array.
7. Implement `Array.prototype.map` / `filter` / `reduce` from scratch (**Polyfill**).
8. Implement `Array.prototype.includes` / `indexOf` (**Polyfill**).
9. Implement `Object.assign` (**Polyfill**).
10. Implement `setTimeout` / `setInterval` polyfill.
11. Merge two sorted arrays into one sorted array.
12. Find the first non-repeating character in a string.
13. Count occurrences of each element in an array.
14. Implement a simple `Promise` chain without async/await.
15. Find the maximum sum of a contiguous subarray (**Kadane’s algorithm**).
16. Implement `String.prototype.trim` polyfill.
17. Implement `Array.prototype.forEach` polyfill.

---

## Intermediate

1. Implement an **LRU cache**.
2. Implement a simple **task scheduler or queue** with concurrency limit.
3. Implement a custom `Promise.all` / `Promise.race`.
4. Deep clone an object (including nested objects/arrays).
5. Detect circular references in an object.
6. Implement memoization for a function.
7. Implement an **Event Delegation system**.
8. Implement a **circular queue**.
9. Build debounced / throttled input validation system.
10. Build a deep object comparison function.
11. Implement **binary search tree** (insert, search, delete).
12. Implement **top-k frequent elements** in an array.
13. Create a custom **event bus** supporting `once` / multiple events.
14. Implement a **rate limiter** function (allow X calls per Y milliseconds).
15. Implement **observable object with getters/setters** (like Vue reactivity).
16. Implement `Object.keys` / `Object.values` / `Object.entries` polyfills.
17. Implement `Function.prototype.bind` polyfill.
18. Implement `Function.prototype.call` / `apply` polyfills.
19. Implement `Array.prototype.find` / `findIndex` polyfills.
20. Implement `JSON.stringify` / `JSON.parse` polyfill (simple objects/arrays).

---

## Advanced

1. Build a mini **Redux store** with `subscribe`, `dispatch`, `getState`.
2. Implement a custom **virtual DOM diffing algorithm**.
3. Build a simple **Observable / reactive system** like RxJS.
4. Implement throttled/debounced event system with **priority**.
5. Implement a scheduler for async tasks with **priority and retry**.
6. Build a **browser-like tab history manager** (back/forward/restore state).
7. Implement **React-style `useState` hook** from scratch.
8. Implement custom **JSX to DOM renderer**.
9. Build a mini **web-router** with history management.
10. Implement debounced search with **cancelable promises**.
11. Build a mini **spreadsheet cell dependency system** (track formula changes).
12. Implement **priority queue / heap** for scheduling tasks.
13. Implement **undo-redo functionality** with stack.
14. Implement mini **GraphQL resolver simulation**.
15. Implement **custom async iterator / generator** with backpressure handling.
16. Implement **memoized recursive function cache with TTL**.
17. Implement **Proxy-like behavior** for objects (intercept get/set).
18. Implement **WeakMap polyfill** (basic version).
19. Implement **Symbol polyfill**.
20. Implement **async/await polyfill** using generator functions.

---

### Sharad
Arrays & Strings
1️⃣ Find the subarray with the largest sum (Kadane’s Algorithm).
2️⃣ Return all palindromic substrings in a given string.
3️⃣ Solve the "Two Sum" problem efficiently.
4️⃣ Remove duplicates from a sorted array in-place.
5️⃣ Find the missing number in a sequence from 1 to n.
6️⃣ Merge two sorted arrays into a single sorted one.
7️⃣ Check whether a string is a palindrome (ignore spaces and cases).
8️⃣ Find the first non-repeating character in a string.
9️⃣ Rotate a 1D array by k steps (right rotation).
🔟 Group anagrams from a list of strings.

🔹 Linked Lists
1️⃣1️⃣ Reverse a singly linked list (iterative and recursive).
1️⃣2️⃣ Detect a loop in a linked list (Floyd's Cycle Detection).
1️⃣3️⃣ Find the middle node in a singly linked list.
1️⃣4️⃣ Merge two sorted linked lists into one.
1️⃣5️⃣ Identify the node where two linked lists intersect.

🔹 Stacks & Queues
1️⃣6️⃣ Implement a stack using two queues.
1️⃣7️⃣ Design a Min Stack that supports O(1) min retrieval.
1️⃣8️⃣ Implement a circular queue using an array.
1️⃣9️⃣ Build a queue using stacks.
2️⃣0️⃣ Validate parentheses in a string ({[()]}) using a stack.

🔹 Trees & Binary Search Trees
2️⃣1️⃣ Calculate the height of a binary tree.
2️⃣2️⃣ Find the lowest common ancestor of two nodes in a binary tree.
2️⃣3️⃣ Check if a binary tree is a valid BST.
2️⃣4️⃣ Perform inorder traversal without recursion.
2️⃣5️⃣ Compute the diameter (longest path) of a binary tree.

🔹 Graphs
2️⃣6️⃣ Implement depth-first search (DFS) recursively.
2️⃣7️⃣ Implement breadth-first search (BFS) using a queue.
2️⃣8️⃣ Detect a cycle in an undirected graph using DFS.
2️⃣9️⃣ Check if a graph is bipartite.
3️⃣0️⃣ Count the number of connected components in an undirected graph.
---
### Notes

- **Easy**: Focuses on arrays, strings, simple caches, and basic polyfills.  
- **Intermediate**: Tests deeper data structures, object handling, and functional JS skills.  
- **Advanced**: Emphasizes front-end architecture, async handling, and internal JS mechanisms.  
- Polyfills are included to test your knowledge of **JavaScript internals, prototypes, closures, and async behavior**.
