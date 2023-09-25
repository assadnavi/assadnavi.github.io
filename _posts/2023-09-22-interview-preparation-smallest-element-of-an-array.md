---
layout: post
title:  "#2 Interview Preparation | How to find the smallest element of an array ?"
date:   2023-09-22 00:00:00 +0000
published: true
---

## Code challenge

Given a non-empty array of numbers, write a recursive function **min(...)** which returns the smallest element of the input array.

- The difficulty of this challenge is ranked as : **Intermediate**
- The topic of this challenge is categorized as : **Algorithm**

<br/>

## Expected output

{% highlight cpp %}

1) min([4, 5, 1]) is 1

2) min([-5]) is -5

3) min([1, 1, 0, 0, 8]) is 0

{% endhighlight %}

<br/>

## For whom is this article ?

In this article, we look at an algorithm to find the smallest element of an array of numbers. We provide a coding solution implemented in VBA using the functional programming principles. This article is addressed to the follwing people :

- People preparing for coding interviews
- People interested in algorithms and recursive thinking

<br/>

## Building the solution

**Note** : Readers willing to solve this challenge by themselves should stop reading here. Below this point, the solution will be discussed and implemented.

When trying to solve a problem recursively, we need to find a smaller problem that can be solved with the same logic. Let's rewrite statement **(1)** and **(2)**

{% highlight cpp %}

4) min([4, 5, 1]) <=> Math.minimum(4, min([5, 1]))

5) min([-5]) <=> -5

{% endhighlight %}

In **(4)** we rewrote the original statement **(1)** with a recursive definition of a smaller size. In the recursion terminology, this is the **induction step**. 

When executing a recursive logic, we also need to make sure it stops. To do so, we use the statement **(5)** which states that, the min of an array of one element is its unique element. In the recursion terminology, this is the **base case**. 

Now that the **induction step** and **base case** are defined logically, we can write them in code.

<br/>

## Coding the min(...) function

This section aims to present a recursive implementation of the function **min(...)**. It is using the principles of functional programming. The below code contains all the auxiliary functions and can be run on your machine simply by copying and pasting it in your coding environment. To reproduce the outputs from the section **Expected output**, run the method **main()**. The results for (1), (2) and (3) are respectively stored in variables **r1**, **r2** and **r3**.

The min(...) function uses the below helper functions. Those functions do not have any side effects meaning that they always create their output without modifying any of their inputs. 
- **head(xs)** : returns the first element of the array **xs**
- **tail(xs)** : returns a new array containing all the elements of the array **xs** except its first element
- **size(xs)** : returns the size of the array **xs**
- **math_minimum(a, b)** : returns the mathematically smallest element between **a** and **b**

Thanks for reading. I hope you have learnt something while working on this code challenge. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>

<br/>

{% highlight vb %}

Sub main()

    r1 = min(Array(4, 5, 1))

    r2 = min(Array(-5))

    r3 = min(Array(1, 1, 0, 0, 8))

End Sub

Function min(xs As Variant) As Variant

    If size(xs) = 1 Then   
        min = head(xs)
    Else                    
        min = math_minimum(head(xs), min(tail(xs)))
    End If

End Function

Function math_minimum(a As Variant, b As Variant) As Variant

    If a < b Then
        math_minimum = a
    Else
        math_minimum = b
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
