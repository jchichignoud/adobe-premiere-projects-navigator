/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    function init() {               
        $("#btn_projects").click(function() {
            var projectsList = csInterface.evalScript("getProjectsList()", updateProjectsList);
          });
    }
        
    init();

}());
    
function updateProjectsList (projects) {
    $("#projects").html(projects);
}