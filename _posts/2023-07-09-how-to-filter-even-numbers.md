---
layout: post
title:  "How to filter even numbers ?"
date:   2023-07-09 00:00:00 +0000
published: false
---
Hello, in this article we will write a function in vba to filter even numbers from an array. We will use functional programming principles and write a solution using recursion. Before diving into the problem, lets first discuss about the two functional programming principles.<br/>
1) `No side effect` : This means that the function we are going to implement will not change any of its input but rather build its output from scratch. This principle enforces the code to not have any 'change of state' which are error prone and hard to debug.<br/>
2) `Pure function` : This means that the function takes all the parameters needed to build its output. This principle is important to manage dependencies and more importantly make sure that the function can be tested. <br/>
In future posts, we will come back to discuss those two functional programming principles in more details.<br/>
The filtering problem we are going to solve is a problem that programmers are frequently facing. The goal is to be able to filter (or collect) only the elements of an array with a specific criteria. Today, we will focus on making our code filtering even numbers.
### What is the problem ?
{% highlight cpp %}
Even numbers of array [] is array []

Even numbers of array [1, 3] is array []

Even numbers of array [2] is array [2]

Even numbers of array [2, 3, 4, 5] is array [2, 4]
{% endhighlight %}
<br/>
What logic are we going to use ? Remember that when trying to find a recursive function to solve a problem, we need to find a solution to a smaller piece of the problem. Lets rewrite our last example.

### Recursive logic
{% highlight cpp %}
Even numbers of array [2, 3, 4, 5] 

Is equal to :

Even numbers of array [3, 4, 5] including 2 if even
{% endhighlight %}
<br/>
As you can see, we have rewritten the problem of an array of 4 elements [2, 3, 4, 5] in terms of an array of 3 elements [3, 4, 5], this is our `induction step`. To make sure that our function does not call itself indefinitively, we also need a `base case`. The base case is when the array is empty [], we can simply return an empty array. Now lets look at the vba implementation of the even filtering function where we will need the help of the previously implemented functions `head`, `tail`, `cons` and `isArrayEmpty`. We will create a function called `even` which takes an array as a parameter and returns another array containing only the even numbers. In our implementation, the element order are preserved but not necessary and we use the vba `Mod` operator to detect even numbers. As a reminder, it is the responsibility of the caller to pass initialized data of the correct types to this function.

### VBA implementation
{% highlight vb %}
Function even(xs As Variant) As Variant

    If isArrayEmpty(xs) Then
        even = Array()
    ElseIf (head(xs) Mod 2) = 0 Then
        even = cons(head(xs), even(tail(xs)))
    Else
        even = even(tail(xs))
    End If

End Function
{% endhighlight %}
<br/>
We use the function `isArrayEmpty` to detect the base case of our recursion. If not, we add the even number to the result of the recursive call. To build a new array with only the even numbers, we use the function `cons`. As a reference, you can look at the articles related to those functions here : <a href="/2023/05/29/function-head-over-a-vba-array.html">head()</a>, <a href="/2023/06/05/function-tail-over-a-vba-array.html">tail()</a>, <a href="/2023/06/19/first-recursive-function-in-vba.html">isArrayEmpty()</a> and <a href="/2023/06/12/what-can-be-cons-in-vba.html">cons()</a>

### How to use this function in vba ?
{% highlight vb %}
Sub main()

    Dim r As Variant
    r = even(Array(1, 2, 3))
    ' r is array [2]

End Sub
{% endhighlight %}
