#!/bin/bash
docker build -t foo .
docker run  -p 8080:80 -e MULTI_DOMAINS="api.localhost,api1.localhost" -e API_LOCALHOST_VITE_APP_API_URL="http://api.localhost"  -e API1_LOCALHOST_VITE_APP_API_URL="http://api1.localhost" -it foo 