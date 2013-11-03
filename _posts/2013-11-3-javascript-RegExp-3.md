---
layout: post
title: JavaScript RegExp 类型（3）
---

{{ page.title }}
=======================
<p class="meta">Nov 3rd 2013, Guangzhou</p>

来到关于 JavaScript  RegExp 收官篇，我想简单说一说 ECMAScript 正则表达式的局限性。
<!-- more -->

尽管 ECMAScript 中的正则表达式功能还是比较完备的，但仍然缺少某些语言（特别是 Perl ）所支持的高级正则表达式特性。下面列出了 ECMAScript 正则表达式不支持的特性（想要进一步了解的话，可以访问 <a href="http://regular-expressions.info"> 这里 </a>）。

1. 匹配字符串开始和结尾的 \A 和 \Z 锚（但支持插入符号 "^" 和美元符号 "$" 来匹配字符串的开始和结尾）。
2. 向后查找（ lookbehind ）（但完全支持向前查找( lookahead )）。
3. 并集和交集类。
4. 原子组（ atomic grouping ）。
5.  Unicode 支持（单个字符除外，如 \uFFFF ）。
6. 命名的捕获组（但支持编号的捕获组）。
7.  s （ single ，单行）和 x （ free-spacing ，无间隔）匹配模式。
8. 条件匹配。
9. 正则表达式注解。

完！
