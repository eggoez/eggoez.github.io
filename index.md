---
layout: default
---
<div class="page-header">
  <h2>Tulisan</h2>
</div>

  <div class="post-list">
    {% for post in site.posts %}
      <div>
        <span class="post-meta"><i class="fa fa-calendar"></i> {{ post.date | date: "%b %-d, %Y" }}</span>

        <h3>
        <i class="fa fa-terminal" aria-hidden="true"></i>  <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h3>
      </div>
    {% endfor %}
  </div>

<p class="rss-subscribe pull-right"><a href="{{ "/feed.xml" | prepend: site.baseurl }}" title="via RSS"><i class="fa fa-rss faa-wrench animated"></i></a></p>

