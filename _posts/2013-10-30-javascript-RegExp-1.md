---
layout: post
title: JavaScript RegExp 类型（1）
---

{{ page.title }}
================

<p class="meta">Oct 30 2013, Guangzhou</p>

最近在学习 JavaScript ，正读到 RegExp 类型，这里写一下这个类型，也当作对这个博客生成系统 <a href="https://github.com/mojombo/jekyll">Jekyll</a> 的练习吧。:P

RegExp 类型是 ECMAScript 来表达正则表达式的一种类型。我们可以这样来创建一个正则表达式：

{% gist 7233840 %}

其中的模式 ( pattern ) 部分可以是任何简单或者复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用。除此之外，每一个正则表达式都可以带有一个或多个标志 ( flags ) ，可以用来标明正则表达式的行为。正则表达式的匹配模式支持一下3个标志。
+ g: 表示全局 ( global ) ，即模式即将被应用于所有的字符串，而非在发现第一个匹配项时立即停止；
+ i: 表示不区分大小写 ( case-insensitive ) 模式，记载确定匹配项时忽略模式与字符串的大小写；
+ m: 表示多行 ( multiline ) 模式。即在到达一行文本末尾的时候还会继续查找下一行中是否存在与模式匹配的项。

因此，一个正则表达式就是一个与上述3个标志的组合体。不同组合体产生不同的结果，如下面的例子所示。

{% gist 7233869 %}

与其它语言中的正则表达式类似，模式中使用的所有元字符都必须转义。正则表达式中的元字符包括：

{% gist 7233884 %}

这些元字符在正则表达式中都有一或多种特殊的用途，因此如果想要匹配字符串中包含的这些字符，就必须对它们进行转义。例如：

{% gist 7233771 %}

这里我们可以看到以上所有的例子都是以字面量的形式来定义正则表达式。但是我们还有另外一种定义正则表达式的方法，就是使用 RegExp 构造函数。 RegExp 构造函数接收两个参数：一个是要匹配的字符串模式，另一个式可选的标志字符。具体来看一下例子：

{% gist 7233927 %}

pattern1 和 pattern2 是完全等价的正则表达式。但是我们应该注意，传递给 RegExp 构造函数的两个参数都是字符串（不能把正则表达式字面量传递给 RegExp 构造函数）。由于 RegExp 构造函数的模式参数式字符串，所以在某些情况下要对字符进行双重转义。所有元字符都必须双重转义，那些已经转义过的字符也是如此，例如 \n （字符 \ 在字符床中通常被转义为 \\ ，而在正则表达式字符串中就会变成 \\\\ ）。

使用正则表达式字面量和使用 RegExp 构造函数创建正则表达式不一样。在 ECMAScript3 中，正则表达式字面量始终会共享一个 RegExp 实例，而使用构造函数创建的每一个新 RegExp 实例都是一个全新的实例。我们来看一下例子：

{% gist 7233938 %}

在第一个循环中，即使 re 在循环中定义了10次，单实际上只为 /cat/ 创建了一个 RegExp 实例，所以在循环中再次调用 test() 方法会失败。这是因为第一调用 test() 找到了 "cat" ，但第二次调用式从索引为3的字符（上一次匹配的末尾）开始的，所以就找不到它了。由于测试会测试到字符串的末尾，所以下一次再调用 test() 就有从开头开始了。

第二个循环使用了 RegExp 构造函数在每一次循环中创建正则表达式。因为每一次迭代都会创建一个新的 RegExp 实例，所以每次调用 test() 都会返回 true 。（因为每一次都从开头测试）。

ECMAScript5 明确规定，使用正则表达式字面量必须像直接调用 RegExp 构造函数一样，每一次都创建新的 RegExp 实例。 IE9+ 、Firefox 4+ 和 Chrome 都据此作出了修改。

待续……