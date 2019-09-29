# Leap-fit

This is a mixed reality application aimed at revolutionizing physiotherapy. Conventionally a physiotherapist will hand you a list of exercises to do to imporve your condition and send you on your way. You are left hoping you can perform the exercises correctly and get better soon, however everybody could use a little more feedback than a monthly pysio session.

With this app you can record yourself doing the exercise and get high quality feedback only seconds after completing the exercise. Our application will show you a 3D rendered animation of you doing the exercise alongside your physiotherapist also doing the exercise. We also provide a similarity score in percent. After you have recorded yourself doing the exercise you pop on the magic leap or any other mixed reality headset and inspect the 3D renderings in detail and figure out what you did wrong or right! Both 3D renderings can be generated from recordings from your webcam or phone camera.

This app is supported by any browser, and mixed reality headset and you can use it for many things other than pysiotherapy as long as you have video feed of a person performing these actions correctly, like:
- Yoga
- Aerobics
- Workout exercises

To get started, simply open the devpost tutorial [here](https://devpost.com/software/leapfit). We hope you enjoy!

# To-do
1. Record our own physiotherapy video! 🕺
2. Adapt [PoseNet demos](https://github.com/tensorflow/tfjs-models/tree/master/posenet/demos) to the physiotherapy video (display camera and recording side-by-side with overlaid skeleton).
3. Compute per-frame cosine similarity of video feed to video.
4. Display moving average similarity score (maybe in a bar format).
5. Export SMPL from video ([code](https://github.com/akanazawa/hmr)).
- done: datasize of SMPL Video will be 83 x number of frames: relatively small depending on vid length and to be rendered on magic leap
6. Get started with [MagicLeap tutorial(s) on slide 13](https://docs.google.com/presentation/d/1SUMgqLEmPsc2FfTeBYtHR2lm3MeBbj3jeMxxqhWAnXc/edit?usp=drivesdk
)
7. Export OBJ from SMPL.
- attempt to render 82 dimmensional SMPL on MagicLeap (this saves comm bandwidth)
8. Send OBJ to MagicLeap app.

# Run
execute:

    node server.js

# Dependencies

for saving the SMPL models into .glb format

    pip install trimesh
    
for creating the SMPL (minor modifications made to the code, perhaps we should fork this directory)

    git clone https://github.com/akanazawa/hmr.git
