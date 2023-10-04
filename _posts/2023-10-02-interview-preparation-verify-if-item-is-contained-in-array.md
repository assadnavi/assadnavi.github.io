---
layout: post
title:  "#5 Interview Preparation | Verify if an item is contained in an array"
date:   2023-10-02 00:00:00 +0000
published: true
---

## Coding challenge

Given a number **n** and an array of numbers **xs**, write a function **contained(n, xs)** returning true when **n** is contained in **xs** and otherwise false. This challenge should be completed without using any similar built-in functions already available to the programmer.

- The difficulty of this challenge is ranked as : **Intermediate**
- The topic of this challenge is categorized as : **Array**
- The solution of this challenge is presented in : **JavaScript**

<br/>

## Expected output

{% highlight cpp %}

1) contained(1, [3, 4, 1]) is true

2) contained(5, [3, 4, 1]) is false

3) contained(4, []) is false

{% endhighlight %}

<br/>

## For whom is this article ?

In this article, we look at an algorithm to check if an element is contained in an array. A recursive solution is discussed and an implementation is presented in **JavaScript** using the functional programming principles (FP). The reader should not necessarily write a recrusive method to complete this challenge. The solution logic is language agnostic meaning that it can easily be translated to another programming language. This article is addressed to the following people :

- People preparing for coding interviews
- People interested in algorithms
- People interested by functional programming and recursive thinking

<br/>

## Building the solution

**Note** : Readers willing to solve this challenge by themselves should stop reading here. Below this point, the solution will be discussed and a coding solution presented.

In this section, the aim is to write the **contained(...)** function logic in a recursive way. To do so, let's start with the statement **(1)** from "Expected output".

{% highlight cpp %}

1) contained(1, [3, 4, 1]) 

<=>

4) When 1 = 3 then true otherwise contained (1, [4, 1])

5) contained(n, []) is false

{% endhighlight %}

In the above statements, both **(1)** and **(4)** are equivalent. In **(4)** we check if 1 is equal to the first element of the array [3, 4, 1], If yes then the answer is true, otherwise we use **contained** recursively over the array [4, 1]. In the recursion terminology, this is called the **induction step**. 

When executing a recursive logic, we also need to make sure it stops. To do so, we use the statement **(5)** which states that checking if **n** is contained in an empty array is always false. In the recursion terminology, this is called the **base case**. 

<br/>

## Final code for contained(...)

This section aims to present a recursive implementation for the function **contained(...)**. The below code is complete and contains all the helper functions. It can be run on your machine by copying and pasting it in your coding environment (for instance : nodejs). To reproduce the outputs from the section **Expected output**, run the entire code below, the results will be displayed in the output console.

The contained(...) function uses the below helper functions. Those functions do not have any side effects meaning that they create their output without modifying their inputs. 
- **head(xs)** : returns the first element of the array **xs**
- **tail(xs)** : returns a new array containing all the elements of the array **xs** except its first element
- **size(xs)** : returns the size of the array **xs**

Thanks for reading. I hope you have learnt something while working on this code challenge. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>

<br/>

{% highlight js %}


console.log(contained(1, [3, 4, 1]))

console.log(contained(5, [3, 4, 1]))

console.log(contained(4, []))

function contained(n, xs) {
    if (size(xs) < 1) return false
    else if (head(xs) == n) return true
    else return contained(n, tail(xs))
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
