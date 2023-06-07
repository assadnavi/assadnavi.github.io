---
layout: post
title:  "How to head an array ?"
date:   2023-06-07 00:00:00 +0000
published: true
---
One convenient way to solve a problem is to write recursive functions. When we can write recursive functions in vba but the tooling around (head, tail, cons, ...) to process data recursively is not provided in the core language definition. In this blog, we are aiming to build the various missing functions needed to write vba code in a functional programming style. To do so, we will start building our first useful function, `head`. The function head has a different name depending on the programming language, as an example, it is called `car` in Scheme or Lisp. Its purpose is to return the first element of a list and it is defined only for non-empty list. In this article, we are going to provide a vba implementation of the head function taking as a parameter an array. In the future, we will look at a more functional datastructure called cons instead of using arrays. See below its implementation.

{% highlight vb %}
Function head(xs As Variant) As Variant

    If IsEmpty(xs) Then
        head = Empty
    ElseIf UBound(xs) < LBound(xs) Then
        head = Empty
    Else
        head = xs(LBound(xs))
    End If

End Function
{% endhighlight %}

The function takes an array, we assume here that the user passes an initialized array, more checks can be added to return a meaningful message if not. The function returns the first item of the array parameter. In scenarios where the input array is not inititalized or empty, the function returns the value Empty. Why returning Empty ? In vba, Empty is used to define a non-value compared to Null which defines a non-valid value. An error could also have been returned but this makes the use of the function more difficult. See below how the function head can be used in a vba code.

{% highlight vb %}
Sub main()

    Dim h As Variant
    h = head( Array(1, 2, 3) )

    If Not IsEmpty(h) Then
        ' ...
    End If

End Sub
{% endhighlight %}
