---
layout: post
title:  "#7 Interview Preparation | Are those two arrays equal ?"
date:   2023-10-16 00:00:00 +0000
published: true
---
<style>
  .solution pre {
    border-width:2px; 
    border-style:solid;
    border-color:green;
  }
</style>

## Introduction

In this article, we present a coding challenge for readers willing to prepare for coding interviews. A solution to this challenge is discussed and an implementation is presented in **JavaScript** using the functional programming principles (FP). The solution logic is language agnostic meaning that the building blocks can easily be translated to another programming language. This article is addressed to the following people :

- People preparing for coding interviews
- People willing to evaluate their coding skills
- People interested in functional programming (FP)

<br/>

## About this challenge

- The difficulty of this challenge is ranked as **Beginner**
- The topic of this challenge is categorized as **Data Structure**
- The solution of this challenge is presented in **JavaScript**

<br/>

## Question

Given two arrays of numbers, **xs** and **ys**, write a function **arrayEqual(xs, ys)** returning true when **xs** and **ys** contain exactly the same elements and in the same order, otherwise false. This challenge should be completed without using any similar built-in functions already available to the programmer.

<br/>

## Samples output

{% highlight cpp %}

1) arrayEqual([1, 4], [1, 5]) is false

2) arrayEqual([-1, -2, -3], [8]) is false

3) arrayEqual([1, 4, 2], [1, 4, 2]) is true

4) arrayEqual([], []) is true

{% endhighlight %}

<br/>

## Solution

**Note** : Readers willing to solve this challenge by themselves should stop reading here. Below this point the solution is discussed and the solution presented.

The logic of the function **arrayEqual(...)** should cover those four cases.

**case 1)** When the two arrays have different size, return false

**case 2)** When the two arrays are empty, return true

**case 3)** When the first elements of the arrays are **not** equal, return false

**case 4)** When the first elements of the arrays are equal, apply this logic recursively over the rest of the elements.

See below this logic applied for statement **(1)** from section **Samples output**. The below expansion shows the recursive nature of the solution. Its evaluation returns **false** since 4 is not equal to 5.

**Notes :** 
- 'x == y' is a shorthand notation for 'is x equal to y ?'
- 'and' is the binary logical operator
- 'a <=> b' says that the evaluation of **a** is equal to the evaluation of **b**

{% highlight cpp %}

1) arrayEqual([1, 4], [1, 5]) 

<=>

(1 == 1) and arrayEqual([4], [5])

<=>

(1 == 1) and (4 == 5) and arrayEqual([], [])

{% endhighlight %}

<br/>

## Final code for arrayEqual(...)

This section aims to present the final solution for the function **arrayEqual(xs, ys)**. The below code is complete and contains all the helper functions. It can be run on your machine by copying and pasting it in your coding environment. To reproduce the outputs from the section **Sample output** run the entire code below with a JavaScript interpreter (e.g. NodeJS), the results will be displayed in the output console.

**arrayEqual(xs, ys)** uses the below helper functions. Those functions do not have any side effects.

- **head(xs)** : returns the first element of the array **xs**
- **tail(xs)** : returns a new array containing all the elements of the array **xs** except its first element
- **size(xs)** : returns the size of the array **xs**

<br/>

<div class="solution">
{% highlight js %}

console.log(arrayEqual([1, 4], [1, 5]))

console.log(arrayEqual([-1, -2, -3], [8]))

console.log(arrayEqual([1, 4, 2], [1, 4, 2]))

console.log(arrayEqual([], []))

function arrayEqual(xs, ys) {
    if (size(xs) == 0 && size(ys) == 0) return true
    else if (size(xs) != size(ys)) return false
    else if (head(xs) != head(ys)) return false
    else return arrayEqual(tail(xs), tail(ys))
}

function head(xs) {
    return xs[0]
}

function tail(xs) {
    return xs.slice(1)
}

function size(xs) {
    return xs.length
}

{% endhighlight %}
</div>

<br/>

Thanks for reading. I hope you have learnt something while working on this code challenge. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>
