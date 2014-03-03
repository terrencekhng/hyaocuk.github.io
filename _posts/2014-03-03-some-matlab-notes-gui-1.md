---
layout: post
title: matlab gui 界面：callback 函数之间的参数传递
---

毕业设计做到非常的心烦，主要是不大适应matlab的解释脚本语言，虽然说功能非常强大，从数值绘图到数值分析到算法设计到图形界面设计，但也是由于这种广泛性，导致了种种问题，你必须用类似数学的方法来定制界面；类型是松散的，但是风格和结构是严格的。
<separator>

谈多了，我的毕业设计是搭建可视化的平台来比较三种进化算法（遗传算法、粒子群算法和差分算法）之间的差异。其中在建立平台的过程中，我需要演示者在输入框输入一组数据，其中包括遗传算法的遗传代数、个体数目和变量的二进制位数，然后在单击“执行算法”按钮时调用参数，因此我要做的工作是：

* 获取输入框的数据
* 把获得的数据保存在一个任何函数都能access的变量中
* 在按钮的callback函数里获取之前保存的参数

过程就是这么简单，首先matlab提供了这么几个函数，`setappdata()`，`getappdata()`和`rmappdata()`，我们这里先不谈`rmappdata()`，所以我们要做的是保存参数：

`setappdata(handles.your_gui_tag, 'self_defined_variable', variable_name)`

意思是在你的图形界面'your_gui_tag'下，把你当前编辑框的callback函数中的参数`variable_name`保存到`self_defined_variable`中。

然后我们在“执行算法”按钮的callback函数中，用：

`another_self_defined_variable = getappdata(handles.your_gui_tag', self_defined_variable')`

这样你就能把保存在`self_defined_variable`的参数传到`another_self_defined_variable`中，然后就能在当前callback函数中使用这参数。
