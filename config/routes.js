// jshint node:true
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
    *                                                                          *
    * Custom routes here...                                                    *
    *                                                                          *
    *  If a request to a URL doesn't match any of the custom routes above, it  *
    * is matched against Sails route blueprints. See `config/blueprints.js`    *
    * for configuration options and examples.                                  *
    *                                                                          *
    ***************************************************************************/

    "post /api/:version/tricks/add" : "TricksController.add",
    "get  /api/:version/tricks"     : "TricksController.get",
    "get  /api/:version/tricks/:id" : "TricksController.get",


    "/" : "pages/home.home",

    // "get  /users" : "UserController.all",

    // "get  /tricks"          : "TrickController.all",
    // "get  /tricks/add"      : "TrickController.addForm",
    // "post /tricks/add"      : "TrickController.addPost",
    // "get  /tricks/edit/:id" : "TrickController.editForm",
    // "get  /tricks/:id"      : "TrickController.one",

    "get  /usertricks"     : "UsertrickController.all",
    "get  /usertricks/add" : "UsertrickController.addForm",
    "post /usertricks/add" : "UsertrickController.addPost"

};
