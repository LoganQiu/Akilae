---
title: Shell & Terminal
desc: 厘清 Shell 和 Terminal 的区别，了解 Shell 的分类，同时给这两者一些选择推荐。
slug: shell-and-terminal
pubdate: 2024-10-24
categories:
  - Tools 工具
tags:
  - shell
  - terminal
---

## Shell 类型区分

### 交互式（Interactive）

交互式 shell 又有两种模式，**登录式** 和 **非登录式**（login and non-login）。

- **登录式**：通过登录会话启动，如通过终端登录、SSH 连接等。
- **非登录式**：从已登录的会话中启动，例如在终端中输入 `bash` 或 `zsh`。

### 非交互式（Non-interactive）

顾名思义，非交互式 shell 专注于执行任务，而不是与用户交互，一般通过脚本执行或系统任务调度启动。

### 如何区分？

在 shell 中输入 `echo $-`，若返回字符串有 `i` 那就是交互式，输入 `echo $0`，若返回字符串以 `-` 开头便是登录式。

```shell
Last login: Wed Oct  2 00:47:35 on ttys000
➜  ~ echo $- | grep i    # 若有 i 直接高亮显示，表示是交互式

569JNRXghikls
➜  ~ echo $0    # 由于在 zsh 中编写，所以输出 -zsh
-zsh
➜  ~ zsh
➜  ~ zsh
➜  ~ ps -f    # 上面直接又新启动了两个 zsh，可以看到下面输出只有第一个是登录式
  UID   PID  PPID   C STIME   TTY           TIME CMD
  501 26153 26152   0  1:05上午 ttys001    0:00.13 -zsh
  501 26596 26153   0  1:05上午 ttys001    0:00.11 zsh
  501 26833 26596   0  1:05上午 ttys001    0:00.12 zsh
```

## 配置文件

**以下均以 shell 是 bash 举例**

首先是根目录下（即 **系统级** 配置），`/etc/profile` 是 **登录** shell 配置文件，当 **任何** 用户登录到系统（无论是图形界面还是命令行界面）时，这个文件都会被执行，它通常用来设置环境变量或执行其他系统范围的初始化任务，然后是 `/etc/bashrc`，这是 **非登录** shell 配置文件，`/etc/environment` 对 **所有** shell 都有效的配置文件。可能还会有 `/etc/bash_login` `/etc/bash_logout`，但这些是非标准配置文件，正确做法下面解释。
再看到用户主目录下（即 **用户级** 配置），`~/.bash_profile` 是 **登录** shell 配置文件，若不存在接着寻找 `~/.bash_login`，若仍不存在接着寻找 `~/.profile`，以上三者 **仅加载第一个存在** 的配置文件。`~/.bashrc` 是 **非登录** shell 配置文件。在退出 shell 时加载 `~/.bash_logout`。

> 若是 PowerShell ，则控制台支持以下基本配置文件。 这些文件路径是默认位置。具体见 [微软文档](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_profiles)。
>
> - 所有用户，所有主机
>   - Windows - `$PSHOME\Profile.ps1`
>   - Linux - `/opt/microsoft/powershell/7/profile.ps1`
>   - macOS - `/usr/local/microsoft/powershell/7/profile.ps1`
> - 所有用户，当前主机
>   - Windows - `$PSHOME\Microsoft.PowerShell_profile.ps1`
>   - Linux - `/opt/microsoft/powershell/7/Microsoft.PowerShell_profile.ps1`
>   - macOS - `/usr/local/microsoft/powershell/7/Microsoft.PowerShell_profile.ps1`
> - 当前用户，所有主机
>   - Windows - `$HOME\Documents\PowerShell\Profile.ps1`
>   - Linux - `~/.config/powershell/profile.ps1`
>   - macOS - `~/.config/powershell/profile.ps1`
> - 当前用户，当前主机
>   - Windows - `$HOME\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`
>   - Linux - `~/.config/powershell/Microsoft.PowerShell_profile.ps1`
>   - macOS - `~/.config/powershell/Microsoft.PowerShell_profile.ps1`

### 最佳实践

`/etc` 目录下的配置文件不应主动修改，一般只需要关注当前用户 shell 的生命周期。
在 `~/.bash_profile` 中添加环境变量、路径或其他全局配置。
在 `~/.bashrc` 中添加个性化配置，如别名、函数、主题等。
其余配置文件不主动修改。

### Bash & Zsh 文件对比

在 Linux 和 macOS 10.14（代号 Mojave）及之前的系统里，默认使用 Bash。
在 macOS 10.15（代号 Catalina）及之后版本默认使用 Zsh。
两者配置文件对比如下：

***（按照加载先后顺序排列！！）***

| Bash                 | Zsh                     |
| -------------------- | ----------------------- |
| /etc/environment     | /etc/zshenv = ~/.zshenv |
| /etc/profile         | /etc/zprofile           |
| ~/.bash_profile      | ~/.zprofile             |
| /etc/bashrc          | /etc/zshrc              |
| ~/.bashrc            | ~/.zshrc                |
| /etc/bash_login      | /etc/zlogin             |
| ~/.bash_login        | ~/.zlogin               |
| ~/.profile（非必要） |                         |
| ~/.bash_logout       | ~/.zlogout              |
| /etc/bash_logout     | /etc/zlogout            |

