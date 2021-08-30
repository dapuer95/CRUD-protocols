"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./db/connection"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = express_1.default();
app.use(body_parser_1.json());
index_1.default(app);
app.use((req, res) => {
    res.status(404).send('Not found');
});
connection_1.default().then((connected) => {
    if (connected) {
        app.listen(port, () => console.log('corriendo en el puerto ' + port));
    }
    else {
        console.log('Error mongo db');
    }
});
