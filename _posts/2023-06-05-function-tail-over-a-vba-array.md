---
layout: post
title:  "Function tail() over a vba array"
date:   2023-06-05 00:00:00 +0000
published: true
---
In this article, we will look at our second tool that will help us solve problems in a recursive programming style. The function is called `tail`. The function takes an array as a parameter and returns a copy of it without its first element. The order of the elements is preserved. The function tail is defined only for non-empty arrays. See examples of its logic.
<br/><br/>

{% highlight cpp %}

tail of array [1, 2, 3, 4] is array [2, 3, 4]

tail of array ["a", "b"] is array ["b"]

tail of array ["z"] is array []

tail of array [] is not defined

tail of non-array is not defined
{% endhighlight %}

<br/>
It is important to note that the function `tail` returns a new array and keep the original array unchanged (no side-effect). In the functional programming style, it is the responsibility of the caller to verify that the input array is non-empty before calling the function tail. In this article, we will provide a vba implementation of this function.
<br/><br/>
{% highlight vb %}
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
<br/>
Once this function is defined, you can call it in a vba code as below. As a reminder, the function tail will produce a run-time error if an empty or an uninitialized array is passed as its parameter. It is the responsibility of the caller to check its input before calling the function. A post will be written to cover this subject.
<br/><br/>
{% highlight vb %}
Sub main()

    Dim t As Variant
    t = tail(Array("a", "b", "c"))
    MsgBox t

End Sub
{% endhighlight %}
<br/>
In the future, we will rework this example to implement it over a more functional datastructure called `cons`. Thanks for reading. If you have any comments <a href="mailto:hello@assadnavi.ch">get in touch</a>.