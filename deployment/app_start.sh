#!/bin/bash
#please work

#run build
cd /home/ubuntu/Portfolio

sudo npm run build

#run serve in the background
sudo npm run serve > /dev/null 2> /dev/null < /dev/null &

#wait 20 seconds
sleep 20