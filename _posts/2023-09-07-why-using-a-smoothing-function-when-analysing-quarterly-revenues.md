---
layout: post
title:  "Why using a smoothing function when analysing quarterly revenues ?"
date:   2023-09-07 00:00:00 +0000
published: true
---
In this article we will look at the publicly traded company UBER and analyse its quarterly revenues. To do so, we will compute the revenue growths and discuss the reasons to use a **smoothing** function. This article provides the definition of the smoothing function **moving average** and shows its impact. Additionally, we present a code in VBA allowing the readers to reproduce the presented results and have a formal definition of the calculation logic.

<br/>
## What is a revenue and why is it important ?
A company revenue is the total income generated from the sales of goods or services. The revenue of the company does not include the costs associated with its generation. It is an important information since its shows the ability of a company to expend and potentially gain market shares and therefore, with other factors, is used to estimate the company value. Publicly traded companies are releasing every 3 months quarterly results which includes their revenue for that period. We use the notation Q1-YYYY , ... , Q4-YYYY respectively for the months [Jan, Feb, Mar] , ... , [Oct, Nov, Dec] in the year YYYY. See below UBER revenues for each quarter since 2020. 

(The below data can be downloaded in CSV format from the Resources section <a href="/resources.html">here</a>)
<br/>

| Quarter | Revenue (in millions $) |
| ------- | ------- |
| Q1-2020      | 3543     
| Q2-2020      | 2241     
| Q3-2020      | 3129       
| Q4-2020      | 3165
| Q1-2021      | 2903
| Q2-2021      | 3929
| Q3-2021      | 4845
| Q4-2021      | 5778
| Q1-2022      | 6854
| Q2-2022      | 8073
| Q3-2022      | 8343
| Q4-2022      | 8607
| Q1-2023      | 8823
| Q2-2023      | 9230

<br/>
## How are the quarterly revenues compared ?
To have a meaningful and avoid seasonality effect which can arise when mixing revenue from unrelated periods, the quarterly revenues are compared against the same quarter from a previous year. As an example, Q2-2023 is compared with Q2-2022. This indicates how the revenues grew or declined over a year. The **growth** is defined by the function `growth(a, b) = (b - a) / a` where in this case, **b** is the Q2-2023 revenue and **a** is the Q2-2022 revenue. See below a graph showing the growths (in percent) and the respective revenues (in millions).

<br/>
<img src="/assets/Picture1.png"/>
<small>[Figure 1]</small>

<br/>
## Why smoothing ?
As you can see in the above graph, the growth can be very sensible to variations of revenues which can lead to spikes. The spikes at points Q2-2021 and Q1-2022 are **singularities** that can create difficulties when estimating the company valuation based on the actual revenue growth. Singularities can be related to one time event such as :
- Selling part of the company business
- Exceptional gain from investments
- Exceptional economic situation (e.g. covid)

When estimating a company valuation, singular events can make the calculation **unstable**. In this case, the point Q1-2022 gives us a revenue growth of ~136% over a period of one year (~136% revenue growth means that we expect UBER to grow its revenue by ~2.36 times each year). From the same graph, we can also see that in the short-time periods before and after Q1-2022, the revenues had a much lower growth. In other terms, the **growth** function speed of change is too high and that's the reason we need the help of **smoothing** functions. 

<br/>
## Smoothing functions
A smoothing function aims to reduce the speed of change of the data it covers. By doing that, the **smoothed** data would be usable to compute company valuation (and other metrics) with a reduced risks of **unstable** calculations. For our example, we are going to use the smoothing function **moving average** to reduce the speed of the growth function. How does it work ? Instead of comparing only one quarter to another (e.g. Q2-2023 and Q2-2022) we compare more quarter growths which has the effect of reducing the impact of the latest growth. Here is a definition using the last three growth values equally weighted, `moving_average(g1, g2, g3) = (g1 + g2 + g3) / 3` where **g1**, **g2** and **g3** are the last 3 quarterly growths. See below a graph showing the growths (in percent) and the smoothed values computed with moving_average.

<br/>
<img src="/assets/Picture2.png"/>
<small>[Figure 2]</small>

<br/>
## VBA code and examples
This section is for readers interested either by reproducing the numbers used to draw the two graphs (Figure 1 and Figure 2) or by understanding how to code a program computing the smoothed quarterly revenue growths. As for the previous posts, the code implementation is following the functional programming principles and using recursive design.

For the first type of readers, the below code can be copied in a VBA editor. By running the function **main()**, the variables **g** and **s** will be populated respectively with the quarterly revenue growths and their smoothed value. The variable **r** is initialized with UBER quarterly revenues since 2020, the numbers can be changed in case you want to apply this calculation for another set of data.

For the second type of readers, enjoy the ride :)

Thanks for reading. I hope this article helped you better understand how smoothing functions can be useful. If you have any comments or improvement suggestions <a href="mailto:hello@assadnavi.ch">get in touch</a>.

<br/>

{% highlight vb %}

Sub main()

    Dim r As Variant
    Dim g As Variant
    Dim s As Variant

    r = Array(3543, 2241, 3129, 3165, 2903, 3929, 4845, 5778, 6854, 8073, 8343, 8607, 8823, 9230)
    ' r is an array containg UBER quarterly revenues since 2020

    g = growth(r)
    ' g is an array containing the quarterly revenue growths [Figure 1]

    s = smoothed(g)
    ' s is an array containing the moving_average of the quarterly revenue growths [Figure 2]

End Sub

Function smoothed(xs As Variant) As Variant

    If size(xs) < 3 Then
        smoothed = Array()
    Else
        smoothed = cons((head(xs) + head(tail(xs)) + head(tail(tail(xs)))) / 3, smoothed(tail(xs)))
    End If

End Function

Function growth(xs As Variant) As Variant

    If size(xs) <= 4 Then
        growth = Array()
    Else
        growth = growthCalc(xs, tail(tail(tail(tail(xs)))))
    End If
    
End Function

Function growthCalc(xs As Variant, ys As Variant) As Variant

    If size(xs) < 1 Or size(ys) < 1 Then
        growthCalc = Array()
    Else
        growthCalc = cons((head(ys) - head(xs)) / head(xs), growthCalc(tail(xs), tail(ys)))
    End If

End Function

Function size(xs As Variant) As Long

    size = (UBound(xs) - LBound(xs) + 1)

End Function

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

Function head(xs As Variant) As Variant

    head = xs(LBound(xs))

End Function

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
