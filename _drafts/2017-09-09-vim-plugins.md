---
layout: post
title: 使用的 vim plugins
description: "vim plugins "
modified: 2017-09-09
tags: [vim, Linux]
---

## vim 插件軟體 vim-plug

使用 [vim-plug](https://github.com/junegunn/vim-plug)

* 安裝 vim-plug

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
* 安裝 plugin
在 ~/.vimrc 中加入 vim-sensible plugin

```
call plug#begin()
Plug 'tpope/vim-sensible'
call plug#end()
```

## ack

[ack](https://beyondgrep.com/install/) 是像 `grup` 一樣的收尋工具，但更優化了，也可以在使用於 vim 。

* 安裝 [ack!](https://beyondgrep.com/install/)

    * ubunbu: sudo apt-get install ack-grep
    * ArchLinux : sudo pacman -S community/ack

   其他 OS 可參考 [ack](https://beyondgrep.com/install/) 官網。

* 在 Terminal 中使用 ack：`$ ack-grep -i : vim-ack`。-i 為忽略大小寫

 <figure>
    <a href="/images/2017-09-09/ack-grep.png"><img src="/images/2017-09-09/ack-grep.png" alt=""></a>
</figure>


* vim 中安裝 Ack!

```
Plug 'mileszs/ack.vim'
" map :Ack -i 到 \ a
nmap <leader>a :Ack -i<Space>
```

更多的說明可參考 [mileszs/ack.vim](https://github.com/mileszs/ack.vim.git)


## FZF

[FZF](https://github.com/junegunn/fzf) 是一個可以在命令例使用模糊查尋檔文件或是檔案路徑的套件。

* 安裝 [FZF](https://github.com/junegunn/fzf)

```
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

* 在 Terminal 中使用 FZF：
    1. `CTRL-T`: 可在當前路徑收尋文件。
    1. `ALT-C`: 可在當前路徑收尋到檔案路徑，並切換到該路徑。

 <figure>
    <a href="/images/2017-09-09/CTRL-T.png"><img src="/images/2017-09-09/CTRL-T.png" alt=""></a>
    <a href="/images/2017-09-09/ALT-C.png"><img src="/images/2017-09-09/ALT-C.png" alt=""></a>
</figure>

* vim 中安裝 FZF

```
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
```

更多的說明可參考 [junegunn/fzf-github](https://github.com/junegunn/fzf)

