---
title: 一些 Markdown 技巧实践
desc: 一些 Markdown 最佳实践和不常用的小技巧
slug: markdown-tips
pubdate: 2025-03-05
moddate: 2025-06-05
categories:
  - Tech 技术
tags:
  - markdown
---

## 短横的应用

这玩意也是个麻烦的东西，首先在英文中按定义有三种短横，由于直接输入比较麻烦，就定义分别由 <kbd>0</kbd> 和 <kbd>=</kbd> 中间的 <kbd>-</kbd> 一二三条组成（请注意这三种短横原本都是一条线并非拼接而成）：

```text
1. 连字符（hyphen）：-
2. 连接号（en dash）：--
3. 破折号（em dash）：---
```

> [!tip]
> Hugo 自带 Markdown 解析器 Goldmark 的 typographer 扩展可以自动将这些短横解析：-，--（`&ndash;`），---（`&mdash;`）。
> **已使用 Astro 重构博客，目前只使用前两种。**

使用方法就不赘述了，可以看 [这篇文章](https://www.punctuationmatters.com/en-dash-em-dash-hyphen/) 讲解，或者看 [知乎回答](https://www.zhihu.com/question/20332423/answer/15367631)。

## 换行不换段

在书写 Markdown 时如果仅仅回车，那么解析出来的文字将仍会是同一段落：

输入：

```md
这是第一段。
这里换行了吗？
```

输出：

这是第一段。
这里换行了吗？

要想换行不换段，显示表达且兼容性更高的做法应该是用 HTML 元素 `<br>`（如果想要大段空行这仍是好方法）；但是我为了尽量减少 md 文件中 HTML 表达，选择在行末添加两个 **空格**，大部分 Markdown 的解析器都能识别此表达，以下示例：

输入：

```md
这是第一段。  //有两个空格结尾
这里换行了吗？
```

输出：

这是第一段。
这里换行了吗？

## 添加图片

通常都使用外链图床或者静态资源加载图片，但如果想要一个 md 文件完成，可以采用曲线救国办法---图片转为 base64。

```markdown
![picname][foobar]
# 放在文章末尾
[foobar]:data:image/png;base64,iVBORw0......


# 或者直接使用 html 的 tag
<img src="data:image/png;base64,iVBORw0......"\>
```

## 特殊符号

HTML 常用符号：

`&copy;` (版权符号 ©)
`&reg;` (注册商标符号 ®)
`&trade;` (商标符号 ™)
`&larr;` (左箭头 ←)
`&uarr;` (上箭头 ↑)
`&rarr;` (右箭头 →)
`&darr;` (下箭头 ↓)
`&#176;` (度 °)
`&#960;` (圆周率 π)
