---
title: Unix Cheat Sheet
date: 2009-02-02 00:00:00 +0000
permalink: "/tools/unix-cheat-sheet/"
tags:
- unix
Published: 2009-02-02 00:00:00 +0000
author: Chris S
description: This post is a command reference card for some regularly used unix commands,
  tested on linux (Redhat 6, a while ago) but should hopefully work on most unix command
  shells.
layout: post
dsq_thread_id:
- 1074123375
---
[![unix tar](/assets/2009/02/unix-tar.png)](http://imgs.xkcd.com/comics/tar.png)

This post is a command reference card for some regularly used unix commands, tested on linux (Rdhat 6, a while ago) but should hopefully work on most unix command shells. Any additional (non-obscure) commands you think should be added,or corrections please email me.

<!--more-->

### Docker

* `docker rm -f $(docker ps -a -q)` - removes all containers, forcing them to stop (-q is Windows friendly)
* `docker rmi $(docker images -q)` - removes all images.
* `docker cp nginx:/usr/share/nginx/key.pem key.pem` - copies the pem file onto the nginx container from the current directory (this can be used to copy the other way round too).

### Nginx

To get a free SSL certificate for your site (expires in 90 days);

    wget https://dl.eff.org/certbot-auto chmod a+x certbot-auto ./path/to/certbot-auto certonly --standalone -d example.com -d www.example.com

You can then use it in your nginx conf file:

    ssl_certificate /usr/share/nginx/keys/vac-ation.com/cert.pem;
    ssl_certificate_key /usr/share/nginx/keys/vac-ation.com/privatekey.pem;

### Sudo

To edit the sudo file in bash (install Nano first, apt-get install nano or yum install nano):

    export VISUAL=nano
    crontab -e 

### General help

\[command\] -help - gives syntax for using that command

* `man [command]` - brings up the manual page for the command, if it exists
* `man [command] > file.txt` - dumps the manual page(s) for the command into ‘file.txt'
* `whatis [command]` - gives a short description of the command.
* `help` - gives a list of commands (GNU Bash).
* `help [command]` - gives extra information on the commands listed above.

### General text editing/viewing

* `pico [filename]` - launches the PICO editor for the filename.
* `nano [filename]` - does anyone use PICO anymore?
* `more [filename]` - shows one screen's worth of the file at a time.
* `less [filename]` - similar to more
* `head [filename]` - Shows the first 10 lines of file, or use `-n` for the number of lines.
* `tail [filename]` - Shows the last 10 lines of file, or use `-n` for the number of lines.
* `cat [filename] | more` - works like more, `cat` concats 2 strings
* `sed 's|search string|replace string|' filename > newfile.txt` - replaces a string inside a file.
  * `|` is the delimiter here, but it can be anything to avoid clashes.

### Nano

* alt+a to select all.
* ctrl+k to cut
* alt+u to paste
* _(All other CTRL commands should be self-explanatory)_

### VI

* `vi [filename]` - opens VI text editor, if the file doesn't exist, it'll be created on saving.
* using `i` inserts
* pressing `escape` and then `:` goes back to command mode.
* `/searchstring` searchs for `searchstring` using regular expressions.
* `:` followed by `w` writes
* `:` followed by `qw` writes then quits
* `:` followed by `q` quits.
* `:` followed by `q!` quits regardless of whether changes are made.
* `:` followed by `z` undos.

### SSH

* `ssh root@1.2.3.4` - SSH onto a server (use WSL2/git bash for Windows for this)
* `ssh -i ~/.ssh/my.pem ec2-user@10.0.0.1` - SSH onto an EC2 Amazon Linux box, use `chmod 400 my.pem` first)
* `scp localfile.txt root@1.2.3.4:/etc/remotefile.txt` - copy localfile.txt to /etc/remotefile.txt
* `scp -i ~/.ssh/my.pem /root/privatekey.pem root@1.2.3.4:privatekey.pem` - copy privatekey.pem onto your server

### General/System commands

* `su [user]` - changes the login to `[user]` or to the root if no `[user]` is given.
* `date` - shows the system date
* `whoami` - tells you who you're logged in as
* `uptime` - how long the computer has been running, plus other details
* `w` - shows who's logged on, what they're doing.
* `df` - how much disk space is left.
* `du` - disk usage by your login, it can also total up directories.
* `uname -mrs` - userful info about the system
* `uname -a` - all details about the system

### What's running

* `ps` - what's running.
* `ps` ax - shows all processes
* `top` - sort of interactive version of ps, there is also `ntop`.
* `kill [pid]` - terminates the named process, which can be name or number or other options.
* `killall -HUP [command name]` - kill a process, running the command specified, by name.
* `killall -9 [command]` - similar to the above
* `xkill` - kills a frozen application in X (gnome,kde etc. desktops), you just click on the frozen app.

### File system

* `ls -la` - list all files/directories
* `dir` - simple form of ls
* `cd [dir]` - change directory
* `cd ~` - go back to the home directory
* `cdup` - similar to using `cd ..`, go up one directory.
* `pwd` - print which directory you're in.
* `./[filename]` - run the file if it's executable and in the current directory.
* `rm [filename]` - delete a file
* `rm -R [directory]` - delete a directory
* `mv [oldfilename] [newfilename]` - renames the file (or directory)
* `cp [filename-source] [filename-destination]` - copy the file from one place to another
* `cp -R [dir-source] [dir-destination]` - copy a directory an all its subdirectories
* `mkdir [name]` - makes a directory.
* `cat [sourcefile] >> [destinationfile]` - appends sourcefile to the end of destinationfile
* `df` - how much disk space is available, more options available.

