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
                console.log($(event.target).closest('li').attr('id') + " from SVG or path");
                var projectID = $(event.target).closest('li').attr('id');
                csInterface.evalScript("removeProject(" + projectID + ")");
                csInterface.evalScript("getProjectsList()", updateProjectsList);
            }
         });
    }
        
    init();

}());
    
function updateProjectsList (projects) {
    $("#projects").html(projects);
}
