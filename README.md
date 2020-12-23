# misc
contains links to websites' contents that I find interesting.

# Table of Contents:
- [Tutorials](#tutorials)
- [Free Course](#free-course)
- [Stackoverflow](#stackoverflow)
- [Interesting](#interesting)
- [Notes](#notes)

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
3. https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html
4. https://react-query.tanstack.com/
5. https://dev.to/giteden/top-5-react-chart-libraries-for-2020-1amb
6. https://github.com/cheeaun/hackerweb-native-2

# Notes

## Fedora Watchman Error
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

references: \
https://gist.github.com/grenade/5aa3894695ead8f4f840c0bfa6e2be34 \
https://facebook.github.io/watchman/docs/troubleshooting.html#poison-opendir 

## youtube-dl
```
while ! youtube-dl -r 300K https://links -c --socket-timeout 5; do echo DISCONNECTED; sleep 5; done
```
get one subtitle
```
youtube-dl --write-sub --sub-lang en --skip-download URL 
```
https://superuser.com/questions/927523/how-to-download-only-subtitles-of-videos-using-youtube-dl
