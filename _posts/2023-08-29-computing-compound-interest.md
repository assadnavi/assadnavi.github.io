---
layout: post
title:  "What is compounding interest and how to compute it ?"
date:   2023-08-29 00:00:00 +0000
published: false
---
In this article, we present and explain the impact that compounding interest can have on a financial investment. We present a recursive solution to its calculation and provide a vba code allowing the readers to compute it for their own scenarios.

<br/>
## What is compounding interest ?
When investing money, compounding interest means that the intermediate gains are reinvested until the end of the investment period at the same rate. As an example, assume we invest $100 for 2 years at an annual rate of 10%. What is the amount we will have at the end of the second years ? Here is the calculation breakdown.

{% highlight cpp %}
Start of year 1 =>  Investing 100 USD

End of year 1   =>  Earning 10% of 100 USD (10 USD)

Start of year 2 =>  Investing 110 USD

End of year 2   =>  Earning 10% of 110 USD (11 USD)

Final amount     =>  121 USD
{% endhighlight %}
As you can see in this example, the compounding effect accelerates the investment profit because it reinvests the intermediate gains each year (at the same investment rate).

<br/>
## Impact of compounding on an investment
In this section we show the impact of compounding interest by simulating an investment of $100 for a period of 20 years at an annual rate of 10%. The below graph shows the total amount obtained by the investor for both scenarios, with and without compounding.

<br/>
<img src="/assets/compounding/Figure1.png"/>
<small>[Figure 1]</small>

<br/>
## How to compute it ?
We will solve the generic problem which can be stated as : 

**What is the final amount obtained after investing X for Y years at an annual rate of R ?**

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
Yes! Let's look closely at the formula for N years **(3)**, we can see that the solution of investing an extra year is always obtained by multiplying the result by `(1 + R)`. This fact can be used to build our `induction step`. For our recursion `base case`, we can use the formula **(1)**. Now that we have the two elements required to build a recursive function, let's formalize it.

{% highlight pseudo %}
A = invested amount
R = annual investing rate (e.g. 0.06 for 6%)
N = period of investment in years

F(A, R, N) = F(N - 1) * (1 + R)
F(A, R, 1) = A * (1 + R)

{% endhighlight %}
<br/>

## VBA code and examples
This below implementation expects all the parameters : `amount`, `rate` and `years` to be positive. As an improvement, one can define this function to manage cases where the parameters are smaller than or equal to zero. This improvement is left to the reader.

The below code uses the function `invest()` to compute the amount obtained by the investor after investing $100 at the annual rate of 10 % for a period of 2 and 20 years. This code can be amended to fit your scenarios.

Thanks for reading. I hope you have learnt something and this article helped you better understand how to think recursively. If you have any comments or improvement suggestions <a href="mailto:hello@assadnavi.ch">get in touch</a>

<br/>

{% highlight vb %}
Sub main()

    Dim final_amount As Double

    final_amount = invest(100, 0.1, 2)
    'final_amount is 121

    final_amount = invest(100, 0.1, 20)
    'final_amount is 672.749994932561

End Sub

Function invest(amount As Long, rate As Double, years As Integer)

    If (years = 1) Then
        invest = amount * (1 + rate)
    Else
        invest = invest(amount, rate, years - 1) * (1 + rate)
    End If

End Function

{% endhighlight %}
