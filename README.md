# misc
contains links to websites' contents that I find interesting.

# Table of Contents:
- [Tutorials](#tutorials)
- [Free Course](#free-course)
- [Stackoverflow](#stackoverflow)
- [Interesting](#interesting)

# Free Course
1. [Standford CS 253 web security](https://web.stanford.edu/class/cs253/)

# Tutorials
1. [Exploiting Buffer (nodejs)](https://snyk.io/blog/exploiting-buffer/)
2. [Goof vulnerable app](https://github.com/snyk/goof)

# Stackoverflow
1. [What is the JavaScript version of sleep()?](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)

# Interesting
1. https://capacitorjs.com/
2. https://react-spectrum.adobe.com/react-aria/getting-started.html

# Fedora Watchman Error
The user limit on the total number of inotify watches was reached; increase the fs.inotify.max_user_watches sysctl

how to fix this:
```
sudo sysctl fs.inotify.max_user_watches=524288
```

to persist the changes, edit /etc/sysctl.conf and add:
```
# sysctl settings are defined through files in
# /usr/lib/sysctl.d/, /run/sysctl.d/, and /etc/sysctl.d/.
#
# Vendors settings live in /usr/lib/sysctl.d/.
# To override a whole file, create a new file with the same in
# /etc/sysctl.d/ and put new settings there. To override
# only specific settings, add a file with a lexically later
# name in /etc/sysctl.d/ and put new settings there.
#
# For more information, see sysctl.conf(5) and sysctl.d(5).
fs.inotify.max_user_watches = 524288
```

references:
https://gist.github.com/grenade/5aa3894695ead8f4f840c0bfa6e2be34
https://facebook.github.io/watchman/docs/troubleshooting.html#poison-opendir
