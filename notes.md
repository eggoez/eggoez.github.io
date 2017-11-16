---
layout: default
title: Notes
---
<div class="page-header">
  <h2>Tulisan</h2>
</div>

  <div class="post-list">
    {% for post in site.posts %}
      <div>
        <span class="post-meta"><i class="fa fa-calendar"></i> {{ post.date | date: "%-d %b %y" }} <i class="fa fa-terminal" aria-hidden="true"></i>  <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></span>
      </div>
    {% endfor %}
  </div>

<p class="rss-subscribe pull-right"><a href="{{ "/feed.xml" | prepend: site.baseurl }}" title="via RSS"><i class="fa fa-rss faa-wrench animated"></i></a></p>

