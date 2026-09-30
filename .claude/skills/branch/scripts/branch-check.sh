#!/bin/bash
last=$(git --no-pager log --format="%cd" --date=format:"%Y-%m-%d" -1)
today=$(date +%Y-%m-%d)
echo "last=$last today=$today"
