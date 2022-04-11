"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PocProvider = exports.usePoc = void 0;
const react_1 = require("react");
const context = (0, react_1.createContext)({});
const usePoc = () => {
    const hook = (0, react_1.useContext)(context);
    return hook;
};
exports.usePoc = usePoc;
exports.PocProvider = context.Provider;
