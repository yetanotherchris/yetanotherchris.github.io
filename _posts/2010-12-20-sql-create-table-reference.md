---
Published: 2010-12-20
title: "SQL create table reference"
author: Chris S
layout: post
permalink: /sql-server/sql-create-table-reference/
dsq_thread_id:
  - 1085023075
tags:
  - sql-server
---
Here's a quick reference for scripting table creation in SQL server by hand, where the text is readable and pretty rather than an autogenerated mess.

<!--more-->

  
<script src="https://gist.github.com/yetanotherchris/4960139.js"></script>

It's usually easier to bulk add the foreign keys after, that way the order of the CREATE TABLES doesn't matter:

<pre>ALTER TABLE [dbo].[sometable] ADD CONSTRAINT [FK_sometable_users_id] 
	FOREIGN KEY([userid]) REFERENCES [dbo].[users] ([id])
</pre>