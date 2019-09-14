#!/bin/bash

sudo docker stop frontenduser
sudo docker rm frontenduser
sudo docker rmi alfaruqi26/happy-trash-frontend-user:v1
sudo docker run -d -p 3000:80 --name frontenduser alfaruqi26/happy-trash-frontend-user:v1