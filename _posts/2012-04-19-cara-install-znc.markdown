---
layout: post
title:  "Cara install ZNC"
date:   2012-04-19 22:27:21 -0500
categories: znc
---
Ga perlu di jelasin lagi ya apa itu znc? pendeknya menurutku znc adalah bounce yang terkeren dan terlengkap serta ter apa lagi, terpenuhi,, wkwk yang jelas saya pribadi menyukainya, apalagi para pengembang yang yah,, cukup seep deh,, membawa znc ini masuk kategoriku yang terhebat, dan terbanyak memakan ram di server 😬 
<br>
Login vps / shell<br>
jangan di root ea.. <span style="text-decoration:line-through;">coz kalo di root gabisa</span>,, bisa sih ada <a href="http://ciutirc.blogspot.com/2014/10/tutorial-cara-install-znc-pada-root-dengam-mudah.html">caranya sendiri</a> dengan yum install znc, tapi saya jelaskan di bukan root,, dan saya bingung LOL<br>
btw, kujelaskan urut²anya aja tanpa basi bosa ea.. dah gede dah pada tau kan..<br>
{% highlight shell %}
wget https://github.com/znc/znc/archive/znc-1.4.tar.gz
tar zxf znc-1.4.tar.gz
cd znc-1.4
./configure --prefix=$HOME --enable-extra
make
make install
./znc -c
{% endhighlight %}
<br>
jawab beberapa pertanyaan (mohon di baca dan di pehatikan)<br>
pertanyaan paling akhir, jalankan znc sekarang?? jawab yes ea<br>
kalo dc cukup run lg dengan<br>
{% highlight shell %}./znc{% endhighlight %}
tapi, jangan lupa untuk rajin <code>/znc saveconfig</code>(buat admin)<br>
biar ga nyesel di kemudian waktu 😅  kalau bingung coba baca tulisan gw yang lebih detai <a href="http://ciutirc.blogspot.com/2014/10/tutorial-cara-install-znc-pada-root-dengam-mudah.html">di sini</a>. Untuk cara Load External modul <a href="http://eg-goez.blogspot.com/2014/09/tutorial-menambah-external-modules-pada-znc.html">di sini</a>. Untuk cara Update ZNC klik <a href="http://eg-goez.blogspot.com/2014/10/tutorial-update-upgrade-version-znc.html">di sini</a>.
