/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function getProjectsList() {
    var projectsToHtml = ""
    for ( i = 0; i < app.projects.numProjects; i++){
        projectsToHtml = projectsToHtml + "<li id='" + i + "'><img src='icons/SP_NonMedia_Sm_N_D@3to2x.png'><p>" + (app.projects[i].rootItem.name).slice(0, -7) + "</p><i class='fas fa-times'></i></li>"
    }
    return projectsToHtml;
}

function removeProject(id) {
    app.projects[id].closeDocument()
}