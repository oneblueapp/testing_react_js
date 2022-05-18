"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var cadasterController_1 = require("../Controllers/cadasterController");
var loginController_1 = require("../Controllers/loginController");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.post('/user/cadaster', new cadasterController_1.CadasterController().cadasterController);
routes.post('/login', new loginController_1.LoginController().loginController);
//# sourceMappingURL=routes.js.map