---
title: Pip VS Conda
desc: 关于 pip 和 conda 的混合使用一直有所争议，正确做法是如何呢？
slug: pip-vs-conda
pubdate: 2024-08-12
categories:
  - Tech 技术
tags:
  - python
  - environment
---

来自 [知乎用户 6dQvdv](https://www.zhihu.com/people/0c1136cff6f589da755a6903ce5faec7)（已销号）在 [工具篇：conda and pip](https://zhuanlan.zhihu.com/p/508506160)（**文章内容有误，注意甄别**）的评论：

> 作者或许弄错了，在这里简单讨论一下：
>
> 1. anaconda or miniconda 的安装目录/pkgs，这个目录是 package cache directory 包的缓存目录，可以在命令行直接输入 conda info 命令查看。conda install 以及 pip install(在激活 conda 环境中使用的 pip) package 都可以在 current_env/lib/site-packages 找到（windosws 下，其它系统如 unix，安装在 env/lib/pythonX.Y/site-packages 下）。
>    参考：<https://stackoverflow.com/questions/31384639/what-is-pythons-site-packages-directory>
>
> 2. python -m site 打印的 list，并没有看到官方提及按照 import order 排序（是我没找到?）。不过，<anaconda or miniconda 的安装目录>/pkgs 优先级肯定也是最低的，env/lib/site-packages 里面安装的包优先级肯定是最高的，否则虚拟环境怎么互相隔离呢？
>    参考：<https://stackoverflow.com/questions/122327/how-do-i-find-the-location-of-my-python-site-packages-directory#46071447> 以及 <https://docs.python.org/3/library/site.html>
>
>    另外，关于在 conda 中使用 pip ，可以参考官方的说法: <https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#pip-in-env>
>
> 简言之，conda 中可以使用 pip，但 conda 并不兼容 pip，pip 安装的包越多，越容易引发包版本依赖问题，所以能用 conda 安装的包先用 conda 安装，不能的再到激活的虚拟环境里用 pip 安装。

同时可以参考 Anaconda 给出的建议：<https://www.anaconda.com/blog/using-pip-in-a-conda-environment>

简要概括如下：

- 仅在 conda 之后使用 pip
  - 优先尽可能使用 conda 然后再用 pip
  - pip 应仅在需要时使用 –upgrade-strategy 运行（默认设置）
  - 不要将 pip 与 –user 参数一起使用，避免所有“用户”安装
- 使用 conda 换环境进行隔离
  - 创建一个 conda 环境来隔离 pip 所做的任何更改
  - 使用硬链接来减少环境占用的空间
  - 应注意避免在“root”环境（如 base）中运行 pip
- 如果需要更改，请重新创建环境
  - 一旦使用 pip，conda 将不会意识到这些变化
  - 要安装其他 conda 软件包，最好重新创建环境
- （建议）将 conda 和 pip 要求存储在文本文件中
  - 包依赖可以通过 –file 参数传递给 conda
  - pip 接受带有 -r 或 –requirements 的 Python 包列表
  - conda env 将根据具有 conda 和 pip 要求的文件导出或创建环境
