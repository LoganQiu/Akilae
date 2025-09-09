---
title: VMware 安装 macOS（失败）
desc: 尝试在 Windows 的 VMWare 上安装黑苹果 macOS，由于显存限制失败告终
slug: vmware-install-macos
pubdate: 2024-08-21
categories:
  - Tech 技术
tags:
  - macOS
  - vmware
---

**总结为此次尝试失败**

下载 [Unlocker 4.2.7](https://github.com/DrDonk/unlocker)，此仓库虽已存档但由于 VMware 版本更新基本不影响，可以一直使用（17 仍可使用）。

下载 [macOS 镜像](https://macos.mediy.cn/)。

首先停止后台所有有关 VMware 服务，运行 Unlocker 文件夹下 windows（或 Linux 看你所用平台）下的 Unlock 文件，此时再打开 VMware 新建虚拟机选择系统时便有了 Apple Mac OS X 的选项。接下来就跟安装普通虚拟机一样的流程，注意在创建的虚拟机的对应配置文件（.vmx 文件）加上一行 `smc.version = "0"`。

开机进入系统后选择“磁盘工具”，再找到“VMware Virtual SATA Hard Drive Media”，选择“抹掉”，返回上级菜单，选择“安装 macOS”。

至此安装完成可以进入系统（注意去把原先关闭的几项 VMware 服务都重新启动），可惜的是由于限制，只能分配 3MB 显存给此虚拟机的 macOS，下载 VMware Tools 后也只能加到 128MB，所以系统无论怎么设置都很卡顿，无法正常使用（如果有硬性需求可以选择前几代相对旧一些的系统相对有所缓解）。
