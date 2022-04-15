"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoByIdService = exports.getTodosService = void 0;
const todo_1 = __importDefault(require("../repository/models/todo"));
const getTodosService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (_a) {
        res.status(500).json({ message: "ID not found" });
    }
});
exports.getTodosService = getTodosService;
const getTodoByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTodo = yield todo_1.default.findById({ _id: id });
    }
    catch (error) {
    }
});
exports.getTodoByIdService = getTodoByIdService;
