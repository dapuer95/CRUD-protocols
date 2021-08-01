"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const users_1 = require("../data/users");
const getUsers = (req, res) => {
    res.send(users_1.users);
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const id = Number(req.params.userId);
    const uniqueUser = users_1.users.filter((item) => item.id === id);
    if (uniqueUser.length !== 0) {
        res.send(uniqueUser);
    }
    else {
        res.status(404).send('No existe el usuario');
    }
};
exports.getUserById = getUserById;
