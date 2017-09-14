"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.render = function () {
        var classes = "table";
        if (this.props.format) {
            for (var _i = 0, _a = this.props.format; _i < _a.length; _i++) {
                var format = _a[_i];
                classes += " table-" + format;
            }
        }
        return kjsx_1.React.createElement("table", { class: classes }, this.children);
    };
    return Table;
}());
exports.Table = Table;
