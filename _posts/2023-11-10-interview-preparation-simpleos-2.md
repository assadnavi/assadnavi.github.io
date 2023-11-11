---
layout: post
title:  "#11 Interview Preparation | 2nd coding interview with SimpleOS"
date:   2023-11-10 00:00:00 +0000
published: true
---
<h2>Context</h2>

SimpleOS has been impressed with the solution you have provided in the first interview. They invited you for a second interview. The second interview, like the first one, is located in their headquarter building. When you arrive at the company, you meet Orolo who seems happy to see you again. He congratulates you for passing the first interview and brings you to the cafeteria so that you can both chat around a coffee. He gives you more information about the role you have applied and explains that the company is searching for candidates with strong analytical and core programming skills. He would like to continue evaluating your JavaScript coding skills in this second interview with the same process used previously. You mention that this works for you and are ready to start. You both start walking in company building for a few minutes following various corridors and taking a lift to the 24th floor. He brings you to a room where you see a table, a shelf, a chair and a coffee machine. On the table, you see a computer, a phone, a bottle of water, pen, papers and an envelope. Orolo tells you that the envelope contains the coding challenge and you can use anything at your disposal in this room while working on the challenge. Before leaving the room, he tells you that he is going to come back in 120 minutes and if you have any questions, you can simply call him with the phone by pressing #42494.

<br/>

<h2>What do you do ?</h2>

<a href="#question">Open the envelope</a>

<a href="#hint">Call Orolo</a>

<a href="#search">Search the computer</a>

<a href="#solution">Your solution is ready</a>

<br/>

<a name="question"></a>

<h2>Open the envelope</h2>

<a style="cursor: pointer;" onClick="document.getElementById('question-section').style.display='block';">Click to view</a>
<div id="question-section" style="display:none;">
<p>You open the envelope and notice that it contains two letters, <b>Background</b> and <b>Your Task</b>. You start reading.</p>

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

Given a folder <b>f</b> as an input, write a JavaScript function <b>sort_asc(f)</b> sorting the folder <b>f</b> ascendingly (also called the lexicographic order). The function <b>sort_asc(f)</b> does not change <b>f</b> but builds and returns a new folder structure with its elements sorted. See in section <b>Output</b> an example. The function <b>sort_asc(f)</b> should be able to sort any folder representation regardless of the number of subfolder levels. You are also provided with the code of the function <b>show(f)</b> which can be found <a href="/2023/11/01/interview-preparation-simpleos-1.html">here</a> (solution of the 1st interview with SimpleOS).

<br/>
<br/>
<h3>Output</h3>
When evaluating <b>show(sort_asc(f))</b> with <b>f = (Ref 2)</b>, we obtain :

{% highlight js %}
root
..hello.txt
..readme.txt
..pictures
....pic1.jpg
....pic2.jpg
....holidays
......h1.jpg
......h2.jpg
..videos
....vid1.mpeg
....vid2.mpeg
....vid3.mpeg
{% endhighlight %}
</div>

<a name="hint"></a>

<h2>Call Orolo</h2>

<a style="cursor: pointer;" onClick="document.getElementById('hint-section').style.display='block';">Click to view</a>
<div id="hint-section" style="display:none;">
  After reading the question in the envelope, you have some doubt about which sorting functions you should use, can you reuse a sorting function already available in the JavaScript standard library or do you have to code a new one ? You pick up the phone and dial the #42494. Orolo answers your call immediately and listen to your question. Here is what he answered before hanging up. <br/><br/><b>Orolo :</b><br/>

  "Thanks for calling me and asking me this question. It is true that the JavaScript array prototype contains already a funtion <b>sort()</b> but unfortunately it creates a side effect by modifying the array which will change the input parameter <b>f</b>. In this coding challenge, the input should not be changed by the function <b>sort_asc(f)</b>, therefore I suggest you to write your own sorting function. The performance of the sorting function is not important, you can decide to go with any methods. Good luck with this challenge."
</div>

<a name="search"></a>

<h2>Search the computer</h2>

<a style="cursor: pointer;" onClick="document.getElementById('search-section').style.display='block';">Click to view</a>
<div id="search-section" style="display:none;">
  On the computer you are using to solve the code challenge, all the tools required for you to work are already installed and running, mainly a JavaScript interpreter (node.js), an editor and a console. You try to open the OS folder explorer, to search for any useful information, but you get an error message stating that you have not the required access level to proceed. After a moment of reflexion, you decide to check the access given to the editor and discover that the editor was launched with <b>Admin Rights</b>. You get very excited by this discovery which means that you can explore and open any files on that computer within this editor. While you explore the computer files, you find a file called <b>quick_sort_asc.js</b>. You decide to open the file and start reading.
  <br/>
  <br/>
  {% highlight js %}
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

  function sortFiles(arr) {
    if (size(arr) < 1) return []
    let p = head(arr)
    let left = tail(arr).filter(x => x <= p)
    let right = tail(arr).filter(x => x > p)
    return sortFiles(left).concat(cons(p, sortFiles(right)))
  }

  function sortSubfolders(arr) {
    if (size(arr) < 1) return []
    let p = head(arr)
    let left = tail(arr).filter(x => x.name <= p.name)
    let right = tail(arr).filter(x => x.name > p.name)
    return sortFiles(left).concat(cons(p, sortFiles(right)))
  }

  {% endhighlight %}  
</div>

<a name="solution"></a>

<h2>Your solution is ready</h2>

<a style="cursor: pointer;" onClick="document.getElementById('solution-section').style.display='block';">Click to view</a>
<div id="solution-section" style="display:none;">
  You are finally ready with your solution. You call Orolo and tells him that your code is ready. After a few minutes of waiting, he enters the room. He smiles and asks how it went. You mention that it was really not easy, but you were finally able to produce a simple piece of code able to solve the coding challenge. He asks you to explain your code logic and start listening to you. He seems happy with your explanations and shows you his solution. You both start comparing the two pieces of code.
  <br/>
  <br/>
  {% highlight js %}
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

  function sortFiles(arr) {
    if (size(arr) < 1) return []
    let p = head(arr)
    let left = tail(arr).filter(x => x <= p)
    let right = tail(arr).filter(x => x > p)
    return sortFiles(left).concat(cons(p, sortFiles(right)))
  }

  function sortFolders(arr) {
    if (size(arr) < 1) return []
    let p = head(arr)
    let left = tail(arr).filter(x => x.name <= p.name)
    let right = tail(arr).filter(x => x.name > p.name)
    return sortFiles(left).concat(cons(p, sortFiles(right)))
  }

  function sort_asc(f) {
    return {
      "name" : f.name,
      "files" : sortFiles(f.files),
      "subfolders" : sortFolders(f.subfolders).map(sf => sort_asc(sf))
    }
  }
  {% endhighlight %}

</div>
