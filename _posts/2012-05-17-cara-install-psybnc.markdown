---
layout: post
title:  "Cara install Psybnc"
date:   2012-05-17 22:28:21 -0500
categories: psybnc
---
Login ke shell / vps kalian<br>
ambil src nya dengan cara<br>
<code>wget http://psybnc.at/download/beta/psyBNC-2.3.2-7.tar.gz</code><br>
extract dengan cara<br>
<code>tar zxvfpsyBNC-2.3.2-7.tar.gz</code><br>
masuk directory psybnc<br>
<code>cd psybnc</code><br>
kompile pertama (ini penting)<br>
jika anda menginginkan user lebih dari 50 karena untuk default max usernya 50 anda bisa kompile dengan cara<br>
<code>make menuconfig</code><br>
<strong>Catatan:</strong> tidak semua shell / vps sudah terinstall curses, jika anda menemukan masalah error seperti ini:<br>
<i>This needs the ncurses library. If it is not available, menuconf wont work. If you are using curses, use make menuconfig-curses instead.<br>
make: *** [menuconfig] Error 1</i><br>
ini sebabnya pada server anda tidak terinstall <em><a href="http://eg-goez.blogspot.com/2014/05/installing-libncurses5-dev-centos-debian.html">libncurses</a>,</em> jika anda pemegang root, ada baiknya anda <a href="http://eg-goez.blogspot.com/2014/05/installing-libncurses5-dev-centos-debian.html">install <em>libncurses5-dev</em></a> dahulu, tapi meskipun anda melewati ini, proses installasi tetap bisa di jalankan, hanya anda tidak bisa enable untuk bagian misal SSL Support / Identd / Max Users, tapi jangan worry, dont khawatir, anda bisa merubah manual,,<br>
jalankan saja perintah make menuconfig seperti di atas,, lalu edit file <strong>config.h<br></strong>dengan cara:<br>
<code>nano config.h</code><br>
cari tulisan ini<br>
<pre>#define MAXUSER 50</pre>
ganti 50 dengan sembarang dehh.. 99999 juga boleh,, tapi # jangan di apus ea..<br>
setelah oke,, simpan dengan cara tekan<br>
CRTL+X (yes)<br>
jalankan kompile lagi<br>
<code>make</code><br>
setelah itu edit file <b>psybnc.conf</b><br>
<code>nano psybnc.conf</code><br>
stell port nya,,<br>
setelah di CTRL+X (yes)<br>
jalankan dengan perintah<br>
<code>./psybnc</code><br>
done
