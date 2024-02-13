#!/bin/sh
yarn remove remark-gfm rehype-katex react-photoswipe-gallery photoswipe  remark-math screenfull react-player react-transition-group chroma-js react-markdown@8 rc-drawer react-dropdown lodash.flow rc-dialog formik rehype-raw react-icons rc-tree-select @escolalms/ts-models
yarn add @escolalms/components
cp tsconfig.json.prod tsconfig.json
echo "switched to prod"
yarn && yarn start
