---
layout: post
title: 使用 xdg-mime 設定預設檔案管理器
categories:
tags:
  - Tricks
  - Linux
  - Thunar
  - i3
---

最近使用 i3wm 時，預設開啟的檔案管理器不是 Thunar。在有桌面管理器下可以使用 GUI 
介面去設定，但 i3wm 我不知道有什麼桌面管器可以使用，只好使用 `xdg-mime` 設定預設開啟應用程式。以下介紹設定 Thrunar 為預設檔案管理器的方式，其他設定可以參考 [xdg-mime](https://jlk.fjfi.cvut.cz/arch/manpages/man/xdg-mime.1)。


查看預設的檔案管理員

```
$ xdg-mime query default inode/directory`
```
設定 `thunar` 預設的檔案管理員

```
$ xdg-mime default thunar.desktop inode/directory
```

這樣就設定完成了。使用 `xdg-mime` 設定後會修改配置檔: `~/.config/mimeapps.list`。
可以確認是否有設定成功。

```
# ~/.config/mimeapps.list
[Default Applications]
...
node/directory=thunar.desktop
...

```


#### `.desktop` 的檔案路徑

可以看看在環境下有什麼的 `.desktop`。

- 發行版提供: `/usr/share/applications`
- 使用者自訂: `$HOME/.local/share/applications`
