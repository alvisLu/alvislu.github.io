---
layout: post
title: 設定 tmux 使用 256 color
tags: [tmux, ArchLinux]
---

最近開始在使用 tmux，遇到了在 tmux 下使用 vim 會有顏色不對的問題。

查看 [ArchWiki-tmux](https://wiki.archlinux.org/index.php/Tmux#Installatio) 後，在 `Setting the correct term` 中有說明到可以在 home 目錄下新增 `.tmux.conf` 來修改設定。但還是一樣有問題，之後使用指令 `tmux -2` 強制 tmux 使用 256 color 就可行了。

在 `.bashrc` 最下方加入

```
# tmux
alias tmux="tmux -2"
```

執 `. ~/.basrc` 後再啟動 tmux 中的 vim 就可行了。
