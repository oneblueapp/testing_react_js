"use strict";
exports.__esModule = true;
exports.LoginController = void 0;
var Login_1 = require("../Services/Login");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.loginController = function (req, res) {
        var _a = req.body, name = _a.name, password = _a.password;
        if (typeof (name) !== "string" || typeof (password) !== "string") {
            return res.status(500).json({ ok: false, why: 'format is wrong' });
        }
        if (!name || !password) {
            return res.json({ ok: false, why: 'Not found data!' });
        }
        var user = (0, Login_1.Login)({ name: name, password: password });
        if (user.ok === false) {
            return res.status(404).json(user);
        }
        return res.json(user);
    };
    return LoginController;
}());
exports.LoginController = LoginController;
//# sourceMappingURL=loginController.js.map