---
layout: post
title:  "#8 Interview Preparation | 'Code comprehension' series"
date:   2023-10-17 00:00:00 +0000
published: true
---

## Introduction

The 'Code comprehension' series is aiming to prepare programmers to corporate coding interviews where they can be requested to read, explain and answer questions about a piece of code. This article is aiming to proceed in a similar way.

*For whom is this code challenge ?*

- People preparing for coding interviews
- People willing to evaluate their coding skills
- People interested in functional programming (FP)

*Additionally information*

- The difficulty of this challenge is ranked as : **Intermediate**
- The topic of this challenge is categorized as : **Algorithm**
- Programming language : **JavaScript**

*Allowed material to complete this challenge*

- Pen
- Paper

*Is there any time limit ?*

- No time limit for this challenge

<br/>

## Question 

Given the below code, what is the output value when evaluating **r([10, 20, 11, 12])** ?

{% highlight js %}

function r(xs) {
    return rCalc(xs, [])
}

function rCalc(xs, acc) {
    if (size(xs) < 1) return acc
    return rCalc(tail(xs), [head(xs)].concat(acc))
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

<br/>

## Solution

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

The function **r(...)** calls the function **rCalc(...)** which is a recursive functions and takes two inputs. The functions **r** and **rCalc** use some helper functions, here are their meanings.
- **head(xs)** : returns the first element of the array **xs**
- **tail(xs)** : returns a new array containing all the elements of the array **xs** except its first element
- **size(xs)** : returns the size of the array **xs**

<br/>

Here is the breakdown of the evaluation of **r([10, 20, 11, 12])**.

{% highlight js %}

r([10, 20, 11, 12])

[r] return rCalc([10, 20, 11, 12], [])

[rCalc] is size([10, 20, 11, 12]) < 1 ? No => return rCalc([20, 11, 12], [10])

[rCalc] is size([20, 11, 12]) < 1 ? No => return rCalc([11, 12], [20, 10])

[rCalc] is size([11, 12]) < 1 ? No => return rCalc([12], [11, 20, 10])

[rCalc] is size([12]) < 1 ? No => return rCalc([], [12, 11, 20, 10])

[rCalc] is size([]) < 1 ? Yes => return [12, 11, 20, 10]

{% endhighlight %}

<br/>

As shown above in the execution breakdown, the output of the evaluation of **r([10, 20, 11, 12])** returns the array [12, 11, 20, 10]. More generally, the function **r(xs)** reverses the order of the elements of its input **xs**.

<br/>
Thanks for reading. I hope you have learnt something while working on this 'Code comprehension' article. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>.
