---
layout: post
title: "Cara Membuat Bot Eggdrop"
date: 2011-08-11 00:39:18 -0501
categories: eggdrop
---
Eggdrop adalah IRC bot yang paling populer. Baca <a href="http://www.egghelp.org/whatis.htm">di sini</a> untuk lebih lanjut
deskripsi.
 
<h3>DOWNLOAD & INSTALL</h3>
Anda akan memerlukan program SSH untuk telnet ke bot Anda. Jika Anda memiliki satu dan tahu bagaimana menggunakannya melewati bagian ini. Jika tidak tutorial ini akan digunakan untuk program SSH `VanDyke SecureCRT [url=http://www.vandyke.com/products/securecrt/index.html]DI SINI[/url] karena itu adalah apa yang saya gunakan untuk. mereka menawarkan trial 30-hari. Anda bisa menggunakan program SSH, hanya `akun pengaturan langkah-langkah di bawah ini akan menu yang berbeda daripada di tut ini. Satu lagi sayaprogram SSH favorit adalah Putty [url=http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html]DI SINI[/url] - freeware, kecil, portable meskipun menempatkan datanya (sesi disimpan, kunci host SSH) di registry. (Untuk menyimpan, ekspor, dan atau menghapus data Putty itu dari registri lihat DI SINI.)

<b>SETUP KOMUNIKASI UNTUK BOT VIA TELNET</b>
buka SeucreCRT
Pilih: Hubungkan (tombol 1 dari kiri) / New Session (tombol ke-3 dari
kiri)
Nama: Seperti yang Anda sukai, saya selalu menempatkan nama bot saya di sini.
Protokol: Telnet
Hostname, masukkan bots vhost Anda: whatever.vhost.com
Port: Pilih port dari 1024 ke 65535. (A minoritas perusahaan shell mungkin
memiliki kisaran yang lebih kecil atau berbagai port yang berbeda diperbolehkan; cek dengan Anda shell tuan rumah jika Anda tidak yakin.) Ini akan menjadi pelabuhan mendengarkan bot dalam file conf nya. Anda akan mengatur
kemudian di file konfigurasi bot. Anda dapat menyimpan / menutup jendela Server. Kami tidak menggunakannya belum.
 
Jika Anda belum sudah setup login ke akun shell Anda, lakukan di cara yang sama kecuali
Nama: Seperti yang Anda sukai, saya selalu menempatkan kerang saya nama host di sini.
Protocol: SSH2 (beberapa tuan rumah memiliki protokol yang berbeda)
Port: 22
Pilih koneksi:
Setelah terhubung, Anda akan diminta untuk nama pengguna dan lulus, masukkan mereka dan pilih save jika tidak ingin memasukkan mereka setiap kali login.
Ubah password Anda, masukkan: passwd
Anda akan diminta dua kali untuk memasukkan password baru. Anda tidak akan dapat melihat atau bahkan melihat langkah kursor. Jangan gunakan password yang sederhana! ex no:greentea ex ya: GrE3N_0T3A () 4UKX)

Pilih vhost Anda ingin gunakan untuk bot Anda, masukkan: vhost
Tekan enter untuk menggulir daftar lengkap, menemukan yang Anda sukai, membuat perhatikan itu.
 
<b>MEMASANG eggdrop</b>

<u>CATATAN:</u>
A.) Periksa SINI pertama untuk versi terbaru. * Perhatikan telah ada kemudian versi sejak menulis tut ini untuk v1.6.19. Anda harus menyesuaikan cmds (perintah) yang berisi nomor versi ke nomor versi Anda.
B.) Anda harus menyesuaikan cmds ke jalan Anda, ex: /home/You.Home./eggdrop1.6.19
C.) Anda dapat melewatkan dua langkah pertama di bawah ini jika telah melakukan ini sebelumnya pada shell
D.) Buka langkah SSL jika Anda tidak menginginkannya, tapi mengapa Anda tidak menginginkannya? :)
E.) SSL: Hanya dapat diterapkan sebelum Anda mengkompilasi (membuat) bot, bukan sesudahnya.
F.) Mungkin nanti versi eggdrop akan berisi SSL dan kita tidak perlu melakukan langkah-langkah SSL? Cari tahu tentang versi yang Anda gunakan.
G.) eggdrop.conf file yang dibuat untuk bot setelah menambal dengan SSL adalah sama dengan tanpa patch.
 
