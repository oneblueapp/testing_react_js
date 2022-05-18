"use strict";
exports.__esModule = true;
exports.Login = void 0;
var db_1 = require("../db");
function Login(payload) {
    var Task = [];
    var i = 0;
    db_1.database.forEach(function (index) {
        if (index.name == payload.name && index.password == payload.password) {
            Task.push(true);
        }
    });
    if (Task[i] === true) {
        i++;
        return { ok: true, login: payload.name };
    }
    return {
        ok: false, why: 'Not found data!'
    };
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map