---
layout: post
title:  "Git Command"
date: 2016-01-12 04:29:40 -0501
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
<<<<<<< HEAD
=======
Ganti Author
<pre>
git clone --bare http://.git
cd repo.git
<code>
#!/bin/sh
git filter-branch --env-filter '
OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
</code>
git remote add origin https://username:password@gitdomain/.git
git push --force --tags origin 'refs/heads/*'
<pre>
>>>>>>> f5a9debdd007083aca97f197ee487fd2519992e1
