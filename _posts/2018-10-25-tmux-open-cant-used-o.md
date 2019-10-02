---
layout: post
title: Tmux-open 不能開啟指定路徑資料夾
tags: [ArchLinux, tmux, xfce4, Thunar, FileManager]
---

某天在使用 `tmux-open` 要開啟指定路徑資料夾發現失敗了！
圈選路徑後按 "o" 有看到資料夾閃了一下後，又關掉了。

後來確認 tmux-open 的開啟網頁與編輯器的指令都沒有問題，就去看看 tmux-open 的 
source code 看看是用什麼指令開啟的。

下面是擷取 `tmux-open` 的一小段原始編, 內容是說 OSX, Windows, Unix 下要使用什麼指
令來開啟資料夾。我使用的 OS 是 Linux 就看 `command_exists` 裡面是什麼吧~


```
generate_open_command() {
	if is_osx; then
		echo "$(command_generator "open")"
	elif is_cygwin; then
		echo "$(command_generator "cygstart")"
	elif command_exists "xdg-open"; then
		echo "$(command_generator "xdg-open")"
	else
		# error command for Linux machines when 'xdg-open' not installed
		"$CURRENT_DIR/scripts/tmux_open_error_message.sh" "xdg-open"
	fi
    }
```

`command_exists` 裡做了 `echo "$(command_generator "xdg-open")"`。
看到了，就是這個傢伙 `xdg-open`。

__PS:__ `command_generator` 這是 `tmux-open` 的內部函式。

不知道它做什麼用的嗎？用 `man xdg-open` 看一下說明吧~

```
XDG-OPEN(1)                      xdg-open Manual                      XDG-OPEN(1)

NAME
       xdg-open - opens a file or URL in the user's preferred application

SYNOPSIS
       xdg-open {file | URL}

       xdg-open {--help | --manual | --version}

DESCRIPTION
       xdg-open opens a file or URL in the user's preferred application. If a URL
       is provided the URL will be opened in the user's preferred web browser. If
       a file is provided the file will be opened in the preferred application
       for files of that type. xdg-open supports file, ftp, http and https URLs.

       xdg-open is for use inside a desktop session only. It is not recommended
       to use xdg-open as root.
```

開頭就說了是 __使用者開啟檔案與 URL 的首選。__ 那就不用懷疑了，就是 `xdg-open` 
它了。

測試在 `Terminal` 使用 `xdg-open` 指令會有什麼結果。

```
$: xdg-open /home

Thunar: Failed to initialize Xfconf: Server address of type unix was missing argument path or abstract


(thunar:13812): GLib-GIO-CRITICAL **: 13:31:22.073: g_dbus_proxy_new_sync: assertion 'G_IS_DBUS_CONNECTION (connection)' failed

(thunar:13812): Gtk-WARNING **: 13:31:22.077: Theme directory actions32@2x of theme breeze-dark has no size field


(thunar:13812): thunar-CRITICAL **: 13:31:22.157: Name 'org.xfce.FileManager' lost on the message dbus, exiting.
ThunarThumbnailer: failed to create proxy: Error spawning command line “dbus-launch --autolaunch=99229b06b32148dc97431dc329152330 --binary-syntax --close-stderr”: Child process exited with coed
```

恩... 我看不懂是什麼錯誤。只看出來錯誤是由 `Thunar` 檔案管理員發出的。
就再使用 `thunar` 指令看看是不是由它送的。

```
$: thunar /home

Thunar: Failed to initialize Xfconf: Server address of type unix was missing argument path or abstract


(thunar:13812): GLib-GIO-CRITICAL **: 13:31:22.073: g_dbus_proxy_new_sync: assertion 'G_IS_DBUS_CONNECTION (connection)' failed

(thunar:13812): Gtk-WARNING **: 13:31:22.077: Theme directory actions32@2x of theme breeze-dark has no size field


(thunar:13812): thunar-CRITICAL **: 13:31:22.157: Name 'org.xfce.FileManager' lost on the message dbus, exiting.
ThunarThumbnailer: failed to create proxy: Error spawning command line “dbus-launch --autolaunch=99229b06b32148dc97431dc329152330 --binary-syntax --close-stderr”: Child process exited with coed
```

一樣呢。但是什麼原因呢？把 error 丟到 Google 看看吧！

奇怪，如果這指令不能開啟檔案那桌面上的圖示為什麼可以呢？(迷之音)


後來在 [\[Bug 13884\] New: thunar root - error](https://bugzilla.xfce.org/show_bu
g.cgi?id=13884) 看到可以使用 `gksu dbus-launch thunar` 指令。
就用 `dbus-launch thunar` 開看看。結果是...可以成功開啟！

__PS:__ `gksu` 是用來執行 GTK+ 圖行介面的 `su` 和 `sudo`。

現在要將 `Thunar` 開啟方式改為 `dbus-launch thunar` 。

我桌面環境使用 `Xfce4`。
可以到 `settings` -> `Preferred Application` -> `Utillties` -> `File Manager` 修改
。原先是使用 `Thunar` ，現在改為 `dbus-launch thunar` 。

用 `xdg-open` 指令開啟檔案看看吧~ 終於可以成功開啟了！
最重要 `tmux-open` 的快捷鍵，也可以開啟(撒花)。


---
### 後記:

後來想到之前安裝的 `Docky` 的垃圾桶圖示不能開啟 `Thunar` 的垃圾桶，會不會也是因為
`Thunar` 有問題開不啟來？就也去按按看，也可以成功開啟了！

