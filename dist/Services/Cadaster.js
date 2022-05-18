"use strict";
exports.__esModule = true;
exports.Cadaster = void 0;
var db_1 = require("../db");
function Cadaster(payload) {
    var Task = [];
    var i = 0;
    db_1.database.forEach(function (index) {
        if (index.name == payload.name) {
            Task.push(true);
        }
    });
    if (Task[i] === true) {
        i++;
        return {
            ok: false, why: 'User already exists'
        };
    }
    db_1.database.push(payload);
    return {
        ok: true, user: {
            name: payload.name
        }
    };
}
exports.Cadaster = Cadaster;
//# sourceMappingURL=Cadaster.js.map