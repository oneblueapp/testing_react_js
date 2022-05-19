"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./Routes/routes");
var app = (0, express_1["default"])();
var PORT = 4000;
app.use((0, cors_1["default"])({
    origin: '*'
}));
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.listen(PORT, function () { return console.log("Server is running on PORT:".concat(PORT)); });
//# sourceMappingURL=server.js.map