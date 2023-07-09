---
layout: post
title:  "First recursive function in vba"
date:   2023-06-19 00:00:00 +0000
published: true
---
Finally we got to the point where we can write our first recursive function. In this article, we will write a recursive function in vba to solve the array membership problem, which can be stated as : For a given array and value, is the value contained in the array ? You can see the logic of the function below.
<br/><br/>

{% highlight cpp %}
Is 1 contained in the array [3, 2, 1] ? Yes

Is 8 contained in the array [9, 10, 11] ? No

Is "z" contained in the array ["a", "b", "c"] ? No
{% endhighlight %}

<br/>
 The idea of using recursive functions is to solve the entire problem by solving a smaller piece of it multiple times. To do so, we are going to be helped by the functions `head()` and `tail()` that have been implemented in previous articles. See references <a href="https://www.functionalvba.com/2023/05/29/function-head-over-a-vba-array.html">head()</a>,&nbsp;<a href="https://www.functionalvba.com/2023/06/05/function-tail-over-a-vba-array.html">tail()</a>. Here is a quick reminder of those two functions.
<br/><br/>
{% highlight cpp %}
head of the array ["a", "b", "c"] is "a"

head of a empty-array is not defined

tail of the array ["a", "b", "c"] is the array ["b", "c"]

tail of a empty-array is not defined
{% endhighlight %}
<br/>
In this article, for simplicity for the reader, I will not discuss the entire theory about recursive functions but rather provide a pragmatic introduction. To explain the recursive procedure to solve the array membership problem, I will use an example and display all the required steps.
<br/><br/>

{% highlight cpp %}
// Start
Is 1 contained in the array [3, 2, 1] ?

// Step 1
Is 1 equal to 3 ? No. Start again with array [2, 1]

// Step 2
Is 1 equal to 2 ? No, Start again with array [1]

// Step 3
Is 1 equal to 1 ? Yes, 1 is equal to 1

{% endhighlight %}

<br/>
Now that we have the steps, let me show you the same example by displaying where the functions head() and tail() are used.
<br/><br/>

{% highlight cpp %}
// Start
Is 1 contained in the array [3, 2, 1] ?

// Step 1
Is 1 equal to head([3, 2, 1]) ? No. Start again with tail([3, 2, 1])

// Step 2
Is 1 equal to head([2, 1]) ? No. Start again with tail([2, 1])

// Step 3
Is 1 equal to head([1]) ? Yes
{% endhighlight %}

<br/>
Vba implementation : The function is called `isMember` and takes two parameters, one value and one array. The function returns a boolean, true if the value is contained in the array otherwise false. In this implementation, it is assumed that the caller has checked that the parameters are initialized and of the correct type before calling this function. Additionally for code clarity, we have added a helper function `isArrayEmpty` which returns true if and only if its parameter is an empty array.
<br/><br/>
{% highlight vb %}
Function isMember(x As Variant, xs As Variant) As Boolean

    If isArrayEmpty(xs) Then
        isMember = False
    ElseIf head(xs) = x Then
        isMember = True
    Else
        isMember = isMember(x, tail(xs))
    End If

End Function

Function isArrayEmpty(xs As Variant) As Boolean

    isArrayEmpty = (UBound(xs) - LBound(xs) + 1) = 0

End Function

{% endhighlight %}
<br/>
The first if-condition criteria is called the `base case` of the recursion. We reach this scenario when the array parameter is empty and therefore we return false (an element can never be found in an empty array). The second if-condition criteria checks if the value is found at the first position of the array (head). If yes, we return true, otherwise we run the function again by dropping the first element of the array (tail). This last step is called the `induction step`. We will discuss more about this code pattern and terminology in future articles. How can this function be used in a vba code ?
<br/><br/>
{% highlight vb %}
Sub main()

    Dim r As Boolean
    r = isMember(2, Array(1, 2, 3))
    ' r is true

    r = isMember("z", Array("x", "y", "z"))
    ' r is true

    r = isMember(2, Array(1, 3, 5, 7))
    ' r is false

End Sub
{% endhighlight %}
<br/>
Thanks for reading. If you have any comments <a href="mailto:hello@assadnavi.ch">get in touch</a>.