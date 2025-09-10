---
title: "全新开始 astro-paged"
desc: "终于是忍不住了，自己上手搓了一个将就的主题"
slug: astro-paged
pubdate: 2025-09-09
categories:
  - Tech 技术
tags:
  - blog
  - astro
---

使用现成主题方便是方便，但是当你魔改一通到自己满意，然后原主题又发布了新版本，你一 merge，铺天盖地的 conflict。。。好吧你也可以说为什么一定要跟着原主题同步更新？只能说我有这么点强迫症，所以呢就自己动手搓了一个将就的主题。

本主题的灵感来自 [hugo-paged](https://github.com/yihui/hugo-paged)，而 [Yihui](https://yihui.org/) 说他是完全受 [paged.js](https://pagedjs.org/) 启发才想到写此主题。主要的样式完全模仿如下（用 Tailwind 重写，但是总感觉差点感觉，无法做到原来一样，技术有限先这样吧），然后在一些诸如主题切换逻辑、Open Graph 等功能大量借鉴 [astro-pager](https://github.com/satnaing/astro-paper)，同时在一些细节上进行了优化。

```css
  /* ==== paged.js style ==== */
  .crop-h {
    @apply hidden md:block absolute -z-10 top-12 bottom-12 left-0 right-0 border-y border-foreground;
  }
  .crop-v {
    @apply hidden md:block absolute -z-10 top-0 bottom-0 left-12 right-12 border-x border-foreground;
  }
  .crop-c {
    @apply hidden md:block absolute -z-10 border-background top-6 left-6 right-6 bottom-6 border-[1.75rem];
  }
```

现在讲讲具体细节，我不喜欢黑箱，并且博客是以中文为主的内容，遂决定不使用 [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)，那就只有手搓了一套样式，可以在我的博客代码仓库中的 `global.css` 中找到。我相当欣赏 [赫蹏（hètí）](https://github.com/sivan/heti)，不过目前并未在项目中使用，要是以后附庸文雅了回头再看看。

为了极简风格延续，直接强忍着不使用任何 SVG（除了使用 Github style alerts 插件带来的 5 个），需要用的地方都尽量找 [字符实体（Character Entities）](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)替代了，要么就是用文字直接表达，还有从 Yihui 那儿看来的 [Dingbats](https://en.wikipedia.org/wiki/Dingbat)，总的来看还不错，其实并没有这么多图形非表达不可。

然后是字体，真是相当头疼的问题，一方面是要选出足够好看的字体（包括中文和英文），一方面还要考虑网页加载速度和兼容性。Astro 倒是自带有个 [实验性字体 API](https://docs.astro.build/en/guides/fonts/#experimental-font-api)，我选用 [Fontsource](https://fontsource.org/) 字体商，Jost 作为博客的修饰字体，即导航栏、底栏等内容，Libertinus Serif 作为博客的正文字体，本来想用 Iowan Old Style，无奈没有字体商支持，自部署 CDN 又嫌太麻烦。中文即使是 woff2 格式体积也相当夸张，翻遍互联网，幸运找到了 [中文网字计划](https://chinese-font.netlify.app/zh-cn/)，他们搞了一个 [字体分包计划](https://github.com/KonghaYao/cn-font-split)，`cn-font-split` 可以将一个字体文件分割成多个小文件，并且按需加载，极大减少加载时间，针对前端项目，他们更是直接提供前端编译器插件 [vite-plugin-font](https://www.npmjs.com/package/vite-plugin-font)，直接把想用的字体源文件放进 `/src/assets/fonts` 下，然后根据文档指示进行简单设置即可，超级便捷！我决定将文章正文部分设置成宋体，引用段落（即 blockquote）使用楷体加以区分。宋体最常见的自然是 Google 推出的 [Noto Serif SC](https://fonts.google.com/specimen/Noto+Serif+SC) 可变字体，我为了更有个性，将 [特里王](https://www.zhihu.com/people/wang-ting-rui-61) 的京華老宋体作为首选字体（刚好出了 v3），方正楷体也过于常见了，我选择了 [寒蝉正楷体](https://github.com/Warren2060/Chillkai)。遗憾这俩字体都没有字重、字形变体。

现在还差个搜索功能，估计啥时候有空用 [Pagefind](https://pagefind.app/) 搓一个吧，还是模仿着 astro-paper 写好了。

目前总体已经能将就着用了这主题，还在想是否后续再改改可以发布一下。

哦除了前文提到的帮助，还有离不开 [Claude Code](https://www.anthropic.com/claude-code) 的鼎力相助哈哈，任劳任怨干了不少活。
