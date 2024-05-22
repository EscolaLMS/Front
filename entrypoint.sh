#!/bin/sh
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

cp /usr/local/apache2/htdocs/tpl.html /usr/local/apache2/htdocs/index.html
sed -ie "s~API_URL = null~API_URL=\"$API_URL\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~SENTRYDSN = null~SENTRYDSN=\"$SENTRYDSN\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~YBUG_ID = null~YBUG_ID=\"$YBUG_ID\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~BASENAME = null~BASENAME=\"$BASENAME\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~ROUTING_TYPE = null~ROUTING_TYPE=\"$ROUTING_TYPE\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~APP_URL = null~APP_URL=\"$APP_URL\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_VAPID_KEY = null~VITE_APP_FIREBASE_VAPID_KEY=\"$VITE_APP_FIREBASE_VAPID_KEY\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_APIKEY = null~VITE_APP_FIREBASE_APIKEY=\"$VITE_APP_FIREBASE_APIKEY\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_AUTHDOMAIN = null~VITE_APP_FIREBASE_AUTHDOMAIN=\"$VITE_APP_FIREBASE_AUTHDOMAIN\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_PROJECTID = null~VITE_APP_FIREBASE_PROJECTID=\"$VITE_APP_FIREBASE_PROJECTID\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_STORAGEBUCKET = null~VITE_APP_FIREBASE_STORAGEBUCKET=\"$VITE_APP_FIREBASE_STORAGEBUCKET\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_MESSAGINGSENDERID = null~VITE_APP_FIREBASE_MESSAGINGSENDERID=\"$VITE_APP_FIREBASE_MESSAGINGSENDERID\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_FIREBASE_APPID = null~VITE_APP_FIREBASE_APPID=\"$VITE_APP_FIREBASE_APPID\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_IOS_APIKEY = null~VITE_APP_IOS_APIKEY=\"$VITE_APP_IOS_APIKEY\"~" /usr/local/apache2/htdocs/index.html
sed -ie "s~VITE_APP_ANDROID_APIKEY = null~VITE_APP_ANDROID_APIKEY=\"$VITE_APP_ANDROID_APIKEY\"~" /usr/local/apache2/htdocs/index.html

echo "API URL= " $API_URL
echo "SENTRYDSN= " $SENTRYDSN
echo "YBUG_ID= " $YBUG_ID
echo "BASENAME= " $BASENAME
echo "ROUTING_TYPE= " $ROUTING_TYPE
echo "APP_URL= " $APP_URL
echo "VITE_APP_FIREBASE_VAPID_KEY= " $VITE_APP_FIREBASE_VAPID_KEY
echo "VITE_APP_FIREBASE_APIKEY= " $VITE_APP_FIREBASE_APIKEY
echo "VITE_APP_FIREBASE_AUTHDOMAIN= " $VITE_APP_FIREBASE_AUTHDOMAIN
echo "VITE_APP_FIREBASE_PROJECTID= " $VITE_APP_FIREBASE_PROJECTID
echo "VITE_APP_FIREBASE_STORAGEBUCKET= " $VITE_APP_FIREBASE_STORAGEBUCKET
echo "VITE_APP_FIREBASE_MESSAGINGSENDERID= " $VITE_APP_FIREBASE_MESSAGINGSENDERID
echo "VITE_APP_FIREBASE_APPID= " $VITE_APP_FIREBASE_APPID
echo "VITE_APP_IOS_APIKEY= " $VITE_APP_IOS_APIKEY
echo "VITE_APP_ANDROID_APIKEY= " $VITE_APP_ANDROID_APIKEY

exec httpd -DFOREGROUND "$@"
