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
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const user_1 = __importDefault(require("../db/schemas/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find().select({ password: 0, __v: 0 });
    res.send(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const user = yield user_1.default.findById(id).select({ password: 0, __v: 0 });
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send({});
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, first_name, last_name, avatar, password } = req.body;
        const hash = yield bcrypt_1.default.hash(password, 15);
        const newUser = yield user_1.default.create({
            email,
            first_name,
            last_name,
            avatar,
            password: hash,
        });
        res.send(newUser);
    }
    catch (e) {
        console.error(e);
        if (e instanceof mongoose_1.mongo.MongoError) {
            res.status(400).send({
                code: e.code,
                message: e.code === 11000 ? 'Duplicated value' : 'Error',
            });
            return;
        }
    }
});
exports.createUser = createUser;
