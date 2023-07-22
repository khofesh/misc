# encrypted disk

If the LUKS-encrypted hard drive is using `dm-crypt`, you can use the "cryptsetup" command to unmount it. 
First, make sure that the drive is not in use by any running processes. 
You can check this by running the "lsof" command and looking for any open files on the drive. 
Once you have confirmed that the drive is not in use, you can unmount it by running the command 
`cryptsetup luksClose /dev/mapper/device_name` (replace "device_name" with the actual name of the device mapper for the LUKS partition).
This will close the LUKS partition and detach it from the file system, making it safe to remove or power off.

Alternatively, you can use the command `umount /path/to/mount/point`, this will unmount the partition and also close the luks partition.

```shell
$ sudo cryptsetup luksClose /dev/mapper/myvol-backup1
$ sudo cryptsetup luksClose /dev/mapper/myvol-backup2
```

# encrypt wd purple

```
fdisk /dev/sdd
lsblk
cryptsetup -y -v luksFormat /dev/sdd1
cryptsetup open /dev/sdd1 wdpurple
mkfs.ext4 /dev/mapper/wdpurple 
mount /dev/mapper/wdpurple /mnt/wdpurple/
umount /mnt/wdpurple 
cryptsetup close wdpurple

rsync -aAXHv --exclude={"./container/*"} /media/ext4/ /run/media/xxxxxxx/
```

- https://wiki.archlinux.org/title/Fdisk
- https://wiki.archlinux.org/title/dm-crypt/Encrypting_an_entire_system

# wd blue

```shell
su
fdisk /dev/sdc
dd if=/dev/random of=/etc/luks-keys/wdhome bs=1 count=256 status=progress
cryptsetup luksFormat -v /dev/sdc1 /etc/luks-keys/wdhome
cryptsetup -d /etc/luks-keys/wdhome open /dev/sdc1 wdhome
ls /dev/mapper
mkfs.btrfs -L "wd_blue-home" /dev/mapper/wdhome
mount /dev/mapper/wdhome /mnt/wdhome/
blkid /dev/sdc1
vim /etc/crypttab
    ```
    wdhome                  UUID=XXXXX                              /etc/luks-keys/wdhome
    ```
mkdir /media/wdhome
mount /dev/mapper/wdhome /media/wdhome/    
blkid /dev/mapper/wdhome
vim /etc/fstab
    ```
    UUID=YYYYY /media/wdhome           btrfs    ssd,noatime,x-systemd.device-timeout=0 0 0
    ```
```

- https://wiki.archlinux.org/title/btrfs
- https://wiki.archlinux.org/title/dm-crypt/Encrypting_an_entire_system#Encrypting_logical_volume_/home
- https://kifarunix.com/automount-luks-encrypted-device-in-linux/
- https://www.cyberciti.biz/faq/how-to-find-and-delete-directory-recursively-on-linux-or-unix-like-system/
- https://opensource.com/article/20/11/btrfs-linux
- https://www.thegeekdiary.com/centos-rhel-how-to-create-and-mount-btrfs-file-system-explained-with-examples/
- https://blog.programster.org/btrfs-cheatsheet
