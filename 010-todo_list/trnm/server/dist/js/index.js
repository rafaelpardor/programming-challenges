"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./todo/routes/index"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(`${req.method} => https://${req.hostname}${req.url}`);
    next();
});
app.use(index_1.default);
const mongo_url = `mongodb://localhost:27017/todolist`;
mongoose_1.default.set("debug", true);
mongoose_1.default.connect(mongo_url).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/`);
        console.log(`Connected to MongoDB`);
    });
}).catch(error => {
    throw `Unable to connect to database: ${error}`;
});
