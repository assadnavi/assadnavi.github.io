---
layout: post
title:  "#3 Interview Preparation | How to concatenate two arrays ?"
date:   2023-09-25 00:00:00 +0000
published: true
---

## Coding challenge

Given two arrays of numbers **xs** and **ys**, write a function **concatenate(...)** returning an array containing, in order, all the elements of **xs** and **ys**

- The difficulty of this challenge is ranked as : **Intermediate**
- The topic of this challenge is categorized as : **Algorithm**

<br/>

## Expected output

{% highlight cpp %}

1) concatenate([-5, -2], [1, -2]) is [-5, -2, 1, -2]

2) concatenate([], [3, 4, 5]) is [3, 4, 5]

3) concatenate([], []) is []

{% endhighlight %}

<br/>

## For whom is this article ?

In this article, we look at an algorithm to concatenate all the elements from two arrays of numbers. A recursive solution is discussed and a possible implementation is provided in VBA using the functional programming principles. The solution logic is language agnostic meaning that it can easily be translated to another programming language. This article is addressed to the follwing people :

- People preparing for coding interviews
- People interested in algorithms
- People interested by functional programming and recursive thinking

<br/>

## Building the solution

**Note** : Readers willing to solve this challenge by themselves should stop reading here. Below this point, the solution will be discussed and a coding solution presented.

When trying to solve a problem recursively, we need to find a smaller problem that can be solved with the same logic. Let's rewrite the statements **(1)** and **(2)** respectively in **(4)** and **(5)**.

{% highlight cpp %}

4) concatenate([-5, -2], [1, -2]) <=> [-5, concatenate([-2], [1, -2])]

5) concatenate([], [3, 4, 5]) <=> [3, 4, 5] 

{% endhighlight %}

In **(4)** we rewrote the statement **(1)** with a recursive definition (both **(1)** and **(4)** are equivalent). This new definition is solving partially the challenge by setting correctly the value **-5** at the beginning of the final answer. For the remaining elements, we reuse the function **concatenate** recursively over a smaller input array. In the recursion terminology, this is called the **induction step**. 

When executing a recursive logic, we also need to make sure it stops. To do so, we use the statement **(5)** which covers the case when the array to concatenate is empty. In such case, the final answer is the second array. In the recursion terminology, this is called the **base case**. 

Now that the **induction step** and **base case** are defined, we can write them in code.

<br/>

## Coding the concatenate(...) function

This section aims to present a recursive implementation of the function **concatenate(...)**. The below code is complete and contains all the helper functions. It can be run on your machine by copying and pasting it in your coding environment. To reproduce the outputs from the section **Expected output**, run the method **main()**. The results for (1), (2) and (3) are respectively stored in variables **r1**, **r2** and **r3**.

The concatenate(...) function uses the below helper functions. Those functions do not have any side effects meaning that they always create their output without modifying any of their inputs. 
- **head(xs)** : returns the first element of the array **xs**
- **tail(xs)** : returns a new array containing all the elements of the array **xs** except its first element
- **size(xs)** : returns the size of the array **xs**

Thanks for reading. I hope you have learnt something while working on this code challenge. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>

<br/>

{% highlight vb %}

Sub main()

    r1 = concatenate(Array(-5, -2), Array(1, 2))

    r2 = concatenate(Array(), Array(3, 4, 5))

    r3 = concatenate(Array(), Array())

End Sub

Function concatenate(xs As Variant, ys As Variant) As Variant

    If size(xs) < 1 Then
        concatenate = ys
    Else
        concatenate = cons(head(xs), concatenate(tail(xs), ys))
    End If

End Function

Function size(xs As Variant) As Long

    size = (UBound(xs) - LBound(xs) + 1)

End Function

Function head(xs As Variant) As Variant

    head = xs(LBound(xs))

End Function

Function tail(xs As Variant) As Variant

    Dim i As Long
    Dim result() As Variant
    result = Array()
    For i = (LBound(xs) + 1) To UBound(xs) Step 1
        ReDim Preserve result(i - 1)
        result(i - 1) = xs(i)
    Next
    tail = result
    
End Function

{% endhighlight %}
