---
title: Windows 软件
desc: Windows 的软件管理策略以及好用的软件推荐
slug: windows-softwares
pubdate: 2024-01-03
moddate: 2025-06-21
categories:
  - Tools 工具
tags:
  - windows
pin: 1
---

> [!important]
> 所有软件都应该去官网下载，而不应贪图方便而随意使用他人链接或者去第三方网站下载。若是不得已需要使用⌈学习版⌋，则务必准备好承担相应的风险，首先没人能保证里面是否植入了木马，其次一般厂商懒得费时费力找个人用户麻烦 **但是** 不排除特殊情况。
>
> 又：对于开发人员，更应该使用包管理工具来下载软件。

## Windows 软件管理

前言：Windows 软件杂乱不堪，且各版本不好管理，因此迫切需要包管理器（Package Manager）。

### [Scoop](https://scoop.sh/)

个人首推，详细用法不赘述，官方文档简单易懂，如果不想看英文，以下链接讲解也十分细致：
[Scoop 包管理器的相关技巧和知识 – 就是这个范儿](https://www.thisfaner.com/p/scoop/)

- 清理缓存

  Scoop 并不会在安装软件后自动删除安装包，这是为了方便你在安装失败时重新安装。然而，这也会导致你的硬盘上留下许多没用的安装包，占用空间。你可以通过运行以下命令清理全部缓存的安装包：

  ```shell
  scoop cache rm *
  ```

  另外，有时 Scoop 在安装新版本的软件后不会自动删除旧版本——在这可能是由于该软件当前正在被使用，在这种情况下 Scoop 只会将环境变量链接到新版本的软件，而不会把旧版本的软件删除。久而久之，这也有可能在你的硬盘上占中不少空间。你可以通过运行以下命令清理所有过时的软件版本：

  ```shell
  scoop cleanup *
  ```

- 配置代理

  首先可以通过 `scoop config` 来查看当前配置，配置文件通常位于 `~/.config/scoop/config.json`，官方建议使用命令行配置代理：

  ```shell
  scoop config proxy 127.0.0.1:7890 # 端口号根据实际情况调整
  ```

### [Chocolatey](https://chocolatey.org/)

曾经 Windows 上最好的包管理工具且软件数量最多，但是由于其较为混乱复杂的下载逻辑逐渐式微。若需要使用完整功能还要订阅 Pro 版本且价格不菲。

### [WinGet](https://github.com/microsoft/winget-cli)

微软官方的开源包管理器，并且源包括 msstore（注意不是 Mirosoft Store，但你可以粗浅认为是超集）。

常见问题：

> 尝试更新源失败：winget

解决方法：

> 请在代理规则中加入 DOMAIN-SUFFIX 为 microsoft.com 走代理的规则，或者简单点直接开全局模式。

原因解析：

> `winget` 直接读取系统环境变量，没有独立的配置文件。

### 附：[UniGetUI](https://github.com/marticliment/UniGetUI)

原为 WingetUI，这是一个 CLI 包管理器（例如 WinGet、Scoop、Chocolatey、Pip、Npm、.NET Tool、 Cargo 和 PowerShell Gallery）创建直观的 GUI 且统一规划。

## 通用类

- [Wiztree](https://diskanalyzer.com)
  这是一款硬盘空间分析软件，集 [SpaceSniffer](http://www.uderzo.it/main_products/space_sniffer) 与 [TreeSize](https://www.jam-software.com/treesize_free) 大成，提供树状文件图、按文件类型统计等列表，并且直接从主文件记录（MFT）读取数据，拥有最快的扫描速度。如果只想要一个单纯的查找文件应用，那么 [Everything](https://www.voidtools.com/zh-cn/) 是最优的选择。

- [PotPlayer](https://potplayer.tv)/[VLC](https://www.videolan.org/vlc)/[mpv](https://mpv.io)
  关于本地视频播放器，以上三者都是不错的选择。
  PotPlayer 在 2019 年某次更新后开始推送弹窗广告，但据反馈并非所有人都有，笔者习惯此应用并且时至今日也未见过一次，为了保险起见可以考虑把 PotPlayer 加入防火墙禁止联网权限。
  VLC 与 mpv 都是开源软件且都有全平台客户端，相比较而言 VLC 有着完善的 GUI（~~但是很丑~~有皮肤插件可以美化）；mpv 界面极简，但拥有最为丰富的功能，需要用快捷键与命令行来执行操作。
  除此之外还有诸如 MPC 以及其衍生产品 MPC-HC，MPC-BE 等其他本地播放器就不详解了。

- [7-Zip](https://www.7-zip.org/)
  解压缩软件，不必多言，自 Bandizip7.0 新版本加入广告后剩下的唯一真神。

- [Snipaste](https://www.snipaste.com/)
  截图软件，免费版基本满足所有需求，唯一缺点即使专业版也不支持长截图。如果长截图或 GIF 对你十分重要，建议使用 ~~[FastStone Capture](https://www.faststone.org/FSCaptureDetail.htm)，但是此软件没有免费版本~~ [PixPin](https://pixpinapp.com/)。

- [Ditto](https://ditto-cp.sourceforge.io/)
  剪贴板管理软件，极简且好用。当然如果没有几百条文字复制记录的需求，Windows 自带的超级剪贴板完全可以胜任（使用 <kbd> Win </kbd> + <kbd> V </kbd> 呼出）。​​​

- [PowerToys](https://github.com/microsoft/PowerToys)
  这是由微软社区开发且开源的强化windows体验的软件，功能丰富，包括但不限于“始终置顶”，“颜色选择器”，“File Locksmith（用于了解哪些进程正在使用所选文件和目录）”，“PowerRename（使用正则表达式进行高级批量重命名）”等等。后台挂载占用内存也很低完全可以常驻。

- ~~[Fluent Search](https://www.fluentsearch.net/)~~
  （2024/11/02 更新：Fluent Search 更新迭代基本停滞，请切换至其他 Launcher）
  （2025/06/21 更新：已经恢复更新并不知何时发布了 1.0 正式版本，但是与此同时 PowersToys 也推出了 Command Palette 也就是第二代 PowersToys Run，哪个顺手就用哪个吧）
  基于 C# 开发的全功能搜索软件（而且是 Fluent UI！），笔者认为其搜索能力与功能范围可以几乎替代 [Listary](https://www.listary.com/) 和 [everything](https://www.voidtools.com/zh-cn/) 这两款软件，当然，也强过 PowersToys Run 了。同时，工作流 Workflow 也是其一大特点，基于 C# 语法能完成各种任务。至于 [uTools](https://u.tools/) ，笔者不喜欢它的死板与繁杂，所有插件都以独立进程在后台挂载，而 [Quicker](https://getquicker.net) 确实很不错，如果读者感兴趣也是相当推荐尝试一下。

- [Directory Opus](https://directory-opus.com/)（2024/02/16 添加）
  Windows 多功能文件资源管理器，功能繁多，非常强大，喜欢捣鼓软件的人不可错过的应用（但是有点丑，所以我没用）。

- [Geek Uninstaller](https://geekuninstaller.com)（2024/03/01 添加）
  一款免费轻量的强制删除应用的软件，包括不彻底地清除卸载时注册表残留。在此软件源代码基础上进行开发得到了 [Uninstall Tool](https://crystalidea.com/uninstall-tool)，虽然是收费（单次买断），但不得不承认功能强大，能够在安装应用时追踪创建的新文件以及修改的注册表，能够批量彻底删除顽固应用包括清理注册表，对电脑中 2345 全家桶、百度全家桶、360 全家桶、鲁大师、腾讯全家桶、金山全家桶（以上排名分先后）或有其它等流氓软件感到无从下手的人倾情推荐。

## 专业类

- [DiskGenius](https://www.diskgenius.cn)
  硬盘分区与数据恢复软件，功能强大，免费版基本满足所有需求。原汁原味的国产软件。

- [HWiNFO](https://www.hwinfo.com)
  一款极为专业的系统信息和诊断的工具，适用于 Windows 的全面硬件分析、监控和报告。HWiNFO 可以将每一样硬件的具体参数全部显示，也能实时显示各个硬件（详细到超乎你的想象）的状态。有了它你就不再需要 CPU-Z & GPU-Z。它还有最大的两个优点：究极轻量，针对个人及非商业用途完全免费。

- [MSI Afterburner](https://www.msi.com/Landing/afterburner/graphics-cards)
  无敌的微星小飞机，注意在安装时将 RivaTuner Statistics Server（RTSS）的选项勾上，因为在使用小飞机时需要调用 RTSS 里的功能。简单而言，这是一款显卡超频工具，帮助你释放显卡最佳性能，对于游戏党来说不可错过。

- [ThrottleStop](https://www.techpowerup.com/download/techpowerup-throttlestop)
  相对应地，CPU 也该有一款调式工具，throttlestop 能够帮助绕过原电脑对 CPU 的限制，最常见的操作就是通过 CPU 降压提高能耗比——降温，提高性能，降低噪音，提高续航。这种操作并不是没有风险的，过度降压的结果是系统蓝屏，未保存的数据丢失等。如果想要深度使用请详细搜索使用方法。其实，Intel 自身也有一款调试 CPU 的软件——[Intel® Extreme Tuning Utility (Intel® XTU)](https://www.intel.com/content/www/us/en/download/17881/intel-extreme-tuning-utility-intel-xtu.html)，当然并没有 ThrottleStop 那么简洁明了。

- [Process Lasso](https://bitsum.com/)（2024/02/17 添加）
  一款智能调试进程级别的系统优化工具，主要功能是动态调整各个进程的优先级并设为合理的优先级以实现为系统减负的目的，极为强大，也可以对 Intel 大小核调度进行详细设置（垃圾 Wintel 在搞毛线都不知道）。

另：[图吧工具箱](http://www.tbtool.cn)
确切地说这并不是一个软件，而是一个硬件检测工具合集，里面包含几乎所有主流工具（包括但不限于 CPU 工具，主板工具，内存工具，GPU 工具，磁盘工具，屏幕工具，烤机工具等），省去了你从各个官网找对应软件的工夫。然而需要注意，不少人在网上反馈图吧工具箱被 Windows Defender 查出病毒，当然，笔者亲自体验过并确信这是无毒的安全软件，个中真假，请自行甄别。

## 小工具

> [!note]
> 区别于以上的软件，以下的是极为小众且针对人群单一的小玩意儿，可以叫做 "widget"。之所以要找这些东西，当然是为了避免重复造轮子（bushi）。

- [TrafficMonitor](https://github.com/zhongyang219/TrafficMonitor)
  这是一个用于显示当前网速、CPU 及内存利用率的桌面悬浮窗软件，并支持任务栏显示，支持更换皮肤。

- [Window Centering Helper](https://kamilszymborski.github.io)
  顾名思义，适用于所有想要让打开的窗口全部居中的强迫症。

- [DriverStore Explorer](https://github.com/lostindark/DriverStoreExplorer)
  将电脑中所有驱动分门别类列出来，包括win自带设备管理器无法显示的。适合在打开内核完整性报错有不兼容驱动却无法找到时使用，当然，也可以直接去 **C:\Windows\System32\drivers** 中查找驱动。

- ~~[PowerEconomizer](https://github.com/UMU618/PowerEconomizer)（2024/05/20 添加）~~
  （2024/06/28 删除：并无大用，甚至偶尔有副作用）
  中文名“超抠”，通过 CPU 只给予前台进程全频运行能力，牺牲后台进程速度达到延长续航能力。

- [f.lux](https://justgetflux.com/)（2024/08/06 添加）
  使计算机显示屏的颜色适应一天中的各个时间段，自动控制色温。

- [Keyviz](https://github.com/mulaRahul/keyviz)（2024/11/07 添加）
  在屏幕上实时显示按下的键盘符号。

> 通篇未包含 IObit 和 CCleaner 两家的任何软件，因为笔者已默认其为流氓软件与 2345 之流并无明显区别，然而其中其实也不乏能使用的软件（如 CC 的 Defraggler），本着宁可错杀不可放过原则，全部舍弃。

## JetBrains

2024.10.08

在 [热佬网站](https://jetbra.in/s) 任意进入一个可用的 IPFS 下载 `jetbra.zip` 并解压到无中文无空格目录下。
下载 Toolbox，安装需要的 IDE，编辑对应的 `.vmoptions` 文件，添加

```text
# 从版本 2022.2 开始, 需要额外配置下面两行参数以使用 JBR17
--add-opens = java.base/jdk.internal.org.objectweb.asm = ALL-UNNAMED
--add-opens = java.base/jdk.internal.org.objectweb.asm.tree = ALL-UNNAMED
# 下面 javaagent 配置你自己的 ja-netfilter.jar 绝对路径地址，不要漏了 = jetbrains
-javaagent:/path/to/ja-netfilter.jar = jetbrains
```

`.vmoptions` 文件识别顺序|参考 [官方文档](https://www.jetbrains.com/help/idea/2024.2/tuning-the-ide.html)

1. 如果 `<IDE>_VM_OPTIONS` 环境变量存在且指向的 `.vmoptions` 文件也存在, 则使用该文件。
2. 如果当前 IDE 是 Toolbox 安装的，则使用 IDE 安装目录下的 `<version>.vmoptions` 文件。
   Toolbox --> 对应 IDE 右侧设置 --> 配置 --> 编辑 JVM 选项
3. 如果不是通过 Toolbox 而是独立安装的 IDE，则使用配置目录下的。
   `%APPDATA%\JetBrains\<product><version>` 下的 `.exe.vmoptions`
   也可以通过 IDE 内 Menu --> Help --> Edit Custom VM Options 修改
4. 如果以上位置都没有 `.vmoptions` 文件, 则使用默认位置下的。
   通常在 `<IDE_HOME>\bin` 下的 `.exe.vmoptions`

> [!note]
> 在 2024.2 版本之后内置了多种语言和地区选择。请勿选择地区！请勿选择地区！！请勿选择地区！！！（会使激活失效）
>
> 如果选择了 China Mainland，请找到 jetbra 目录，编辑 `config-jetbrains\url.conf` 文件，新增以下内容即可：
>
> ```text
> [URL]
> PREFIX, https://account.jetbrains.com.cn/lservice/rpc/validateKey.action
> ```
>
> 具体原因详见：<https://zhile.io/2024/09/05/jetbrains-2024-2-region.html>
