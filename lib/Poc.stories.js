"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
exports.default = {
    title: 'Poc',
    component: index_1.Poc
};
const Default = () => react_1.default.createElement(index_1.Poc, { name: 'Ariel' });
exports.Default = Default;
