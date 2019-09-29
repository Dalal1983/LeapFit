$(document).ready(function () {

    debugger;
    setTimeout(function(){ load3DModel('https://googlewebcomponents.github.io/model-viewer/examples/assets/RobotExpressive.glb', 'right') }, 3000);
    setTimeout(function(){ load3DModel('./3dmodels/Astronaut.glb', 'left') }, 3000);

    // load3DModel('https://googlewebcomponents.github.io/model-viewer/examples/assets/RobotExpressive.glb');
});

function load3DModel(newModelURL, modelSide = 'left') {
    $('#' + modelSide + 'Section').attr('src', newModelURL);
}
