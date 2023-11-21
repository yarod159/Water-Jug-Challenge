# Getting started 🚀

The application you have developed uses React and Vite.js which is a modern development tool that allows you to serve your application during development with an extremely fast hot reload time. 



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Prerequisites 📋

- Node.js versión 16.15.0.
- For the project, Visual Studio Code 


# Installation 🔧

To begin, we proceed to download the repository. To do this, we open the console, go to the folder where we want to save the project and execute the following command:

```bash
 https://github.com/yarod159/Water-Jug-Challenge.git
```
Then go to the cloned folder in the "Water-Jug-Challenge" repository.
For a Windows operating system, with the command:

```bash
cd Design-Chicks-Challenge
```

If it does not work, try with:

```bash
npm i -f
```
The dependencies are then installed. It should be noted that there are different ways to do this._

With npm:
```bash
npm install
```
Once the installation of the dependencies is successful, the frontend is ready to be deployed.

## Deployment

To deploy this project run





```bash
  npm run dev
```




# Water-Jug-Challenge

The water jug puzzle is a classic problem that is often solved in the field of artificial intelligence and search algorithms. 
Problem statement:

You are given two jugs with capacities 'X' and 'Y' respectively. Initially, both are empty. There is an unlimited supply of water. You can either fill the jug completely or an amount that is less than the given capacity of the jugs. Now, you are also given a third positive integer 'Z'. Using the 2 given jars, you need to find a solution to have 'Z' amount of water in them and return the number of steps you took to reach that capacity.

The operations you can perform are:

-Fill a jug completely.
-Empty a jug.
-Transferring water from one jug to another until one of the jugs is completely full or empty.

The objective is to determine the sequence of operations that will allow you to get exactly 'Z' litres of water in one of the jugs.

# Explanation of the algorithm

# JugOperation.jsx

jugOperation: This object defines the operations that can be performed on water jugs. The operations are fill, empty and transfer. Each operation takes as input the current state of the jugs and returns a new state after the operation is performed.

# NodeOperations.jsx

This object defines the operations that can be performed on a node in the search tree. The operations are createNode (create a node), isTarget (check if the node is the target) and getNodeId (get the ID of a node).

# SolveWaterJugBFS.jsx

This is the main function that solves the water jug problem. It uses breadth-first search (BFS) to explore all possible states of the water jugs until it finds a solution or has explored all possible states.

# UseJug.JSX

This is a React hook that manages the state of the application. It keeps the state of the water jugs and the steps to get to the solution. It also handles changes to the water jugs and the action to solve the problem.

# Busqueda  en amplitud (BFS)

The search algorithm I used to solve this problem "breadth-first search (BFS)" was implemented in SolveWaterJugBFS.jsx.  

Initialisation: An initial node is created with the empty jugs and added to a queue. A visited set is also created to keep track of the visited states.

Main loop: As long as the queue is not empty, the first node in the queue is extracted.

Target verification: If the state of the extracted node is the target, the sequence of actions that led to that state is returned.

Generation of next states: For the extracted node, all possible next states are generated using the operations defined in jugOperation. 

Visit verification: For each generated next state, it is verified if it has already been visited. If not, it is marked as visited and added to the queue. The new node that is added to the queue also keeps a record of the sequence of actions that led to that state.

No solution: If all possible states have been explored and no solution has been found, a message is returned indicating that there is no solution.


# Complexity of the algorithm 

BFS has a reasonably good time and space complexity of O(V + E), where V is the number of vertices (nodes) and E is the number of edges (connections between nodes), so the number of vertices is O(X*Y), and the number of edges is O(X + Y).

# Optimal solution

BFS guarantees that if a solution exists, it will find the optimal solution with the fewest number of steps. This is because BFS explores all nodes at the current depth level before moving to nodes at the next depth level.

 
