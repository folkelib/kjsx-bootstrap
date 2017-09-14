"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        return kjsx_1.React.createElement("button", { type: "button", class: "btn btn-" + (this.props.color || "default"), click: this.props.click }, this.children);
    };
    return Button;
}());
exports.Button = Button;
