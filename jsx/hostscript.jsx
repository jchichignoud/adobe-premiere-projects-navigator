/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function getProjectsList() {
    var projectsToHtml = ""
    var projectsArr = []
    for ( i = 0; i < app.projects.numProjects; i++){
        projectsArr.push({name: (app.projects[i].name).slice(0, -7), path: app.projects[i].path});
        // projectsToHtml = projectsToHtml + "<li id='" + i + "'><img src='icons/SP_NonMedia_Sm_N_D@3to2x.png'><p>" + (app.projects[i].rootItem.name).slice(0, -7) + "</p><i class='fas fa-times'></i></li>"
    }
    string = JSON.stringify(projectsArr)
    return string;
}

function removeProject(id) {
    for ( var i = 0; i < app.projects.numProjects; i++){
        if (app.projects[i].path === id){
            app.projects[i].closeDocument();
            return
        }
    }
    alert("This project is already closed");
    
}