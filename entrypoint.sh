#!/bin/sh
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

cp /var/www/html/tpl.html /var/www/html/index.html
sed -ie "s~API_URL = null~API_URL=\"$API_URL\"~" /var/www/html/index.html
sed -ie "s~SENTRYDSN = null~SENTRYDSN=\"$SENTRYDSN\"~" /var/www/html/index.html
sed -ie "s~YBUG_ID = null~YBUG_ID=\"$YBUG_ID\"~" /var/www/html/index.html
sed -ie "s~BASENAME = null~BASENAME=\"$BASENAME\"~" /var/www/html/index.html
sed -ie "s~ROUTING_TYPE = null~ROUTING_TYPE=\"$ROUTING_TYPE\"~" /var/www/html/index.html
sed -ie "s~APP_URL = null~APP_URL=\"$APP_URL\"~" /var/www/html/index.html
sed -ie "s~IMG_URL = null~IMG_URL=\"$IMG_URL\"~" /var/www/html/index.html
sed -ie "s~IMG_BUCKET_FOLDER = null~IMG_BUCKET_FOLDER=\"$IMG_BUCKET_FOLDER\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_VAPID_KEY = null~APP_FIREBASE_VAPID_KEY=\"$APP_FIREBASE_VAPID_KEY\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_APIKEY = null~APP_FIREBASE_APIKEY=\"$APP_FIREBASE_APIKEY\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_AUTHDOMAIN = null~APP_FIREBASE_AUTHDOMAIN=\"$APP_FIREBASE_AUTHDOMAIN\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_PROJECTID = null~APP_FIREBASE_PROJECTID=\"$APP_FIREBASE_PROJECTID\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_STORAGEBUCKET = null~APP_FIREBASE_STORAGEBUCKET=\"$APP_FIREBASE_STORAGEBUCKET\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_MESSAGINGSENDERID = null~APP_FIREBASE_MESSAGINGSENDERID=\"$APP_FIREBASE_MESSAGINGSENDERID\"~" /var/www/html/index.html
sed -ie "s~APP_FIREBASE_APPID = null~APP_FIREBASE_APPID=\"$APP_FIREBASE_APPID\"~" /var/www/html/index.html
sed -ie "s~APP_IOS_APIKEY = null~APP_IOS_APIKEY=\"$APP_IOS_APIKEY\"~" /var/www/html/index.html
sed -ie "s~APP_ANDROID_APIKEY = null~APP_ANDROID_APIKEY=\"$APP_ANDROID_APIKEY\"~" /var/www/html/index.html

echo "API URL= " $API_URL
echo "SENTRYDSN= " $SENTRYDSN
echo "YBUG_ID= " $YBUG_ID
echo "BASENAME= " $BASENAME
echo "ROUTING_TYPE= " $ROUTING_TYPE
echo "APP_URL= " $APP_URL
echo "IMG_URL=" $IMG_URL
echo "IMG_BUCKET_FOLDER= " $IMG_BUCKET_FOLDER
echo "APP_FIREBASE_VAPID_KEY= " $APP_FIREBASE_VAPID_KEY
echo "APP_FIREBASE_APIKEY= " $APP_FIREBASE_APIKEY
echo "APP_FIREBASE_AUTHDOMAIN= " $APP_FIREBASE_AUTHDOMAIN
echo "APP_FIREBASE_PROJECTID= " $APP_FIREBASE_PROJECTID
echo "APP_FIREBASE_STORAGEBUCKET= " $APP_FIREBASE_STORAGEBUCKET
echo "APP_FIREBASE_MESSAGINGSENDERID= " $APP_FIREBASE_MESSAGINGSENDERID
echo "APP_FIREBASE_APPID= " $APP_FIREBASE_APPID
echo "APP_IOS_APIKEY= " $APP_IOS_APIKEY
echo "APP_ANDROID_APIKEY= " $APP_ANDROID_APIKEY

exec apache2-foreground
