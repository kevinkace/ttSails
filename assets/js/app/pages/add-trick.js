// jshint node:true
/* global m */
"use strict";

module.exports = {
    controller : function(data) {
        console.log(data);
        var ctrl = {
            tricks : "tricks ctrl",
            title  : "title ctrl"
        };

        return ctrl;
    },
    view : function(ctrl) {
        return m("form.pure-form.pure-form-aligned",
            m("fieldset",
                m(".pure-control-group",
                    m("label[for=name]", "trick name"),
                    m("input#name[type=text]")
                ),
                m(".pure-control-group",
                    m("label[for=bodyrotation]", "trick name"),
                    m("input#bodyrotation[type=text]")
                ),
                m(".pure-control-group",
                    m("label[for=boardrotation]", "trick name"),
                    m("input#boardrotation[type=text]")
                ),
                m(".pure-control-group",
                    m("p", "Add aggregates here")
                ),
                m(".pure-control-group",
                    m("label[for=alias0]", "trick name"),
                    m("input#alias0[type=text]")
                )
            )
        );
    }
};
