---
layout: post
title: "Backup & Restore MySQL Dump"
date: 2017-01-04 15:17:18 -0000
categories: database
---
Hanya untuk catatan

Backup
{% highlight shell %}mysqldump -u{user} -p {database} > {database}.sql{% endhighlight %}
Restore
{% highlight shell %}mysql -u user -p databasename < backupname.sql{% endhighlight %}

With Compress je
Backup
{% highlight shell %}mysqldump -u {user} -p {database} | gzip > {database}.sql.gz{% endhighlight %}
Restore
{% highlight shell %}gzip -dc < {database}.sql.gz | mysql -u {user} -p {database}{% endhighlight %}

With CronJ
{% highlight shell %}mysqldump -u {user} -p {database} | gzip > `date -I`.database.sql.gz{% endhighlight %}
{% highlight shell %}gzip -dc < `date -I`.{database}.sql.gz | mysql -u {user} -p {database}{% endhighlight %}
