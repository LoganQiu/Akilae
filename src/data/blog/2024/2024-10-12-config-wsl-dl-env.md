---
title: 配置 WSL 深度学习环境
desc: 在 WSL2 中配置基于 Anaconda3 的深度学习环境
slug: config-wsl-dl-env
pubdate: 2024-10-12
categories:
  - Tech 技术
tags:
  - wsl
  - environment
---

## 安装 WSL2

对于 Windows10 版本大于 2004（即 Build 19041 更高）或者 Windows11 的 PC：

```powershell
wsl --install
```

上述命令直接下载默认的 Ubuntu 分发版本（即最近的 LTS 版本）。

细节不详述，见 [官方文档](https://learn.microsoft.com/en-us/windows/wsl/)。

## 安装 CUDA Toolkit

<https://developer.nvidia.com/cuda-toolkit>

> Q：为何需要单独安装 CUDA Toolkit?
>
> A：Anaconda 在安装 Pytorch 等会使用到 CUDA 的框架时，会自动为用户安装 CUDA Toolkit，其主要包含应用程序在使用 CUDA 相关的功能时所依赖的 **动态链接库**，不会安装驱动程序。在安装了 CUDA Toolkit 后，只要系统上存在与当前的 CUDA Toolkit 所兼容的 Nvidia 驱动，则已经编译好的 CUDA 相关的程序就可以直接运行，而不需要安装完整的 Nvidia 官方提供的 CUDA Toolkit。Nvidia 官方提供的 CUDA Toolkit 则是一个 **完整** 的工具安装包，包括 CUDA 程序的编译器、IDE、调试器等，CUDA 程序所对应的各式库文件以及它们的头文件。

**注意下载版本选择！**

按照指引依次输入命令行安装。

完成后配置环境变量：

```shell
# 打开系统环境变量文件
vim ~/.bashrc

# 添加 CUDA 环境变量
# 将 CUDA 的 bin 目录添加到现有的 PATH 环境变量中。
export PATH=/usr/local/cuda-12.6/bin${PATH:+:${PATH}}
# 将 CUDA 的 lib64 目录添加到现有的 LD_LIBRARY_PATH 环境变量中。
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

# 更新环境变量
source ~/.bashrc
```

此时执行

```shell
nvcc -V
```

将会显示 CUDA 版本（此处为 **Runtime api**）

由于 PC 本身就有 GPU 驱动，输入命令：

```shell
# 查看显卡状态
nvidia-smi
```

可以看到 `Driver Version` 和 `CUDA Version`，此处 CUDA 版本为 **Driver api**，与上述不同无妨，只需保证 Runtime api 不大于 Driver api 即可，当然若能保持一致最佳。

驱动版本与 CUDA 兼容表格：<https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html>

### 补充安装 cuDNN

<https://developer.nvidia.com/cudnn>

cnDNN 是为深度学习计算设计的软件库，在官网上选择正确版本按步骤依次输入命令下载。

接下来进行安装：

```shell
# 解压
tar -xvf cudnn-cuda-12

# 把 cuDNN 的文件拷贝至 CUDA 对应文件夹下
sudo cp -r /lib/* /usr/local/cuda-12.6/lib64/
sudo cp -r /include/* /usr/local/cuda-12.6/include/

# 更改读取权限
sudo chmod a+r /usr/local/cuda-12.6/include/cudnn*
sudo chmod a+r /usr/local/cuda-12.6/lib64/libcudnn*
```

验证安装是否成功：

```shell
cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2
```

正常输出即成功。

## 安装 Anaconda

进入 WSL2，输入

```shell
# 更新软件包
sudo apt update
```

```shell
# 进入根目录
cd
# 在 https://anaconda.com/download/success 找到 Linux 64-bit (x86) Installer 复制链接
wget https://repo.anaconda.com/archive/Anaconda3-2024.06-1-Linux-x86_64.sh
# 安装 Anaconda
bash Anaconda3-2024.06-1-Linux-x86_64.sh
# 默认安装到 /home/<Username>/anaconda3
```

```shell
# 打开系统环境变量文件
vim ~/.bashrc

# 添加 Anaconda 环境变量
export PATH="/home/<Username>/anaconda3/bin:$PATH"

# 更新环境变量
source ~/.bashrc

# 验证是否添加完成
conda --version
```

应该输出 `conda` 版本，配置结束。接下来可以正常用 `conda` 命令创建 python 新环境。

### 配置 PyTorch

<https://pytorch.org/>

注意版本选择，若没有对应刚才下载的 CUDA 版本不要慌，这是向下兼容的，即选择小于所安装的 CUDA 版本的最大版本。

复制 `conda` 命令下载库：

```shell
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia
```

## 连接 Windows 下 IDE

至此环境配置完成，只需通过 VSCode 或者 PyCharm 等连接到 WSL 就可以直接用里面的环境运行代码了。

## 参考

- <https://www.gongsunqi.xyz/posts/3c995b2a/>
- <https://blog.csdn.net/qq_41094058/article/details/116207333>
- <https://www.cnblogs.com/yhjoker/p/10972795.html>
- <https://zhuanlan.zhihu.com/p/91334380>
- <https://www.jianshu.com/p/eb5335708f2a>
