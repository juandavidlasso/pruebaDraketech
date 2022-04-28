"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
require('dotenv').config();
// Initializations
const app = (0, express_1.default)();
// Configurations
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.send(`API is at http://localhost:${app.get('port')}`);
});
app.use(auth_route_1.default);
exports.default = app;
