"use strict";
exports.__esModule = true;
exports.CadasterController = void 0;
var Cadaster_1 = require("../Services/Cadaster");
var CadasterController = /** @class */ (function () {
    function CadasterController() {
    }
    CadasterController.prototype.cadasterController = function (req, res) {
        var _a = req.body, name = _a.name, password = _a.password;
        if (!name || !password) {
            return res.json({ ok: false, why: 'Not found data!' });
        }
        if (typeof (name) !== "string" || typeof (password) !== "string") {
            return res.status(500).json({ ok: false, why: 'format is wrong' });
        }
        var user = (0, Cadaster_1.Cadaster)({ name: name, password: password });
        if (user.ok === false) {
            return res.status(404).json(user);
        }
        return res.json(user);
    };
    return CadasterController;
}());
exports.CadasterController = CadasterController;
//# sourceMappingURL=cadasterController.js.map