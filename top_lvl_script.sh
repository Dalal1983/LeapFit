#!/bin/bash

echo "git pulling"
git pull
rm -r mixedrealitymodels/*
git rm -r mixedrealitymodels/*
echo "removed mixedrealitymodels"
python hmr/demo.py --img_path demo-sequences/ --glb_path mixedrealitymodels
echo "ran hmr"
git add mixedrealitymodels/*
rm -r demo-sequences/*.png
git rm -r demo-sequences/*.png
echo "pushing to website"
git push

