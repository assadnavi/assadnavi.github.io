---
layout: post
title:  "Coding interview at SimpleOS (Part one)"
description: Get prepared for your next coding interview by solving real programming challenges with this interactive story.
date:   2023-11-01 00:00:00 +0000
published: true
---

## Introduction

This page contains the first part of the interactive story *Coding Interview at SimpleOS*, taking the reader to a fictional coding interview. By reading this story, you will play the main character, a coder invited to a job interview and having to solve a coding challenge. While reading this story, you will decide your actions. Each action allows you to discover helpful information to complete the story. This interactive story is aiming to present to the reader coding topics in a fun and entertaining way. This story is split into four parts. Although each part can technically be done independently, I recommend to the reader to read them in order. Below are the links to all the parts. To start reading the first part [click here](#start).

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/11/01/interview-preparation-simpleos-1.html">Coding interview at SimpleOS (Part one)</a>

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/11/11/interview-preparation-simpleos-2.html">Coding interview at SimpleOS (Part two)</a>

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/11/23/interview-preparation-simpleos-3.html">Coding interview at SimpleOS (Part three)</a>

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/12/04/interview-preparation-simpleos-4.html">Coding interview at SimpleOS (Part four)</a>

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="start"></span>

## Context

You are invited for a first interview at the company SimpleOS. You meet the first interviewer, Orolo, which gives you more details about the programming role you have applied to. He offers you water and coffee, and tells you that this interview aims to evaluate your coding skills. He brings you to a room where you have access to a computer (without internet connection), a coffee machine, a pen and some blank papers. On the table, you can see a paper containing the coding question. Orolo tells you that the computer is already configured with the necessary tools (editor, interpreter, compiler) and you can use all the items at your disposal to solve the coding question. He leaves you alone saying that he will come back in 90 minutes to evaluate your progress.

<span id="menu"></span>

### Your actions

[Read the question](#question)

[Ask a hint](#hint)

[Think simple](#simple)

[Your solution is ready](#solution)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<a name="question"></a>

## Question 

<h3>Background</h3>

In SimpleOS, a <b>folder</b> is represented with a structure with attributes <b>name</b>, <b>files</b> and <b>subfolders</b>. See below a JSON representation of a simple folder containing two files and without any subfolders.

<b>(Ref 1)</b>

```js
{
  "name"    : "root",
  "files"   : ['readme.txt', 'hello.txt'],
  "subfolders" : []
}
```

To represent a <b>folder</b> with subfolders, we reuse the same structure defined above in the attribute <b>subfolders</b>. This can represent any number of subfolder levels. See below a JSON representation of a folder containing two levels of subfolders.

<b>(Ref 2)</b>

```js
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
```

<h3>Your Task</h3>

Given a folder <b>f</b> as an input, write a JavaScript function <b>show(f)</b> printing on the console the folder <b>f</b>. See in section <b>Output</b> below the expected print format. The function <b>show(f)</b> should be able to print any folder representation regardless of the number of subfolder levels. You can assume that <b>f</b> is always a valid folder structure.

<h3>Output</h3>
When evaluating <b>show(f)</b> with <b>(Ref 2)</b> as its input, we obtain :

```js
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
```

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<a name="hint"></a>

## Hint

After 20 minutes, Orolo comes back to the room to verify that you can work comfortably with the computer and asks you if you need anything. You mentioned that the computer setup is great and the question is very clear. You also indicate that you made some progress but, if possible, will be nice to get a small help to finalize your solution. Orolo states that it is possible and suggests you to read <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank">this</a>. He then leaves you alone in the room.

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>

<a name="simple"></a>

## Think Simple

When thinking about the entire question to solve, you cannot figure out a direct solution. Instead, you decide to focus on a simpler part of the code challenge. The part you are aiming to solve now is the generation of the text to indent the folders of the various levels. After thinking a few minutes, you believe that it would be a good idea to have a function **tab(t)** taking an integer as an input and returning a text with the correct number of dots. As an example, the evaluation of *tab(3)* should return "......".

You keep working on this idea and produce the below code.

```js
function tab(t) {
  if (t < 1) return "" 
  return ".." + tab(t - 1)
}
```

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="solution"></a>

## Solution

After 90 minutes, Orolo comes back to the room and ask you how it went. You discuss with him the question and mention how you tried to solve it. Orolo listen carefully about your code design. He says that he has with him one potential solution to the challenge. He shows it and you both start comparing it with your solution.

```js
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
  return ".." + tab(t - 1)
}
```

[Back to your actions](#menu)

For more articles [www.interviewpuzzler.com](https://www.interviewpuzzler.com)
