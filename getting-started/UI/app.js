$(document).ready(function () {
    load3DModel('https://googlewebcomponents.github.io/model-viewer/examples/assets/RobotExpressive.glb');
});

function load3DModel (newModelURL, modelSide = 'left') {
    $('#' + modelSide + 'Section').attr('src', newModelURL);   
}

