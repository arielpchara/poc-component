"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PocController = void 0;
const react_1 = __importDefault(require("react"));
const context_1 = require("./context");
const PocController = () => {
    return react_1.default.createElement(context_1.PocProvider, { value: {} });
};
exports.PocController = PocController;
