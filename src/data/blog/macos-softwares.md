---
title: macOS 软件
desc: macOS 的软件管理策略以及好用的软件推荐
slug: macos-softwares
pubdate: 2024-08-16
moddate: 2025-07-09
categories:
  - Tools 工具
tags:
  - macOS
pin: 1
---

> [!important]
> 所有软件都应该去官网下载，而不应贪图方便而随意使用他人链接或者去第三方网站下载。若是不得已需要使用⌈学习版⌋，则务必准备好承担相应的风险，首先没人能保证里面是否植入了木马，其次一般厂商懒得费时费力找个人用户麻烦 **但是** 不排除特殊情况。
>
> 又：对于开发人员，更应该使用包管理工具来下载软件。

## macOS 软件管理

忘了古老的 [Fink](https://github.com/fink/fink)（依赖于 Debian 的软件包管理工具 dpkg/dselect/apt-get）和 [MacPorts](https://github.com/macports/macports-ports)（依赖于 BSD 的软件包管理工具 port，macOS 系统的标准软件包管理工具毫无争议的是 [Homebrew](https://github.com/Homebrew/brew)。

### Homebrew

<https://brew.sh/zh-cn/>

下载：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

输入 `brew help` 有基础的功能介绍如下：

```bash
Example usage:
  brew search TEXT|/REGEX/
  brew info [FORMULA|CASK...]
  brew install FORMULA|CASK...
  brew update
  brew upgrade [FORMULA|CASK...]
  brew uninstall FORMULA|CASK...
  brew list [FORMULA|CASK...]
 
Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA|CASK

Contributing:
  brew create URL [--no-fetch]
  brew edit [FORMULA|CASK...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
```

另外还有 `brew autoremove`（清理未使用的依赖），`brew cleanup`（清理 Homebrew 缓存）。

不确定想要下载的应用是否正确？不用担心，只需先 `brew install --cask applite` 下载 Homebrew Casks 的可视化程序，可以在里面查看应用官网，甚至直接下载应用也可以。

## 通用类

- [Keka](https://github.com/aonez/Keka)
  解压缩工具，开源免费，也可以选择去 Mac App Store 支持作者。

- [Stats](https://github.com/exelban/stats)
  开源的菜单栏系统监视器，优雅便捷。如果追求更加美观，可以尝试付费的 [iStat Menus](https://bjango.com/mac/istatmenus/)。

- [battery](https://github.com/actuallymentor/battery)
  一个开源的电池保护工具，如果想要更详细的电池使用策略可以使用付费软件 [AlDente](https://apphousekitchen.com/)。

- [IINA](https://github.com/iina/iina)
  基于 [mpv](https://github.com/mpv-player/mpv) 的开源视频播放器。

- [Raycast](https://www.raycast.com/)（2024/09/28 添加）
  Raycast 是一个新兴的启动器，可以高效打开文件、软件、网站并执行各种便捷操作，可以代替 Mac 自带的 Spotlight（焦点）。当然还有老牌的 [Alfred](https://www.alfredapp.com/) 和更适合国人的轻巧型启动器 [HapiGo](https://www.hapigo.com/) 可以自行尝试。
  稍微展开来说，免费版的 Raycast 就已经包含了剪贴板历史记录管理（支持剪贴板图片 OCR）、窗口布局管理（平替 Rectangle）、应用卸载（划重点）等功能，再搭配丰富的插件市场已经是顶级全能手了。

- [NetNewsWire](https://github.com/Ranchero-Software/NetNewsWire)（2024/09/29 添加）
  开源 RSS 阅读器，或者去外区商店下载更优雅的但买断制 Reeder Classic. 或者订阅制 Reeder.（这俩是同一个开发者，后者是新应用可以支持播客与视频的跟踪）。
  [Folo](https://github.com/RSSNext/Folo)（2025/06/06 添加）
  最新最强的 RSS 订阅软件，由 RSSHub 作者 [DIYgod](https://github.com/diygod) 带头开发，推荐尝试。

- [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html)/[LuLu](https://github.com/objective-see/LuLu)
  由于 macOS 自带的防火墙只能防御入站流量（inbound traffic），无法审查出站流量（outbound traffic），如果有软件向服务器上传隐私数据就无法阻止，此时需要第三方防火墙。Little Snitch 支持大版本买断，功能丰富，界面简洁优雅；LuLu 开源免费，基础功能齐全。
  常见的过滤规则：<https://ceadd.ca/blockyouxlist.txt>

- [App Cleaner & Uninstaller](https://nektony.com/zh-hans/mac-app-cleaner)
  买断制付费软件，可以完全彻底地卸载应用。同类型应用有 [腾讯柠檬清理](https://lemon.qq.com/)（免费）和 [CleanMyMac X](https://macpaw.com/cleanmymac)（更贵且有评论称会误删文件）。
  [Pearcleaner](https://github.com/alienator88/Pearcleaner)（2025/06/28 添加）
  新发现的开源应用，好用！还能删除开发环境配置。需要注意的是删除应用后再删除相关文件时是否会有过于相近的名字而误删。

- [iShot](https://better365.com/ishot.html)
  好用省心的截图工具，Pro 版本也不贵。替代可选 [CleanShot X](https://cleanshot.com/)（Mac 上毋庸置疑最强的截图录屏类软件，大版本买断制）。

- [SoundSource](https://rogueamoeba.com/soundsource/)（2024/11/04 添加）
  macOS 上顶级的声音控制软件，可以控制每个应用的声音大小音效，以及输出设备等等等等。

- [DaisyDisk](https://daisydiskapp.com/)（2025/03/19 添加）
  用旭日图展示磁盘空间分布，操作体验和视觉效果都非常出色。

## 小工具

- [Ice](https://github.com/jordanbaird/Ice)
  （Ice 许久不更新有许多 issues，已于 2025/06/02 购入 Barbee）
  菜单栏空间非常紧张，因此迫切需要优秀的管理软件来设置隐藏某些图标。Ice 上手快速方便，还有开源项目 [Dozer](https://github.com/Mortennn/Dozer)，[Hidden Bar](https://github.com/dwarvesf/hidden) 可以尝试，不过已经停更数年之久并不推荐。在 Mac App Store 中还可以搜索 Barbee 和 iBar 进行尝试。至于 [Bartender](https://www.macbartender.com/)？当然是极优秀的软件，可是一方面它悄无声息被一家未知开发者公司收购缺少透明度，一方面又是如此昂贵的大版本买断制，取舍自断了。
- [SketchyBar](https://github.com/FelixKratz/SketchyBar)
  SketchyBar 可以彻底自定义菜单栏，包括但不限于菜单栏的形状，添加个性化图标，修改图标间隙大小等等。
- [OnlySwitch](https://github.com/jacklandrin/OnlySwitch)
  包括了上述的菜单栏图标隐藏等功能，还可以加入更多的开关功能，包括自己编写的 Shortcuts。具体请见官网。
- [f.lux](https://justgetflux.com/)（2024/10/02 添加）
  使计算机显示屏的颜色适应一天中的各个时间段，自动控制色温。（得益于苹果对屏幕的高标准使其效果比在 Windows 上好出不少）
- [KeyCastr](https://github.com/keycastr/keycastr)（2024/11/07 添加）
  在屏幕上实时显示按下的键盘符号。
- [Input Source Pro](https://inputsource.pro/)（2024/11/21 添加）
  自定义设置根据应用和网站切换输入法。
- [CheatSheet](http://mediaatelier.com/LandingCheatSheet/)（2025/02/13 添加）
  长按 <kbd> ⌘ </kbd> 会显示当前使用应用的所有快捷键，由 Media Atelier 制作，不过已经不再更新此软件同时从官网下架，推荐使用 Homebrew 下载。
- [Syntax Highlight](https://github.com/sbarex/SourceCodeSyntaxHighlight)（2025/06/19 添加）
  macOS 最好用的功能之一便是按下空格可以快速预览文件，但是对于程序员来说各种代码文件或者配置文件无法预览多少有些麻烦，这个扩展可以出色地解决这个问题。
- [RCDefaultApp](https://rubicode.com/Software/RCDefaultApp/) （2025/07/09 添加）
  可以批量设置默认应用。此软件最新更新在 2009 年，好在下载安装后基本还能正常使用。如果不介意使用命令行工具设置，还可以试试 [duti](https://github.com/moretension/duti)，不过也有个把年头不更新了。
