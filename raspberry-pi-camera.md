# Process
enable camera
```shell
sudo dietpi-config
```

https://dietpi.com/docs/software/camera/

`/boot/config.txt`
```
start_x=1
camera_auto_detect=1
```

then, reboot

install libcamera

```shell
sudo apt install libcamera-apps
```

detect camera
```shell
$ sudo vcgencmd get_camera
supported=1 detected=0, libcamera interfaces=1
```

```shell
$ sudo libcamera-hello --list-cameras
Available cameras
-----------------
0 : imx219 [3280x2464 10-bit RGGB] (/base/soc/i2c0mux/i2c@1/imx219@10)
    Modes: 'SRGGB10_CSI2P' : 640x480 [103.33 fps - (1000, 752)/1280x960 crop]
                             1640x1232 [41.85 fps - (0, 0)/3280x2464 crop]
                             1920x1080 [47.57 fps - (680, 692)/1920x1080 crop]
                             3280x2464 [21.19 fps - (0, 0)/3280x2464 crop]
           'SRGGB8' : 640x480 [103.33 fps - (1000, 752)/1280x960 crop]
                      1640x1232 [41.85 fps - (0, 0)/3280x2464 crop]
                      1920x1080 [47.57 fps - (680, 692)/1920x1080 crop]
                      3280x2464 [21.19 fps - (0, 0)/3280x2464 crop]

```

test the camera

```shell
sudo libcamera-jpeg -o test.jpg
```

# references
- https://dietpi.com/docs/software/camera/
- https://forums.raspberrypi.com/viewtopic.php?t=348741
- https://forums.raspberrypi.com/viewtopic.php?t=352706
- https://dietpi.com/forum/t/pi-camera-module-3-libcamera-cant-detect-camera/17009
- https://www.raspberrypi.com/documentation/computers/camera_software.html#libcamera-vid
