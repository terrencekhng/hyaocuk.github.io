---
layout: post
title: C 二维数组的地址小记
---

{{ page.title }}

<p class="meta">Jan 23 2014, Guangzhou</p>

最近逛图书馆的时候，偶尔发现了介绍 C 语言指针的书，不是一本，而是数本，二话不说就随手拿了一本蔡明志大叔的[《指针的编程艺术（第二版）》](http://book.douban.com/subject_search?search_text=%E6%8C%87%E9%92%88%E7%9A%84%E7%BC%96%E7%A8%8B%E8%89%BA%E6%9C%AF&cat=1001)，看了开头几节，发现几处挺有用的地方，在这里做个小小的记录，方便以后查阅！
<!-- more -->

其中说到了二维数组的地址，这里提到了一个有趣的问题，就是定义一个二维数组 `int x[3][2]`，那么这个二维数组的首地址都可以用 `x[0]`,`x`,`&x[0][0]` 来表示，但是如果前两者加1，结果是否一样呢，我们通过以下代码来验证：

{% gist 8578103 %}

执行后输出类似的内容（不同机器可能会有不同的输出）

```
x = 0xbfd8afd0, &x[0][0] = 0xbfd8afd0

x[0] is 0xbfd8afd0
x[1] is 0xbfd8afdc

x[0]+0 is 0xbfd8afd0
x[0]+1 is 0xbfd8afd4
x[0]+2 is 0xbfd8afd8
x[0]+3 is 0xbfd8afdc
x[0]+4 is 0xbfd8afe0
x[0]+5 is 0xbfd8afe4

x[1]+0 is 0xbfd8afdc
x[1]+1 is 0xbfd8afe0
x[1]+2 is 0xbfd8afe4

x+0 is 0xbfd8afd0
x+1 is 0xbfd8afdc
```

由此可以看出，`x[0]` 加1输出的是下一个单元的地址，也可以说是同一行下一列元素的地址，如果没有下一列元素，那么就输出下一行第一个元素的地址；然而，`x` 加1输入的则是下一行第一个元素的地址，也就是下一行的首地址，因此，我们以后在编码的时候就要注意这一点了。
