---
layout: post
title:  "Cara mudah instal bot eggdrop"
date:   2012-05-18 22:27:21 -0500
categories: eggdrop
---
Login ke vps / shell kalian..<br>
<br>
ambil filenya dengan cara:<br>
<code>wget ftp://ftp.eggheads.org/pub/eggdrop/source/1.6/eggdrop1.6.21.tar.gz</code><br>
setelah selesai... extract file nya dengan cara<br>
<code>tar zxf eggdrop1.6.21.tar.gz</code>
<br>setelah itu masuk folder eggdrop dengan perintah<br>
<code>cd eggdrop1.6.21</code><br>
setelah berada pada folder eggdrop1.6.21 saatnya mulai kompile dengan perintah² berikut:<br>
<code>./configure</code><br>
<code>make && make install</code>
<br>setelah semua done,, silahkan anda masuk folder eggdrop dengan perintah<br>
<code>cd ~/eggdrop</code>
<br>di sini anda harus menyiapkan:<br>
<br>
<strong>1 file konfig *<br>
tcl² wajib (seperti walls)*</strong><br>
anda bisa melihat contoh config saya.. <a href="http://berkas.eggoez.com/repo/conf/egg.conf">di sini</a>..<br>
setelah semua siap.. jalankan dengan perintah<br>
<code>./eggdrop -m namaconfig</code><br />mudah kan?? sebenarnya saya sudah membuat bash untuk install otomatis, silahkan di coba pada <a href="http://eg-goez.github.io">http://eg-goez.github.io</a><br>
jika kurang jelas silahkan menuju blog saya yang membahas eggdrop di <span style="font-style:italic;"><a href="http://eg-goez.blogspot.com">eg-goez.blogspot.com</a>
