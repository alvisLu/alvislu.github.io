---
layout: post
title: ArchLinux 開機自動掛載
tags: [ArchLinux, Rpi2]
---

fstab 可以用於定義硬碟分割區，遠端檔案或各種其他塊設備掛載到檔案系統中。


### 使用方式

設定檔在 `/etc/fstab`，以下是使用單個硬碟分割成三個分割區的範例。


```
# <device>             <dir>         <type>    <options>             <dump> <fsck>
/dev/sda1              /             ext4      defaults,noatime      0      1
/dev/sda2              none          swap      defaults              0      0
/dev/sda3              /home         ext4      defaults,noatime      0      2

```

* `<device>`: 安裝的設備或遠端文件
* `<dir>`: 安裝目錄
* ` <type>`: 檔案類型
* `<options>`: 相關的裝載選項
* `<dump>`: dump 實用程序檢查
* `<fsck>`: 設置文件檢查的順序

若要新增一個檔案類型為 ntfs 的設備，則在 `/etc/fstab`內加入

__注意：使用 ntfs 需先安裝 ntfs-3g__

```
/dev/sdb1    /mnt/media    ntfs    defaults,noatime    0    2
```


---

Reference:
* [ArchLinux Wiki: fstab](https://wiki.archlinux.org/index.php/Fstab)
* [ArchLinux Wiki: ntfs](https://wiki.archlinux.org/index.php/NTFS-3G)
