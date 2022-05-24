#!/bin/sh
set -e

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

cp /usr/local/apache2/htdocs/tpl.html /usr/local/apache2/htdocs/index.html
sed -ie "s~null~\"$API_URL\"~" /usr/local/apache2/htdocs/index.html

echo "API URL= " $API_URL

exec httpd -DFOREGROUND "$@"
