---
name: merge
description: 현재 브랜치의 PR을 rebase 머지하고 main으로 돌아온다
---

아래 순서로 진행한다.

1. rebase 방식으로 현재 브랜치의 PR을 머지한다.
2. `main` 브랜치로 이동한다.
3. `git pull`로 main 브랜치를 최신 상태로 업데이트한다.
4. 원격에서 삭제된 브랜치를 로컬에서도 제거한다.

```bash
git fetch --prune && LC_ALL=C git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```
