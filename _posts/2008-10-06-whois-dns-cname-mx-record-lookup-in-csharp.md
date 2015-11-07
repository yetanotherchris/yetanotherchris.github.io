---
Published: 2008-10-06
title: "Whois, DNS, CName, MX record lookup in C#"
author: Chris S
excerpt: "This is the source code from the network tools page that use to exist on the previous domain (when the site was hosted on a dedicated server). A good replacement site is [who.is][6], however the source for the tools is below."
layout: post
permalink: /csharp/whois-dns-cname-mx-record-lookup-in-csharp/
dsq_thread_id:
  - 1072994329
tags:
  - 'c#'
---
[Download][1]

This is the source code from the network tools page that use to exist on the previous domain (when the site was hosted on a dedicated server). A good replacement site is [who.is][2], however the source for the tools is below.

<!--more-->

The download contains the class library used for the Network Tools and a sample console application. The Whois lookup isn't included, you can grab that from the Whois post. Most of the credit for tools goes to the [NMail server project][3]. The DNS lookup functions were all adapted from that project, such as CNAME, Nameservers and MX records.

The code below shows the simple Hostname to IP and visa versa methods.

![Network tools console][4]

<script src="https://gist.github.com/yetanotherchris/4746180.js"></script>

 [1]: /storage/downloads/networktools.zip
 [2]: http://www.who.is/
 [3]: http://sourceforge.net/projects/nmailserver/
 [4]: /wp-content/uploads/2008/10/networktools.gif