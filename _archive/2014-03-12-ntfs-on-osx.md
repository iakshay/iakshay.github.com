---
title: NTFS on OSX
layout: post
tags: apple
---

By default, OSX doesn't write NTFS disk partitions. But there is quick way to fix this.

{% highlight bash %}
	brew install ntfs-3g
	#backup mount_ntfs provided by OSX
	mv /usr/local/sbin/mount_ntfs /usr/local/sbin/mount_ntfs.backup
	#override system mount_ntfs
	mv /usr/local/Cellar/ntfs-3g/2013.1.13/sbin/mount_ntfs /usr/local/sbin/mount_ntfs
{% endhighlight %}

To write files via Finder you need to restart it 
	killall -KILL Finder
Alternatively, Option + Click in dock and click restart. Tada, now you can drag drop files to NTFS Partitions in Finder.

This a free solution, and is certainly not the best. Infact comparisions with paid software from the same company that released ntfs-3g has significantly better perfomance. Paragon NTFS is another paid software, which is again better than ntfs-3g.

Reason, why ntfs-3g is slow
> The ntfs-3g program opens and does I/O to the block device /dev/disk[number] of the NTFS volume in question. OS X does not have a VM buffer cache for block devices when they are accessed in this way. That is the most overwhelming factor, because both metadata operations and file data I/O boil down to read/writes by NTFS-3G to the block device.

Its surprising, why nobody has worked on better open source solution for writing on NTFS file system.