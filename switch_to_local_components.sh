#!/bin/sh
yarn remove "@escolalms/components"
git clone git@github.com:EscolaLMS/components.git
cp tsconfig.paths.json.local tsconfig.paths.json
echo "switched to local"
yarn && yarn start
