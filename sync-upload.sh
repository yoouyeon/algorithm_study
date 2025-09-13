#!/bin/bash

set -euo pipefail

echo "🚚 원격 최신 상태 가져오기 ..."
git fetch origin --prune

echo "🔁 upload 브랜치를 main으로 강제 동기화 ..."
git switch -C upload origin/main

echo "✨ 완료! 현재 상태:"
git status -sb

