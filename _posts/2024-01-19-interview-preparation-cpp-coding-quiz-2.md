---
layout: post
title:  "C++ coding quiz (part 2)"
description: Get prepared for your next coding interview by solving real programming challenges with this C++ coding quiz.
date:   2024-01-10 00:00:00 +0000
published: true
---

<span id="home"></span>

## Introduction

This page contains an interactive story where the reader will take part of a C++ coding quiz. It is the second part of a series started [here](https://www.interviewpuzzler.com/2024/01/10/interview-preparation-cpp-coding-quiz-1.html). The reader will be asked to write C++ code in an interactive quiz format. This quiz is designed for people preparing for a job interview or willing to improve their coding skills. The C++ topics and keywords discussed in this quiz are **Class**, **Singleton**, **Operator**, **Static**. 

### What do you do ?

[=> Start](#start)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="start"></span>

## Start

You successfully solved the first coding challenge. Scott indicates that you are now ready to try the second coding challenge. His team is writing object oriented code and he would like to test your capabilities on this subject. He asks you take the test, are you ready ?

### What do you do ?

[=> Yes](#yes)

[=> No](#no)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<span id="no"></span>

## No

You decide that the C++ language is complex and even more when it comes to object oriented programming. You decide to refuse and take some time to read more about this topic. Scott understands and invite you to come back when you are ready.

### What do you do ?

[=> Go home](#home)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<span id="yes"></span>

## Yes

You are ready, see below what you need to code.

`Write a class named "OneConfig" which can at most have one instance. This design pattern is called "Singleton".`

### What do you do ?

[=> Start coding](#step1)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<a name="step1"></a>

## Quiz Question 1

You understand the instruction and write an empty class **OneConfig**. 

```cpp
class OneConfig {

}; 

int main() {

  OneConfig a;
  OneConfig b;

}
```

As you would expect it, the class **OneConfig** can be instanciated multiple times. How can you do to stop **OneConfig** to be instanciated ?

### What do you do ?

[=> Learn how to do it](#step1learn)

[=> You know how to do it](#step2)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="step1learn"></a>

## C++ Private Constructor

After searching a way to allow only one instance of the class **OneConfig** to be created, you decide that a good step forward will be first to not allow any instances to be created. To do that, you declare the constructor **private**.

```cpp
class OneConfig {

  private : 
    OneConfig(){};

}; 

int main() {

  OneConfig a;
  OneConfig b;

}
```

As expected, the compiler does not allow the creation of an instance of the class **OneConfig** and correctly generates a compiler errors for the above code. 

```
 error: calling a private constructor of class 'OneConfig'
  OneConfig a;
            ^
./main_quiz_2.cpp:4:5: note: declared private here
    OneConfig(){};
    ^
./main_quiz_2.cpp:11:13: error: calling a private constructor of class 'OneConfig'
  OneConfig b;
            ^
./main_quiz_2.cpp:4:5: note: declared private here
    OneConfig(){};
    ^
2 errors generated.
```

### What do you do ?

[=> Next](#step2)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="step2"></a>

## Quiz Question 2

That's great, now you have a code not allowing any instances of the class **OneConfig** to be created. As a next step, you decide to code a mechanism allowing only one instance to be created. Here is the last version of your code.

```cpp
class OneConfig {

  private : 
    OneConfig(){};

}; 

int main() {

}
```

### What do you do ?

[=> Learn how to do it](#step2learn)

[=> You know how to do it](#step3)

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>

<a name="step2learn"></a>

## C++ Static Method

You think for a moment and then remember that with the keyword **static** it is possible to associate a method to a class rather than its instances. That means that from the code, having access to a class is enough to invoke a its static method. You decide to use this mechanism and produce the below code. The logic of this code allows the creation of one instance and returns it in every call of the function **OneConfig::getInstance()**.

```cpp
class OneConfig {

  public :
    static OneConfig* getInstance() {
      if (OneConfig::instance == nullptr) {
        OneConfig::instance = new OneConfig();
      }
      return OneConfig::instance;
    }

  private : 
    OneConfig(){};
    static OneConfig* instance; 

}; 

int main() {

  OneConfig* p = OneConfig::getInstance();

}
```

### What do you do ?

[=> Next](#step3)

<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_2.png"/>

<a name="step3"></a>

## Quiz Question 3

Super, now you are able to produce a unique instance of the class **OneConfig** which will be returned at every call of the function **OneConfig::getInstance()**. When testing your code, you notice that some syntax permits the creation of a second instance. 

```cpp
class OneConfig {

  public :
    static OneConfig* getInstance() {
      if (OneConfig::instance == nullptr) {
        OneConfig::instance = new OneConfig();
      }
      return OneConfig::instance;
    }

  private : 
    OneConfig(){};
    static OneConfig* instance; 

}; 

int main() {

  OneConfig* p = OneConfig::getInstance();
  OneConfig a(*p);
  OneConfig b = a;

}
```

The above code creates in total three instances of the class **OneConfig**. You want to prohibit this ability and instead get a compiler error.

### What do you do ?

[=> Learn how to do it](#step3learn)

[=> You know how to do it](#end)

<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_3.png"/>

<a name="step3learn"></a>

## C++ Private Copy-Constructor

Since you want to have the control over how the instance behaves when getting assigned or copied, you decide to override the logic of the default generated assignment operator and copy-constructor and make them **private**. You work on this and produce the below code.

```cpp
class OneConfig {

  public :
    static OneConfig* getInstance() {
      if (OneConfig::instance == nullptr) {
        OneConfig::instance = new OneConfig();
      }
      return OneConfig::instance;
    }

  private : 
    OneConfig(){};
    OneConfig(const OneConfig& o);
    OneConfig& operator=(const OneConfig&);    
    static OneConfig* instance; 

}; 

int main() {

  OneConfig* p = OneConfig::getInstance();
  OneConfig a(*p);
  OneConfig b = a;

}
```

Great! Now the compiler generates errors when trying to copy or assign a **OneConfig** object. See below the compiler errors :

```
error: calling a private constructor of class 'OneConfig'
  OneConfig a(*p);
            ^
./main_quiz_2.cpp:13:5: note: declared private here
    OneConfig(const OneConfig& o);
    ^
./main_quiz_2.cpp:23:17: error: calling a private constructor of class 'OneConfig'
  OneConfig b = a;
                ^
./main_quiz_2.cpp:13:5: note: declared private here
    OneConfig(const OneConfig& o);
    ^
2 errors generated.
```

### What do you do ?

[=> Next](#end)

<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_4.png"/>

<a name="end"></a>

## End

You finally reached the end of the coding test. You show the result to Scott and answer correctly all his questions. 

`Congratulations ! You successfully completed this C++ coding quiz`

<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>
<img src="https://www.interviewpuzzler.com/assets/sep_1.png"/>