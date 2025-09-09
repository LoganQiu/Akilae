---
title: Git 删除已进入版本控制文件
desc: 具体分情况讨论如何在仓库中用 git 删除已进入版本控制的文件
slug: git-del-files
pubdate: 2025-01-21
categories:
  - Tech 技术
tags:
  - git
---

分两种情况讨论：

## 本地文件需要保留

以 `.DS_Store` 文件为例，执行下面的命令，这样会从 Git 索引中移除，但不会删除工作区中的文件：

```bash
git rm --cached .DS_Store
```

提交并推送更改:

```bash
git commit -m "Remove .DS_Store from tracking"
git push
```

不要忘记在项目根目录下的 `.gitignore` 文件中添加 `.DS_Store`。

> [!tip]
>
> 1. `git rm <file>` 用来删除 **[工作区+暂存区]** 的文件用。
> 2. `git rm --cached <file>` 如果想 **仅删除暂存区** 里的文件可以用此命令，它不会删除工作区中的文件。
> 3. 如果想删除 HEAD 仓库里的文件，好像没有专门的命令，只能 commit 作 log。具体操作是：rm → add → commit 或 git rm → commit。

## 本地文件需要删除

这个情况就和平常操作一样了。

假设有个文件 `a.html` 已经不再需要了，那么首先将其在本地删除，然后执行：

```bash
git add .
git commit -m "Del a.html"
git push
```
