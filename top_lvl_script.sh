#!/bin/bash

echo "git pulling"
git pull
# rm -r mixedrealitymodels/*
# git rm -r mixedrealitymodels/*
echo "removed mixedrealitymodels"
python hmr/demo.py --img_path demo-sequences/you/ --glb_path mixedrealitymodels
echo "ran hmr"
git add mixedrealitymodels/*
git commit -m "Deploying to website"
# rm -r demo-sequences/you/*.png
# git rm -r demo-sequences/you/*.png
echo "pushing to website"
git push

