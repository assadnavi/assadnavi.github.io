---
layout: post
title:  "#6 Interview Preparation | 'Complete the code' series "
date:   2023-10-04 00:00:00 +0000
published: true
---

## What is the purpose of this article ?

The 'Complete the code' series is aiming to prepare programmers to coding interviews where they are requested to complete a piece of code to perform a specific task. This article proceeds in a similar way by presenting 3 codes containing gaps to be filled by the reader. This challenge is addressed primarily to the following people :

- People preparing for coding interviews
- People willing to evaluate their coding skills
- People interested by coding challenge

Additionally information :
- The difficulty of this challenge is ranked as : **Beginner**
- The topic of this challenge is categorized as : **Core Programming**
- Programming language : **JavaScript**

<br/>

## Question \#1

Given the function **day(d)**, where **d** is an integer parameter representing a valid date in the format yyyymmdd (example : 8th April 2020 is the integer 20200408). Complete the function **day(d)** such that it returns an integer representing the day of **d**. See below some examples illustrating the expected behavior.

{% highlight js %}

day(20200401) // is expected to return 1

day(20191228) // is expected to return 28

{% endhighlight %}

<br/>

Complete the below code by replacing ??? with the right instructions.

{% highlight js %}

function day(d) { 
    return ???
}

{% endhighlight %}

<br/>

## Solution \#1

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

To retrieve the day from **d**, the modulo operator can be used, dd can be obtained by taking the modulo 100 of **d**. See below the answer.

{% highlight js %}

function day(d) { 
    return d % 100
}

{% endhighlight %}

<br/>

## Question \#2

Given the function **month(d)**, where **d** is an integer parameter representing a valid date in the format yyyymmdd. Complete the function **month(d)** such that it returns an integer representing the month of **d**. See below some examples illustrating the expected behavior.

{% highlight js %}

month(20200401) // is expected to return 4

month(20191228) // is expected to return 12

{% endhighlight %}

<br/>

Complete the below code by replacing ??? with the right instructions.

{% highlight js %}

function month(d) { 
    return ???
}

{% endhighlight %}

<br/>

## Solution \#2

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

To retrieve the month from **d**, a combination of the modulo operator and the division operator can be used. In the below answer, the function **parseInt()** is used to take the integer part of the division.

{% highlight js %}

function month(d) { 
    return parseInt(d / 100) % 100
}

{% endhighlight %}

<br/>

## Question \#3

Given the function **year(d)**, where **d** is an integer parameter representing a valid date in the format yyyymmdd. Complete the function **year(d)** such that it returns an integer representing the year of **d**. See below some examples illustrating the expected behavior.

{% highlight js %}

year(20200401) // is expected to return 2020

year(20191228) // is expected to return 2019

{% endhighlight %}

<br/>

Complete the below code by replacing ??? with the right instructions.

{% highlight js %}

function year(d) { 
    return ???
}

{% endhighlight %}

<br/>

## Solution \#3

**Note** : Readers willing to answer this coding question by themselves should stop reading here. Below this point, the solution will be discussed and the answer will be provided.

To retrieve the year from **d**, the division operator can be used, yyyy can be obtained by dividing **d** by 10000. In the below answer, the function **parseInt()** is used to take the integer part of the division.

{% highlight js %}

function year(d) { 
    return parseInt(d / 10000)
}

{% endhighlight %}

<br/>

Thanks for reading. I hope you have learnt something while working on this "Complete the code" article. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>.