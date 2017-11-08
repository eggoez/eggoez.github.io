---
layout: post
title:  "Git Command"
date: 2016-01-12 04:29:40 -0501
categories: git
---
Setup
{% highlight shell %}
git config --global user.name "eggoez"
git config --global user.email "@gmail.com
{% endhighlight %}
New
{% highlight shell %}
mkdir /path/to/your/project
cd /path/to/your/project
git init
git remote add origin https://*.git
{% endhighlight %}
New Files
{% highlight shell %}
echo "Baguz Ach" >> contributors.txt
git add contributors.txt
git commit -m 'Initial commit with contributors'
git push -u origin master
{% endhighlight %}
Existing
{% highlight shell %}
cd /path/to/my/repo
git remote add origin https://*.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push -u origin --tags # pushes up any tags
{% endhighlight %}
Normal
{% highlight shell %}
git init
git add *
git commit -m "what the commit"
git remote add origin http://*.git
git pull origin master
git push origin master
{% endhighlight %}
Change
{% highlight shell %}
git remote set-url origin git://new.url.here
{% endhighlight %}
Ganti Author
{% highlight shell %}
git clone --bare http://.git
cd repo.git

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

git remote add origin https://username:password@gitdomain/.git
git push --force --tags origin 'refs/heads/*'
{% endhighlight %}
