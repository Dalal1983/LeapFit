# PoseNet Demo
UI inspired by [Kinect Dance Central](https://www.youtube.com/watch?v=9DEkMxlDnI8).


## Parameters
PoseNet runs with either a single-pose or multi-pose detection algorithm. The single person pose detector is faster and more accurate but requires only one subject present in the image.

The output stride and input resolution have the largest effects on accuracy/speed. A higher output stride results in lower accuracy but higher speed. A higher image scale factor results in higher accuracy but lower speed.

## Demo 1: Camera
The camera demo shows how to estimate poses in real-time from a webcam video stream.

<img src="https://raw.githubusercontent.com/tensorflow/tfjs-models/master/posenet/demos/camera.gif" alt="cameraDemo" style="width: 600px;"/>


## Setup

cd into the demos folder:

```sh
cd posenet/demos
```

Install dependencies and prepare the build directory:

```sh
yarn
```

To watch files for changes, and launch a dev server:

```sh
yarn watch
```

## If you are developing posenet locally, and want to test the changes in the demos

Cd into the posenet folder:
```sh
cd posenet
```

Install dependencies:
```sh
yarn
```

Publish posenet locally:
```sh
yarn build && yarn yalc publish
```

Cd into the demos and install dependencies:

```sh
cd demos
yarn
```

Link the local posenet to the demos:
```sh
yarn yalc link @tensorflow-models/posenet
```

Start the dev demo server:
```sh
yarn watch
```

To get future updates from the posenet source code:
```
# cd up into the posenet directory
cd ../
yarn build && yarn yalc push
```
