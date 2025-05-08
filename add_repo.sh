#!/bin/bash

# 引数チェック
if [ $# -ne 1 ]; then
    echo "Usage: $0 <GitHub URL>"
    exit 1
fi

# GitHub URLを取得
GITHUB_URL=$1

# URLの形式チェック
if [[ ! $GITHUB_URL =~ ^https://github.com/.+/.+ ]]; then
    echo "Error: Invalid GitHub URL format"
    exit 1
fi

# git clone実行
echo "Cloning from $GITHUB_URL..."
git clone $GITHUB_URL

if [ $? -ne 0 ]; then
    echo "Error: Git clone failed"
    exit 1
fi

# リポジトリ名を取得（URLの最後の部分）
REPO_NAME=$(basename $GITHUB_URL)

# .gitディレクトリを削除
echo "Removing .git directory..."
rm -rf "$REPO_NAME/.git"

echo "Complete!"
