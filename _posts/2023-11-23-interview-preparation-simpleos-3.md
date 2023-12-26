---
layout: post
title:  "Coding interview at SimpleOS (Part three)"
description: Get prepared for your next coding interview by solving real programming challenges with this interactive simulation.
date:   2023-11-23 00:00:00 +0000
published: true
---

## Introduction

This page contains an interactive story taking the reader to a fictional coding interview. By reading this story, you will play the main character, a coder invited to a job interview. While reading this story, you will decide your actions. Each action allows you to discover helpful information to complete the story. This interactive story is aiming to present to the reader coding topics in a fun and entertaining way. This story is split into four parts. Although each part can technically be done independently, I recommend the reader to read them in order. Here are the links to all the parts.

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/11/01/interview-preparation-simpleos-1.html">Coding interview at SimpleOS (Part one)</a>

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/11/11/interview-preparation-simpleos-2.html">Coding interview at SimpleOS (Part two)</a>

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/11/23/interview-preparation-simpleos-3.html">Coding interview at SimpleOS (Part three)</a>

- <a target="_blank" href="https://www.interviewpuzzler.com/2023/12/04/interview-preparation-simpleos-4.html">Coding interview at SimpleOS (Part four)</a>

To start reading the third part => [click here](#start)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="start"></span>

## Context

[The second interview](https://www.interviewpuzzler.com/2023/11/11/interview-preparation-simpleos-2.html) with Orolo went great and he is very happy about the solution you have designed and implemented. Right after the second coding challenge, he brings you back to the cafeteria where you meet Neal, a technical leader from the recruiting team. Orolo congratulates you again for the first two interviews and leaves you with Neal. You can guess that Neal is older than Orolo and looks to have a more senior position in the company. Neal tells you about the daily tasks of his team and gives you more details about the vision of the team. His goal is to clarify what you will be doing if you get hired. His team's responsibility is to implement features related to the SimpleOS folder system. As an example, they have implemented features allowing users to navigate, sort and search files in SimpleOS. You appreciate his explanations and thank him. Neal mentions that he would like to evaluate your coding skills relevant in his area of work and brings you to a new room, close to his office. The room is larger than the one you were previously in. When you enter the room, you see a shelf, a table, a sofa, a water machine and a computer on the table. You see another envelope lying on the table. Neal tells you that you can take the time you need to solve the coding challenge described in the envelope. Before leaving, he says that his desk is located just in front of this office and you can come whenever you are ready. After a moment of hesitation, you sit on the sofa and open the envelope. It contains two letters, **Background** and **Your Task**. You start reading.

### Background

In SimpleOS, a **folder** is represented with a structure with attributes **name**, **files** and **subfolders**. See below a JSON representation of a simple folder containing two files and without any subfolders.

**(Ref 1)**

```js
{
  "name"    : "root",
  "files"   : ['readme.txt', 'hello.txt'],
  "subfolders" : []
}
```

To represent a **folder** with subfolders, we reuse the same structure defined above in the attribute **subfolders**. This can represent any number of subfolder levels. See below a JSON representation of a folder containing two levels of subfolders.

**(Ref 2)**

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

### Your Task

Given a folder **f** and a string **s**, write a JavaScript function **search(f, s)** searching all the files in **f** (subfolders included) containing in their name, **s**. The function **search(f, s)** should not change any of its inputs and returns an array of all files found (key-sensitive match). The function **search(f, s)** should be able to search any folders regardless of the number of subfolder levels. As an example, evaluating **search(f, 'h')** when **f** points to the structure **(Ref 2)**, should return :

```js
[
  'root/hello.txt',
  'root/pictures/holidays/h1.jpg',
  'root/pictures/holidays/h2.jpg'
]
```

<span id="menu"></span>

## What do you do ? 

[Investigate the shelf](#shelf)

[Explore the computer](#computer)

[Give up](#giveup)

[Your solution is ready](#solution)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="shelf"></span>

## Investigate the shelf

In the room, there is a massive shelf against the wall located on the left side of the table. On the shelf, you notice a large screen and a camera, probably used for video meetings. Its lower portion is filled with books. Without making any noise, you approach the shelf and start looking at the books it contains. You see books from the following subjects : marketing, communication and accounting, nothing exciting. You start to believe that you won't find anything useful to solve the coding challenge, but you suddenly notice a closed drawer located at the bottom of the shelf. You hesitate a second but finally open the drawer to investigate what it contains. You find some coding books. One book particularly attracts your attention because it has a marked page. The book title is *"JavaScript: The Good Parts" by Douglas Crockford*. You open the book at the marked page and start reading. After some time, you put back the book at its exact place, close the drawer and return to your desk.

To look at the page, click <a href="https://www.interviewpuzzler.com/assets/recursion.pdf" target="_blank">here</a>

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<span id="computer"></span>

## Explore the computer

The computer, compared to the previous one you have used at SimpleOS, looks brand new. It has a large touch screen and is really quiet. All the software needed for coding are already installed. When you turned on the computer you had access, without entering any password, to a terminal, a coding editor and a Javascript interpreter. All those software are opened in a full screen mode which you seem not be able to minimize. You have the idea, like during the previous interview, to check the access given to the code editor. When doing so you discover that this time, unfortunately, the software permission is linked to a guest account which stops you to explore the entire file system. After a moment of reflection, you decide to try one last thing. You have in mind the shortcut-key to minimize all the windows on your personal computer. When applying the same shortcut, suddenly all the windows got minimized. You look around to make sure to be alone then slowly start looking. You see a background image and the trash icon. Without hesitation, you quickly open the trash and found a file named **tmp**. After reading the file and thinking about it for a few minutes, you decide that it is wiser to close it.

```js
function head(xs) {
  return xs[0]
}

function tail(xs) {
  return xs.slice(1)
}

function size(xs) {
  return xs.length
}

function flat(xs) {
  if (size(xs) < 1) return xs
  return head(xs).concat(flat(tail(xs)))
}

console.log(flat([[1, 2], [3, 4], [], [5]]))
```

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>

<span id="giveup"></span>

## Give up

After spending hours searching the right logic to solve the coding challenge, you start believing that you are not prepared enough and you require more time to improve your programming skills. You feel hopeless and think that it is time to announce your decision to Neal. You walk out of the room and easily find Neal in his office. He looks to be very busy with his job but stops working and brings all his attention to you. You announce your decision to give up. He tells you that he feels sorry but nevertheless asks your reasons. You mention all the ideas you had to solve the coding problem but none worked. He mentions that overall, you did well in the interview process and suggests you to read the book *"The Little Schemer" by Friedman and Felleisen*. Although this book is not about Javascript, it is an introduction to recursive thinking and Neal believes that it can improve your programming skills. He asks you to call him when you feel ready to attempt the coding challenge again.

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<span id="solution"></span>

## Your solution is ready

After a few attempts that took you a couple of hours, you feel great because you finally got a working solution. After cleaning your code, you finally decide to find Neal. You get out of the room and easily find Neal in his office. He lays on his sofa and tells you that he was waiting for your visit. You announce proudly that you have finally completed the coding challenge and are willing to share with him your solution. He looks very happy to hear that and starts asking you a few questions related to the logic of your code. From his computer, he connects to your session and starts reading and trying your code to validate your solution. Your solution is flawless. He then shows you his code which allows you to compare his solution with yours.

```js
function head(xs) {
  return xs[0]
}

function tail(xs) {
  return xs.slice(1)
}

function size(xs) {
  return xs.length
}

function cons(x, arr) {
  return [x].concat(arr)
}

function flat(xs) {
  if (size(xs) < 1) return xs
  return head(xs).concat(flat(tail(xs)))
}

function search(f, s) {
  return searchCalc(f, s, "")
}

function searchCalc(f, s, path) {
  return f.files
    .filter(file => file.includes(s))
    .map(file => path + f.name + "/" + file)
    .concat(
      flat(f.subfolders.map(folder => searchCalc(folder, s, path + f.name + "/")))
    )
}
```

[Back to your actions](#menu)

For more articles [www.interviewpuzzler.com](https://www.interviewpuzzler.com)
