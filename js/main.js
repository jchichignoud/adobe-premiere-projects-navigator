/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/


(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    function init() {               
        $("#btn_projects").click(function() {
            var projectsList = csInterface.evalScript("getProjectsList()", updateProjectsList);
          });

          $('#projects').bind('click', function(event) {
            if (event.target.nodeName === "LI") {
                console.log("list item");
            } else if (event.target.nodeName === "P") {
                console.log("name");
            } else if (event.target.nodeName === "IMG") {
                console.log("logo");
            } else if (event.target.nodeName ===  "svg" || event.target.nodeName === "path") {
                var projectID = $(event.target).closest('li').attr('id');
                csInterface.evalScript("removeProject('" + projectID + "')");
                csInterface.evalScript("getProjectsList()", updateProjectsList);
            }
         });
    }
        
    init();

}());
    
function updateProjectsList (projects) {
    var projectsObj = JSON.parse(projects);
    var projectsElements = ""
    projectsObj.forEach(function(project){
        projectsElements += "<li id='" + project.path + "'><img src='icons/SP_NonMedia_Sm_N_D@3to2x.png'><p>" + project.name + "</p><i class='fas fa-times'></i></li>"
    });

    $("#projects").html(projectsElements);
}

