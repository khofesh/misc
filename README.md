# misc
contains links to websites' contents that I find interesting.

# Table of Contents:
- [Free Course](#free-course)
- [Tutorials](#tutorials)
- [Interesting](#interesting)
- [Investment](#investment)
- [Audio](#audio)
- [AI](#ai)
- [Substack](#substack)
- [Other](#other)
- [Notes](#notes)

# Free Course
https://github.com/source-academy/sicp  Structure and Interpretation of Computer Programs, Second Edition, JavaScript Adaptation

1. [Standford CS 253 web security](https://web.stanford.edu/class/cs253/)
2. [CS9: Problem-Solving for the CS Technical Interview](https://web.stanford.edu/class/cs9/)
3. [blockchain and money](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/) \
    https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn

# Tutorials
1. [Exploiting Buffer (nodejs)](https://snyk.io/blog/exploiting-buffer/)
2. [Goof vulnerable app](https://github.com/snyk/goof)

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
12. https://entgo.io/ (An entity framework for Go)
13. https://rauchg.com/2020/next-for-vercel#frontend-focus (Next for Vercel)
14. https://cyberthreat.id/read/1306/Bocoran-Cara-Kerja-Cellebrite-Sedot-Data-Ponsel-Vanessa (Universal Forensic Extraction Device)
15. https://chakra-ui.com/docs/comparison (chakra ui)
16. https://ionicframework.com/react 
17. https://github.com/mlynch/nextjs-tailwind-capacitor (A starting point for building an iOS, Android, and Progressive Web App with Tailwind CSS, React, and Capacitor)
18. https://github.com/ben-rogerson/twin.macro (Twin blends the magic of Tailwind with the flexibility of css-in-js (emotion, styled-components and goober) at build time.)
19. https://www.reactnative.express/ (The all-in-one guide to React Native)
20. https://animationbook.codedaily.io/flatten-offset/ (master react native animations course)
21. https://github.com/aniftyco/awesome-tailwindcss (Awesome things related to Tailwind CSS)
22. https://osint.sh/buckets/ (Find public buckets on AWS S3 & Azure Blob by a keyword)
23. https://www.eddyvinck.com/projects/windows-xp/ (windows xp)
24. https://code.nsa.gov/ (NSA open source software)
25. https://medium.com/ovrsea/react-re-rendering-purecomponents-and-memoization-553a2cc863c3 (purecomponent and memoization)
26. https://corellium.com/blog/linux-m1 (How We Ported Linux to the M1)
27. https://sitejs.org/ (Small Web construction set.)
28. https://github.com/pavlobu/deskreen (Deskreen turns any device with a web browser to a second screen for your computer)
29. https://github.com/daffainfo/AllAboutBugBounty (All about bug websites (bypasses, payloads, and etc))
30. https://github.com/togiberlin/ui-ux-designer-roadmap (Roadmap on becoming a UI/UX designer in 2017)
31. https://github.com/gocraft/work
32. https://regex101.com/ (regular expression 101)
33. https://github.com/microsoft/rushstack (rushstack)
34. https://github.com/sundowndev/hacker-roadmap (hacker roadmap)
35. https://robotmoon.com/ssh-tunnels/ (A visual guide to SSH tunnels)
36. https://justgetmydata.com/ (JustGetMyData)
37. https://github.com/rust-lang/rustlings (crab Small exercises to get you used to reading and writing Rust code!)
38. https://adbshell.com/
39. https://appicon.co/#app-icon (app icon generator)
40. https://github.com/dabit3/awesome-aws-amplify (Curated list of AWS Amplify Resources)
41. https://github.com/gurugio/lowlevelprogramming-university (How to be low-level programmer)
42. https://github.com/jwasham/coding-interview-university (A complete computer science study plan to become a software engineer.)
43. https://github.com/DidierRLopes/GamestonkTerminal (The next best thing after Bloomberg Terminal)

proguard:
https://medium.com/androiddevelopers/practical-proguard-rules-examples-5640a3907dc9 (Practical ProGuard rules examples)

# Investment
1. https://fs.blog/2019/02/investment-algorithm/ (An Investment Approach That Works)
2. https://www.thejakartapost.com/adv/2020/12/16/tiger-brokers-helping-indonesian-investors-trade-global-markets-supported-by-nasdaq-data.html (tiger brokers)

# Audio
1. https://www.headphonesty.com/2017/04/5-types-headphone-drivers-know/
2. https://www.rtings.com/headphones/learn/dynamic-vs-planar-magnetic

# AI
1. https://www.technologyreview.com/2021/01/29/1017065/ai-image-generation-is-racist-sexist/ (An AI saw a cropped photo of AOC. It autocompleted her wearing a bikini.)

# Substack
1. https://bariweiss.substack.com/
2. https://astralcodexten.substack.com/

# Other
[Mereka menyoroti penerapan syariat Islam di Aceh](https://www.bbc.com/indonesia/berita_indonesia/2015/08/150817_indonesia_gam_syariatislam.amp)

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

change filename
```
youtube-dl https://link --output "something.%(ext)s"
```
https://stackoverflow.com/questions/32784639/changing-name-of-the-video-while-downloading-via-youtube-dl

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

## Fedora 33 wasm_exec.js not found
error:
```
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
cp: cannot stat '/usr/lib/golang/misc/wasm/wasm_exec.js': No such file or directory
```
solution:
```
sudo dnf install golang-misc
```

## remove old kernels (Fedora)
list currently installed kernels:
```
$ rpm -q kernel-core
kernel-core-5.10.9-201.fc33.x86_64
kernel-core-5.10.14-200.fc33.x86_64
```
remove one of them:
```
$ sudo dnf remove kernel-core-5.10.9-201.fc33.x86_64
```

source: https://ask.fedoraproject.org/t/old-kernels-removal/7026

## new Date() on react native 
new Date() on node.js
```
> startDate = '2021-02-17 08:30:00.667'
'2021-02-17 08:30:00.667'
> formatted = new Date(startDate)
2021-02-17T01:30:00.667Z
```

on react native
```
new Date('2021-02-17 08:30:00.667')
2021-02-17T08:30:00.667Z
```

this could result in an unwanted behavior, especially when you try to save calendar events (react-native-calendar-events)

solution:
```
import {parseISO} from 'date-fns';

parseISO('2021-02-17 08:30:00.667')
```

https://date-fns.org/v2.17.0/docs/parseISO

## nested flex
https://stackoverflow.com/questions/52439969/react-native-nested-flex/52440065

## random number of fixed length
https://stackoverflow.com/questions/21816595/how-to-generate-a-random-number-of-fixed-length-using-javascript/21816636

## What is the JavaScript version of sleep()?
https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

## Format number in react
source: https://github.com/asendia/severance-pay
```
import React from 'react';
import NumberFormat from 'react-number-format';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function CurrencyInput(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix='Rp '
    />
  );
}

export default CurrencyInput;
```

## Vim setup on fedora
source: https://uwot.eu/blog/setting-up-vim-on-fedora/ \
the source is still valid today, the following is a copy (and minor modification) of the codes on the blog.

```
sudo dnf install vim-enhanced
```

powerline
```
sudo dnf install vim-powerline
```

vundle and youCompleteMe
```
$ mkdir ~/.vim/bundle
$ cd ~/.vim/bundle
$ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
$ git clone https://github.com/ycm-core/YouCompleteMe.git
$ sudo dnf install cmake gcc-c++ make python3-devel
$ cd YouCompleteMe
$ git submodule update --init --recursive
$ python install.py --clangd-completer --go-completer
$ vim +PluginInstall +qall
```

edit /etc/vimrc
```
" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
" Avoid side effects when it was already reset.
if &compatible
  set nocompatible
endif

" When the +eval feature is missing, the set command above will be skipped.
" Use a trick to reset compatible only when the +eval feature is missing.
silent! while 0
  set nocompatible
silent! endwhile

" Allow backspacing over everything in insert mode.
set backspace=indent,eol,start

"set ai			" always set autoindenting on
"set backup		" keep a backup file
set viminfo='20,\"50	" read/write a .viminfo file, don't store more
			" than 50 lines of registers
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set wildmenu		" display completion matches in a status line

set ttimeout		" time out for key codes
set ttimeoutlen=100	" wait up to 100ms after Esc for special key

" Show @@@ in the last line if it is truncated.
set display=truncate

" Show a few lines of context around the cursor.  Note that this makes the
" text scroll if you mouse-click near the start or end of the window.
set scrolloff=5

" Do incremental searching when it's possible to timeout.
if has('reltime')
  set incsearch
endif

" Do not recognize octal numbers for Ctrl-A and Ctrl-X, most users find it
" confusing.
set nrformats-=octal

" Only do this part when compiled with support for autocommands
if has("autocmd")
  augroup fedora
  autocmd!
  " In text files, always limit the width of text to 78 characters
  " autocmd BufRead *.txt set tw=78
  " When editing a file, always jump to the last cursor position
  autocmd BufReadPost *
  \ if line("'\"") > 0 && line ("'\"") <= line("$") |
  \   exe "normal! g'\"" |
  \ endif
  " don't write swapfile on most commonly used directories for NFS mounts or USB sticks
  autocmd BufNewFile,BufReadPre /media/*,/run/media/*,/mnt/* set directory=~/tmp,/var/tmp,/tmp
  " start with spec file template
  " 1724126 - do not open new file with .spec suffix with spec file template
  " apparently there are other file types with .spec suffix, so disable the
  " template
  " autocmd BufNewFile *.spec 0r /usr/share/vim/vimfiles/template.spec
  augroup END
endif

if has("cscope") && filereadable("/usr/bin/cscope")
   set csprg=/usr/bin/cscope
   set csto=0
   set cst
   set nocsverb
   " add any database in current directory
   if filereadable("cscope.out")
      cs add $PWD/cscope.out
   " else add database pointed to by environment
   elseif $CSCOPE_DB != ""
      cs add $CSCOPE_DB
   endif
   set csverb
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  " Revert with ":syntax off".
  syntax on

  " I like highlighting strings inside C comments.
  " Revert with ":unlet c_comment_strings".
  let c_comment_strings=1
  set hlsearch
endif

filetype plugin on

if &term=="xterm"
     set t_Co=8
     set t_Sb=m
     set t_Sf=m
endif

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
" Revert with: ":delcommand DiffOrig".
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r ++edit # | 0d_ | diffthis
		  \ | wincmd p | diffthis
endif

if has('langmap') && exists('+langremap')
  " Prevent that the langmap option applies to characters that result from a
  " mapping.  If set (default), this may break plugins (but it's backward
  " compatible).
  set nolangremap
endif

" Don't wake up system with blinking cursor:
let &guicursor = &guicursor . ",a:blinkon0"

" Source a global configuration file if available
if filereadable("/etc/vimrc.local")
  source /etc/vimrc.local
endif

" powerline
python from powerline.vim import setup as powerline_setup
python powerline_setup()
python del powerline_setup
set laststatus=2

" Vundle

set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=/home/fahmad/.vim/bundle/Vundle.vim

call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'Valloric/YouCompleteMe'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
```

Create a symbolic link to the plugins directory and set Vim as alias for vi in /root/.bashrc:
```
$ su -c "mkdir /root/.vim && ln -s ~/.vim/bundle /root/.vim"
```

