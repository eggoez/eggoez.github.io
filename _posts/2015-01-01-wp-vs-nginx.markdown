---
layout: post
title:  "WP vs Nginx "
date:   2015-01-01 11:21:10
categories: php
---
Agar bisa live download themes & plugin & jetcpack bekerja
<pre>
cd /home/wwwroot
chown www *
</pre>
Agar bisa mengedit berkas di penyunting tema dsb
<pre>
sed -i 's/,scandir//g' /usr/local/php/etc/php.ini
nginx restart && lnpm restart
</pre>

