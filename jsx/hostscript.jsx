/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function getProjectsList() {
    var projectsToHtml = ""
    for ( i = 0; i < app.projects.numProjects; i++){
        projectsToHtml = projectsToHtml + "<li>" + app.projects[i].rootItem.name + "</li>"
    }
    return projectsToHtml;
}