#!/bin/sh
yarn remove "@escolalms/components"
yarn add remark-gfm  rehype-katex react-photoswipe-gallery photoswipe react-pdf react-tiny-oembed  remark-math screenfull react-player react-transition-group chroma-js react-markdown@8  react-dropdown lodash.flow rc-dialog formik rehype-raw react-icons rc-tree-select @escolalms/ts-models
git clone git@github.com:EscolaLMS/components.git
cp tsconfig.paths.json.local tsconfig.paths.json
echo "switched to local"
yarn &&  yarn vite
