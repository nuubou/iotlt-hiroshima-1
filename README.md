インストール
============

node-red
--------

- node.js インストール  
参考：[Debian and Ubuntu based Linux distributions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

    $ sudo apt-get install curl  
    $ sudo curl -sL https://deb.nodesource.com/setup | sudo bash -  
    $ sudo apt-get install nodejs  
    $ sudo apt-get install build-essential  

- node-red インストール  
参考：[Node-RED : Installation](http://nodered.org/docs/getting-started/installation)

    $ sudo npm install -g --unsafe-perm node-red

- worldmap node インストール  
参考：[node-red-contrib-web-worldmap - npm](https://www.npmjs.com/package/node-red-contrib-web-worldmap)

    $ sudo npm install -g node-red-contrib-web-worldmap

- node-red 起動

    $ node-red

MOSQUITTO (MQTT Broker)
-----------------------

- インストール  
参考：[Downloads | Mosquitto](http://mosquitto.org/download/)

    $ sudo apt-get install software-properties-common  
    $ sudo add-apt-repository ppa:mosquitto-dev/mosquitto-ppa  
    $ sudo apt-get update  
    $ sudo apt-get install mosquitto  

- MQTT over websocket  
参考：http://tomowatanabe.hatenablog.com/entry/2016/01/21/095007

    $ cat >> /etc/mosquitto/mosquitto.conf
    listener 1883
    
    listener 9090 127.0.0.1
    protocol websockets
    $ sudo service mosquitto restart

Nginx (HTTP Server)
-------------------

    $ sudo apt-get install nginx

サンプルコード
==============

    $ git clone https://github.com/nuubou/iotlt-hiroshima-1.git
    $ sudo ln -s $PWD/iotlt-hiroshima-1/iot-device/ /usr/share/nginx/html

参考:
* [Geolocation.getCurrentPosition() - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Geolocation/getCurrentPosition) 
* [Paho - Open Source messaging for M2M - Eclipse](https://eclipse.org/paho/clients/js/)
