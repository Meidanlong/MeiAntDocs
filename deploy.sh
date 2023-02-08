#!/usr/bin/env sh

# abort on errors
set -e

# 开发时应手动拉取git
#git pull

# build 生成评论组件
npm run build

# 提交git
git add .
git commit -m 'deploy'
git push

# gitee
git push -f "git@github.com:Meidanlong/MeiAntDocs.git" master

# navigate into the build output directory
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

# 发布到域名
echo 'www.meidanlong.com' > CNAME

echo "发布到静态页面托管网站"
git init
git add .
git commit -m 'deploy'

# gitee
git push -f "git@gitee.com:meidanlong/blog.git" master:gh-pages


# github
git push -f "git@github.com:Meidanlong/MeiAntDocs.git" master:gh-pages