#!/bin/bash

echo "git pulling"
git pull
git rm -r mixedrealitymodels/*
echo "removed mixedrealitymodels"
python hmr/demo.py --img_path hmr/input/ --glb_path mixedrealitymodels
echo "ran hmr"
git add mixedrealitymodels/*
git rm -r demo-sequences/you/*.png
echo "pushing to website"
git push

