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

echo "API URL= " $API_URL
echo "SENTRYDSN= " $SENTRYDSN
echo "YBUG_ID= " $YBUG_ID
echo "BASENAME= " $BASENAME
echo "ROUTING_TYPE= " $ROUTING_TYPE

exec httpd -DFOREGROUND "$@"
