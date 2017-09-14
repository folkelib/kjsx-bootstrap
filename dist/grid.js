"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
var Container = /** @class */ (function () {
    function Container() {
    }
    Container.prototype.render = function () {
        return kjsx_1.React.createElement("div", { class: "container" }, this.children);
    };
    return Container;
}());
exports.Container = Container;
