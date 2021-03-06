---
title: A new web front end for Team Foundation Server
date: 2010-11-03 00:00:00 Z
permalink: "/tfs/a-new-web-front-end-for-team-foundation-server/"
tags:
- spruce
- tfs
Published: 2010-11-03 00:00:00 Z
author: Chris S
description: Team Foundation Server has had some great improvements since the 2005 and
  2008 versions, including a plethora of new link types for workitems, an API that
  is a lot more dev friendly and some improvements to the Visual Studio UI. It is,
  however, still not really close to the easy of use and user experience you get from
  competitor bug tracking software...
layout: post
dsq_thread_id:
- 
---

Team Foundation Server has had some great improvements since the 2005 and 2008 versions, including a plethora of new link types for workitems, an API that is a lot more dev friendly and some improvements to the Visual Studio UI.

It is, however, still not really close to the easy of use and user experience you get from competitor bug tracking software.

<!--more-->

2010 can now tie into a sharepoint installation to give a UI via the browser. This comes from a company that Microsoft bought called TeamPlain, who were previously selling the site software as standalone. The original was fairly good looking and easy to use (in an Office 2003 type way), but it seems like the Sharepoint experience managed to strip this veneer away like a vat of acid, leaving the front end experience we have now that is like most of the current state of Microsoft’s UX: stuck in the Office 2003 epoch unable to keep up with the current avant garde of web 2.0. Pop up windows, huge urls, verdana 8pt and masses of unnecessary HTML.

I use TFS on a daily basis as our source control repository. I also use Mercurial for my home (but commercial) projects with Bitbucket. I’ve been through a lot of online source control providers: Codeplex (with TFS), Subversion via Google Code, Unfuddle, Wush, Github. I prefer Mercurial for personal development because of its simplicity, but I haven't tried it as part of a team and it does of course make a lot more commercial sense to use something that you get for free with your MSDN subscription: TFS. This is no doubt why most Microsoft dev houses choose it.

Most of these alternative sites offer the software development experience: Source control, Build servers and Bug tracking (including estimation, charts and ski slope graphs to prove your team are doing something other than browsing youtube).

The user experience for Team Foundation Server 2010 is in my view is quite far behind the others - the others being Github, Bitbucket, Fogbugz, Rally, Unfuddle. You get a choice of winforms or an equivalent browser-experience with Sharepoint/the default interface. Neither of these seem to offer you an experience similar to the bug tracking and task management you find in Unfuddle, Fogbugz or Rally, particularly if just want to enter a title, description, state and estimation.

I spent a few hours playing with the TFS API and like it - it’s easy to use and has a lot of blog information around it. So with this I decided to build a web front end based on web technologies Microsoft are currently promoting, plus making it as attractive and easy to use as Unfuddle, Fogbugz, Bitbucket and Github. A new Bitbucket project was born, Spruce, a pine tree and old fashioned english verb.

The intention of the project is not to compete with the commercial alternatives but to simply give TFS the UI love it deserves, and highlight the power of the API and provide examples for it. Trying to take Spruce down the commerical route (for now) would be a recipe for spending my evenings answering email support while trying to fix bugs. So the project is GPL’d and hopefully will get some community support and a few hackers willing to contribute.