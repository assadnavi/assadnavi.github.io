---
layout: post
title:  "C++ coding quiz (part 1)"
description: Get prepared for your next coding interview by solving real programming challenges with this C++ coding quiz.
date:   2024-01-10 00:00:00 +0000
published: true
---

<span id="home"></span>

## Introduction

This page contains an interactive story where the reader will take part of a C++ coding quiz. The reader will be asked to write C++ code in an interactive quiz format. This quiz is designed for people preparing for a job interview or willing to improve their coding skills. To start [click here](#start).

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="start"></span>

## Start

You applied to a software engineering job and received recently a positive answer from the company. Today is the first interview and you present yourself at the reception. You are welcomed by Scott who is the team leader of a coding team. He explains you that the team mainly codes in C++ and therefore, he would like to judge your C++ coding skills. For this purpose, he prepared a small coding test and asks you kindly if you are agreeing to take it. 

[=> Accept](#accept)

[=> Refuse](#refuse)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<span id="refuse"></span>

## You refused

After thinking for a moment, you decide that you are not ready to take a test in C++. You politely refuse. Scott looks surprised but understands your decision. He immediately tells you that you can take your time to get ready and resume this interview when you feel ready.

[=> Go home](#home)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="accept"></span>

## You accepted

You accept to pass the test. Scott looks happy, he takes you to a room where you will be able to focus. The room has a computer with all the necessary tools already installed (editor and compiler). Here is the problem you need to solve.

`1) Code the class 'Day' in C++ which represents a day (Monday, Tuesday, ..., Sunday).`

`2) Code a function 'print' taking a 'Day' object and printing in the console 'We are <x>' where <x> is 'Monday', 'Tuesday', ... 'Sunday'.`

[=> Start coding](#step1)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<a name="step1"></a>

## Quiz Question 1

You understood the instruction and are able to write some initial code. Your code has now a class **Day** and an enum **DayChoice** which stops the creation of a wrong Day object. You find that to be a good design choice.

```cpp
int main() {
  Day day(Monday);
  return 0;
}

enum DayChoice {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
};

class Day {
  private :
    const DayChoice d;
  public :
    Day(DayChoice d) : d(d) {}
};
```

But when you try to compile, you get the below error :

```js
error: unknown type name 'Day'
  Day day(Monday);
  ^
error: unknown type name 'Monday'
  Day day(Monday);
          ^
```

[=> To try understanding the issue](#step1learn)

[=> You know why, fix it and keep working](#step2)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="step1learn"></a>

## C++ Declaration

After searching a way to fix those two errors, you remember that in C++ it is required to declare every symbol (e.g. class, enum, functions) **before** we use them in the main function. You modify your code and produce a new code which compiles perfectly.

```cpp
enum DayChoice {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
};

class Day {
  private:
    const DayChoice d;
  public :
    Day(DayChoice d) : d(d) {}
};

int main() {
  Day day(Monday);
  return 0;
}
```

[=> Keep working](#step2)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="step2"></a>

## Quiz Question 2

After fixing the compiler error, the next step you take is to spend some time coding a new member function for the class **Day**. The function is called **text()** and is aiming to return a string that can then be printing on the console. The code you produced can be seen below.

```cpp
#include <iostream>

enum DayChoice {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
};

class Day {
  private:
    const DayChoice d;
  public :
    Day(DayChoice d) : d(d) {}
    std::string& text() const {
      char* prefix = "We are ";
      char* name = "";
      if (d == Monday) {name = "Monday";}
      else if (d == Tuesday) {name = "Tuesday";}
      else if (d == Wednesday) {name = "Wednesday";}
      else if (d == Thursday) {name = "Thursday";}
      else if (d == Friday) {name = "Friday";}
      else if (d == Saturday) {name = "Saturday";}
      else {name = "Sunday";}
      std::string text = prefix + name;
      return text;
    }
};

int main() {
  Day day(Monday);
  return 0;
}
```

When trying to compile your code, you see the below error :

```js
error: invalid operands to binary expression ('char *' and 'char *')
      return prefix + name;
```

[=> To try understanding the issue](#step2learn)

[=> You know why, fix it and keep working](#step3)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<a name="step2learn"></a>

## C++ Operator

When reading carefully the error message, you noticed that the issue was linked to the operator **+**. You guessed correctly that the C++ standard library does not have a declaration and definition for **operator+(char\*, char\*)** but has one for **operator+(std::string, char*)**. You amend your code and use instead the type **std::string**. The new code compiles without any issues. Here is the latest version of the code.

```cpp
#include <iostream>

enum DayChoice {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
};

class Day {
  private:
    const DayChoice d;
  public :
    Day(DayChoice d) : d(d) {}
    std::string& text() const {
      char* prefix = "We are ";
      std::string name = "";
      if (d == Monday) {name = "Monday";}
      else if (d == Tuesday) {name = "Tuesday";}
      else if (d == Wednesday) {name = "Wednesday";}
      else if (d == Thursday) {name = "Thursday";}
      else if (d == Friday) {name = "Friday";}
      else if (d == Saturday) {name = "Saturday";}
      else {name = "Sunday";}
      std::string text = prefix + name;
      return text;
    }
};

int main() {
  Day day(Monday);
  return 0;
}
```

[=> Keep working](#step3)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<a name="step3"></a>

## Quiz Question 3

You start seeing the end of this coding challenge. You have added in the main a few instructions to create a **Day** object, call the function **text()** and finally print the result. The code is ready and compiles without any errors.

```cpp
#include <iostream>

enum DayChoice {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
};

class Day {
  private:
    const DayChoice d;
  public :
    Day(DayChoice d) : d(d) {}
    std::string& text() const {
      char* prefix = "We are ";
      std::string name = "";
      if (d == Monday) {name = "Monday";}
      else if (d == Tuesday) {name = "Tuesday";}
      else if (d == Wednesday) {name = "Wednesday";}
      else if (d == Thursday) {name = "Thursday";}
      else if (d == Friday) {name = "Friday";}
      else if (d == Saturday) {name = "Saturday";}
      else {name = "Sunday";}
      std::string text = prefix + name;
      return text;
    }
};

int main() {
  Day day(Monday);
  std::cout << day.text() << std::endl;
  return 0;
}
```

You try running your code and expect the output to be **We are Monday**. In the console, you see **1\{??\(17????1\{???7????**

[=> To try understanding the issue](#step3learn)

[=> You know why, fix it](#end)

<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>

<a name="step3learn"></a>

## C++ Stack Destruction

After reading multiple times the source code, you start looking at the declaration of the functions you have created. You notice that the function **Day::text()** returns a reference to a std::string and start wondering why ? After some reflexion, your conclusion is that at runtime, once the function **Day::text()** has finished its execution, its stack is destroyed letting no valid value for the returned reference. You are right, a function creating a value should either create it on the heap and return a pointer to it or return a copy of the value created. You modify the code to return a std::string (instead of a reference to a std::string). When running the code, it prints "We are Monday".

```cpp
#include <iostream>

enum DayChoice {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
};

class Day {
  private:
    const DayChoice d;
  public :
    Day(DayChoice d) : d(d) {}
    std::string text() const {
      char* prefix = "We are ";
      std::string name = "";
      if (d == Monday) {name = "Monday";}
      else if (d == Tuesday) {name = "Tuesday";}
      else if (d == Wednesday) {name = "Wednesday";}
      else if (d == Thursday) {name = "Thursday";}
      else if (d == Friday) {name = "Friday";}
      else if (d == Saturday) {name = "Saturday";}
      else {name = "Sunday";}
      std::string text = prefix + name;
      return text;
    }
};

int main() {
  Day day(Monday);
  std::cout << day.text() << std::endl;
  return 0;
}
```

[=> Your code is ready](#end)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="end"></a>

## End

You finally reached the end of the coding test and happy with the code your produced. Scott looks at it a few minutes and indicates that it is a good piece of work. You also mention to Scott the design decisions you have made.

`You successfully completed this C++ coding quiz`

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>