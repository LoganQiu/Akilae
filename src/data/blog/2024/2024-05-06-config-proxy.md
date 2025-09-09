---
title: 配置常用工具代理
desc: 介绍如何对一些程序员常用工具进行代理配置而不是采用换源
slug: config-proxy
pubdate: 2024-05-06
categories:
  - Tech 技术
tags:
  - proxy
  - environment
  - wsl
---

> 以下 `server` 一般都是 `127.0.0.1`，而 `port` 就看使用的代理工具设置了（如 CFW 就是 7890）。

## 配置 Shell 代理

根据不同 Shell 在对应配置文件中加入以下别名（**以下示例仅在 Zsh 和 Bash 中验证，在 pwsh 中应该需要更改**），即可输入 `proxyon` 启用代理，输入 `proxyoff` 关闭代理：

```shell
alias proxyon="
  export http_proxy=socks5://127.0.0.1:7890;
  export https_proxy=socks5://127.0.0.1:7890;
  export all_proxy=socks5://127.0.0.1:7890;
  export no_proxy=socks5://127.0.0.1:7890;
  export HTTP_PROXY=socks5://127.0.0.1:7890;
  export HTTPS_PROXY=socks5://127.0.0.1:7890;
  export ALL_PROXY=socks5://127.0.0.1:7890;
  export NO_PROXY=socks5://127.0.0.1:7890;
  echo "proxyon""

alias proxyoff="
  unset http_proxy;
  unset https_proxy;
  unset all_proxy;
  unset no_proxy;
  unset HTTP_PROXY;
  unset HTTPS_PROXY;
  unset ALL_PROXY;
  unset NO_PROXY;
  echo "proxyoff""
```

## 配置 Git 代理

Git 同时支持 `HTTP` 代理和 `Socks5` 代理，二选一即可

```shell
# http
git config --global http.proxy http://server:port
git config --global https.proxy http://server:port

# socks5
git config --global http.proxy socks5://server:port
git config --global https.proxy socks5://server:port
```

取消 Git 代理：

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

或者直接去 `~/.gitconfig` 修改即可。

## 配置 npm 代理

npm 原生支持 `HTTP` 代理类型，但是不支持 `Socks5` 代理类型，如果还想要使用 `Socks5` 代理，可能还需要使用一个工具使用 `HTTP` 监听 `Socks5` 代理 （禁止套娃），此处不做讨论。

```shell
# http
npm config set proxy http://server:port
npm config set https-proxy http://server:port
```

取消 NPM 代理：

```shell
npm config delete proxy
npm config delete https-proxy
```

或者直接去 `~/.npmrc` 修改即可。

## 配置 curl 代理

在使用 nvm 时发现其用 curl 作为下载工具，也需要配置代理才能正常使用。
在 `~/.curlrc` 配置文件中添加：

```shell
proxy = server:port
```

## 配置 wget 代理

直接在 `~/.wgetrc` 配置文件中添加：

```shell
use_proxy = yes
http_proxy = http://server:port
https_proxy = https://server:port
```

## 配置 SSH 协议代理

修改 `~/.ssh/config` 配置文件（没有就创建）

```shell
# macOS
# 全局
ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p

# 只为特定域名设定，
Host github.com
    ProxyCommand nc -X 5 -x 127.0.0.1:1080 %h %p
    # 或者
    # ProxyCommand socat - PROXY: 127.0.0.1:%h:%p, proxyport = 8080


# Windows
# 全局
ProxyCommand connect -S 127.0.0.1:1080 %h %p

# 只为特定域名设定
Host github.com
    ProxyCommand connect -S 127.0.0.1:1080 %h %p
```

解释：

- `ProxyCommand` 用于设置 SSH 连接时使用的代理命令。
- `nc` 是 `netcat` 命令，作用是用来进行数据流的传输，可以用来作为代理。
- `-X 5` 指定代理类型为 Socks5。
- `-x 127.0.0.1:1080` 指定代理服务器地址和端口号。
- `%h` 和 `%p` 是占位符，分别表示目标主机名（在这里就是 github.com）和目标端口（SSH 默认端口是 22）。

- `socat` 是一个强大的网络工具，可以创建双向的数据通道，用于数据的转发。
- `-` 表示标准输入/输出（即 SSH 使用的连接）。
- `proxyport=8080` 表示代理服务器的端口是 8080，即这里用的是本地的 HTTP 代理服务器。

- `connect` 是一个用来通过代理服务器进行连接的工具。
- `-S 127.0.0.1:1080` 指定代理服务器地址和端口，127.0.0.1 表示代理服务器位于本地，1080 是代理端口，通常表示 SOCKS 代理。

注意：上面的端口号 `1080` 是默认的 HTTP 端口号，`8080` 是默认的 Socks5 端口号，实际使用中应替换为代理软件端口。

## 附：WSL2 配置代理

2024.02.01

参考 [官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/networking)，在较新版本的 WSL2 中配置代理已十分容易，编辑（默认不存在，可自行创建）在 `%UserProfile%` 目录（即 `C:\Users\%USERNAME%\`）下的 .wslconfig 文件：

```text
[wsl2]
networkingMode = mirrored
autoProxy = True
```

以上指令为启用镜像网络模式和强制 WSL 使用 Windows 的 HTTP 代理信息，更多详细配置请见：[WSL 中的高级设置配置](https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config)

2025.01.01 添加

已经有官方 GUI 应用 WSL Settings 可以直接设置关于 WSL 的各种信息了，请前往 Microsoft Store 更新 WSL 到最新版本。

## 参考

- <https://stackoverflow.com/questions/42244572/nvm-proxy-settings-configuration-file>
- <https://blog.dejavu.moe/posts/git-npm-yarn-proxy/>
