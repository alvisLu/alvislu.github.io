---
layout: post
title: 在Linux下格式化隨身碟
tags: [ArchLinux, usb]
---

介紹兩種在 Linux 下將 USB 格式化的方式，指令與 GParted 。

### 指令方式

1. 開啟 Terminal，可使用快捷鍵 `ctrl+alt+t`。

1. 使用 `lsblk` 確認要格式化的隨身碟
```
$ lsblk
```

1. 卸載要格式的隨身碟, 假設要格式化的隨身碟為 /dev/sdc1
```
$ umount /dev/sdc1
```

1. 格式化為 ntfs。
```
$ sudo  mkfs.ntfs -L USB_NAME -f /dev/sdd1
// 或是格式化為 ext4
$ sudo  mkfs.ext4 /dev/sdd1
```
* -L 設定標籤名稱
* -f 快速格式化

    要在 Windows 與 Linux 這兩個 OS 下可以讀取的話，格式必須使用 ntfs 。ext4 則是 Linux 的硬碟檔案格式。

1. 退出隨身碟

    ```
    $ sudo eject /dev/sdc1
    ```

### GParted

1. 安裝 `GParted` 。
```
$ sudo apt-get install gparted
```

1. 開啟 GParted

1. 刪除 `/dev/sdc`

    * 右上角 `/dev/sdc(15.00GB)` 可選擇要格式化的磁碟。
    * 選擇好裝置後按 `刪除`。

    <figure>
        <a href="gparted"><img src="/images/2017-11-13/gparted.png" width="80%" height="80%" ></a>
    </figure>


1. 選擇未配置的區塊後，並新增區塊。

    <figure>
        <a href="gparted-2"><img src="/images/2017-11-13/gparted-2.png" width="80%" height="80%" ></a>
    </figure>


    __新增區塊__

    * File system 記得選擇 `ntfs` 。
    * Label 為 USB 的名稱設定。
    * New size 是設定區塊大小，沒有可變更的話可以不用修改 。

    <figure>
        <a href="gparted-2-sub"><img src="/images/2017-11-13/gparted-2-sub.png" width="80%" height="80%" ></a>
    </figure>

1. 按下 `Add` 後可看到新增的區塊。

    <figure>
        <a href="gparted-3"><img src="/images/2017-11-13/gparted-3.png" width="80%" height="80%" ></a>
    </figure>

1. 也可以新增兩個區塊。

    * 完成後按下 `Apply`，若有配置錯誤可以按 `Undo` 回上一步。

    <figure>
        <a href="gparted-4"><img src="/images/2017-11-13/gparted-4.png" width="80%" height="80%" ></a>
    </figure>

