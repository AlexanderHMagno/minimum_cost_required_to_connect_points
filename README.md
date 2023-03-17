## Minimum cost required to connect points

![Leet code](/leetcode.png)



1) (10 points) Provide a screenshot of your solution getting accepted on Leetcode . Additionally also provide us with your source code. You will get full credit for any correct solution accepted by LeetCode, regardless of how well your runtime and memory usage compares with other LeetCode participants.

![Leet code](/leetcodeSolved.png)



2) (5 points) Explain the various ways you tried to solve this problem, telling us what worked and what did not work. Describe what insights you had as you eventually found a correct solution. Reflect on what you learned from struggling on this problem, and describe how the struggle itself was valuable for you. Additionally, reflect on any further ideas for improving your solution.


Attemps:

- Sort Array by Column, and calculate a distance between Xi and Xi + 1. 
- Sort Array by Row, and calculate a distance between Yi and Yi + 1. 
- Creating a matrix (2d array) with the list of all edges as a complete graph, at each vertex select the min value 
- The same matrix use Kruskal algorithm
- The same matrix use Prims algorithm
