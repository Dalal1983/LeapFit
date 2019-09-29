$(document).ready(function () {

    $('.appTitle').html(navigator.appName);

    
     // load3DModel('https://googlewebcomponents.github.io/model-viewer/examples/assets/RobotExpressive.glb');
});

function load3DModel(newModelURL, modelSide = 'left') {
    $('#' + modelSide + 'Section').attr('src', newModelURL);
}
