---
layout: post
title:  "Last coding interview at SimpleOS"
description: Get prepared for your next coding interview by solving real programming challenges with this interactive simulation.
date:   2023-12-04 00:00:00 +0000
published: true
---

## Context

[The third interview](https://www.interviewpuzzler.com/2023/11/23/interview-preparation-simpleos-3.html) has been completed successfully. Neal is astonished by your performance. He rarely sees a candidate completing it without any extra help. He mentions that he is going to announce it soon to HR. It is now time for you to go home and take some rest. You are wondering if you are finally done with all the technical interviews. You ask this question to Neal and he answers that there is no more technical interview on-site but for the role you have applied, which is a senior role, there is a last coding challenge which you will be doing at home. The *SimpleOS HR Team* will contact you by email soon. He congratulates you and mentions that he is looking forward to work with you once this last step is done. He is very confident this last step won't cause you any troubles. He tells you to go home and take some rest.

You arrive home exhausted. You lie down on the sofa and start thinking about the very long day you had. You feel accomplished and very happy about what you have achieved. After all the coding questions you have solved, you really believe that the role is a perfect match for your skills. While thinking about all that, you fall asleep...

You wake up the next day, it is 11:12am. You feel way better. A good breakfast and a black coffee is what you need. Once all consumed, you turn on your laptop and check your emails. As expected, there is a new email from the *SimpleOS HR Team*. You open it and start reading.

<span id="email"></span>

## Email

`Congratulations to have passed the first three coding interviews at SimpleOS. Orolo and Neal told me that you are the ideal candidate for our open role and believe that your contribution would be highly appreciated. Since the role you have applied to is a senior position, you need to complete a last step before we can discuss an offer. I believe that this has been already discussed with you yesterday with Neal. The last step is a coding challenge that you should complete at home alone. You are allowed to read any books and access the internet to search any information you might need. Once you are happy with your solution, please reply to this email with your code. We expect an answer within 48 hours. The next section will provide some background information and the description of your task. Good luck.`

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

Given a folder **f**, a **path** and a **filename**, write a JavaScript function **createFile(f, path, filename)** which creates and returns a new folder structure where the new file **filename** is added to the folder **path**. The function **createFile(f, path, filename)** does not change any of its inputs. The position of the new added file is not relevant in the **files** array, it could be at the beginning or at the end. The parameter **path** is an array representing the relative path of the target folder. As an example, the evaluation of **createFile(f, ['root', 'videos'], 'NEW.mpeg')** should return the below folder structure.

*When **f** points to the structure in **(Ref 2)***

```js
{
  "name"    : "root",
  "files"   : ['readme.txt', 'hello.txt'],
  "subfolders" : [
    {
      "name"    : "videos",
      "files"   : ['NEW.mpeg', 'vid1.mpeg', 'vid2.mpeg', 'vid3.mpeg'],
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

<span id="menu"></span>

## What do you do ? 

[Read the email from HR](#email)

[Explore the web](#web)

[Search your notes](#notes)

[Give up](#giveup)

[Your solution is ready](#solution)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="notes"></span>

## Search your notes

After thinking again about the coding question, you feel that it is not such a small task but happy to know that you have 48 hours to craft your solution. You walk in circle in your apartment going from your bedroom to the living room thinking about your next step. The task mentioned on the email reminds you an assignment you did when studying *algorithms* when you were still a computer science student. You decide that finding your student notes is the right next step. You bring from your basement a couple of boxes where you stored all your student notes. After a few hours of digging, you found the notes from the algorithm course. They are still complete and readable. It is a large pile of papers which will take you a few hours to organize and read. After a short coffee break, you start working.

You finally found your notes about recursive data structures such as Cons, Tree and Tensor. You feel that you are touching the right topic which could help you greatly to solve the coding challenge. The notes contain the data structure definition but more importantly they are associated with some concrete coding implementations covering the methods *add(...)*, *remove(...)* and *contains(...)*.

After a couple of hours of writing code trying to reuse the discovered logic found in your notes, you produce the below code. When trying it, you initially felt overly excited because you saw the **filename** included in the target folder. But after a few seconds, you notice that the output is not totally correct.

```js
function tail(xs) {
  return xs.slice(1)
}

function createFileBuggy(f, path, filename) {
  return {
    "name" : f.name,
    "files" : cons(filename, f.files),
    "subfolders" : f.subfolders.map(folder => createFileBuggy(folder, tail(path), filename))
  }
}
```

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<span id="web"></span>

## Explore the web

To write your solution, you decide to use a simple code editor and node.js as a JavaScript interpreter. This allows you to keep a relatively simple setup. When starting to write your solution, you notice that **console.log(...)** cannot be used to display the output of the function **createFile(...)**. It prints *[Array]* instead of the array content for nested structures. It is annoying since you wanted to use **console.log(...)** to validate your change. As an example, **console.log(f)** prints on your console :

*When **f** points to the structure in **(Ref 2)***

```js
{
  name: 'root',
  files: [ 'readme.txt', 'hello.txt' ],
  subfolders: [
    { name: 'videos', files: [Array], subfolders: [] },
    { name: 'pictures', files: [Array], subfolders: [Array] }
  ]
}
```

While browsing the internet to find a simple solution to your problem, you find that other people have the same issue. In one coding forum, you discover that there exists a simple trick to overcome this limitation. Converting a JavaScript object to JSON could be the key. You continue your research until you find exactly what you search. A generic function producing, from a JavaScript object, a console printable text with all the information you require. Bingo! You wrap your findings the below function.

```js
function prettyPrint(f) {
  console.log(
    JSON.stringify(f, null, "  ")
  )
}
```

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>

<span id="giveup"></span>

## Give up

For two days, you tried everything you could. You explored the web, read coding books and checked codes you had written for previous projects, but none of that worked. You don't feel far but still cannot make it work fully. You decide to send an email before the 48 hours threshold to announce that you received and worked on the last coding challenge but didn't reach a solution. You connect to your email application and send an email to the *SimpleOS HR Team*. You include as an attachment the last version of your code to indicate where you got stuck.

After a few hours of waiting, you receive an email back. You start reading.

`We are very sorry to hear that you were not able to achieve this last coding challenge. Firstly, we would like to thank you for trying this challenge, it was a pleasure to have you as a candidate. Secondly, we believe in self-improvement and would like to give you more time to achieve this task. Please take the time you need to build the right knowledge before attempting again to solve this coding challenge. You can contact us again when you feel ready. Finally, this coding challenge is not fundamentally different from the three previous ones you successfully completed. Therefore, we suggest you to have a second look at those. Good luck and we hope to hear from you very soon.`

<a target="_blank" href="https://www.interviewpuzzler.com/2023/11/01/interview-preparation-simpleos-1.html"> Go to the 1st coding interview</a>

<a target="_blank" href="https://www.interviewpuzzler.com/2023/11/11/interview-preparation-simpleos-2.html"> Go to the 2nd coding interview</a>

<a target="_blank" href="https://www.interviewpuzzler.com/2023/11/23/interview-preparation-simpleos-3.html"> Go to the 3rd coding interview</a>

[Back to your actions](#menu)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<span id="solution"></span>

## Your solution is ready

After having spent the entire night working on your solution, you feel great. You finally got the various elements of your design correct and can test successfully your code with all the different cases. You put together a recursive algorithm which combines a mechanism to visit all the folders and adds the file only at the target folder. You refactored your code multiple times and reached a simple and comprehensive solution. You still have a few hours left to complete this challenge but decide that the sooner you sent it the better. You want to get this done before going to bed. The email is quickly written and you also include the source code of your solution as an <a href="https://www.interviewpuzzler.com/assets/create_file.js" targer="_blank">attachment</a>. 

A few minutes later, you receive an email from the *SimpleOS HR Team* with the title :

`Time to discuss your employment contract`

[Back to your actions](#menu)

For more articles <a href="https://www.interviewpuzzler.com" target="_blank">www.interviewpuzzler.com</a>