masukkan cmds ini:
<pre>wget ftp://ftp.eggheads.org/pub/eggdrop/GNU/1.6/eggdrop1.6.19.tar.gz
tar zxvf eggdrop1.6.19.tar.gz
cd /home/user/eggdrop1.6.19</pre>
* Catatan: / user / akan diganti dengan nama akun Anda sendiri.
 
Langkah SSL:
<pre>wget http://www.egghelp.org/files/patches/eggdrop-1.6.19-ssl_and_md5_and_thread-durex.patch.gz
gzip -d eggdrop-1.6.19-ssl_and_md5_and_thread-durex.patch.gz</pre>
[i](ini akan unzip dan menghapus file .gz asli)[/i]
<pre>patch -p1 <eggdrop-1.6.19-ssl_and_md5_and_thread-durex.patch  </pre>
 
Jika Anda tidak menerima cowok gagal kesalahan saya telah membaca untuk melakukan hal ini sebagai gantinya:
patch -p0 <eggdrop-1.6.19-ssl_and_md5_and_thread-durex.patch 
Langkah END SSL. Lanjutkan dengan cmds ini:
 
<pre>./configure
make config
make</pre>
* Catatan: Jika Anda akan menginstal lebih dari satu bot:
A. Anda tidak perlu mengulangi langkah-langkah di atas, hanya cd ~ / eggdrop1.6.19 & langkah-langkah di bawah ini agar setiap bot berada dalam direktori yang berbeda.
B. Perubahan pelabuhan 'mendengarkan 33.968 bots' ke port yang berbeda untuk setiap bot. make install DEST = ~ / botsname (mengganti `botsname 'dengan nama bot Anda)
<pre>cd /home/user/botsname
pico eggdrop.conf</pre>
Atau saya pikir cara termudah untuk pemula adalah untuk men-download file tersebut ke komputer anda, membuat salinan untuk kembali hanya dalam kasus, membukanya dengan WordPad, baca. Ini akan memandu Anda langkah demi langkah. Ada beberapa baris 'trik' di conf untuk Anda untuk menghapus atau bot Anda tidak akan startup. Hal ini untuk memastikan Anda membaca dan diedit file yang bot Anda dengan benar sebelum membuat kekacauan pada beberapa jaringan :). Anda tidak yakin tentang sesuatu dalam file conf bot Anda, pergi SINI untuk menemukan out.
 
<u>CATATAN:</u>
1. Tidak semua file Linux dapat didownload untuk Windows, diedit menggunakan apapun Program dan kemudian kembali upload dan berharap untuk bekerja dengan baik tanpa cmd tambahan atau menggunakan editor file nix atau converter untuk Windows. tapi untuk eggdrop.conf, tcl itu, psybnc.conf, file saya telah menemukan hanya baik untuk melakukannya dengan menggunakan WordPad. Ini bukan kebiasaan yang baik untuk lakukan meskipun.
 
2. Juga ingat di Linux huruf kecil dan huruf besar tidak sama.
Contoh: s tidak sama dengan S
 
3. Setiap baris dalam eggdrop.conf yang diawali dengan: # tidak dibaca oleh bot. Biasanya ini petunjuk, tips, mungkin pengaturan untuk menggunakan dll Untuk mengaktifkan pengaturan yang didahului dengan: #, hanya menghapus #
 
SSL:
Tambahkan baris ini di dekat bagian atas, seperti 2 baris: mengatur penggunaan-ssl 1 Untuk menggunakan SSL untuk bot Anda server harus SSL diaktifkan server. Pelabuhan SSL Efnet adalah 9999. daftar Server SINI.
misalnya di EFnet ini daftar: # irc.choopa.ca- ipv6 - ssl - pengguna 729
Untuk menggunakan ini akan: irc.choopa.ca:9999
Pelabuhan SSL Linknet adalah 7000. daftar Server SINI, menggunakan server yang sama tetapi Port 6667 untuk non SSL.
Pelabuhan SSL Freenode adalah 7000 atau 7070. daftar Server SINI.
 
<b>DAFTAR SERVER FOR EFnet & LINKNET SIAP COPY PASTE DI KLIK DISINI:</b>
Meskipun cek dengan daftar server link di atas untuk memastikan server ini semua masih aktif.
 
<b>PELABUHAN:</b>
Mengubah port mendengarkan bot.
Contoh: mendengarkan 33.968 bot
Mengubah port mendengarkan bagi pengguna untuk port Anda sebelumnya dimasukkan dalam pengaturan telnet bot Anda.
Contoh: mendengarkan pengguna 43768
 
vhost:
Jangan gunakan vhost yang sama yang Anda gunakan sudah pada account ini karena bisa mendapatkan dilarang dari server karena klon.
[i]* Ini hanya beberapa item kecil Anda harus berubah untuk mendapatkan kerja bot Anda.[/i]
 
<b>SELESAI EDITING EGGDROP.CONF</b>

Ubah nama eggdrop.conf ke: yourbotsname.conf Upload itu ke direktori bot Anda. (Anda memerlukan program FTP untuk ini,
tidak Program SSH) Jika Anda telah menambahkan script ekstra / tcl untuk bot, meng-upload ke jalan yang benar. Lalu masukkan cmds ini:
<pre>cd /home/user/botsname
./eggdrop -m yourbotsname.conf</pre>
Ini akan memulai bot Anda untuk pertama kalinya jika semua itu benar. Anda akan diberi balasan di jendela shell Anda. Jika bot Anda tidak akan mulai lebih dari mungkin ada sesuatu yang salah dalam file conf bot. Di masa depan untuk memulai penggunaan bot hanya: yourbotsname.conf ./eggdrop
 
<b>MEMPERKENALKAN DIRI:</b>

Sekarang Telnet untuk bot menggunakan koneksi yang kita lakukan langkah pertama. Pertama kali masuk ke bot untuk Nama masukkan: NEW Anda akan menerima balasan dari bot yang meminta Anda untuk memasukkan nama baru
dan password. Gunakan nama dan password baru yang kuat yang berbeda dari login Anda ke shell untuk keamanan. Membuat catatan itu. Atau Anda bisa msg bot di IRC dan memperkenalkan diri kepada sana: / msg bots.name halo 
Setelah itu saat Anda telnet ke bot Anda akan menggunakan nama baru dan lulus.
Selesai! : D
 
<b>TIPS LAIN DI TELNET:</b>

<u>PEMBAWA MASK:</u>
Tambahkan masker host digunakan dalam IRC dengan bot, contoh: (Ganti 'your.name' dengan nama login Anda, Anda set pada bot selama pengantar, 'your.ident' akan nama shell anda pengguna, 'your.vhost' akan menjadi salah satu yang dipilih untuk digunakan. Jika Anda tidak yakin klik kanan nama Anda di IRC / whois)
. +host your.name *!your.ident@your.vhost
. +host mewwww *!mewbies@mewbies.are.best.never.l33t.biz
 
<u>CHANNEL PENGATURAN:</u>
Untuk melihat apa bot Anda untuk memasukkan: .status Jika Anda ingin menambahkan saluran lain yang tidak pada file bots conf Anda, atau mengubah pengaturan yang ada di atasnya:
. +chan #catnip hutan (ini akan menambahkan catnip saluran dengan kunci hutan)
.chanset #catnip chanmode + NSPK hutan (ini akan mengatur catnip bagi mereka setting)
.chanset #catnip -statuslog (ini akan menghentikan bot Anda dari omelan Anda tentang msg itu)
.bans semua (ini akan menampilkan semua larangan bot Anda adalah menjaga)
#dogs .chanset + aktif (bot akan meninggalkan channel itu)
.chanset #dogs -inactive (bot akan kembali bergabung ke saluran tersebut; asalkan itu masih dalam daftar channel)
.-chan #dognip (menghapus channel)
. +ban *! * Anjing * @ *
. +larangan *!*@69.42.214.*
 
<u>LAIN MISC CMDS:</u>
.rehash (reload bot untuk membuat perubahan mengambil mempengaruhi)
.restart (berguna untuk menghilangkan script keras kepala, dll)
.say #catnip mew (bot akan mengatakan meong di saluran catnip)
.match * 999 (menunjukkan semua pengguna dan bot pada daftar user)
.save (ummm, kita mungkin mewbies tapi kita bisa mengetahui bahwa salah satu)
.backup (idem)
 
Pada dasarnya apa yang Anda lihat pada file conf bot dapat dilakukan melalui Telnet atau
IRC dan banyak lagi!
 
<u>BOT TIDAK MENERIMA PASSWORD ANDA:</u>

Jika Anda mendapatkan pesan ketika masuk ke bot Anda "Anda harus menetapkan sandi pertama ", meskipun Anda sudah memiliki, atau tidak akan menerima pass:
1. kill -15 [pid bot Anda]
2. menghapus 3 file: YourBots.user, YourBots.chan, & YourBots.user
3. Restart m bot Anda: ./eggdrop -m yourbotsname.conf
4. Telnet ke bot Anda, masukkan BARU kemudian ulang nick dan password.
 
<u>BERKOMUNIKASI DENGAN BOT VIA MIRC:</u>

Jika Anda ingin berbicara dengan bot di IRC:
<pre>/CTCP mybotsname CHAT</pre>
Bot akan menjawab dalam jendela server Anda, Anda kemudian menjawab dengan:
<pre>/DCCANSWER mybotsname</pre>
Jendela lain, dari bot, akan terbuka bagi Anda untuk memasukkan nama dan
lulus (bahwa Anda telah menyiapkan bot)
 
Untuk menghentikan obrolan dengan bot Anda masuk dalam jendela bots: .quit
Anda akan berterima kasih untuk cmd ini! Catatan itu tidak: berhenti yang akan berhenti Anda dari IRC.
 
<u>BERKOMUNIKASI DENGAN BOT VIA SSH:</u>

Saat Anda terhubung ke shell Anda melalui SSH Anda dapat berkomunikasi dengan bot Anda. Cara termudah adalah dengan memberikan server Anda nama singkat dan sederhana tipe:
<pre>su
pico / etc / hosts</pre>
Di atas semua itu akan serupa dengan:
[quote]127.0.0.1 localhost[/quote]
Di atas itu ketik IP server Anda dan nama yang sederhana, misalnya:
<pre>123.45.67.890 mew</pre>
 
keluar
Sekarang cukup masukkan ini: nc meong 39999 (ganti 39999 dengan port Anda bahwa bot mendengarkan pada untuk pengguna) Untuk keluar dari jendela bot dan kembali ke jenis shell Anda di: .quit
 
Jika Anda berada di shell yang Anda tidak memiliki akses ke pengaturan itu, mungkin sudah ditetapkan sebagai (ganti 12345 dengan port bot):
<pre>nc localhost 12345</pre>
Atau Anda mungkin perlu untuk menggunakan IP server, misalnya:
<pre>nc 123.456.789 12345</pre>
Setelah terhubung Anda akan diminta oleh bot Anda untuk password Anda, persis seperti
di telnet.
 
<u>CRONTRAB:</u>
[i]autobotchk[/i]. Ini akan memulai kembali bot Anda jika itu tidak berjalan karena
Server turun dll Hal ini tidak akan bekerja jika ada kesalahan dalam bot File conf tentu saja.
Login ke shell Anda (tidak telnet ke bot). Masukkan cmd ini:
<pre>crontab -l </pre>  
Itu akan memberitahu Anda jika itu sudah tersedia. Jika tidak, jawaban akan sesuatu seperti:
crontab: no crontab untuk (nama pengguna)
Jika tidak masukkan bots direktori: cd /home/user/yourbotsname 
kemudian melakukan: cron-egg yourbotsname.conf
kemudian lakukan: crontab -l
Sekarang harus menjawab:
[quote]0,10,20,30,40,50 * * * * /home............mybot.botchk >/dev/null 2>&1[/quote]
Yang berarti akan memeriksa setiap 10 menit jika bot adalah berjalan, jika tidak maka akan mulai untuk Anda.
 
Pada server yang berbeda saya punya itu tidak berhasil. Aku harus melakukan ini:
<pre>cd /home/user/yourbotsname/scripts/ 
./autobotchk yourbotsname.conf</pre>
Kemudian lakukan lagi untuk melihatnya terdaftar: <b>crontab -l </b>  
Jika Anda tidak ingin mengirim e-mail setiap kali bot Anda adalah off line, tambahkan
'> / Dev / null 2> & 1' bagian dari kode jika tidak ada sudah: <b>crontab -e </b>
Misalnya jika memiliki:
0,10,20,30,40,50 * * * * /home/user/MyBot/mybot.botchk 
Mengubahnya ke:
 0,10,20,30,40,50 * * * * /home/user/MyBot/mybot.botchk >/dev/null 2>&1 
 
Ctrl + x untuk menyimpan perubahan, maka y, tekan tombol enter. Ouput akan: crontab: menginstal crontab baru
 
Eggdrop LOG:
<u></u>
Keprihatinan saya adalah untuk tidak login. Dalam file eggdrop.conf hanya komentar (mendahului sejalan dengan #) dua baris:
#logfile MCO * "log / eggdrop.log" & #logfile JPK #lamest "log / lamest.log"
 
Kemudian .rehash bot Anda dan secara manual menghapus file log jika ada. Untuk mengetahui lebih lanjut tentang logging, hanya membaca di file konfigurasi sendiri. Jika Anda memutuskan untuk melakukan penebangan, mengawasi mereka, mereka dapat tumbuh besar
