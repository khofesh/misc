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
2. [CS9: Problem-Solving for the CS Technical Interview](https://web.stanford.edu/class/cs9/)

# Tutorials
1. [Exploiting Buffer (nodejs)](https://snyk.io/blog/exploiting-buffer/)
2. [Goof vulnerable app](https://github.com/snyk/goof)

# Stackoverflow
1. [What is the JavaScript version of sleep()?](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep)

# Interesting
1. https://capacitorjs.com/ (A cross-platform native runtime for web apps.)
2. https://react-spectrum.adobe.com/react-aria/getting-started.html
3. https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html
4. https://react-query.tanstack.com/ (Performant and powerful data synchronization for React)
5. https://dev.to/giteden/top-5-react-chart-libraries-for-2020-1amb
6. https://github.com/cheeaun/hackerweb-native-2
7. https://github.com/developit/mitt (Tiny 200 byte functional event emitter / pubsub.)
8. https://dev.to/dabit3/7-tips-for-breaking-into-devrel-7jk
9. https://fusejs.io/ (Fuse.js is a powerful, lightweight fuzzy-search library, with zero dependencies)
10. https://lunrjs.com/ (A bit like Solr, but much smaller and not as bright.)
11. https://medium.com/flutter/learning-flutters-new-navigation-and-routing-system-7c9068155ade (flutter's new navigation and routing system)

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

## flutter formatting on vscode
"editor.defaultFormatter": "Dart-Code.dart-code", is the important part
```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false,
    "editor.defaultFormatter": "Dart-Code.dart-code",
  },
  "dart.debugExternalLibraries": false,
  "dart.debugSdkLibraries": false,
  "editor.fontSize": 12,
  "prettier.packageManager": "yarn"
}
```
