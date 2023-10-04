---
layout: post
title:  "#1 Interview Preparation | How to sort an array with quicksort ?"
date:   2023-09-18 00:00:00 +0000
published: true
---

## Code challenge

Given an array of numbers, write the function **quicksort(...)** which sorts in ascending order the input with the quicksort method.

- The difficulty of this challenge is ranked as : **Advanced**
- The topic of this challenge is categorized as : **Algorithm**

<br/>

## Expected output

{% highlight cpp %}

1) Quicksort of the array [4, 5, 1] is the array [1, 4, 5]

2) Quicksort of the array [] is the array []

3) Quicksort of the array [-1, 10, -2] is the array [-2, -1, 10]

{% endhighlight %}

<br/>

## For whom is this article ?

This article aims to introduce the reader to a sorting algorithm called **quicksort**. It presents the quicksort method alongside with its code implementation and is addressed to the following people :
- People preparing for coding interviews
- People aiming to improve their coding skills by learning the quicksort algorithm
- People interested in algorithms and recursive thinking

<br/>

## What is quicksort ?

Quicksort is a recursive **sorting** function (also called algorithm) which has the goal of sorting data. Data can be sorted in different ways, as an example a list of numbers can be sorted in an ascending or descending order. In this article we will implement the quicksort method to sort a list of numbers in an ascending order. See below the expected behaviour of our sorting function.

<br/>

## How does it work ?

Quicksort takes as an input an array of elements, and returns its input sorted. The idea of the quicksort algorithm is the following : First it selects a **pivot** (the left-most element in the array), then it splits all the elements (except the pivot) into two partitions (1. elements smaller or equal than the pivot, 2. elements greater than the pivot). Once the partitions are obtained, it calls recursively quicksort on both of the partitions before concatenating the **sorted** partitions and the pivot.

Here are the steps.
1. Check if the input array is empty (if yes, it is sorted). If not, go to step 2
2. Select the first element of the array (pivot)
3. Find all the elements smaller or equal than the pivot (excluding the pivot)
4. Find all the elements greater than the pivot
5. Concatenate quicksort of (3), the pivot and quicksort of (4)

See below a step-by-step example.
{% highlight cpp %}
quicksort of [5, 6, 2]
1. Is the input array empty ? No, go to step 2
2. The "pivot" is : 5
3. All the elements smaller or equal are : [2]
4. All the elements greater than are : [6]
5. Concatenating quicksort of [2], the pivot 5 and quicksort of [6] is [2, 5, 6]
{% endhighlight %}

The result of step 5 is the sorted array [2, 5, 6]

**Note :** In step 5, quicksort of [2] is [2] because it is an array of one element (similarly quicksort of [6] is [6]). In case the array has more than one element, the entire steps should be applied.

<br/>

## Coding quicksort(...)

This section aims to present an implementation of the quicksort algorithm in vba which follows the functional programming principles. The below code contains all the auxiliary functions and can be run on your machine simply by copying and pasting it in your coding environment.

The quicksort function uses the below helper functions to manipulate arrays. Those functions do not have any side effects meaning that they always create their output without modifying any of their inputs. 
- **cons(x, xs)** : returns a new array containing, in order, the element **x** and all the elements of the array **xs**
- **concat(xs, ys)** : returns a new array containing, in order, all the elements of the array **xs** and all the elements of the array **ys**
- **head(xs)** : returns the first element of the array **xs**
- **tail(xs)** : returns a new array containing all the elements of the array **xs** except its first element
- **size(xs)** : returns the size of the array **xs**
- **smallerOrEqualThan(x, xs)** : returns a new array with all the elements of **xs** that are smaller or equal than **x**
- **greaterThan(x, xs)** : returns a new array with all the elements of **xs** that are greater than **x**

<br/>

{% highlight vb %}

Function quicksort(xs As Variant) As Variant

    If size(xs) < 1 Then
        quicksort = xs
    Else
        pivot = head(xs)
        smallerOrEqual = smallerOrEqualThan(pivot, tail(xs))
        greater = greaterThan(pivot, tail(xs))
        quicksort = concat(concat(quicksort(smallerOrEqual), Array(pivot)), quicksort(greater))
    End If

End Function

Function greaterThan(x As Variant, xs As Variant) As Variant

    If size(xs) < 1 Then
        greaterThan = Array()
    ElseIf head(xs) > x Then
        greaterThan = cons(head(xs), greaterThan(x, tail(xs)))
    Else
        greaterThan = greaterThan(x, tail(xs))
    End If

End Function

Function smallerOrEqualThan(x As Variant, xs As Variant) As Variant

    If size(xs) < 1 Then
        smallerOrEqualThan = Array()
    ElseIf head(xs) <= x Then
        smallerOrEqualThan = cons(head(xs), smallerOrEqualThan(x, tail(xs)))
    Else
        smallerOrEqualThan = smallerOrEqualThan(x, tail(xs))
    End If

End Function

Function concat(xs As Variant, ys As Variant) As Variant

    If size(xs) < 1 Then
        concat = ys
    Else
        concat = cons(head(xs), concat(tail(xs), ys))
    End If

End Function

Function size(xs As Variant) As Long

    size = (UBound(xs) - LBound(xs) + 1)

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

<br/>

## VBA examples
This section shows examples of how the quicksort function, defined above, can be used.

Thanks for reading. I hope you have learnt something and this article helped you better understand how quicksort works. If you have any questions or comments, don't hesitate to <a href="mailto:hello@assadnavi.ch">contact me</a>


{% highlight vb %}

Sub main()

    qs = quicksort(Array())
    ' returns the sorted array []

    qs = quicksort(Array(1, 1, 1, 99, 12, 14, 4, 12, 18, 12))
    ' returns the sorted array [1, 1, 1, 4, 12, 12, 12, 14, 18, 99]

    qs = quicksort(Array(-1, 1, 1, 99))
    ' returns the sorted array [-1, 1, 1, 99]

    qs = quicksort(Array(-1, -1, -11, 0, 3))
    ' returns the sorted array [-11, -1, -1, 0, 3]

End Sub

{% endhighlight %}
