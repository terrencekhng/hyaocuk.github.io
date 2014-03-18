---
layout: post
title: Ruby self 用法 1
---

我们在Ruby的类中定义一个方法，有的方法是作为接口需要被暴露出来，我们叫做实例方法（instance method），然而有的方法则是类的内部方法，叫做（class method）。
所以我们用到`self`来区分这两种方法：

instance method:

{% gist 9614544 %}

这是实例方法，通过创建实例`a`，来调用`hello`方法。

class method:

{% gist 9614585 %}

这里类方法，虽然这里没有体现如何在类里面使用该方法，但是我们不能通过创建实例`b`来直接调用'hi'方法。
