---
layout: post
title:  "Bash eggoez"
date:   2015-01-27 09:21:52 -0501
categories: bash eggoez eggdrop
---
{% highlight shell %}#!/bin/bash
echo -e "\033[30;43m+--------------------------------------------------------------------+\033[0m"
echo -e "\033[37;41;4mInstallasi eggdrop goez otomatis berada pada $HOME/.eggoez\033[0m"
echo -e "\033[37;41;4mPastikan tidak ada folder .eggoez pada $HOME ini  \033[0m"
echo ""
lanjut="ya";
berhenti="tidak";
read -p "Yakin untuk memulai? (ya/tidak)? : " jawaban
if [ $jawaban == $berhenti ]; then
echo ""
echo "Pembuatan Konfig informasi yang dibutuhkan"
else
echo ""
echo -n "Nick Owner Bot : "
read owner;
echo -n "Server Tujuan : "
read servers;
echo -n "Nick Bot yang anda inginkan : "
read nickbot;
echo -n "Nick Alternatif Bot yang anda inginkan : "
read altnick;
echo -n "Username bot? :"
read uname;
echo -n "Base Channel Bot anda (tanpa tanda #) : "  
read basechan;
echo ""
echo -e "\033[30;43;4mTekan sembarang untuk memulai\033[0m"
read x;
cd $HOME
wget http://la.eggoez.com/files/eggoez-beta17.tar.gz
tar zxvf eggoez*.tar.gz
cd .eggoez
wget http://egg.url.ph/egg.conf
echo set owner "$owner" >> egg.conf 
echo set servers \{$servers\} >> egg.conf
echo set nick "$nickbot" >> egg.conf
echo set botnet-nick "$nickbot" >> egg.conf
echo set altnick "$altnick" >> egg.conf
echo set username $uname >> egg.conf
echo set basechan  "#$basechan" >> egg.conf
./goez egg.conf
echo -e "\033[37;41;4mSip Deh.. Berhasil menginstall eggdrop goez\033[0m"
echo "Silahkan menuju $servers dengan nick $owner "
echo -e "Lalu ketik \033[33m/msg $nickbot pass sandibaru \033[0muntuk membuat sandi baru."
echo -e "Untuk Login ketik \033[33m/msg $nickbot sandikamu\033[0m"
echo -e "Untuk melihat perintahÂ² Bot ketik \033[33m/msg $nickbot help\033[0m"
echo -e "File Konfig $nickbot ada di $HOME/.eggoez/egg.conf"
echo ""
echo "Kontak DeV a@eggoez.com //  http://eg-goez.blogspot.com"
echo "Atau /s -m irc.eggoez.com -join:#ciut"
echo "Thanks to genin, ArDiaN, Atmo, tRiNe, Retry etc."
echo "irc.allnetwork.org@ Indonesia IRC"
echo "Terima kasih telah menggunakan eggoez.tar.gz"
fi
echo -e "\033[30;43m+--------------------(egg drop goez )----------------------+\033[0m" 
{% endhighlight %}
