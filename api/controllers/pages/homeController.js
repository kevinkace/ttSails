// jshint node:true
"use strict";
/**
 * page/HomeController
 *
 * @description :: Server-side logic for managing homepage
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports =  {
    home : function(req, res) {
        return res.view("homepage",
            {
                
            }
        );
    }

};
