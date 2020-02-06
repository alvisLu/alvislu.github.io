---
layout: post
title: Linux 中文輸入法 - Fcitx
categories:
tags:
  - Tricks
  - Linux
---

[Fcitx](https://fcitx-im.org/wiki/Fcitx) 的全名 Flexible Input Method Framework，
也有 Flexible Context-aware Input Tool with eXtension 或
Free Chinese Input Tool for X 的說法。
中文是 __小企鹅输入法__。是在 Linux 中常用的中文輸入法。

Linux 有很多輸入法，像是 `gcin`, `ibus`, `scim` 等等。
但目前用起來 `fcitx` 是最上手的，也很輕巧。

#### 安裝

ArchLinux

```
$ sudo pacman -S fcitx-im fcitx-configtool
```

繁體中文輸入

```
$ sudo pacman -S fcitx-chewing
```

嘸蝦咪輸入

```
$ sudo pacman -S fcitx-table-extra
```

#### vim-fcitx

可以安裝 `vim-fcitx`，在 `vim` 中使用 `INSERT` 模式時會自動關閉 fcitx，就能省去切換中/英文輸入法繁瑣的動作了。

```
$ sudo pacman -S vim-fcitx
```
