---
layout: post
title: Generate Fibonacci Number in 4 Ways
---

Recently when I searched "Dynamic Programming(DP for short)" on [YouTube]{http://youtu.be/OQ5jsbhAv_M} I found a super inspired video about the core thinking of DP and it takes some of the most 
classical examples as Fibonacci and shortest path and so on. 

<separator>

The video does inspire and encourage me pretty much which gives rise to this article in which I'm going to take the Fibonacci as the example to illustrate the idea 
of DP, but first of all we have to deal with the most naive solution of recursion.

As we may know the Fibonacci can be depicted in a mathematics way as follows: `fib(n) = fib(n - 1) + fib(n - 2)`. So solution would quickly come to you mind that using 
recursion as we call it "naive recursion" because of the most natural way to solve such problem:

{% gist bee58cab4a7184bdf0bf %}

But people with a sharp eye will notice that when n is getting larger and larger it would become more and more difficult, actually much more time-consuming to get the 
answer because the time complexity of this method is up to `O(thi^n)` and `thi` refers to "golden ratio(approx. 1.618)". Thus, when you draw a recursive tree you're going to 
find that for most of the problems they have been calculated for many times, which precisely speaking, there're many overlapping subproblems which are calculated over and over 
again and because of this, you have to call itself time by time and consume a great amount of system allocated storage like stack and heap, which we say it's a very uneffecive 
method, so as a consequence, we develop another method which we could create a storage to store or we can say to remember the results of the enormous overlapping subproblems in 
a memoization so that each time we need the answer of the subproblem we just look up the memoization and return the result, thus we can save much time going deep into the recursion.

{% gist 4003007210b3f55077b2 %}

But as we'll notice we still cannot get rid of recursion, so is there a better way not to use recursion and just use some data structure like array or list to store the result of 
overlapping subproblmes and every time we need to look up the result we just return the specific index of the array, which give us a linear time to accomplish this and we can do 
everything without recursion, and this is called bottom-up method. In fact the name of bottom-up doesn't really come from the idea I talk just now, but from the way we solve the 
problem, which is if we need to calculate the biggest and final problem that are compromise of many similar subproblems we have to calculate these subproblems first and recursively, 
there must exist a most original subproblem needs to be calculated first. Therefore in the idea of the algorithm we represent such idea that we ask for every subproblems.
Similar topics are DAGs, or the topological order which are covered in the shortest path or the graphical representation of Fibonacci(but we're not gonna talk about this here).

{% gist 7e92515e924ef3d3201c %}

Naturally I would think about that every single Fibonacci number is only calcuated by the previous two ones, so it's quite certainly that we just need maximun two numbers in the process.
And everytime we replace the never-to-be-used one, for example, the last but two, but it's a little trick here is we have to be careful with the index of the array.

{% gist adbc7849b37b6e57e050 %}

<iframe width="560" height="315" src="//www.youtube.com/embed/OQ5jsbhAv_M" frameborder="0" allowfullscreen></iframe>

hoo..., need to take a rest!
