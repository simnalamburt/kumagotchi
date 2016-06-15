쿠마고치
========

```shell
# Build bluno-side codes
cd bluno

platformio run -t upload
platformio serialports monitor -b 115200
```
```shell
# Build PC-side codes
cd app

npm i
npm start
```
