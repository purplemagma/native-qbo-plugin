define([
    "dojo/_base/declare",
    "neo/BaseViewController",
    "dojo/text!./tabs.html",
    "https://code.jquery.com/jquery-1.10.1.min.js",
    "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min.js"
], function(declare, BaseViewController, template, $) {
    return declare(BaseViewController, {
        templateString: template,

        constructor: function(args) {
        }
    });
});
