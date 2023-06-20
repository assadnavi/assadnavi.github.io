---
layout: post
title:  "What can be cons() in vba ?"
date:   2023-06-12 00:00:00 +0000
published: true
---
The last tool we need before solving our first problem with a recursive approach is `cons`. In functional programming, `cons` is a datastructure which holds a pair of things (I say 'things' because they can be either a value or a reference). A cons is simply a pair (a, b). This datastructure can be used to represent a list of items. See below an example.
<br/><br/>

{% highlight cpp %}

The list [1] can be constructed as cons(1, empty)

The list [1, 2] can be constructed as cons(1, cons(2, empty))

Where empty is any symbol that represents a non-value (e.g. Empty in vba)
{% endhighlight %}

<br/>
The advantage of using cons to build list is that `head()` and `tail()` become trivial (respectively retrieving the first or the second elements of the pair). We call `consing` the operation of adding an element at a beginning of a list. A basic approach to build a cons in vba will be to base it on arrays and create a function to add a value at a beginning of an existing array. By doing so, we will be able to reuse the implemented functions head() and tail() over its output. The function cons() takes two parameters, a value and an array, and returns an array. Here are some examples showing the function logic.
<br/><br/>
{% highlight cpp %}
cons of 1 and array [2, 3] is array [1, 2, 3]

cons of 0 and array [] is array [0]

cons of "a" and array ["b", 0] is array ["a", "b", 0]
{% endhighlight %}
<br/>
See below the implementation of the function cons(). It is assumed that the caller will pass initialized and valid data for both of its parameters. This implementation is generic therefore can be used with any array types.
<br/><br/>
{% highlight vb %}
Function cons(x As Variant, xs As Variant) As Variant

    Dim result() As Variant
    ReDim result(1 + UBound(xs))

    result(0) = x
    Dim i As Long
    For i = LBound(xs) To UBound(xs) Step 1
        result(i + 1) = xs(i)
    Next
    cons = result

End Function
{% endhighlight %}
<br/>
How can this function be used in a vba code ?
<br/><br/>
{% highlight vb %}
Sub main()

    Dim r As Variant

    r = cons("a", Array())
    ' r is the array ["a"]

    r = cons("a", Array("b", "c"))
    ' r is the array ["a", "b", "c"]

    r = cons("a", cons("z", Array(1, 2, 3)))
    ' r is the array ["a", "z", 1, 2, 3]

End Sub
{% endhighlight %}
<br/>
Thanks for reading. If you have any comments <a href="mailto:hello@assadnavi.ch">get in touch</a>.