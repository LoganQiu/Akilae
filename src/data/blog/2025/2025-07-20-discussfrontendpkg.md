---
title: 前端包管理器浅谈
desc: 粗浅讨论了线下乱七八糟的前端包管理器最佳实践
slug: discussion-of-frontend-package-manager
pubdate: 2025-07-20
categories:
  - Tech 技术
tags:
  - frontend
  - package manager
---

## 混乱的前端包管理器

这里主要是指 JavaScript/Node.js 生态下包管理器（Package Managers）。最早出现的 `npm`，现在与 Node.js 捆绑包装；然后是标榜确定性和安全的 `yarn`，以及极大提升性能与磁盘效率 `pnpm`（硬链接+符号链接机制干碎 node_modules 黑洞）。网络上不同的项目各自选用不同的包管理器，今天聊聊开发者该如何 **正确** 地同时使用这些玩意。

## 直接但不稳

最直接的方式，由于下载 Node.js 时自带了 `npm`，那么直接输入 `npm i -g pnpm@latest` 和 `npm i -g yarn@latest` 即可在全局下安装另外俩包管理器。简单明了，但为什么不可靠？项目原作者和你使用了同一个包管理器但是可能版本不同，或许会导致依赖解析冲突、锁文件不兼容等等问题。

那该怎么办，总不能每次要运行一个项目都得重新下一个对应版本的包管理器吧？

## 优雅且方便

Node.js 在 14.19.0 与 16.9.0 中首次引入 Corepack，并标记为实验性功能（默认状态 `disable`）。

在我目前版本 Node.js v22.17.1(LTS)/Corepack@0.33.0 下，应该这样使用：

### 本地项目 & 团队协作

```shell
corepack enable
# pnpm
corepack use pnpm@latest-10 # 或者指定版本
# yarn
corepack use yarn@stable # 或者指定版本
```

这样会自动写入或更新项目中 `package.json` 的 `packageManager` 字段，确保所有人环境一致。

### CI/CD 环境

```shell
- npm install -g corepack@latest
- corepack enable
# pnpm
- corepack prepare pnpm@latest-10 --activate
- pnpm install
# yarn
- corepack prepare yarn@stable --activate
- yarn install
```

如果 `package.json` 中有 `packageManager` 字段，那么可以直接如下：

```shell
- npm install -g corepack@latest
- corepack enable
- corepack install
- pnpm install  # 或者对应的 yarn install/npm install
```

### 注意

1. 如果存在 `packageManager` 字段指定了包管理器特定版本，务必在所有命令前加上 `corepack` 诸如 `corepack pnpm install`，`corepack yarn install` 等。当然，可以在 shell 配置文件中添加别名的方式简化一下。

2. `npm install -g yarn` 只能安装到 Yarn 1.22.x（Yarn Classic），后续的 Yarn Modern（2.x/3.x/4.x）不再发布到 npm registry，只能通过其他方式安装，官方推荐是 Corepack。

## 奇怪的发展趋势

遗憾的是 Corepack 将从 Node.js v25 起被移除，详见 [此处](https://nodejs.org/docs/latest-v22.x/api/corepack.html)。按照 github [官方库](https://github.com/nodejs/corepack) 里所写，以后就得先进行 `npm i -g corepack` 了。

具体原因请见 [Node.js Takes Steps Towards Removing Corepack](https://socket.dev/blog/node-js-takes-steps-towards-removing-corepack)，这篇文章详细讲述了来龙去脉。简单来讲，就是有人提出哎你这 Corepack 出了这么久了，也该默认启用了吧，结果 Node.js 的包维护工作组（PMWG）一讨论，说你 Corepack 本质上是独立项目，且其文档、贡献者与主流包管理器（Yarn、pnpm）并未积极参与 Node.js 核心会议，因此并不适合继续捆绑维护，直接 [投票](https://github.com/nodejs/TSC/pull/1697)，把 Corepack 票出了捆绑状态。

## 搅局者

这里随便提一嘴，Node.js 原作者 Ryan Dahl 对其后续设计决策感到不满，直接启动了新项目 [Deno](https://github.com/denoland)（把 Node 字母顺序重排而来），这玩意主要是 JavaScript/TypeScript 运行时，内置包管理功能通过直接 URL 导入模块实现。

还有个 [Bun](https://github.com/oven-sh/bun)，是 JavaScript 运行时 + 构建工具 + 包管理器的组合。Bun 极大提升了包安装速度、启动速度，大幅降低了内存占用，因为使用 JavaScriptCore 引擎（Safari 的引擎）而非 V8（Chrome 的引擎），带来的弊端就是跨平台的问题。我并未过多了解，大致应该通过移植 JSCore 来解决吧？

## 结语

> 前端大舞台，有梦你就来。
