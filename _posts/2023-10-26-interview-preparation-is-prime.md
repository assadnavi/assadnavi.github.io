---
layout: post
title:  "#9 Interview Preparation | How to check if a number is prime ?"
date:   2023-10-26 00:00:00 +0000
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

In this article, we present a code challenge for readers willing to prepare for professional coding interviews. A solution to this challenge is discussed and an implementation is presented in JavaScript using the functional programming principles when possible. The solution logic is language agnostic meaning that the building blocks can easily be translated to another programming language. This article aims to follow the same procedure used in a professional coding interview. See below some information regarding this challenge.

*For whom is this code challenge ?*

- People preparing for coding interviews or willing to improve their coding skills.

*What material can I use when completing this challenge ?*

- Computer without an internet connection.

*Is there a time limit ?*

- No time limit for this challenge.

*What is the difficuly of this challenge ?*

- This challenge is designed for beginners.

*What programming language can I use ?*

- Any programming language can be used to complete this challenge. The only restriction is to not use any existing functions or libraries in the solution.

<br/>

## Question 

Given a number **x**, write a function **isPrime(x)** which returns **true** where x is a prime number otherwise **false**. 

**Note :** A prime number is an integer greater than 1 which can be divided without remainder, only by 1 and itself, see examples below in section **Output**

<br/>

## Output

{% highlight cpp %}

1) isPrime(1) is false

2) isPrime(2) is true

3) isPrime(3) is true

4) isPrime(4) is false

5) isPrime(5) is true

{% endhighlight %}

<br/>

## Solution

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

The method used to check if a number **x** is prime is to divide it successively by all the numbers between 2 and **x - 1** and verify that those divisions have a remainder. If this is the case then **x** is prime, otherwise not. Find below the code for the function **isPrime(x)**. 

The below code is complete and can be run on your machine by copying and pasting it in your coding environment. To reproduce the outputs from the section **Output** run the entire code below with a JavaScript interpreter (e.g. NodeJS), the results will be displayed in the output console.

<div class="solution">
{% highlight js %}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))

function isPrime(x) {
    if (x <= 1) return false
    for (let i = 2 ; i < x ; i++) if (x % i == 0) return false
    return true
}

{% endhighlight %}
</div>

<br/>
Thanks for reading. I hope you have learnt something while working on this challenge. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>.
