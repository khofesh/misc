# dns skipping packages
- https://ask.fedoraproject.org/t/conda-broke-my-system/3129
- https://ask.fedoraproject.org/t/dnf-skipping-packages-with-broken-dependencies/29914/3
- https://docs.fedoraproject.org/en-US/modularity/using-modules/

# conda disable default active
```shell
conda config --set auto_activate_base false
```
- https://stackoverflow.com/questions/54429210/how-do-i-prevent-conda-from-activating-the-base-environment-by-default

# qmake (installing radeon-profile)

```shell
sudo dnf install qt5-qtcharts-devel qt5-qtbase-devel
```

compiling
```shell
git clone https://github.com/marazmista/radeon-profile.git
cd radeon-profile/radeon-profile
qtmake-qt5
make
```

- https://github.com/marazmista/radeon-profile
- https://forums.fedoraforum.org/showthread.php?326127-bash-qmake-command-not-found
- https://ask.fedoraproject.org/t/installing-qt-packages/3192/5
- https://forum.qt.io/topic/123850/how-to-fix-qt-project-error-unknown-module-s-in-qt-charts