> [!note]
> `/etc/profile` `/etc/environment` `~/.profile` 都是 Bourne shell（sh）及其兼容的 shell（如 Bash）通用配置文件。

## Shell 选择

上面也提到了，Linux 默认 shell 为 Bash（Bourne Again Shell），而现在较新的 macOS 都使用 Zsh（Z Shell）。除此之外，还有最古老的始祖 sh（Bourne Shell），新兴的 Fish（the friendly interactive shell）。当然，这些 shell 在 Linux 和 macOS 上都可以使用，可以根据个人偏好选择。

在 Windows 中自带两个 shell，分别是 the Command shell 和 Windows PowerShell，前者更基础底层，后者更复杂强大。注意，现在 Windows 更推荐使用 PowerShell 7.x，由于 PowerShell core 基于 .NET 构建，所以跨平台通用，并且支持管道操作（不同于 Unix/Linux Shell 的文本传输，是更强大的对象传输）。

推荐阅读：[Windows PowerShell 5.1 与 PowerShell 7.x 之间的差异](https://learn.microsoft.com/zh-cn/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.4)

额外提一下 Nushell，一个现代化的跨平台 Shell，专为处理结构化数据而设计，尤其适合需要在命令行中进行数据操作和分析的用户。

## Terminal 选择

### 默认终端

- **Terminal.app**（macOS）：macOS 系统的默认终端，支持基本的 Unix 命令行操作。
- **GNOME Terminal**（Linux）：Linux 桌面环境 GNOME 的默认终端。
- **Konsole**（Linux）：Linux 桌面环境 KDE 的默认终端。
- **Windows Terminal**（Windows）：Windows 系统的默认终端，支持 CMD、PowerShell 和 WSL。

### 第三方终端

|   终端                                                       |   技术栈    |   平台支持   | 特性                                               |
| ------------------------------------------------------------ | ----------- | ------------ | -------------------------------------------------- |
| [**Alacritty**](https://github.com/alacritty/alacritty)      | Rust        | 全平台       | 专注性能，无 GUI 配置，无 SSH 功能                 |
| [**Ghostty**](https://github.com/ghostty-org/ghostty) 开发中 | Zig         | Linux/macOS  | 编写语言更接近底层，兼顾性能和功能                 |
| [**Hyper**](https://github.com/vercel/hyper)                 | TypeScript  | 全平台       | 基于 Electron 性能一般，插件生态基于 NPM 非常丰富  |
| [**iTerm2**](https://github.com/gnachman/iTerm2)             | Objective-C | macOS        | 功能内置极为全面                                   |
| [**Kitty**](https://github.com/kovidgoyal/kitty)             | Python/C    | Linux/macOS  | 支持图形化内容，通过 Python 扩展插件               |
| [**Rio**](https://github.com/raphamorim/rio) 开发中          | Rust        | 全平台       | 继承大量 Alacritty 特性                            |
| [**Tabby**](https://github.com/Eugeny/tabby)                 | TypeScript  | 全平台       | 基于 Electron 性能一般，插件系统支持（JS/TS 编写） |
| [**WezTerm**](https://github.com/wez/wezterm)                | Rust        | 全平台       | 支持通过 Lua 扩展，兼具灵活和高性能                |

## 附 1：Shell 美化

- [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)
  适用于 Zsh 的配置框架，有丰富的插件和主题。
- [p10k](https://github.com/romkatv/powerlevel10k)
  适用于 Zsh 的最佳主题。
- [Oh My Posh](https://github.com/jandedobbeleer/oh-my-posh)
  适用于所有 shell 的主题引擎，社区中有大量现成主题可以使用。当然，此引擎最初为了 PowerShell 创建。
- [Starship](https://github.com/starship/starship)
  适用于所有 shell 的提示符主题，加载速度较快。

## 附 2：命令行工具

### 自用

记录一下好用的命令行工具，基本为 Unix/Linux 使用，大部分可在 Windows 上使用

- btop（top 上位替代）
- eza（ls 上位替代）
- fastfetch（neofetch 归档后的替代）
- dust（du 上位替代）
- yazi
- fd（find 上位替代）
- ripgrep（grep 上位替代）
- fzf（可以模糊搜索，粗浅理解为 grep 加强版）

### 命令行替代

Rust 规避了 C++ 项目的弊病，同时保证了良好的跨平台性质，被广泛用于命令行工具的重写。

- 使用 `bat` 替换 `cat`
- 使用 `bottom` 替换 `top` 和 `htop`
- 使用 `dust` 替换 `du`
- 使用 `fd` 替换 `find`
- 使用 `gitui` 替换 `lazygit`
- 使用 `eza` 或 `lsd` 替换 `ls` + `tree`
- 使用 `ripgrep` 替换 `grep`
- 使用 `sd` 替换 `sed`
- 使用 `tealdeer` 替换 `tldr` 和 `man`
- 使用 `zoxide` 替换 `cd` 和 `z.lua`

终端复用工具

- 使用 `zellij` 替换 `tmux`

## 参考

- <https://www.baeldung.com/linux/bashrc-vs-bash-profile-vs-profile>
- <https://juejin.cn/post/7128574050406367269>
- <https://wxnacy.com/2018/10/08/zsh-startup-files/>