### Zipping/taring

* `tar -cvzf mytar.tar.gz [sourcefiles-or-dir]` - creates a new tar file, verbose options on, runs it through gnuzip,f is the filename
* `tar -xvf mytar.tar.gz [destination]` - extracts a tar file (this example is compressed with gzip), verbosely, f is the filename
* `gzip [file-or-dir]` - compresses a file with gzip.
* `gunzip file.gz` - decompresses a file with gzip.
* `unzip file` - unzips a file (you'll need to apt-get install unzip)

NB gzip only compresses files, it doesn't collect them into a single file like a tarball does.

### Searching

* `locate [filename]` - searches the system using an indexed database of files. use updatedb to update the file database
* `locate [filename] | sort` - sorts the files alphabetically
* `whereis [filename]` - locates an application, such as ‘whereis bash'
* `find [filename]` - searches the filesystem as with locate, but without a database so its slower.
* `find /directory -atime +30 -print` - searches for files not used in the past 30 days.

### Setting up links

* `ln -s target linkname` - creates a symbolic link, like a shortcut to the target directory or filename.
* `ln target linkname` - creates the default hard link. Deleting this will delete the targetted file or directory.

### Network commands

* `dig domainname` - retrieves information about a domain, such as name servers, mx records
* `whois domainname` - whois info on a domain
* `finger user` - gives info about a user, their group status, but can also be used over a network
* `netstat -ape` - lots of info about whos connected to your machine, what processes are doing what with sockets

### Piping

Piping to another command is straight forward enough:

    locate filename | grep /usr/local > searchresults.txt
    
    This searches for filename, runs the results through grep to filter everything without /usr/local in it, and then outputs the results to searchresults.txt
    
    |  - runs one application via another, and can be used multiple times e.g. cat /usr/group | more | grep root | sort.
    >  - creates a new file if one doesn't already exist, overwrites the contents of the file if it does exist   
    >> - appends to the end of the file, and creates the file if one doesn't exist.   
    <  - sends everything after this to the application, e.g. ./mysql -u bob -p databasename < mysqldump.sql 

### Users and groups

* `groups [username]` - shows what groups the user belongs to
* `id [username]` - shows extended information about a user.
* `finger [user]` - give details about a user.
* `passwd [user]` - changes the password for a user, or without the user argument, changes your password.
* `chsh [user]` - changes the shell for a user.
* `userdel [user]` - removes a user from the system, use -r to remove their home directory too.
* `newgrp [group id]` - log into a new group.
* `groupadd [groupname]` - adds a group
* `usermod -a -G [group-name] [user-name]` - adds a user to a group
* `useradd -d /home/username -g groupname username` - add a new user with the d being the homedirectory, g the default group they belong to.
* `sudo adduser <username> sudo` - add a user to the user of sudos

Take a look at the users/groups on the system with:

* `cat /etc/passwd | sort`
* `cat /etc/group | sort`

The stuff below is in the man pages also.

The format of passwd is:

    username  
    password denoted by x (use cat /etc/shadow | sort to list the shadow password file)  
    uid - user identifier number  
    gid - group identifier number  
    misc information such as real name  
    users home directory  
    shell for the user

The format of group is:

    name of group  
    password denoted by x (use cat /etc/gshadow | sort to list the shadow group file)  
    gid - group identifier number  
    list of additional users assigned to the group

### File and directory permissions

Break down of permissions in a directory listing:

    -rw-r--r-- 1 mainuser devel 9054 Dec 28 12:42 index.html

* The first character indicates whether it is a directory or file (d for directory).
* After that, the next 3 (rw-) are owner permissions.
* The following 3 (r-) are group permissions
* The following 3(r-) are permissions for other users.

After that reads the number of files inside the directory if it's a directory (which it isn't so it's 1) this can also be links to the file, the owner of the file, the group the file belongs to, size in bytes, date and time and then the filename.

### Chmod and Chown

Owner,group and other permissions can be r,w,x. Translated into their decimal equivalents:

* `owner-read=400,write=200,execute=100`
* `group-read=40,write=20,execute=10`
* `other-read=4,write=2,execute=1`

So add them up and you've got your user permissions for chmoding:

* `chmod [mode] fileordirectory` - changes the permissions on a file or directory. use -r to recursively change a whole directory and its sub directories.

e.g chmod 755 myfile.txt - changes the permissions on the file to 755 which is : owner read,write,execute; group read,execute; other read,execute.

* `chown [user:group] fileordirectory` - changes the user and group ownership of a file or directory. Use -R to recursively change a whole directory and its sub directories.
* `chgrp [group] fileordirectory` - changes the groupownership of a file or directory. Use -R to recursively change a whole directory and its sub directories.

## Permissions calculator
As Gatsby is a little fiddly with including scripts inside Markdown (as it's React-based), the calculator is now available [here](/unixcheatsheet/).
