/**
* Dependencies
*/

//import 'bootstrap'; //Uncomment if you actually need boostrap js

/**
* Required Modules
*/

const GlobalAjaxUpdate = require('./lib/ajax-calls');
const ApplyDjangoSpecificStyles = require('./lib/django-styles.js');
const UI = require('./lib/ui-scripts');

/**
* Consolidate Event Listeners Here:
*/

$(document).ready(function() {
    /**
    * Execute Ajax update
    */
    GlobalAjaxUpdate();
    /**
    * Apply bootstrap classes to django forms and alerts
    */
    ApplyDjangoSpecificStyles();
    /**
     * Update Sidebar 
     */
    $('.sb-toggle, .sb-close').click(function() {
        UI.sb.update();
    });
    /**
     * Update Auth Area
     */
    $('#vertical-slide-header').click(function() {
        UI.verticalSlide.update();
    });
});