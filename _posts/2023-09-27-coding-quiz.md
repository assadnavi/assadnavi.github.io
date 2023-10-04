---
layout: post
title:  "#4 Interview Preparation | 'Code comprehension' series"
date:   2023-09-27 00:00:00 +0000
published: true
---

## What is the purpose of this article ?

The 'Code comprehension' series is aiming to prepare programmers to corporate coding interviews where they can be requested to read, explain and answer questions about a piece of code. This article is aiming to proceed in a similar way and is addressed primarily to the following people :

- People preparing for coding interviews
- People willing to evaluate their coding skills

Additionally information :
- The difficulty of this challenge is ranked as : **Beginner**
- The topic of this challenge is categorized as : **Algorithm**
- Programming language : **JavaScript**

<br/>

## Question \#1

Given the below function **f(...)**, what is the returned value when evaluating **f(10, 0)** ?

{% highlight js %}

function f(x, a) { 
    if (x < 1) return a
    return f(x - 1, a + x) 
}

{% endhighlight %}

<br/>

## Solution

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

As you can see, the function **f(...)** is recursive and takes two input **integer** parameters. To better see what it computes, lets breakdown the evaluation of **f(10, 0)**.

{% highlight js %}

f(10, 0)

is 10 < 1 ? No => return f(9, 0 + 10)

is 9 < 1 ? No => return f(8, 10 + 9)

is 8 < 1 ? No => return f(7, 19 + 8)

is 7 < 1 ? No => return f(6, 27 + 7)

is 6 < 1 ? No => return f(5, 34 + 6)

is 5 < 1 ? No => return f(4, 40 + 5)

is 4 < 1 ? No => return f(3, 45 + 4)

is 3 < 1 ? No => return f(2, 49 + 3)

is 2 < 1 ? No => return f(1, 52 + 2)

is 1 < 1 ? No => return f(0, 54 + 1)

is 0 < 1 ? Yes => 55

{% endhighlight %}

The function **f(x, a)** is a recursive function summing the numbers from 1 to **x** (1 + 2 + 3 + ... + x). This sum is also called the **Gaussian sum**. The second parameter **a** is called an accumulator and is used to store the intermediate results. The final result of the evaluation of **f(10, 0)** is **55**.

<br/>

## Question \#2
Is it possible to change the code of the function **f(...)** such that it does not use the parameter **a** ?

<br/>

## Solution

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

Yes it is possible, solution below :

{% highlight js %}

function f(x) {
    if (x < 1) return 0
    else return x + f(x-1)
}

{% endhighlight %}

<br/>

Thanks for reading. I hope you have learnt something while working on this coding quiz. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>.
