"use strict";

module.exports = function(req, res, next) {

    if(req.params.ids) {
        var ids = req.params.ids.split(",");
        _.set(res, "data.params.ids", ids);
        next();
    }

    if(req.params.id) {
        var id = req.params.id;
        _.set(res, "data.params.ids");
        next();
    }

    next();
}