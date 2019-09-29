#!/bin/bash

git pull
git rm -r mixedrealitymodels/*
python hmr/demo.py --img_path demo-sequences --glb_path mixedrealitymodels
git add mixedrealitymodels/*
git rm -r demo-sequences/you/*.png
git push

