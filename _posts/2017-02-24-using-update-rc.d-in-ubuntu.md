---
layout: post
title: 在 Ubuntu 使用 update-rc.d 開機自動執行程式
tags: [Linux, script]
---

`OS: XUbuntu 14.10`

在 Linux 環境下自動執行某些程式的話必須使用 daemon，可以使用 `update-rd.d` 開機自動執行程式。

首先在 `/etc/init.d/` 內新增一個 script。

以下 script 執行的內容是開機時 touch /var/lock/blah (開機候會在 /var/lock/ 加入一個 blah 空檔案。)

```
#! /bin/sh
### BEGIN INIT INFO
# Provides:          blah
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Example initscript
# Description:       This file should be used to construct scripts to be
#                    placed in /etc/init.d.
### END INIT INFO
 
# Some things that run always
touch /var/lock/blah
 
# Carry out specific functions when asked to by the system
case "$1" in
  start)
    echo "Starting script blah "
    echo "Could do more here"
    ;;
  stop)
    echo "Stopping script blah"
    echo "Could do more here"
    ;;
  *)
    echo "Usage: /etc/init.d/blah {start|stop}"
    exit 1
    ;;
esac

exit 0
```

__修改腳本權限成可執行__

```
$ chmod 755 /etc/init.d/blah
```

__啟動 blah 腳本__
```
update-rc.d blah defaults

或是

update-rc.d blah start 2 3 4 5 stop 0 1 6
```

- start 使用的模式
    - 2~5：多使用者模式，4：圖型化模式。
- stop 使用的模式
    - 0：關機模式。
    - 1：單一使用者模式。
    - 6：系統重啟模式。


__關閉 blah 腳本__
```
update-rc.d -f blah remove
```












