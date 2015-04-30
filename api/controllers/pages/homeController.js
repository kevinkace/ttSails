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
                tricks : [
                    {
                        user : "kevinkace",
                        name : "trick 1",
                        spot : "location"
                    }, {
                        user : "kevinkace",
                        name : "ollie",
                        spot : "location"
                    }, {
                        user : "kevinkace",
                        name: "shove-it",
                        spot : "location"
                    }
                ],
                navItems : [
                    {
                        name : "add trick",
                        href : "/trick/add"
                    }, {
                        name : "add spot",
                        href : "/spot/add"
                    }
                ]
            }
        );
    }

};
