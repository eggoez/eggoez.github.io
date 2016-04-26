---
layout: post
title:  "Progress Like yutube? "
date:   2016-02-17 03:24:41 
categories: bash eggoez eggdrop
---
added this js before your
<pre>
</head>
</pre>
<pre>
<script>

$(function() {
$("body").append($("<div></div>").attr("id", "progress"));
$("#progress").width((50 + Math.random() * 30) + "%");
});
$(window).load(function() {
$("#progress").width("101%").delay(300).fadeOut(400);
});
</script>
</pre>
Now setting css like this gus
<pre>
#progress {position: fixed;
    z-index: 100;
    top: 0;
    left: -6px;
    width: 1%;
    height: 3px;
    background: #ff0000;
    border-radius: 1px;
    transition: width 500ms ease-out,opacity 400ms linear;
}
</pre>
css load at http://cssload.net/

