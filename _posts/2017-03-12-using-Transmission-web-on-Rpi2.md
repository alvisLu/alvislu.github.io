---
layout: post
title: 在 Raspberry Pi2 上使用 Transmission 網頁版
tags: [ArchLinux, Rpi2]
---

Transmission 是一個跨平台的 Bit Torrent 下載器，在許多的 Linux 發行版中都使用 Transmission。

<div style="
border: 2px solid #faebcc;
border-radius: 5px;
background-color:#fcf8e3;
color:#8a6d3b;
padding: 1px 5px 1px 5px;">

  <b>OS: ArchLinux</b>
</div>


### 安裝 Transmission

```
sudo pacman -Syu transmission-cli
```

### 啟動 Transmission
```
sudo systemctl enable transmission
sudo systemctl start transmission
```

### 建立存取路徑(用戶與群組設定)

```
sudo mkdir -p /mnt/data/torrents/{incomplete,complete,torrentfiles}
sudo chown -R USER_NAME:transmission /mnt/data/torrents
sudo chmod -R 775 /mnt/data/torrents
```

### 配置設定檔
__在修改設定檔時需先將 transmission 關閉__ `sudo systemctl stop transmission`。

設定檔 `sudo vim /var/lib/transmission/.config/transmission-daemon/settings.json`,
修改以下參數，`rpc-whitelist": "*.*.*.*"` 是不指定網頁版 IP 位置，若沒修改路徑，就不需修改其他的參數。


* 更多參數設定可以參考[transmission github](https://github.com/transmission/transmission/wiki/Editing-Configuration-Files)

```
# From
"download-dir": "/var/lib/transmission/Downloads",
# To
"download-dir": "/mnt/data/torrents/complete",

# From:
"incomplete-dir": "/var/lib/transmission/Downloads",
# To
"incomplete-dir": "/mnt/data/torrents/incomplete",

# From
"incomplete-dir-enabled": false,
# To
"incomplete-dir-enabled": true,

# From
"rpc-whitelist": "127.0.0.1",
# To
"rpc-whitelist": "*.*.*.*",
```

### 開啟 transmission

* 網頁版 transmission: [http://localhost:9091](http://localhost:9091)
* 若有使用 Avahi 設定可以輸入 [HOSTNAME.local:9091](hostname.local:9091)

#### Avahi 設定

1. [ArchLinux](./2017-03-12-using-avahi-in-ArchLinux.1.md)
1. [Xubuntu](./2017-02-20-using-avahi-in-ubuntu.md)


---

Reference:
* [ArchLinux Wiki: Transmission](https://wiki.archlinux.org/index.php/Transmission)
* [Transmission Web on a Raspberry Pi with Arch Linux](https://raymii.org/s/blog/Transmission-Raspberry-Pi-Arch-Linux.html)
