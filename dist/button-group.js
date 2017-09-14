"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    ButtonGroup.prototype.render = function () {
        return kjsx_1.React.createElement("div", { class: "btn-group", role: "toolbar" }, this.children);
    };
    return ButtonGroup;
}());
exports.ButtonGroup = ButtonGroup;
