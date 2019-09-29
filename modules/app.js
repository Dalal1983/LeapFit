// $(document).ready(function () {
setInterval(function () {
    let modelNo = 0;
    load3DModel('./mixedrealitymodels/' + modelNo + '.glb', 'left');
    load3DModel('./mixedrealitymodelscoach/' + modelNo + '.glb', 'right');
    modelNo = (modelNo == 10) ? 0 : modelNo++;
}, 3000);

// load3DModel('https://googlewebcomponents.github.io/model-viewer/examples/assets/RobotExpressive.glb');
// });

async function load3DModel(newModelURL, modelSide = 'left') {
    $('#' + modelSide + 'Section').attr('src', newModelURL);
}
