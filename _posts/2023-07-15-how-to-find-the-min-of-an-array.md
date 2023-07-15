---
layout: post
title:  "How to find the min of an array ?"
date:   2023-07-15 00:00:00 +0000
published: true
---
In this article, we will continue exploring recursive solutions of useful functions and write their implementation following the functional programming principles. We will have a look at the min problem which has the goal of finding the `minimum` value in an array of numbers. By symmetry once the solution for the minimum is achieved, it can be easily changed to find the `maximum` value of an array of numbers. To build our solution, we will use the functions implemented in previous articles, `head`, `tail`. For more informations about these functions, see section References.

### What is the min problem ?
{% highlight cpp %}
1) The minimum of the array [4, 5, 1] is 1

2) The minimum of the array [-5] is -5

3) The minimum of the array [] is not defined
{% endhighlight %}

The minimum of an array is only defined for non-empty arrays composed of number elements. Lets now think about a recursive definition to this problem. As a reminder, when trying to solve a problem recursively, we need to find a smaller problem that can be solved with the same method. Lets rewrite the problem statement.

### Where is the recursion ?
{% highlight cpp %}
4) The minimum of the array [4, 5, 1]

[IS-EQUIVALENT-TO]

5) The minimum between 4 and the minimum of the array [5, 1]

[IS-EQUIVALENT-TO]

6) The minimum between head([4, 5, 1]) and the minimum of the array tail([4, 5, 1])
{% endhighlight %}

As you can see in 5) we were able to rewrite the original problem statement 4) with a recursive definition of a smaller size. In recusion terminology, it is called the `induction step`. At runtime, to not apply the recursion indefinitively, we need to find a termination condition to our logic, which is called a `base case`. Our base case is when the array is of size 1, like our example in 2), the minimum value is its only value. 

Now lets write this logic in VBA. We create a function `min` which takes an array parameters and returns its minimum value. To make it generic, we have used the type variant so that we can have arrays of integer or decimal numbers. There are two helpers functions, `minVal` which returns the minimum between two numbers and `size` which returns the size of an array. With this design, it is the responsibility of the caller to pass initialized data of the correct types to this function.

### Here is the VBA implementation
{% highlight vb %}
Function min(xs As Variant) As Variant
    If size(xs) = 1 Then    ' base case
        min = head(xs)
    Else                    ' inducation step
        min = minVal(head(xs), min(tail(xs)))
    End If
End Function

Function minVal(a As Variant, b As Variant) As Variant
    If a < b Then
        minVal = a
    Else
        minVal = b
    End If
End Function

Function size(xs As Variant) As Long
    size = (UBound(xs) - LBound(xs) + 1)
End Function
{% endhighlight %}
<br/>
### How to find the min in VBA ?
{% highlight vb %}
Sub main()

    Dim m As Variant
    m = min(Array(1, 3, -5))

End Sub
{% endhighlight %}
<br/>
Thanks for reading. I hope you have learnt something and this article helped you better understand how to think recursively. If you have any comments or improvement suggestions <a href="mailto:hello@assadnavi.ch">get in touch</a>

### References
<a href="https://www.functionalvba.com/2023/05/29/function-head-over-a-vba-array.html">head()</a>

<a href="https://www.functionalvba.com/2023/06/05/function-tail-over-a-vba-array.html">tail()</a>