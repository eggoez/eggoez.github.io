---
layout: post
title:  "Git Command"
date: 2016-01-12 04:29:40
categories: git
---
Setup
<pre>
git config --global user.name "eggoez"
git config --global user.email "@gmail.com
</pre>
New
<pre>
mkdir /path/to/your/project
cd /path/to/your/project
git init
git remote add origin https://*.git
</pre>
New Files
<pre>
echo "Baguz Ach" >> contributors.txt
git add contributors.txt
git commit -m 'Initial commit with contributors'
git push -u origin master
</pre>
Existing
<pre>
cd /path/to/my/repo
git remote add origin https://*.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push -u origin --tags # pushes up any tags
</pre>
Normal
<pre>
git init
git add *
git commit -m "what the commit"
git remote add origin http://*.git
git pull origin master
git push origin master
</pre>
Change
<pre>
git remote set-url origin git://new.url.here
</pre>
