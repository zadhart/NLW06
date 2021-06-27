"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("./controllers/CreateUserController");
var CreateTagController_1 = require("./controllers/CreateTagController");
var EnsureAdmin_1 = require("./middlewares/EnsureAdmin");
var AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
var CreateComplimentController_1 = require("./controllers/CreateComplimentController");
var router = express_1.Router();
exports.router = router;
var createUserController = new CreateUserController_1.CreateUserController();
var createTagController = new CreateTagController_1.CreateTagController();
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
var createComplimentController = new CreateComplimentController_1.CreateComplimentController();
router.post("/users", createUserController.handle);
router.post("/tags", EnsureAdmin_1.ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);
