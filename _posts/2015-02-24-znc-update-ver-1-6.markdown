---
layout: post
title:  "ZNC Update ver 1.6 "
date:   2015-02-24 10:34:20
categories:znc bash
---
<pre>
#!/bin/bash
rm -rf znc* && rm -rf bin && rm -rf share && rm -rf lib && rm -rf include
wget http://znc.in/releases/znc-1.6.0.tar.gz && tar zxf znc-1.6.0.tar.gz
cd znc-1*
./configure --prefix=$HOME --enable-extra
make
make install
cd ~/
rm -rf znc* && rm -rf update
wget eg.goez.my.id/fbnc && chmod +x fbnc
echo -e "\033[31;35;4mSip Deh.. ZNC sudah di apdet.\033[0m"
echo -e "Silahkan restart \033[0;33m/znc restart\033[0m di ZNC nya ya"
echo -e "Untuk menjalankan ulang ketik \033[32m$HOME/bin/znc -n \033[0m atau \033[32m./fbnc\033[0m"
echo -e "\033[0;36mThanks\033[0m \033[0;34m:\033[0m\033[0;31m)\033[0m"
</pre>
