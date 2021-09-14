"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yith = void 0;
const react_1 = __importDefault(require("react"));
const presentation_1 = __importDefault(require("./screens/presentation"));
const projection_1 = __importDefault(require("./screens/projection"));
const Yith = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(presentation_1.default, { manifest: {} }),
        react_1.default.createElement(projection_1.default, { manifest: {} })));
};
exports.Yith = Yith;
exports.default = exports.Yith;
