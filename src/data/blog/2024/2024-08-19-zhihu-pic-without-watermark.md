---
title: 知乎下载去水印图片
desc: 介绍如何在网页版知乎找到不带水印的原图进行下载
slug: zhihu-pic-without-watermark
pubdate: 2024-08-19
categories:
  - Tech 技术
tags:
  - zhihu
---

用 <kbd> F12 </kbd> 查看图片元素的标签，其中 `data-actualsrc` 表明原始图片格式，`data-original-token` 表示原始图片 `token` 值，将这两者替换掉 `src` 中对应部分内容就是无水印图片地址了。

```javascript
// 选择所有符合以下条件的图片元素：
// 1. 具有 data-original、data-original-token、data-lazy-status 属性
// 2. 不包含 data-original-xiu 属性、不属于 .comment_sticker 和 .Avatar 类
document.querySelectorAll(
  'img[data-original][data-original-token][data-lazy-status]:not([data-original-xiu]):not(.comment_sticker):not(.Avatar)'
).forEach(img => {
  // 从 data-original 中提取域名（假设格式为 "http(s)://域名/..."）
  const parts = img.dataset.original.split('/');
  const domain = parts[2];
  // 构建新的图片 URL，格式为 "https://{域名}/{data-original-token}.webp"
  img.src = `https://${domain}/${img.dataset.originalToken}.webp`;
  // 设置标记，表示该图片已经被处理过
  img.dataset.originalXiu = 'true';
});
```

以上 JS 代码可以在 <kbd> F12 </kbd> 进入 Console 中直接使用，可以让页面已加载的所有图片去除水印；或是用在其他任何地方。

参考

<https://www.52pojie.cn/thread-1889520-1-1.html>
