#!/bin/bash
#please work

#run build
cd /home/ubuntu/Portfolio

tmux attach -t 0

sudo npm run build

#run serve
sudo npm run serve

tmux detach-client
