---
layout: post
title: Docker 指令紀錄
categories:
tags:
  - Tricks
  - Linux
---

以下不會說明 `Docker` 是什麼，有什麼特色。只是單純記錄我學習到 `Docker` 的一些指令。

## Host user 加入到 Docker 的群組下

加入 `docker` 的群組: `$ sudo usermod -aG docker <user-name>`

```
$ sudo usermod -aG docker alvis
```

## 指令說明

### 新增映像檔 (pull, images)

`docker pull NAME[:TAG]`

* `NAME`: 映像檔名稱
* `TAG`: 映像檔的標籤，例如 ubuntu 發行版號。

```
# 下載映像檔以`ubuntu 18.04` 為例
$ docker pull ubuntu:18.04
#查看所有的 `image`
$ docker images

REPOSITORY   TAG     IMAGE ID       CREATED       SIZE
ubuntu       18.04   ccc6e87d482b   3 weeks ago   64.2MB
```

### 新增與登入容器 (run, exec, ps)

`run` 與 `exec` 的指令差異是 `run` 會新增出新的容器，`exec` 則是登入已執行的容器。

__`run`__

創建容器: `docker run --name <container-name> -it <image-name> <command>`

* `--name`: 分配容器的名稱
* `-t`: 分配一個虛擬終端(pseudo-TTY)
* `-i`: 保持容器的標準輸入(STDID)為打開狀態

創建名稱為 ubuntu_test 的容器, 並執行 `bash`

```
$ docker run --name ubuntu_test -it ubuntu bash
```

__`ps`__

查看所有的 `container`

```
$ docker ps -a

ONTAINER ID    IMAGE   COMMAND       CREATED       STATUS       PORTS   NAMES
e363de4d0449   ubuntu  "/bin/bash"   3 hours ago   Up 3 hours           ubuntu_test
```

__`exec`__

登入容器: `docker exec -it <container-name> <command>`

```
$ docker exec -it ubuntu_test bash
```

指定使用者登入容器: `docker exec -itu <user-name> <container-name> <command>`

指定 ubuntu 使用者登入 ubuntu 容器

```
$ docker exec -itu ubuntu ubuntu_test bash
```

__PS:__ 指定使用者登入容器需先在容器內創建使用者，可參考以下的 [如何創建使用者](#如何創建使用者)

### Volume

`volume` 指令可以讓 `docker` 與 `HOST` 產生共同目錄。

* 創建 volume: `$ docker volume create <volume-name>`
* 刪除 volume: `$ docker volume rm <volume-name>`

與 `HOST` 共同目錄位置: `/var/lib/docker/volumes/<volume-name>`


__Host Volume__

若覺得以上的共同目錄方式很不方便開發，想指定 `HOST` 與 `docker` 的共同目錄，可以使用以下指令。

`＄docker run -it --name <container-name> -v [HOST-DIR:CONTAINER-DIR] <images> <command>`

```
docker run -it --name ubuntu -v ~/workspace:/home/ubuntu/share ubuntu bash
```

__WORKDIR__

可以使用 


使用 `exec` 指定登入的工作路徑: `$ docker exec -it -w <container-workdir> <container-name> <command>`

* `-w`: 指定登入 `docker` 內的工作路徑。

```
$ docker exec -itw /home/ubuntu/share ubuntu bash
```


### 輸出與輸入映像檔 (export, import)

__export__

`docker export <container-name> > <name>.tar`

輸出 `ubuntu` 容器為 `my_ubuntu.tar`

```
$ docker export ubuntu > my_ubuntu.tar
```

__import__

`docker import [file|URL] <image-name>`

```
$ docker import my_ubuntu.tar my-ubuntu
```


## 其他

### 如何創建使用者

若要在容器內新增使用者，需先進入容器在執行以下步驟。

新增使用者指令: `useradd -m -g <groups> -s <login-shell> <user-name>`

* `-m`: 創建使用者的 `home` 目錄
* `-g`: 使用者起始登入的群組
* `-s`: 使用者預設登入用 Shell

新增 `ubuntu` 使用者

```
$ useradd -m -g users -s /bin/bash ubuntu
```

切換使用者 `su <user-name>`

切換 `ubuntu` 使用者

```
$ su ubuntu
```


### 如何讓非 `root` 使用者可以使用 `sudo`

先確認有安裝完 `sudo` 後，且已是 `root` 使用者。

修改 `/etc/sudoers`，在 `# User privilege specification` 下加入`ubuntu` 使用者

```
# User privilege specification
root    ALL=(ALL:ALL) ALL
ubuntu  ALL=(ALL:ALL) ALL
```

修改 `/etc/sudoers` 可能會有 `Permission Denied`，要將 `/etc/sudoers` 的權限修改後在改檔案即可。

修改權限
```
# 先查看 /etc/sudoers 的檔權限
$ ls -l /etc/sudoers
-r--r----- 1 root root     780 Feb 11 02:49 sudoers
# -r--r----- => 這時只有 root 與 root 的群組可以唯讀

# 修改 /etc/sudoers 檔案權限可以讓 `root` 有寫入功能
$ chmod 640 /etc/sudoers

# 查看 /etc/sudoers 的權限
$ ls -l /etc/sudoers
-rw-r----- 1 root root     780 Feb 11 02:49 sudoers
# -rw-r----- => 這時就能修改 /etc/sudoers，加入使用者

# 記得加入完後也要將檔案的權限改回來
$ chmod 440 /etc/sudoers
$ ls -l /etc/sudoers
-r--r----- 1 root root     780 Feb 11 02:49 sudoers
# 已改回原本的權限！
```

## 我的 ubuntu Docker 已環境安裝的套件

`iproute2`, `sudo`, `vim`, `ssh`

## 使用者與密碼

user: root
password: ubuntu

user: ubuntu
password: ubuntu
