#!/bin/bash

git pull
python hmr/demo.py --img_path demo-sequences --glb_path mixedrealitymodels/you.glb
git add mixedrealitymodels/you.glb
git rm -r demo-sequences/*.png
git push

