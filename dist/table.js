"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
function Table(props, children) {
    var classes = "table";
    if (props.format) {
        for (var _i = 0, _a = props.format; _i < _a.length; _i++) {
            var format = _a[_i];
            classes += " table-" + format;
        }
    }
    return kjsx_1.React.createElement("table", { class: classes }, children);
}
exports.Table = Table;
