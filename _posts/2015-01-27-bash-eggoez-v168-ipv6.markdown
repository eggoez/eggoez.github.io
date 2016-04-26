---
layout: post
title:  "Bash eggoez.v-6.18 (IPv6) "
date:   2015-01-27 09:21:31
categories: bash eggoez eggdrop
---
<pre>
#!/bin/bash
echo -e "\033[30;43m+--------------------------------------------------------------------+\033[0m"
echo -e "\033[37;41;4mInstallasi eggdrop goez otomatis berada pada $HOME/eggoez\033[0m"
echo -e "\033[37;41;4mPastikan tidak ada folder .eggoez pada $HOME ini  \033[0m"
echo ""
lanjut="ya";
berhenti="tidak";
read -p "Yakin untuk memulai? (ya/tidak)? : " jawaban
if [ $jawaban == $berhenti ]; then
echo "Powered by g0eZ #ciut irc.allnetwork.org"
else
echo ""
echo -n "Nick Owner Bot? : "
read owner;
echo -n "Server Tujuan (ipv6)? : "
read servers;
echo -n "Nick Bot? : "
read nickbot;
echo -n "Alternatif nick? : "
read altnick;
echo -n "Username bot? :"
read uname;
echo -n "Base Channel? (tanpa tanda #) : "  
read basechan;
echo -n "IPV6/Vhost yang digunakan (kosongkan jika tidak tahu) : "
read vhost6;
echo ""
echo -e "\033[30;43;4mTekan Sembarang Keyboard!!\033[0m"
read x;
cd $HOME
wget https://github.com/eggheads/eggdrop-1.8/archive/master.zip
unzip master.zip
mv eggdrop* eggoez
cd eggoez
./configure
make config
make
make install
cd ~/
mv eggdrop .eggoez
cd ~/.eggoez
wget http://egg.url.ph/src/eggoez17-tcl.tar.gz
tar zxf eggoez17-tcl.tar.gz
mv eggdrop goez
wget http://egg.url.ph/egg.conf
echo set owner "$owner" >> egg.conf
echo set servers \{$servers\} >> egg.conf
echo set nick "$nickbot" >> egg.conf
echo set altnick "$altnick" >> egg.conf
echo set username $uname >> egg.conf
echo set basechan  "#$basechan" >> egg.conf
echo set botnet-nick "$nickbot" >> egg.conf
echo set vhost6 "$vhost6" >> egg.conf
echo set prefer-ipv6 1 >> egg.conf
./goez -m egg.conf
cd ~/.eggoez
rm -rf eggoez17*
cd ..
rm -rf eggdrop1.6*
echo -e "\033[37;41;4mSip Deh.. Berhasil menginstall eggdrop goez\033[0m"
echo "Silahkan menuju $servers dengan nick $owner "
echo -e "Lalu ketik \033[33m/msg $nickbot pass sandibaru \033[0muntuk membuat sandi baru."
echo -e "Untuk Login ketik \033[33m/msg $nickbot sandikamu\033[0m"
echo -e "Untuk melihat perintahÃ‚Â² Bot ketik \033[33m/msg $nickbot help\033[0m"
echo -e "File Konfig $nickbot ada di $HOME/.eggoez/egg.conf"
echo ""
echo "Kontak DeV a@eggoez.com //  http://eg-goez.blogspot.com"
echo "Atau /s -m irc.eggoez.com -join:#ciut"
echo "Thanks to genin, ArDiaN, Atmo, tRiNe, Retry etc."
echo "irc.allnetwork.org@ Indonesia IRC"
echo "Terima kasih telah menggunakan eggoez.tar.gz"
fi
echo -e "\033[30;43m+--------------------(egg drop goez )----------------------+\033[0m" 
</pre>
