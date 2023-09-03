---
layout: post
title:  "Computing compound interest"
date:   2023-08-29 00:00:00 +0000
published: true
---
In this article, we will use functional programming to solve a problem related to the financial topic. The goal of this article is to build a recursive solution to the yearly compounding interest problem and present a vba implementation for it. In a future article, we will improve this solution and provide the continuous compounding solution.
<br/>
<br/>
## What is a compound interest ?
When investing money, the compound interest is the total money obtained at the end of the investment period including the re-investment of intermediate gains. As an example, assume we invest 100 USD for 2 years at an annual rate of 10%. What is the money we will have at the end of the second years ? Here is the calculation breakdown.

{% highlight cpp %}
Start of year 1 =>  Investing 100 USD

End of year 1   =>  Earning 10% of 100 USD (10 USD)

Start of year 2 =>  Investing 110 USD

End of year 2   =>  Earning 10% of 110 USD (11 USD)

Final money     =>  121 USD
{% endhighlight %}
As you can see in this example, the compound interest accelerates the investment profit because it reinvests the intermediate gains each year (at the same investment rate).
<br/>
<br/>
## What is the mathematical formula ?
In our solution, we will solve the generic problem which can be stated as : 
{% highlight pseudo %}
What is the final amount after investing X for Y years at an annual rate of R ?
{% endhighlight %}

Here are the mathematical formulas for investment periods of 1 year, 2 years and more.

{% highlight pseudo %}
A = invested amount
R = annual investing rate (e.g. 0.06 for 6%)
N = period of investment in years

(Investing for a period of 1 year)

(1) Final_Amount = A * (1 + R)


(Investing for a period of 2 years)

(2) Final_Amount = A * (1 + R) * (1 + R)


(Investing for a period of N years)

(3) Final_Amount = A * (1 + R) ^ N [where ^ is the power operation]

{% endhighlight %}
<br/>
## Can we solve it recursively ?
Yes! Let's look closely at the formula for N years (3), we can see that the solution of investing an extra year is always obtained by multiplying the result by `(1 + R)`. This fact can be used to build our `induction step`. For our recursion `base case`, we can use the formula (1). Now that we have the two elements required to build a recursive function, let's formalize it.

{% highlight pseudo %}
A = invested amount
R = annual investing rate (e.g. 0.06 for 6%)
N = period of investment in years

F(A, R, N) = F(N - 1) * (1 + R)
F(A, R, 1) = A * (1 + R)

{% endhighlight %}
<br/>
## VBA implementation
The below implementation behaves correctly only when the parameter `years` is a positive integer. As an improvement, one can define this function to behave correctly also when the parameter `years` is set to 0. This improvement is left to the reader.
{% highlight vb %}
Function calcInterest(amount As Long, rate As Double, years As Integer)

    If (years = 1) Then
        calcInterest = amount * (1 + rate)
    Else
        calcInterest = calcInterest(amount, rate, years - 1) * (1 + rate)
    End If

End Function
{% endhighlight %}
<br/>
## How to use this function ?
{% highlight vb %}
Sub main()

    Dim final_amount As Double

    final_amount = calcInterest(100, 0.1, 2)
    'final_amount is 121

    final_amount = calcInterest(100, 0.1, 20)
    'final_amount is 672.749994932561

End Sub
{% endhighlight %}

Thanks for reading. I hope you have learnt something and this article helped you better understand how to think recursively. If you have any comments or improvement suggestions <a href="mailto:hello@assadnavi.ch">get in touch</a>