---
Published: 2010-07-30
title: "Extracting all links from a HTML page"
author: Chris S
layout: post
permalink: /csharp/extracting-all-links-from-a-html-page/
dsq_thread_id:
  - 1084072781
tags:
  - 'c#'
---
The code below is a small class that extracts all links from a HTML page using a regular expression. The method returns a list of URLs, which can include formats such as &#8220;#&#8221; and &#8220;javascript:;&#8221;.

If you get proxy authentication problems behind a corporate firewall or proxy, add an app.config with the following lines:

<!--more-->

  
<script src="https://gist.github.com/yetanotherchris/4957306.js"></script>

This will take the proxy details from IE. I still get issues even with the above configuration, so it is fairly hit and miss depending on the hardware or software you proxy is using.

<script src="https://gist.github.com/yetanotherchris/4957320.js"></script>