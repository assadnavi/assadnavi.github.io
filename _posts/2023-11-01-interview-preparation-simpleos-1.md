---
layout: post
title:  "#10 Interview Preparation | 1st coding interview with SimpleOS"
date:   2023-11-01 00:00:00 +0000
published: true
---

<style>
  .code-solution pre {
    border-width:2px; 
    border-style:solid;
    border-color:green;
  }
</style>

## Context

You are invited for a first interview at the company SimpleOS. You meet the first interviewer, Orolo, which gives you more details about the programming role you have applied to. He offers you water and coffee, and tells you that this interview aims to evaluate your coding skills. He brings you to a room where you have access to a computer (without internet connection), a coffee machine, a pen and some blank papers. On the table, you can see a paper containing the coding question. Orolo tells you that the computer is already configured with the necessary tools (editor, interpreter, compiler) and you can use all the items at your disposal to solve the coding question. He leaves you alone saying that he will come back in 90 minutes to evaluate your progress.

### Your actions

[Read the question](#question)

[Ask a hint](#hint)

[Your solution is ready](#solution)

<br/>

## Question 
<a name="question"></a>
<details closed>
  <summary>Click to view</summary>
<br/>
<h3>Background</h3>

In SimpleOS, a <b>folder</b> is represented with a structure with attributes <b>name</b>, <b>files</b> and <b>subfolders</b>. See below a JSON representation of a simple folder containing two files and without any subfolders.
<br/>
<br/>
<b>(Ref 1)</b>

{% highlight js %}
{
  "name"    : "root",
  "files"   : ['readme.txt', 'hello.txt'],
  "subfolders" : []
}
{% endhighlight %}

To represent a <b>folder</b> with subfolders, we reuse the same structure defined above in the attribute <b>subfolders</b>. This can represent any number of subfolder levels. See below a JSON representation of a folder containing two levels of subfolders.
<br/>
<br/>
<b>(Ref 2)</b>

{% highlight js %}
{
  "name"    : "root",
  "files"   : ['readme.txt', 'hello.txt'],
  "subfolders" : [
    {
      "name"    : "videos",
      "files"   : ['vid1.mpeg', 'vid2.mpeg', 'vid3.mpeg'],
      "subfolders" : []
    }, 
    {
      "name"    : "pictures",
      "files"   : ['pic1.jpg', 'pic2.jpg'],
      "subfolders" : [
        {
          "name"    : "holidays",
          "files"   : ['h1.jpg', 'h2.jpg'],
          "subfolders" : []
        }        
      ]
    }] 
}
{% endhighlight %}

<br/>

<h3>Your Task</h3>

Given a folder <b>f</b> as an input, write a JavaScript function <b>show(f)</b> printing on the console the folder <b>f</b>. See in section <b>Output</b> below the expected print format. The function <b>show(f)</b> should be able to print any folder representation regardless of the number of subfolder levels. You can assume that <b>f</b> is always a valid folder structure.

<br/>
<br/>
<h3>Output</h3>
When evaluating <b>show(f)</b> with <b>(Ref 2)</b> as its input, we obtain :

{% highlight js %}
root
..readme.txt
..hello.txt
..videos
....vid1.mpeg
....vid2.mpeg
....vid3.mpeg
..pictures
....pic1.jpg
....pic2.jpg
....holidays
......h1.jpg
......h2.jpg
{% endhighlight %}

</details>

<br/>

## Hint
<a name="hint"></a>
<details closed>
  <summary>Click to view</summary>
  <br/>
  After 20 minutes, Orolo comes back to the room to verify that you can work comfortably with the computer and asks you if you need anything. You mentioned that the computer setup is great and the question is very clear. You also indicate that you made some progress but, if possible, will be nice to get a small help to finalize your solution. Orolo states that it is possible and suggests you to read <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank">this</a>. He then leaves you alone in the room.
</details>

<br/>

## Solution
<a name="solution"></a>
<details closed>
  <summary>Click to view</summary>
  <br/>
  After 90 minutes, Orolo comes back to the room and ask you how it wend. You discuss with him the question and mention how you tried to solve it. Orolo listen carefully about your code design. He says that he has with him one potential solution to the challenge. He shows it and you both start comparing it with your solution.
  <br/>
  <br/>
  <div class="code-solution">
  {% highlight js %}
  function show(f) {
    showCalc(f, 0)
  }

  function showCalc(f, i) {
    console.log(tab(i) + f.name)
    f.files.forEach(a => console.log(tab(i + 1) + a))
    f.subfolders.forEach(a => showCalc(a, i + 1))
  }

  function tab(t) {
    if (t < 1) return "" 
    else return ".." + tab(t - 1)
  }
  {% endhighlight %}
  </div>
</details>

<br/>
