"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json([
        { id: 1, name: "David" },
        { id: 2, name: "Noa" }
    ]);
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const id = Number(req.params.id);
    res.json({
        id,
        name: "David"
    });
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        message: "User created",
        user: {
            id: Date.now(),
            name,
            email
        }
    });
};
exports.createUser = createUser;
//# sourceMappingURL=user.controller.js.map