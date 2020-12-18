---
layout: post
title: husk > pre-commit hook failed
tags: [git, husk, pre-commit]
---

使用 `husky` 時，出現 `pre-commit` 錯誤:
```
husky > pre-commit hook failed (add --no-verify to bypass)
```

解決有兩種方式
1. commit 時加上 `--no-verify` 參數繞過 `.git/hook` 的 ` pre-commit` 和 `commit-msg`:
```
git commit -m "xxx"   git commit --no-verify -m "XXX" **
```

1. 刪除在專案下的 `.git/hooks` 的 `pre-commit` 的指令腳本:
```
rm -rf .git/hooks/pre-commit.sample
```

__Reference:__
1. [issues#716](https://github.com/typicode/husky/issues/716#issuecomment-708527643)


