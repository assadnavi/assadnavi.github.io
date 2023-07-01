---
layout: post
title:  "Recursive factorial function"
date:   2023-07-01 00:00:00 +0000
published: true
---
Hello everyone, it is now time to look at another type of recursive function. The general pattern is the same, we try to solve the general problem by solving recursively a smaller part of the problem, but this time it will be related to a mathematical function which will not require any array manipulations. Therefore we wont need the help of the previously defined functions `head`, `tail` and `isArrayEmpty`. In this article we will look at implementing the factorial function in vba with a functional programming style using recursion. First, what is the factorial function ? Some examples below.
<br/><br/>
{% highlight cpp %}
Factorial of -1 is not defined

Factorial of 1.2 is not defined

Factorial of 1 is 1

Factorial of 2 is 2

Factotial of 3 is 6

Factorial of 4 is 24

Factorial of N is N * (N-1) * (N-2) * ... * 1
{% endhighlight %}
<br/>
The factorial function is defined only for positive integers. Like stated in the last example, it can be defined as the multiplication of all the positive intergers smaller or equal than its parameter. We are now interested to better understand how this function can be computed recursively. Lets rewrite the last example in another form.
<br/><br/>
{% highlight cpp %}
Factorial of N      is      N * (N-1) * (N-2) * ... * 1

Factorial of (N-1)  is          (N-1) * (N-2) * ... * 1

Factorial of N      is      N * Factorial(N-1)
{% endhighlight %}
<br/>
As you can see, we were able to represent solution of factorial(N) with the result of Factorial(N-1). This will be our `induction step`. Addtionally, since the smallest number we can compute the factorial is 1, factorial(1) is our `base case`. The base case is where we will stop evaluating this function recursively since we know its answer. Here is the final mathematical representation.
<br/><br/>
{% highlight cpp %}
factorial(1) => 1

factorial(N) => n * factorial(N-1)
{% endhighlight %}
<br/>
Lets dive into its vba implementation. We will create one function called `factorial`. It will take a single parameter of type `Long` and will return another Long which will contain the result of the computation. As a reminder, this function takes a Long but is defined only for positive integers. It is the responsibility of the caller to pass initialized data of the correct types to this function.
<br/><br/>
{% highlight vb %}
Function factorial(n As Long) As Long

    If (n <= 1) Then
        factorial = 1
    Else
        factorial = n * factorial(n - 1)
    End If

End Function
{% endhighlight %}
<br/>
How can this function be used in a vba code ?
<br/><br/>
{% highlight vb %}
Sub main()

    Dim r As Long
    r = factorial(1)
    ' r is 1

    r = factorial(3)
    ' r is 6

    r = factorial(4)
    ' r is 24

End Sub
{% endhighlight %}
<br/>
Thanks for reading. I hope this article helped you better understand how to think recursively. If you have any comments <a href="mailto:hello@assadnavi.ch">get in touch</a>