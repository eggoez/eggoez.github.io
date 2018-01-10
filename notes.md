---
layout: default
title: Notes
---
<div class="page-header">
  <h2>Tulisan <span class="rss-subscribe pull-right"><a href="{{ "/feed.xml" | prepend: site.baseurl }}" title="via RSS"><i class="fa fa-rss faa-wrench animated"></i></a></span></h2>
</div>
<ul class="list-group">
    {% for post in site.posts %}
  <li class="list-group-item">
    <span class="badge">{{ post.date | date: "%-d %b %y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li></ul>
{% endfor %}
