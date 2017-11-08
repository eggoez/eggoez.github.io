---
layout: post
title:  "WP vs Nginx "
date:   2015-01-01 11:21:10 -0501
categories: php
---
Agar bisa live download themes & plugin & jetcpack bekerja
{% highlight shell %}
cd /home/wwwroot
chown www *
{% endhighlight %}
Agar bisa mengedit berkas di penyunting tema dsb
{% highlight shell %}
sed -i 's/,scandir//g' /usr/local/php/etc/php.ini
nginx restart && lnpm restart
{% endhighlight %}

