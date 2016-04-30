---
layout: post
title:  "Bash Linux Dash"
date:   2015-01-27 09:20:16 -0501
categories: bash
---
<pre>
#!/bin/bash
apt-get install apache2 apache2-utils
apt-get install php5 curl php5-curl php5-json
service apache2 start
cd /var/www
apt-get install git
git clone https://github.com/afaqurk/linux-dash.git
mv linux-dash ld
cd /var/www/ld
rm -rf favi* && rm -rf index*
wget http://la.eggoez.com/ld
mv ld index.html
</pre>
