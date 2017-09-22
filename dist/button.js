"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
function Button(props, children) {
    return kjsx_1.React.createElement("button", { type: "button", class: "btn btn-" + (props.color || "default"), click: props.click }, children);
}
exports.Button = Button;
