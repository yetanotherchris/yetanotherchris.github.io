---
Published: 2010-08-16
title: "Password Generator"
author: Chris S
excerpt: "This Silverlight-based tool produces either prounceable or alphanumeric passwords of the length you want, and quantity."
layout: post
permalink: /csharp/password-generator/
dsq_thread_id:
  - 1084093463
tags:
  - 'c#'
  - password-generator
---
This Silverlight-based tool produces either prounceable or alphanumeric passwords of the length you want, and quantity. 

Alphanumeric passwords are mixed case passwords in the form of something like &#8220;B3Bf0f42F4&#8221;. The generator performs an MD5 hash on a random number.

<!--more-->

Prounceable passwords tend to be more useful for password rotation as they are memorable, so people will be less inclined to write them down. Examples include words like &#8220;llantedynd&#8221; (ok not so prounceable unless you're Welsh), &#8220;cardellelt&#8221;, &#8220;flotshrous&#8221;. Combining the output with additional numbers and and none alphanumeric characters helps the password strength. 

The password generator classes are available to download [here][1].

<div id="silverlightControlHost" style="width:400px; height:320px;">
</div>

 [1]: /csharp/pronounceable-password-generator