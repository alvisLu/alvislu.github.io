---
layout: post
title: 在 Ubuntu 使用 Avahi
tags: [ Linux, Rpi2]
---

Avahi 是一個實現零配置網絡（zeroconf）的軟體，如果想在區域網路進行類似網芳的搜尋，可以使用 avahi-daemon。

<span style="color:#996666" >
        <b>OS: XUbuntu 14.10</b>
</span>


### 安裝 avahi-daemon
```
sudo apt-get install avahi-utils
```

### 收尋區域網路內有的裝置
```
avahi-browse -art
```

### 修改 hostname
設定檔在 /etc/avahi/avahi-daemon.conf。

找到 [server] 內的 hostname, 預設是關閉的，只要將註解刪除，並將名稱修改即可。

`#host-name=foo` > `host-name=HOST-NAME`

```
...
[server]
#host-name=foo
#domain-name=local
#browse-domains=0pointer.de, zeroconf.org
use-ipv4=yes
use-ipv6=yes
#allow-interfaces=eth0
#deny-interfaces=eth1
#check-response-ttl=no
...
```


### 配置設定檔
先從 /usr/share/doc/avahi-daemon/examples 內複製一份範例到 /etc/avahi/services。

```
sudo cp /usr/share/doc/avahi-daemon/examples/ssh.service /etc/avahi/services/ssh.service
```

以下是 ssh.service 內容，可以依照個人需求做修改，在這新增了 txt 的描述。

```
<?xml version="1.0" standalone='no'?>
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
        <name replace-wildcards="yes">%h</name>
        <service>
                <type>_ssh._tcp</type>
                <port>22</port>
                <txt-record>desciption=test ssh service</txt-record>
        </service>
</service-group>
```
新增描述： `<txt-record> 描述內容 </txt-record>`


### 啟動 avahi-daemon
```
sudo /etc/init.d/avahi-daemon restart
```

### 透過 ssh 連線
```
ssh service_name@hostname
```

### 開機時自動啟動 avahi-daemon 
在安裝 avahi-daemon 時就有設定自動啟動的功能，萬一沒有設定自動啟動時可以使用以下指令。

```
sudo update-rc.d avahi-daemon defaults
```

### 取消自動啟動 avahi-daemon 
```
sudo update-rc.d -f avahi-daemon remove
```
-f : 強制刪除 


