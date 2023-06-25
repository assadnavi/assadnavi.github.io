---
layout: post
title:  "Recursive array sum function"
date:   2023-06-25 00:00:00 +0000
published: true
---
It is time for our second recursive function in vba. In this article, we will implement a recursive solution to sum numbers from an array. As our first recursive function, we will use the previously implemented helper functions  <a href="http://localhost:4000/2023/05/29/function-head-over-a-vba-array.html">head()</a>, <a href="http://localhost:4000/2023/06/05/function-tail-over-a-vba-array.html">tail()</a> and <a href="http://localhost:4000/2023/06/19/first-recursive-function-in-vba.html">isArrayEmpty()</a>. For reference, I have linked them to the articles containing their implementation. Here is logic we want to implement.
<br/><br/>

{% highlight cpp %}
Sum of array [1] is 1

Sum of array [] is 0

Sum of array [-1, 0, 1, 2] is 2
{% endhighlight %}

<br/>
Now that we know the problem we would like to solve, let's look at how we should structure the logic such that we can solve it recursively (functional programming style). When defining recursive functions, there are two major things to look at. 1) the `base case`, where we will indicate to stop the recursive calls 2) the `induction step`, where we indicate how we can find the final answer by using the function recursively on a smaller problem. Mathematically, it looks like below, where <i>x1, x2, ..., xn</i> are the n items of an array. The first and the second lines are respectively the base case and the inducation step.
<br/><br/>

{% highlight cpp %}

sum() => 0

sum(x1, x2, x3, ..., xn) => x1 + sum(x2, x3, ..., xn)

{% endhighlight %}
<br/>
Lets now write this mathematical function in vba. The function takes a single parameter which is a vba array. To make it more generic and be able to sum over various number types (Integer, Long, Double), we will keep its type variant. The function will have to deal with two scenarios : <br/>1) When the parameter is an empty array => The result is 0<br/>2) When the parameter is not empty => The result is the first element added to the sum of the rest.<br/>
As always, it is the responsibility of the caller to pass initialized data of the correct type to the function.
<br/><br/>

{% highlight vb %}
Function arraySum(xs As Variant) As Double

    If isArrayEmpty(xs) Then
        arraySum = 0
    Else
        arraySum = head(xs) + arraySum(tail(xs))
    End If

End Function
{% endhighlight %}
<br/>
How can this function be used in a vba code ?
<br/><br/>
{% highlight vb %}
Sub main()

    Dim r As Variant
    r = arraySum(Array(1, 2, 3))
    ' r is 6

    r = arraySum(Array())
    ' r is 0

    r = arraySum(Array(1.1, 2.2))
    ' r is 3.3

End Sub
{% endhighlight %}
<br/>
Thanks for reading. I hope this article helped you better understand how to think recursively. If you have any comments <a href="mailto:hello@assadnavi.ch">get in touch</a>