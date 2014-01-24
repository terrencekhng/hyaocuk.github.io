---
layout: post
title: Ruby 中 attr, attr_reader, attr_writer, attr_accessor 的用法记录
---

其实对于 `attr` 这几个关键字的用法都是通过搜索 Ruby 中实例变量了解到的。先撇开实例变量不说，我们来说说 `attr` 的用法吧，其实 attr 基本上类似我们面向对象中 setter 和 getter。

<separator>

当我们定义一个类的时候，如果我们使用 Java 的话，我们可能会这样做:

{% gist 8419269 %}

其中我们首先要定义实例变量，然后再定义如何获取实例变量的方法，然后定义返回实例变量的方法。
然而在 Ruby 中，我们也完全可以仿照这种套路来构造：

{% gist 8419373 %}

由于 Ruby 是一门高度自由的动态语言，因此我们无需初始化变量，我们使用 `@` 来表示实例变量，并且我用 `initialize` 定义了一个构造函数，然后我们定义 setter 和 getter，我们直接 `def apple` 和 `def apple=()` 来定义，然后我们执行如下的代码：

{% gist 8419492 %}

执行结果：

```
Apple

Not Orange
```

这样我们平时在编码的时候就可以运用如此的方法来定义我们的 setter 和 getter。但是，当我们的代码两变得异常庞大的时候，有或者你厌倦了如此重复的写法，那么你就应当参考 Ruby 提供的 attr 的方法。毕竟 Ruby 常说，做同一件事有不同的方法。

`attr` 的使用是非常灵活的，在 Ruby 中一共有四种 `attr` 的关键字，分别是 `attr`, `attr_reader`, `attr_writer` 和 `attr_accessor`。`attr` 创建实例变量并为该实例变量创建了 setter 或 getter，`attr_reader` 创建实例变量并只为该实例变量创建 getter，`attr_writer` 创建实例变量并只为该实例变量创建 setter，最后 `attr_accessor` 创建实例变量并且为该实例变量同时创建 setter 和 getter。我们看一下例子：

{% gist 8419844 %}

执行上述代码，我们得到如下结果：

```
Apple
Not orange


Red

I'm straight
```

其实，通过 `attr` 这四种方法，我们能够同样实现类数据的封装，并且同样能够保护私有数据，用法又类似与 C++ 的 `private`, `public` 和 `protected`。 
