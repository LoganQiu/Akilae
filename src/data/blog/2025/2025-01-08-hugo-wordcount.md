---
title: Hugo 中英文混排字数统计（未解决）
desc: 关于 Hugo 字数统计在中英文混排时的问题，且尚未解决
slug: hugo-wordcount
pubdate: 2025-01-08
categories:
  - Tech 技术
tags:
  - blog
  - hugo
---

## 配置 `hugo.yaml`

加入 `hasCJKLanguage: true` 即可。

但是有更大（？）的问题 -- 假如你的文章中英文混排，那么每个英文字母都会被算作一个 word，当你博客中有大量代码后字数统计的误差将会相当大。

## 解决方法

暂无。。。`¯\_(ツ)_/¯`

源代码在[此处](https://github.com/gohugoio/hugo/blob/master/hugolib/page__content.go)，有时间改吧。

核心代码长这样：

```go
if isCJKLanguage {
    result.wordCount = 0
    for _, word := range result.plainWords {
        runeCount := utf8.RuneCountInString(word)
        if len(word) == runeCount {
            result.wordCount++
        } else {
            result.wordCount += runeCount
        }
    }
} else {
    result.wordCount = helpers.TotalWords(result.plain)
}
```
